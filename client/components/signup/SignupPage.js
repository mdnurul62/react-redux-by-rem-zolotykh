import React from 'react';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signupActions';

const SignupPage = (props) => (
  <div className="row">
    <div className="col-md-4 col-md-offset-4">
      <SignupForm userSignupRequest={ props.userSignupRequest } />
    </div>
  </div>
);

SignupPage.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest })(SignupPage);
