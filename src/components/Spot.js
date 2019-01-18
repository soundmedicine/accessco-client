import React from 'react';
import { Link } from 'react-router-dom';

const Spot = ({ spot }) => (
    <div className="card col-4" >
        <img className="card-img-top" src=".../100px180/" alt={spot.location}/>
        <div className="card-body">
            <h5 className="card-title">{spot.name}</h5>
            <p className="card-text">{spot.description}</p>
            <p className="card-text"><em>Accessibility Rating:</em> {spot.access_rating}</p>
            <Link to={`/spots/${spot.id}`} className="btn btn-primary">Accessibility</Link>
        </div>
    </div>
);

export default Spot;