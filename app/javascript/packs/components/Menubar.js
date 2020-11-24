import React from 'react';
import { useHistory } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import HomeIcon from '../components/HomeIcon';
import InboxIcon from '@material-ui/icons/Inbox';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Tooltip from '@material-ui/core/Tooltip';
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
        <Button
          color="inherit"
          onClick={() => history.push(`/u/${authUser.authData.username}`)}
        >
          <Typography variant="h6"> { authUser.authData.username } </Typography>
        </Button>
        <div className="right-element">
          <Tooltip title="New Post">
            <Button
              color="inherit"
              startIcon={<AddCircleOutlineIcon />}
              onClick={() => history.push('/post')}
            />
          </Tooltip>
          <Tooltip title="Inbox">
            <Button
              color="inherit"
              startIcon={<InboxIcon />}
              onClick={() => history.push('/inbox')}
            />
          </Tooltip>
          <Button
            color="inherit"
            onClick={() => {authUser.clearUser(); history.push('/')}}
          >
            Logout
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Menubar;