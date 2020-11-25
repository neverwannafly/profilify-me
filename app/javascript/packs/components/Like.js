import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import { request } from '../utils/api';
import authManager from '../utils/auth';

const Like = ({ username, numberOfLikes, hasUserLiked, contentType, contentId, remote = false }) => {

  const [liked, setLiked] = useState(hasUserLiked);
  const [likes, setLikes] = useState(numberOfLikes);
  const history = useHistory();

  const handleLike = async () => {
    const response = await request('POST', '/toggle-like', {
      user: authManager.attachUser(),
      content: { contentType, contentId },
    });
    if (liked) { setLikes(likes - 1); }
    else { setLikes(likes + 1); }
    setLiked(!liked);
  };

  return (
    <div className="like">
      <div
        className="like__icon"
        onClick={handleLike}
      >
        {liked ? <FavoriteIcon/> : <FavoriteBorderIcon />}
      </div>
      <div className="like__count">
        {likes}
      </div>
      { remote && (
        <div
          className="like__visit"
          onClick={() => history.push(`/u/${username}`)}
        >
          Visit profile
        </div>
      )}
    </div>
  );
};

export default Like;