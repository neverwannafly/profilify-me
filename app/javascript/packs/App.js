import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Toast from './utils/toast';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Inbox from './pages/Inbox';
import NewPost from './pages/NewPost';

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
          path='/inbox'
          exact
          component={Inbox}
        />
        <Route
          path='/post'
          exact
          component={NewPost}
        /> 
        <Route
          path='/u/:username'
          exact
          component={Profile}
        />
      </Switch>
    </Router>
    <Toast />
  </>
);

export default App;