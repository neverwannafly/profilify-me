import React from 'react';

import Like from './Like';

const Post = ({ likes, id, liked, username, title, content }) => {
  return (
    <div className="light-post">
      <div className="light-post__title">
        { title }
      </div>
      <div className="light-post__content">
        { content }
      </div>
      <div className="light-post__like">
        <Like
          numberOfLikes={likes}
          hasUserLiked={liked}
          remote={false}
          contentId={id}
          contentType={"Post"}
        />
      </div>
    </div>
  );
};

export default Post;