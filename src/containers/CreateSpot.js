import React, { Component } from 'react';
import SpotForm from './SpotForm';

class CreateSpot extends Component {
    state = {
        spot: {
            name: '',
            location: '',
            description: '',
            access_rating: 0,
            url: ''
        },
        creating: false
    };

    createSpot = (spot) => {
        console.log('In create spot:', spot);
    };
    
    render() {
        return (
            <div>
                <h1>Add a Spot</h1>
                <SpotForm onFormSubmitted={this.createSpot} spot={this.state.spot}/>
            </div>
        ) 
    }
}

export default CreateSpot;