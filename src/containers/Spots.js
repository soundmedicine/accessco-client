import React, { Component } from 'react';
import Spot from '../components/Spot';
import { getAllSpots } from '../api';

class Spots extends Component {
    state = {
        isLoading: true,
        spots: []
    };

    componentDidMount() {
        getAllSpots()
            .then(spots => {

                setTimeout(() => {
                this.setState({
                    spots,
                    isLoading: false
                });
            }, 500);

        });
    };

    render() {
        return (
            <div>
                <h1>Spot Search!</h1>
                
                { this.state.isLoading ? 
                    <h5>Loading spots ...</h5> : 
                    <div className="row">
                    {
                        this.state.spots.map(spot => (
                            <Spot key={spot.id} spot={spot} cols="col-4"/>
                    ))
                    }
                    </div>
                }
            </div>
            
        );
    }
};

export default Spots;