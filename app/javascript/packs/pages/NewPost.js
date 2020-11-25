import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import { dispatchNotification, ERROR_TOAST, SUCCESS_TOAST } from '../utils/toast';
import authManager from '../utils/auth';
import Menubar from '../components/Menubar';
import { request } from '../utils/api';

const NewPost = ({ postId }) => {

  const mode = postId ? 'edit' : 'new';
  const history = useHistory();
  const [isLoading, setLoading] = useState(true);
  const [postData, setPostData] = useState({
    title: '',
    content: '',
  });

  useEffect(() => {
    async function fetchPost() {
      if (mode === 'edit') {
        const url = `/post/${postId}`;
        const response = await request('GET', url);
        setPostData({
          title: response.post.title || '',
          content: response.post.content || '',
        });
      }
      setLoading(false);
    }
    fetchPost();
  }, []);

  const handleChange = (prop) => (event) => {
    setPostData({ ...postData, [prop]: event.target.value });
  };

  const handleFormFailure = (error = 'Network Error') => {
    dispatchNotification(error, ERROR_TOAST);
  };
  
  const handleFormSuccess = () => {
    const message = mode === 'new' ? "Post created" : "Post edited";
    dispatchNotification(message, SUCCESS_TOAST);
  };

  const handleSubmit = async () => {
    try {
      const url = mode === 'new' ? `post/${mode}` : `/post/${mode}/${postId}`;
      const response = await request('POST', url, {
        user: authManager.attachUser(),
        post: postData,
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
      <div className="post container y-margin">
        <form className='form-control' noValidate autoComplete="off">
          <div className='form-input'>
            <TextField
              required
              value={postData.title}
              label="Post Title"
              variant="filled"
              onChange={handleChange('title')}
            />
          </div>
          <div className='form-input'>
            <TextField
              value={postData.content}
              label="Content"
              multiline
              rows={10}
              variant="filled"
              onChange={handleChange('content')}
            />
          </div>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleSubmit}
            fullWidth
          >
            {mode === 'new' ? "Post" : "Update Post"}
          </Button>
        </form>
      </div>
    </div>
  )
};

export default NewPost;