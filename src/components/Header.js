import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">AccessCO</a>
        <div>
            <ul className="navbar-nav mr-auto">
                <li className="nav=item">
                    <Link to="/spots" className="nav-link" href="#">View spots</Link>
                </li>
                <li className="nav=item">
                    <Link to="/spots/create" className="nav-link" href="#">Create spot</Link>
                </li>
            </ul>
        </div>
    </nav>
);

export default Header;