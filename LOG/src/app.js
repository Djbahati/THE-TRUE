import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from '.c:/user/djbahati/components/SignUp';
import SignIn from './components/SignIn';
import LogOut from './components/LogOut';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <video autoPlay muted loop id="video-background">
          <source src="your-video.mp4" type="video/mp4" />
        </video>
        <Switch>
          <Route path="/sign_up" component={SignUp} />
          <Route path="/sign_in" component={SignIn} />
          <Route path="/log_out" component={LogOut} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;