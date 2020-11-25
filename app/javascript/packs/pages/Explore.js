import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

import CircularProgress from '@material-ui/core/CircularProgress';

import Menubar from '../components/Menubar';
import ProfileUi from '../components/ProfileUi';
import { request } from '../utils/api';
import authManager from '../utils/auth';

const Profile = () => {

  const [isLoading, setLoading] = useState(true);
  const [pageData, setPageData] = useState([]);

  const history = useHistory();

  useEffect(() => {
    async function fetchProfile() {
      const url = `/profiles/${authManager.authData.id}`;
      const response = await request('GET', url);
      setPageData(response.profiles);
      setLoading(false);
    }
    fetchProfile();
  }, []);

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
    <div className="profile">
      <div className="container">
        <Menubar />
      </div>
      <div className="container y-margin">
          {pageData.map(profile => (
            <div key={profile.id} className="explore__profile">
              {ProfileUi({ ...profile, remote: true })}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Profile;