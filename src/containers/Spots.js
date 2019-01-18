import React, { Component } from 'react';
import Spot from '../components/Spot';

class Spots extends Component {
    state = {
        isLoading: true,
        spots: []
    };

    componentDidMount() {
        const API_URL = 'https://crud-springs-api.herokuapp.com/api/v1/springs';
        fetch(API_URL)
            .then(res => res.json())
            .then(spots => {

                setTimeout(() => {
                this.setState({
                    spots,
                    isLoading: false
                });
            }, 1000);

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
                            <Spot key={spot.id} spot={spot} />
                    ))
                    }
                    </div>
                }
            </div>
            
        );
    }
};

export default Spots;