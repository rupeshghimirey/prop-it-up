import React, { Component } from 'react';

class ContactInfo extends Component {
    render() {
        console.log("the props is this-->", this.props)
        return (
            <>
                <div>
                    <h1>{this.props.lastName}, {this.props.firstName}</h1>
                    <p>Age: {this.props.age} </p>
                    <p>Hair Color: {this.props.color}</p>
                    <hr />
                </div>
            </>
        )
    }
}
    
export default ContactInfo;