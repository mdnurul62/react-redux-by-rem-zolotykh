import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from '../../shared/validations/login';
import { login } from '../../actions/auth';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: '',
      password: '',
      errors: {},
      isLoading: false,
      redirect: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
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
      this.props.login(this.state).then(
        (res) => this.setState({ redirect: true }),
        (err) => this.setState({ errors: err.data.errors, isLoading: false })
      );
    }
  }
  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  render () {    
    const { errors, identifier, password, isLoading, redirect } = this.state;
    return (
      <div>
        {redirect ? <Redirect to="/" /> :
          <form onSubmit={this.onSubmit}>
            <h1>Login</h1>

            {errors.form && <div className="alert alert-danger">{errors.form}</div>}

            <TextFieldGroup
              field="identifier"
              label="Username / Email"
              value={identifier}
              error={errors.identifier}
              onChange={this.onChange}
            />

            <TextFieldGroup
              field="password"
              label="Password"
              value={password}
              error={errors.password}
              onChange={this.onChange}
              type="password"
            />

            <div className="form-group">
              <button className="btn btn-primary btn-lg" disabled={isLoading}>Login</button>
            </div>
          </form>
        }
      </div>
    )
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
}

export default connect(null, { login })(LoginForm);
