import React, { PropTypes } from 'react';
import classnames from 'classnames';
import timezones from '../../data/timezones';

class SignupForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      timezone: '',
      errors: {},
      isLoading: false
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  onSubmit(e) {
    e.preventDefault();
    this.setState({ errors: {}, isLoading: true });
    this.props.userSignupRequest(this.state).then(
      () => {},
      ({ data }) => this.setState({ errors: data, isLoading: false })
    );
  }
  renderError(field) {
    return field && <span className="help-block">{field}</span>;
  }
  renderErrorClass(field) {
    return classnames("form-group", { "has-error": field });
  }
  render () {
    const errors = this.state.errors;
    const options = Object.keys(timezones).map(
      k => <option key={timezones[k]} value={timezones[k]}>{k}</option>
    );
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our community!</h1>
        <div className={this.renderErrorClass(errors.username)}>
          <label className="control-label">Username</label>
          <input
            value={this.state.username}
            type="text"
            name="username"
            className="form-control"
            onChange={this.onChange}
          />
        {this.renderError(errors.username)}
        </div>
        <div className={this.renderErrorClass(errors.email)}>
          <label className="control-label">Email</label>
          <input
            value={this.state.email}
            type="email"
            name="email"
            className="form-control"
            onChange={this.onChange}
          />
          {this.renderError(errors.email)}
        </div>
        <div className={this.renderErrorClass(errors.password)}>
          <label className="control-label">Password</label>
          <input
            value={this.state.password}
            type="password"
            name="password"
            className="form-control"
            onChange={this.onChange}
          />
          {this.renderError(errors.password)}
        </div>
        <div className={this.renderErrorClass(errors.passwordConfirmation)}>
          <label className="control-label">Confirm Password</label>
          <input
            value={this.state.passwordConfirmation}
            type="password"
            name="passwordConfirmation"
            className="form-control"
            onChange={this.onChange}
          />
          {this.renderError(errors.passwordConfirmation)}
        </div>
        <div className={this.renderErrorClass(errors.timezone)}>
          <label className="control-label">Timezone</label>
          <select
            className="form-control"
            name="timezone"
            onChange={this.onChange}
            value={this.state.timezone}
          >
            <option value="" disabled>Choose Your Timezone</option>
            {options}
          </select>
          {this.renderError(errors.timezone)}
        </div>
        <div className="form-group">
          <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
            Sign up
          </button>
        </div>
      </form>
    )
  }
}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
}

export default SignupForm;
