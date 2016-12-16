import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component {

    renderLinks() {
        if (this.props.authenticated) {
            // Show a link to sign out
            return (
                <li className="nav-item">
                    <Link className="nav-link" to="/signout">Sign Out</Link>
                </li>
            );
        } else {
            // Show a link to sign in or sign up
            return [
                <li className="nav-item" key={1}>
                    <Link to="/signin">Sign in</Link>
                </li>,
                <li className="nav-item" key={2}>
                    <Link to="/signup">Sign Up</Link>
                </li>
            ];
        }
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <Link to="/" className="navbar-brand">Redux Auth</Link>
                <ul className="nav navbar-nav">
                    {this.renderLinks()}
                    <li className="nav-item">
                        <Link to="/resources">Resources</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    };
}

export default connect(mapStateToProps)(Header);