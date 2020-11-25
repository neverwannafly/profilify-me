import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import { dispatchNotification, ERROR_TOAST, SUCCESS_TOAST } from '../utils/toast';
import authManager from '../utils/auth';
import Menubar from '../components/Menubar';
import { request } from '../utils/api';

const NewProfile = () => {

  const history = useHistory();
  const [mode, setMode] = useState('new');
  const [isLoading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    linkedin: '',
    github: '',
    facebook: '',
    twitter: '',
    bio: '',
    university: '',
    mottoa: '',
    picture: '',
  });

  useEffect(() => {
    async function fetchProfile() {
      const url = `/profile/u/${authManager.authData.username}/${authManager.authData.id}`;
      const response = await request('GET', url);
      if (response.profile !== null) {
        setMode('edit');
        setFormData({
          linkedin: response.profile.linkedin || '',
          github: response.profile.github || '',
          facebook: response.profile.facebook || '',
          twitter: response.profile.twitter || '',
          bio: response.profile.bio || '',
          university: response.profile.university || '',
          mottoa: response.profile.mottoa || '',
          picture: response.profile.picture || '',
        });
      }
      setLoading(false);
    }
    fetchProfile();
  }, []);

  const handleChange = (prop) => (event) => {
    setFormData({ ...formData, [prop]: event.target.value });
  };

  const handleFormFailure = (error = 'Network Error') => {
    dispatchNotification(error, ERROR_TOAST);
  };
  
  const handleFormSuccess = () => {
    const message = mode === 'new' ? "Profile created" : "Profile edited";
    dispatchNotification(message, SUCCESS_TOAST);
  };

  const handleSubmit = async () => {
    try {
      const url = `/profile/${mode}`;
      const response = await request('POST', url, {
        user: authManager.attachUser(),
        profile: formData,
      });
      if (response.success) {
        history.push(`/u/${authManager.authData.username}`);
        handleFormSuccess();
      } else {
        handleFormFailure(response.error);
      }
    } catch(error) {
      console.log(error)
      handleFormFailure();
    }
  };

  if (isLoading) {
    return (
      <div className="profile">
        <div className="container">
          <Menubar />
        </div>
        <div className="container y-margin">
          <div className="loader">
            <CircularProgress />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="container">
        <Menubar />
      </div>
      <div className="container y-margin">
        <form className='form-control' noValidate autoComplete="off">
          <div className='form-header'>
            <h2>
              Enter the following details
            </h2>
          </div>
          <div className='form-input'>
            <TextField
              value={formData.mottoa}
              label="Your Speciality"
              variant="filled"
              onChange={handleChange('mottoa')}
            />
          </div>
          <div className='form-input'>
            <TextField
              value={formData.linkedin}
              label="Linkedin"
              variant="filled"
              onChange={handleChange('linkedin')}
            />
          </div>
          <div className='form-input'>
            <TextField
              value={formData.github}
              label="Github"
              variant="filled"
              onChange={handleChange('github')}
            />
          </div>
          <div className='form-input'>
            <TextField
              value={formData.facebook}
              label="Facebook"
              variant="filled"
              onChange={handleChange('facebook')}
            />
          </div>
          <div className='form-input'>
            <TextField
              value={formData.twitter}
              label="Twitter"
              variant="filled"
              onChange={handleChange('twitter')}
            />
          </div>
          <div className='form-input'>
            <TextField
              value={formData.picture}
              label="Profile Picture"
              variant="filled"
              onChange={handleChange('picture')}
            />
          </div>
          <div className='form-input'>
            <TextField
              value={formData.university}
              label="University"
              variant="filled"
              onChange={handleChange('university')}
            />
          </div>
          <div className='form-input'>
            <TextField
              value={formData.bio}
              label="Bio"
              multiline
              rows={10}
              variant="filled"
              onChange={handleChange('bio')}
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            fullWidth
          >
            {mode === 'new' ? "Create Profile" : "Edit Profile"}
          </Button>
        </form>
      </div>
    </div>
  )
};

export default NewProfile;