import React, { Component } from 'react';

class ContactInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }
    
    

    increaseBirthday = () => {
        this.setState({age:this.state.age+1})
    }

    render() {
        console.log("the props is this-->", this.props)
        return (
            <>
                <div>
                    <h1>{this.props.lastName}, {this.props.firstName}</h1>
                    <p>Age: {this.state.age} </p>
                    <p>Hair Color: {this.props.color}</p>
                    <button onClick={this.increaseBirthday}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
                    <hr />
                </div>
            </>
        )
    }
    
}

    
export default ContactInfo;