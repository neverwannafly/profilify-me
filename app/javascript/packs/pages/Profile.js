import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

// Icons

import CircularProgress from '@material-ui/core/CircularProgress';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

import Menubar from '../components/Menubar';
import ProfileUi from '../components/ProfileUi';
import Post from '../components/Post';

import { extractUsername } from '../utils/string';
import { request } from '../utils/api';
import authManager from '../utils/auth';

const Profile = () => {

  const [isLoading, setLoading] = useState(true);
  const [pageData, setPageData] = useState({});
  const [postData, setPostData] = useState(null);
  const profileUsername = extractUsername(window.location.pathname);

  const history = useHistory();

  useEffect(() => {
    async function fetchProfile() {
      const url = `/profile/u/${profileUsername}/${authManager.authData.id}`;
      try {
        const response = await request('GET', url);
        console.log(response);
        setPageData(response);
        setLoading(false);
      } catch(error) {
        console.log(error);
      }
    }
    async function fetchPosts() {
      const url = `/posts/${profileUsername}/${authManager.authData.id}`;
      try {
        const response = await request('GET', url);
        setPostData(response);
        console.log(response);
      } catch(error) {
        console.log(error);
      }
    }
    fetchProfile();
    fetchPosts();
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

  const isProfile = (pageData.profile === null || pageData.profile === undefined || pageData.profile === {});
  if (isProfile && authManager.authData.id === pageData.owner) {
    return (
      <div className="profile">
        <div className="container">
          <Menubar />
        </div>
        <div className="container y-margin">
          <div className="loader">
            <Button
              startIcon={<AddIcon />}
              variant="contained"
              color="secondary"
              onClick={() => history.push('/profile')}
            >
              Create Profile
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (isProfile && authManager.authData.id !== pageData.owner) {
    return (
      <div className="profile">
        <div className="container">
          <Menubar />
        </div>
        <div className="container y-margin">
          <div className="loader">
            Profile doesnt exist!
          </div>
        </div>
      </div>
    );
  }

  const profile = {
    ...pageData.profile,
    likes: pageData.likes,
    liked: pageData.liked_by_source,
  };

  return (
    <div className="profile">
      <div className="container">
        <Menubar />
      </div>
      <div className="container y-margin">
        {ProfileUi(profile)}
      </div>
      <div className="container y-margin">
        {postData && postData.posts.map(post => (
          <div key={post.id}>
            {Post(post)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;