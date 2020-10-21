import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Toast from './utils/toast';
import Home from './pages/Home';
import Profile from './pages/Profile';

import authManager, { ProtectedView } from './utils/auth';

const App = () => (
  <>
    <Router>
      <Switch>
        <Route
          path='/'
          exact
          component={Home}
        />
        <Route
          path='/:username'
          exact
          component={Profile}
        />
      </Switch>
    </Router>
    <Toast />
  </>
);

export default App;