import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SUCCESS_TOAST = 'SUCCESS_TOAST';
export const ERROR_TOAST = 'ERROR_TOAST';
export const DARK_TOAST = 'DARK_TOAST';

export const dispatchNotification = (text, type) => {
  const settings = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
  switch (type) {
    case SUCCESS_TOAST: toast.success(text, settings); break;
    case ERROR_TOAST: toast.error(text, settings); break;
    case DARK_TOAST: toast.dark(test, settings); break;
    default: toast(test, settings); break;
  }
}

const Toast = () => (
  <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
  />
);

export default Toast;