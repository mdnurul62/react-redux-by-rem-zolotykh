import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { addFlashMessage } from '../actions/flashMessages';

export default function requireAuth(WrappedComponent) {
  class Authenticate extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        redirectLocation: '/login'
      }
    }
    componentWillMount() {
      if(!this.props.isAuthenticated) {
        this.props.addFlashMessage({
          type: 'error',
          text: 'You need to login to access this page'
        });
      }
    }

    componentWillReceiveProps(nextProps) {
      if(!nextProps.isAuthenticated) {
        this.setState({ redirectLocation: '/' });
      }
    }

    render() {
      return (
        <div>
          { !this.props.isAuthenticated ?
            <Redirect to={this.state.redirectLocation} /> :
            <WrappedComponent {...this.props} />
          }
        </div>

      );
    }
  }

  Authenticate.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    addFlashMessage: PropTypes.func.isRequired
  }

  const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
  });

  return connect(mapStateToProps, { addFlashMessage })(Authenticate);
}
