import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
import { Title } from "@material-ui/icons";

const useStyles = makeStyles((theme)=>({
    root: {flexGrow:1},
    menuButton: {
        marginRight: theme.spacing(2),

    },
    title: {flexGrow: 1},
    navLink:{color: 'white', textDecoration: 'none'}
}));

export default function NavBar(){

    const classes = useStyles();

    return(
        <div className="{classes.root}">
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge='start' className="{classes.menuButton}" color='inherit' aria-label="menu">
                            <MenuIcon/>
                        </IconButton>
                        <Link className="{classes.navLink}" to='/'>
                            <Typography variant="h6" className='{classes.title}'>
                                CRUD
                            </Typography>
                        </Link>
                    </Toolbar>
                </AppBar>
        </div>
    )
}
