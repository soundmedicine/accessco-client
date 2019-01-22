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

    render() {
        return (
            <div>
                <h1>Create Spot</h1>
                <SpotForm spot={this.state.spot}/>
            </div>
        ) 
    }
}

export default CreateSpot;