import React, { Component } from 'react';
import { getSpot } from '../api';
import SpotForm from './SpotForm';

class EditSpot extends Component {
    state = {
        isLoading: true,
        spot: {},
        isEditing: true
    };

    componentDidMount() {
        const { id } = this.props.match.params;
        getSpot(id)
            .then(spot => {
                this.setState({
                    spot,
                    isLoading: false
                });
            });
    }
    render() {
        return this.state.isLoading ?
        <h2>Loading ...</h2> :
        <SpotForm spot={this.state.spot} />
    }
}

export default EditSpot;