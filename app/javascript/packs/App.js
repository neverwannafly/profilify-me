import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Toast from './utils/toast';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Inbox from './pages/Inbox';
import NewPost from './pages/NewPost';
import NewProfile from './pages/NewProfile';
import Explore from './pages/Explore';

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
        <Route
          path='/profile'
          exact
          component={NewProfile}
        />
        <Route
          path="/explore"
          exact
          component={Explore}
        />
      </Switch>
    </Router>
    <Toast />
  </>
);

export default App;