import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <Link to="/">Sign in</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/resources">Resources</Link>
                    </li>
                    <li className="navbar-btn">
                        
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Header;