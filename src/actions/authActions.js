// authActions.js
import axios from 'axios';
import { loginSuccess, logoutSuccess } from '../slices/authSlice';
import { resetDraft } from '../slices/draftSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.withCredentials = true

export const loginUser = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:8080/auth/login', {
      username,
      password,
    }, {
      withCredentials: true,
    });

    dispatch(loginSuccess({ user: response.data }))

    toast.success('Вход выполнен успешно');
    // redirectTo('/routes');
  } catch (error) {
    toast.error('Неверный логин или пароль');
  }
};

export const logoutUser = () => async (dispatch, getState) => {
  try {
    const { draft } = getState();
    const draft_id = draft.draft_id;

    await axios.delete(`http://localhost:8080/tickets/draft`, {
      withCredentials: true,
    });
    dispatch(resetDraft());

    await axios.post('http://localhost:8080/auth/logout', {
      withCredentials: true,
    });

    dispatch(logoutSuccess());
    toast.success('Выход выполнен успешно');
  } catch (error) {
    console.error('Ошибка при выходе:', error);
  }
};

