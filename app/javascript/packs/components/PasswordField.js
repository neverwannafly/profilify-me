import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const PasswordField = ({
  showPassword, value, onChange, id, error,
  onClickShowPassword, onMouseDownPassword, label,
}) => (
  <TextField
    required
    error={error}
    variant='filled'
    id={id}
    type={showPassword ? 'text' : 'password'}
    value={value}
    label={label}
    onChange={onChange}
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={onClickShowPassword}
            onMouseDown={onMouseDownPassword}
            edge="end"
          >
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </InputAdornment>
      ),
    }}
  />
);

export default PasswordField;