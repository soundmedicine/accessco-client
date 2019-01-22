import React from 'react';
import { Link } from 'react-router-dom';

const Spot = ({ spot, cols }, showEdit) => (
    <div className={`card ${cols}`} >
        <img className="card-img-top" src=".../100px180/" alt={spot.location}/>
        <div className="card-body">
            <h5 className="card-title">{spot.name}</h5>
            <p className="card-text">{spot.description}</p>
            <p className="card-text"><em>Accessibility Rating:</em> {spot.access_rating}</p>
            {
                showEdit ?
                <Link to={`/spots/${spot.id}/edit`} className="btn btn-danger">Edit</Link> :
                <Link to={`/spots/${spot.url}`} className="btn btn-primary">Visit website</Link>
            }

        </div>
    </div>
);

export default Spot;