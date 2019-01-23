import React, { Component } from 'react';

class SpotForm extends Component {
    state = {
        spot: {}
    };
    
    valueChanged = (event) => {
        const { name, value } = event.target;
        this.setState((prevState) => ({
            spot: {
                ...prevState.spot,
                [name]: value
            }
        }));
    };

    formSubmitted = (event) => {
        event.preventDefault();
        console.log(this.state.spot);
    };

    render() {
        return (
            <form onSubmit={this.formSubmitted}>
                <div className="form-group row">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input onChange={this.valueChanged} type="text" className="form-control" name="name" id="name" aria-describedby="location name" placeholder="Enter a location name" required/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input onChange={this.valueChanged} type="text" className="form-control" name="location" id="location" aria-describedby="location" placeholder="Enter city, town or county"/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea onChange={this.valueChanged} type="text" className="form-control" name="description" id="description" placeholder="Tell us about this place!"/>
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input onChange={this.valueChanged} type="url" className="form-control" name="image" id="image" placeholder="http://example.com/image.jpg"/>
                </div>
                <div className="form-group">
                    <label htmlFor="access_rating">Accessibility Rating</label>
                    <select onChange={this.valueChanged} className="form-control" name="access_rating" id="access_rating">
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