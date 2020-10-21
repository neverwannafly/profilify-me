import React from 'react';
import { useHistory } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import HomeIcon from '../components/HomeIcon';
import authUser from '../utils/auth';

const Menubar = () => {
  const history = useHistory();

  return (
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
  );
};

export default Menubar;