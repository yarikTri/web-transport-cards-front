// ticketActions.js

import axios from 'axios';
import { getTicketsSuccess } from '../slices/ticketSlice'

axios.defaults.withCredentials = true

export const getTickets = () => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:8080/tickets`, {
      withCredentials: true,
    });
    dispatch(getTicketsSuccess(response.data));
  } catch (error) {
    console.error('Ошибка получения списка заявок:', error);
  }
};
