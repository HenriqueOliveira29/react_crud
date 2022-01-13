import { render } from "@testing-library/react";
import { Component } from "react";
import DataService from "../services/generalService";

export default class addComponent extends Component{
    constructor(props){
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.saveGeneral = this.saveGeneral.bind(this);
        this.newGeneral = this.newGeneral.bind(this);
        this.state = {
            id: null,
            title: "",
            description: "",
            published: false, 
            submited: false

        };
    }
    onChangeTitle(e){
        this.setState({title: e.target.value});
    }
    onChangeDescription(e){
        this.setState({description: e.target.value})
    }
    saveGeneral(){
        var data = {title: this.state.title, description: this.state.description}
        DataService.create(data).then(response=>{
            this.setState({
                id: response.data.id,
                title: response.data.title,
                description: response.data.description,
                published: response.data.published,
                submited: true
            });
        })
        .catch(e=>{
            console.log(e);
        });
    }
    

    newGeneral(){
        this.setState({
            id: null,
            title: "",
            description: "",
            published: false,
            submited: false
        });
    }

    render(){
        return(<div>ola</div>)
    }
    
}