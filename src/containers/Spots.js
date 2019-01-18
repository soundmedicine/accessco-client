import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                            <div className="card col-4" >
                            <img className="card-img-top" src=".../100px180/" alt={spot.location}/>
                            <div className="card-body">
                            <h5 className="card-title">{spot.name}</h5>
                            <p className="card-text">{spot.description}</p>
                            <p className="card-text"><em>Accessibility Rating:</em> {spot.access_rating}</p>
                            <Link to={`/spots/${spot.id}`} className="btn btn-primary">Accessibility</Link>
                            </div>
                        </div>
                    ))
                    }
                    </div>
                }
            </div>
            
        );
    }
};

export default Spots;