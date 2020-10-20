import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import PasswordField from './PasswordField';
import {
  isUsernameValid,
  isEmailValid,
  doPasswordsMatch,
} from '../utils/validators';

export const LOGIN_MODE = 'LOGIN_MODE';
export const REGISTER_MODE = 'REGISTER_MODE';

const Form = ({
  mode
}) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    password_confirm: '',
    show_password: false,
  });

  const handleChange = (prop) => (event) => {
    setFormData({ ...formData, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setFormData({ ...formData, show_password: !formData.show_password });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <form className='form-control' noValidate autoComplete="off">
      <div className='form-header'>
        <h2>Register to get started!</h2>
      </div>
      <div className='form-input no-margin'>
        <div className='form-group'>
          <TextField
            label="First Name"
            variant="filled"
            onChange={handleChange('first_name')}
          />
          <TextField
            label="Last Name"
            variant="filled"
            onChange={handleChange('last_name')}
          />
        </div>
      </div>
      <div className='form-input'>
        <TextField
          label="Username"
          variant="filled"
          onChange={handleChange('username')}
        />
      </div>
      <div className='form-input'>
        <TextField
          label="Email"
          variant="filled"
          onChange={handleChange('email')}
        />
      </div>
      <div className='form-input'>
        <PasswordField
          showPassword={formData.show_password}
          value={formData.password}
          onChange={handleChange('password')}
          onClickShowPassword={handleClickShowPassword}
          onMouseDownPassword={handleMouseDownPassword}
          label='Password'
          id='password'
        />
      </div>
      <div className='form-input'>
        <PasswordField
          showPassword={formData.show_password}
          value={formData.password_confirm}
          onChange={handleChange('password_confirm')}
          onClickShowPassword={handleClickShowPassword}
          onMouseDownPassword={handleMouseDownPassword}
          label='Confirm Password'
          id='password_confirm'
        />
      </div>
      <div className='form-actions'>
        <Button
          size="medium"
          variant="outlined"
          color="primary"
          className="landing__buttons"
        >
          Register
        </Button>
        <Button
          size="medium"
          variant="outlined"
          color="secondary"
          className="landing__buttons"
        >
          Already a member? Login!
        </Button>
      </div>
    </form>
  );
};

export default Form;