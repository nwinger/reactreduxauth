import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
    handleFormSubmit(formProps) {
        // Call action creator to sign up the user!
        this.props.signUpUser(formProps);
    }
    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oh snap!</strong> {this.props.errorMessage}
                </div>
            );
        }
    }
    
    render() {
        const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label>Email:</label>
                    <input className="form-control" {...email} />
                    {email.touched && email.error && <label className="control-label text-danger">{email.error}</label>}
                </fieldset>
                <fieldset className="form-group">
                    <label>Password:</label>
                    <input className="form-control" type="password" {...password} />
                    {password.touched && password.error && <label className="control-label text-danger">{password.error}</label>}
                </fieldset>
                <fieldset className="form-group">
                    <label>Confirm Password:</label>
                    <input className="form-control" type="password" {...passwordConfirm} />
                    {passwordConfirm.touched && passwordConfirm.error && <label className="control-label text-danger">{passwordConfirm.error}</label>}
                </fieldset>
                {this.renderAlert()}
                <button action="submit" className="btn btn-info">Sign up</button>
            </form>
        );
    }
}

function validate(formProps) {
    const errors = {};

    if (!formProps.email) {
        errors.email = 'Please enter an email';
    }

    if (!formProps.password) {
        errors.password = 'Please enter a password';
    }

    if (!formProps.passwordConfirm) {
        errors.passwordConfirm = 'Please enter a password confirmation';
    }

    if (formProps.password !== formProps.passwordConfirm) {
        errors.password = 'Passwords must match';
    }

    return errors;
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

export default reduxForm({
    form: 'signup',
    fields: ['email', 'password', 'passwordConfirm'],
    validate
}, mapStateToProps, actions)(Signup);