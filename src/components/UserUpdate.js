import React, { useState , useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useParams } from "react-router-dom";
import { WbIncandescentOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(0),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function UserUpdate(){
    const classes = useStyles();
    const {id} = useParams();
    useEffect(()=>{
        fetch("https://www.mecallapi.com/api/users/"+id)
        .then(res=>res.json())
        .then((result)=>{
            setFname(result.user.fname)
            setLname(result.user.lname)
            setUsername(result.user.Username)
            setEmail(result.user.email);
            setAvatar(result.user.avatar);
        })
    },[id])

    const handleSubmit =  event =>{
        event.preventDefault();
        var data = {
            "id": id,
            "lname": lname,
            "fname": fname,
            "username": username,
            "email": email,
            "avatar": avatar,
        }
        fetch("https://www.mecallapi.com/api/users/update", {
            method: "PUT",
            headers: {
                Accept: "application/form-data",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then(res => res.json())
        .then((result)=>{
            if(result['status'] =="ok"){
                window.location.href = "/";
            }
        });
    }

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [avatar, setAvatar] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    return(
        <div className={classes.paper}>
            <Typography component="h1" variant="h5">
                User
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField 
                        autocomplete="fname" 
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        value={fname}
                        onChange={(e)=>{
                            setFname(e.target.value);
                        }}
                        autoFocus>
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField 
                        name="lastName"
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        value={lname}
                        onChange={(e)=>{
                            setLname(e.target.value);
                        }}
                        >
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField 
                        name="userName"
                        variant="outlined"
                        required
                        fullWidth
                        id="userName"
                        label="Username"
                        value={username}
                        onChange={(e)=>{
                            setUsername(e.target.value);
                        }}
                        >
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField 
                        name="email"
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="email"
                        value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value);
                        }}
                        >
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField 
                        name="avatar"
                        variant="outlined"
                    
                        fullWidth
                        id="avatar"
                        label="Avatar"
                        value={avatar}
                        onChange={(e)=>{
                            setAvatar(e.target.value);
                        }}
                        >
                        </TextField>
                    </Grid>
                </Grid>
                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>Update</Button>
            </form>
            
        </div>
    )
}