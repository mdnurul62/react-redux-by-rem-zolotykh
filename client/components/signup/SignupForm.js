import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { userSignupRequest, isUserExists } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashMessages';
import timezones from '../../data/timezones';
import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from '../../../shared/validations/signup';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      timezone: '',
      errors: {},
      isLoading: false,
      redirect: false,
      invalid: false
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.checkUserExists = this.checkUserExists.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if(!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }
  onSubmit(e) {
    e.preventDefault();
    if(this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.userSignupRequest(this.state).then(
        () => {
          this.props.addFlashMessage({
            type: 'success',
            text: 'You signed up successfully. Welcome!'
          });
          this.setState({ redirect: true });
        }
        ,
        (err) => this.setState({ errors: err.data, isLoading: false })
      );
    }
  }
  checkUserExists(e) {
    const { name, value } = e.target;
    if(value) {
      this.props.isUserExists(value).then(res => {
        const errors = {...this.state.errors};
        let invalid = false;
        if(res.data.user) {
          errors[name] = `There is a user with such ${name}`;
          invalid = true;
        } else {
          errors[name] = '';
          invalid = false;
        }
        this.setState({ errors, invalid });
      });
    }
  }
  render () {
    const errors = this.state.errors;
    const options = Object.keys(timezones).map(
      k => <option key={timezones[k]} value={timezones[k]}>{k}</option>
    );
    return (
      <div>
        {this.state.redirect ? <Redirect to="/" /> :
          <form onSubmit={this.onSubmit}>
            <h1>Join our community!</h1>

            <TextFieldGroup
              field="username"
              value={this.state.username}
              label="Username"
              error={errors.username}
              onChange={this.onChange}
              onBlur={this.checkUserExists}
            />
            <TextFieldGroup
              field="email"
              value={this.state.email}
              label="Email"
              error={errors.email}
              onChange={this.onChange}
              onBlur={this.checkUserExists}
            />
            <TextFieldGroup
              field="password"
              value={this.state.password}
              label="Password"
              error={errors.password}
              onChange={this.onChange}
              type="password"
            />
            <TextFieldGroup
              field="passwordConfirmation"
              value={this.state.passwordConfirmation}
              label="Password Confirmation"
              error={errors.passwordConfirmation}
              onChange={this.onChange}
              type="password"
            />
            <div className={ classnames("form-group", { "has-error": errors.timezone }) }>
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
              {errors.timezone && <span className="help-block">{errors.timezone}</span>}
            </div>
            <div className="form-group">
              <button disabled={this.state.isLoading || this.state.invalid} className="btn btn-primary btn-lg">
                Sign up
              </button>
            </div>
          </form>
        }
      </div>
    )
  }
}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  isUserExists: React.PropTypes.func.isRequired
}

export default connect(null,
  { userSignupRequest, addFlashMessage, isUserExists })
  (SignupForm);
