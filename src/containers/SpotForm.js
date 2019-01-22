import React, { Component } from 'react';

class SpotForm extends Component {
    state = {
        spot: {}
    };
    
    render() {
        return (
            <form>
                <div className="form-group row">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="name" placeholder="Enter a location name" required/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input type="text" className="form-control" id="location" aria-describedby="location" placeholder="Enter city, town or county"/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea type="text" className="form-control" id="description" placeholder="Tell us about this place!"/>
                </div>
                <div className="form-group">
                    <label htmlFor="access_rating">Accessibility Rating</label>
                    <select className="form-control" id="access_rating">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
          </form>)
    }
}

export default SpotForm;