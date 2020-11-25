import React from 'react';

import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import Like from '../components/Like';
import { capitalize } from '../utils/string';

const ProfileUi = ({
  github, linkedin, facebook, twitter,
  picture, bio, mottoa, name, university,
  likes, id, liked, remote, username,
}) => {
  return (
    <div className="profile__body">
      <div className="profile__section">
        <div className="row reverse center">
          <div>
            <div className="profile__header">
              { capitalize(name) }
            </div>
            <div className="profile__subheader">
              { mottoa }
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
              <img className="profile__img" src={picture}/>
            </div>
          </div>
        </div>
      </div>
      <div className="profile__section profile__section--dark">
        {bio}
      </div>
      <Like
        numberOfLikes={likes}
        hasUserLiked={liked}
        contentId={id}
        contentType={"Profile"}
        remote={remote}
        username={username}
      />
    </div>
  );
};

export default ProfileUi;