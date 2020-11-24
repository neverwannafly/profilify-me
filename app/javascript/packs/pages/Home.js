import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import Button from '@material-ui/core/Button';

import Modal from '../components/Modal';
import Form, { REGISTER_MODE, LOGIN_MODE } from '../components/Form';
import authManager from '../utils/auth';

import landingBanner from 'images/landing-banner.svg';

const Home = () => {
  const [modalState, setState] = useState(false);
  const [formMode, setFormMode] = useState(REGISTER_MODE);
  const history = useHistory();

  const handleOpen = () => {
    if (authManager.isLoggednIn()) {
      history.push(`/u/${authManager.authData.username}`);
    } else {
      setState(true);
    }
  }
  const handleClose = () => setState(false);
  const handleModeSwitch = () => {
    formMode === REGISTER_MODE ? setFormMode(LOGIN_MODE) : setFormMode(REGISTER_MODE);
  }

  return (
    <div className="landing container">
      <div className="landing__banner">
        <img src={landingBanner} />
      </div>
      <div className="landing__body">
        <div className="landing__header">
          <h1>Welcome to Profilify.me</h1>
        </div>
        <div className="landing__desc">
          Create a visually stunning portfolio and let your presence known to the world
        </div>
        <div className="landing__desc">
          You can explore other peoples profile and show them love. 
        </div>
        <div className="landing__desc">
          Help in building and growing this strong community. 
        </div>
        <div className="landing__actions">
          <Button
            size="large"
            variant="contained"
            color="primary"
            className="landing__buttons"
            onClick={handleOpen}
          >
            { authManager.isLoggednIn() ? "View Profile" : "Create Profile" }
          </Button>
          <Button
            size="large"
            variant="contained"
            color="secondary"
            className="landing__buttons"
          >
            Explore Profiles
          </Button>
        </div>
      </div>
      <Modal
        open={modalState}
        handleClose={handleClose}
      >
        <Form
          mode={formMode}
          onModeSwitch={handleModeSwitch}
        />
      </Modal>
    </div>
  )
};

export default Home;