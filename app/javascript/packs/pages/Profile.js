import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";

import Menubar from '../components/Menubar';
import authUser from '../utils/auth';

const Profile = () => {

  const history = useHistory();

  useEffect(() => {

  });

  return (
    <div className="profile">
      <div className="container">
        <Menubar />
      </div>
      <div className="container y-margin">
        <div className="profile__body">
          <div className="profile__section">
            <div className="profile__header">
              Kyojoro Rengoku
            </div>
            <div className="profile__subheader">
              Flame Hashira
            </div>
            <div className="profile__picture">
              <div className="profile__icontainer">
                <div className="profile__tcontainer"/>
                <img className="profile__img" src="https://i.pinimg.com/736x/fd/3b/fa/fd3bfa456f2b4f6314b69d9b1803c3e0.jpg"/>
              </div>
            </div>
          </div>
          <div className="profile__section profile__section--dark">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;