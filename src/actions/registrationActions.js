// registrationActions.js
import axios from 'axios';

import { loginUser } from './authActions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.withCredentials = true

export const registerUser = (userData) => async (dispatch) => {
    try {
      await axios.post('http://localhost:8080/auth/signup', userData);
      dispatch(loginUser(userData.username, userData.password));
      toast.success('Регистрация прошла успешно');
    } catch (error) {
      console.error(error)
      toast.error('Ошибка при регистрации');
    }
  };
