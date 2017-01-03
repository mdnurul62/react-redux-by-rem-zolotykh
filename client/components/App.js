import React from 'react';
import { Match } from 'react-router';

import NavigationBar from './NavigationBar';
import SignupPage from './signup/SignupPage';
import LoginPage from './login/LoginPage';
import EventPage from './events/EventPage';
import VisibleFlashMessageList from './flash/VisibleFlashMessageList';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Match pattern="/" render={(mathProps) => (
            <div>
              <NavigationBar {...mathProps}/>
              <VisibleFlashMessageList {...mathProps}/>
            </div>
          )}
        />
        <Match exactly pattern="/" component={Greetings} />
        <Match pattern="/signup" component={SignupPage} />
        <Match pattern="/login" component={LoginPage} />
        <Match pattern="/new-event" component={EventPage} />
      </div>
    );
  }
}

const Greetings = () => (
  <h1>Hello from greetings!</h1>
);

export default App;
