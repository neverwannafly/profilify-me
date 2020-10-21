import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

import HomeIcon from '../components/HomeIcon';
import authUser from '../utils/auth';

const Profile = () => {

  const history = useHistory();

  useEffect(() => {

  });

  return (
    <div className="profile container">
      <AppBar position="static">
        <Toolbar>
          <Button
            color="inherit"
            startIcon={<HomeIcon />}
            onClick={() => history.push('/')}
          />
          <Typography variant="h6">
            { authUser.authData.username }
          </Typography>
          <Button
            className="right-element"
            color="inherit"
            onClick={() => {authUser.clearUser(); history.push('/')}}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Profile;