import React, { PropTypes } from 'react'
import timezones from '../../data/timezones';

class SignupForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      timezone: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.userSignupRequest(this.state);
  }
  render () {
    const options = Object.keys(timezones).map(
      k => <option key={timezones[k]} value={timezones[k]}>{k}</option>
    );
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our community!</h1>
        <div className="form-group">
          <label className="control-label">Username</label>
          <input
            value={this.state.username}
            type="text"
            name="username"
            className="form-control"
            onChange={this.onChange}
          />
        </div>
        <div className="form-group">
          <label className="control-label">Email</label>
          <input
            value={this.state.email}
            type="email"
            name="email"
            className="form-control"
            onChange={this.onChange}
          />
        </div>
        <div className="form-group">
          <label className="control-label">Password</label>
          <input
            value={this.state.password}
            type="password"
            name="password"
            className="form-control"
            onChange={this.onChange}
          />
        </div>
        <div className="form-group">
          <label className="control-label">Confirm Password</label>
          <input
            value={this.state.passwordConfirmation}
            type="password"
            name="passwordConfirmation"
            className="form-control"
            onChange={this.onChange}
          />
        </div>

        <div className="form-group">
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
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-lg">
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
