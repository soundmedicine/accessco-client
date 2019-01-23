import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SpotForm from './SpotForm';
import { createSpot } from '../api';

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
        this.setState({
            creating: true
        });
        createSpot(spot)
        .then(result => {
            console.log(result.id);
            this.props.history.push(`/spots/${result.id}`);
        });
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

export default withRouter(CreateSpot);