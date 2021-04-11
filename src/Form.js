import React, { Component } from "react";

class Form extends Component {
    state={
        name:'',
        job:''
    }

    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
        console.log()
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.updateNames(this.state)
    }
    render() {
        console.log(this.state)
        return (
        <form onSubmit={this.handleSubmit}>
            <h2>{this.state.name} {this.state.job}</h2>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name"  onChange={this.handleChange}/>
            <label htmlFor="job">Job</label>
            <input type="text" name="job" id="job" onChange={this.handleChange}/>
            <button type="submit">Submit</button>
        </form>
        );
    }
}

export default Form;
