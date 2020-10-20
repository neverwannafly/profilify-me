import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import PasswordField from './PasswordField';
import {
  isUsernameValid,
  isEmailValid,
  doPasswordsMatch,
  isStringValid,
} from '../utils/validators';

export const LOGIN_MODE = 'LOGIN_MODE';
export const REGISTER_MODE = 'REGISTER_MODE';

const Form = ({
  mode, onModeSwitch
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

  const renderOnRegister = (elem) => {
    if (mode === REGISTER_MODE) return elem;
    return null;
  };

  return (
    <form className='form-control' noValidate autoComplete="off">
      <div className='form-header'>
        <h2>
          {mode===REGISTER_MODE ?
            'Register to get started!' : 'Login to your account'}
        </h2>
      </div>
      {renderOnRegister(
        <div className='form-input no-margin'>
          <div className='form-group'>
            <TextField
              required
              error={!isStringValid(formData.first_name)}
              label="First Name"
              variant="filled"
              onChange={handleChange('first_name')}
            />
            <TextField
              required
              error={!isStringValid(formData.last_name)}
              label="Last Name"
              variant="filled"
              onChange={handleChange('last_name')}
            />
          </div>
        </div>
      )}

      <div className='form-input'>
        <TextField
          required
          error={!isUsernameValid(formData.username)}
          label="Username"
          variant="filled"
          onChange={handleChange('username')}
        />
      </div>
      {renderOnRegister(
        <div className='form-input'>
          <TextField
            required
            error={!isEmailValid(formData.email)}
            label="Email"
            variant="filled"
            onChange={handleChange('email')}
          />
        </div>
      )}
      <div className='form-input'>
        <PasswordField
          error={!doPasswordsMatch(formData.password, formData.password_confirm)}
          showPassword={formData.show_password}
          value={formData.password}
          onChange={handleChange('password')}
          onClickShowPassword={handleClickShowPassword}
          onMouseDownPassword={handleMouseDownPassword}
          label='Password'
          id='password'
        />
      </div>
      {renderOnRegister(
        <div className='form-input'>
          <PasswordField
            error={!doPasswordsMatch(formData.password, formData.password_confirm)}
            showPassword={formData.show_password}
            value={formData.password_confirm}
            onChange={handleChange('password_confirm')}
            onClickShowPassword={handleClickShowPassword}
            onMouseDownPassword={handleMouseDownPassword}
            label='Confirm Password'
            id='password_confirm'
          />
        </div>
      )}
      
      <div className='form-actions'>
        <Button
          size="medium"
          variant="outlined"
          color="primary"
          className="landing__buttons"
        >
          { mode === REGISTER_MODE ? "REGISTER" : "LOGIN" }
        </Button>
        <Button
          size="medium"
          variant="outlined"
          color="secondary"
          className="landing__buttons"
          onClick={onModeSwitch}
        >
          { mode === REGISTER_MODE ? "Already a member? Login" : "Create new account" }
        </Button>
      </div>
    </form>
  );
};

export default Form;