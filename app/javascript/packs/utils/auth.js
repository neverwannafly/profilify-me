import { useHistory } from 'react-router-dom';

import { dispatchNotification, ERROR_TOAST } from './toast';

const SESSION_STORAGE_KEY = 'profilify-me-auth-user';

function AuthManager() {
  this.initialState = {
    id: null, username: null, name: null, email: null, token: null
  };
  this.authData = this.initialState;

  this.setUser = (payload) => {
    this.authData = {
      ...this.authData,
      username: payload.username,
      name: payload.name,
      id: payload.id,
      email: payload.email,
      token: payload.token,
    };
    window.sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(this.authData));
  }

  this.attachUser = (payload = null) => {
    return {
      ...payload,
      id: this.authData.id,
      token: this.authData.token,
    };
  }

  this.clearUser = () => {
    this.authData = this.initialState;
    window.sessionStorage.removeItem(SESSION_STORAGE_KEY);
  }

  this.jsonParse = (string) => {
    return JSON.parse(string) || {};
  }

  this.loadUser = () => {
    const authUser = this.jsonParse(window.sessionStorage.getItem(SESSION_STORAGE_KEY));
    this.authData = { ...this.authData, ...authUser };
  }

  this.isLoggednIn = () => {
    return this.authData.username !== null;
  }

  this.loadUser();
};

const authManager = new AuthManager();

export const ProtectedView = ({ authManager, component, fallback }) => {

  if (authManager.isLoggednIn()) {
    return component;
  }

  dispatchNotification('You need to be logged in', ERROR_TOAST);
  return fallback;
};

export default authManager;