import React, { Component } from 'react';

class SpotForm extends Component {
    state = {
        spot: {
            name: '',
            location: '',
            description: '',
            access_rating: 0,
            url: ''
        }
    };

    componentDidMount() {
        this.setState({
            spot: {
                ...this.props.spot
            }
        });
    }
    
    valueChanged = (event) => {
        const { name, value } = event.target;
        this.setState((prevState) => ({
            spot: {
                ...prevState.spot,
                [name]: value
            }
        }));
    };

    validSpot = () => {
        const { spot } = this.state;
        const hasName = spot.name.trim() !== '';
        const hasDescription = spot.description.trim() !== '';
        const hasLocation = spot.location.trim() !== '';
        const hasUrl = spot.location.trim() !== '';
        const hasRating = spot.access_rating.trim() !== '';

        return hasName && hasDescription && hasLocation && hasUrl && hasRating;
    }

    formSubmitted = (event) => {
        event.preventDefault();
        if(this.validSpot()) {
            this.props.onFormSubmitted(this.state.spot);
        }
    };

    render() {
        const { spot } = this.state;
        return (
            <form onSubmit={this.formSubmitted}>
                <div className="form-group row">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input onChange={this.valueChanged} value={spot.title} type="text" className="form-control" name="name" id="name" aria-describedby="location name" placeholder="Enter a location name" required/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input onChange={this.valueChanged} value={spot.location} type="text" className="form-control" name="location" id="location" aria-describedby="location" placeholder="Enter city, town or county"/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea onChange={this.valueChanged} value={spot.description} type="text" className="form-control" name="description" id="description" placeholder="Tell us about this place!"/>
                </div>
                <div className="form-group">
                    <label htmlFor="url">Website</label>
                    <input onChange={this.valueChanged} value={spot.url} type="url" className="form-control" name="url" id="url" placeholder="http://example.com/"/>
                </div>
                {/* <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input onChange={this.valueChanged} value={spot.image} type="url" className="form-control" name="image" id="image" placeholder="http://example.com/image.jpg"/>
                </div> */}
                <div className="form-group">
                    <label htmlFor="access_rating">Accessibility Rating</label>
                    <select onChange={this.valueChanged} value={spot.access_rating} className="form-control" name="access_rating" id="access_rating">
                    <option></option>
                    <option>0</option>
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