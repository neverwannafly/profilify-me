import React from 'react';

import Button from '@material-ui/core/Button';
import Modal from '../components/Modal';

import landingBanner from 'images/landing-banner.svg';

const Home = () => (
  <div className="landing">
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
        >
          Create Profile
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
  </div>
);

export default Home;