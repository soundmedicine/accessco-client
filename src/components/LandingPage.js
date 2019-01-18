import React from 'react';

const LandingPage = () => (
    <div className="jumbotron">
        <h1 className="display-3">Welcome to AccessCO</h1>
        <p className="lead">This app will allow you to check on accessibility at establishments, facilities and natural features in Colorado.</p>
        <hr className="my-4"/>
        <p>Some of the facilities listed are built-up and maintained, some are naturally-occurring and unmaintained. This app also allows you to update information about existing records, as well as add information about establishments not listed.</p>
        <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Search!</a>
        </p>
    </div>
);

export default LandingPage;