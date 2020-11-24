import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";

// Icons
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LinkIcon from '@material-ui/icons/Link';

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
            <div className="row reverse center">
              <div>
                <div className="profile__header">
                  Kyojoro Rengoku
                </div>
                <div className="profile__subheader">
                  Flame Hashira
                </div>
                <div className="profile__social">
                  <div className="profile__social-icon"><FacebookIcon /></div>
                  <div className="profile__social-icon"><GitHubIcon /></div>
                  <div className="profile__social-icon"><LinkedInIcon /></div>
                  <div className="profile__social-icon"><TwitterIcon /></div>
                </div>
              </div>
              <div className="profile__picture">
                <div className="profile__icontainer">
                  <div className="profile__tcontainer"/>
                  <img className="profile__img" src="https://i.pinimg.com/736x/fd/3b/fa/fd3bfa456f2b4f6314b69d9b1803c3e0.jpg"/>
                </div>
              </div>
            </div>
          </div>
          <div className="profile__section profile__section--dark">
            Kyojuro is greatly enthusiastic in regard to his duties as a Hashira, 
            and often came across as cheerfully eccentric. He is amiable, kind and 
            boasted extraordinary technique and swordsmanship stemming from strict 
            practice and discipline. He is an honorable warrior who adhered to his 
            code of morals and principles that was instilled into him by his mother 
            at a young age—the most significant being his belief that those who 
            were born strong have a duty to protect the weak.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;