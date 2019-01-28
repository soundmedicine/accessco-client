import React, { Component } from 'react';

import Spot from '../components/Spot'; 
import { getSpot } from '../api';


class ViewSpot extends Component {
    state = {
        isLoading: true,
        product: {}
    };

    componentDidMount() {
        const { id } = this.props.match.params;
        getSpot(id)
        .then(spot => {
            setTimeout(() => {
                this.setState({
                    spot,
                    isLoading: false
                });
            }, 500);
        });
    }

    render() {
        return this.state.isLoading ?
                <h2>Loading spot ... </h2> :
                <Spot spot={this.state.spot} cols="col-12" showEdit={true} />
            
    }
}

export default ViewSpot;