import React, { Component } from 'react';

import './Form.css';

class Form extends Component {

    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    state = {
        name:'',
        phone:'',
    };

    onChange(e) {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.addContact({...this.state});
        this.setState({
            name:'',
            phone:'',
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} >
                    <input className="input" name="name" id="name" onChange={this.onChange} value={this.state.name} placeholder="Enter a name" />
                    <br/>
                    <input className="input" name="phone" id="phone" onChange={this.onChange} value={this.state.phone} placeholder="Enter a phone number" />
                    <br/><br/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;