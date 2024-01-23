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

export const approveTicket = (id) => async () => {
  try {
    await axios.put(`http://localhost:8080/tickets/${id}/moderate`, 
    {
      new_state : 'approved',
    },
    {
      withCredentials: true,
    });

  } catch (error) {
    console.error('Ошибка при подтверждении заявки:', error);
  }
};

export const rejectTicket = (id) => async () => {
  try {
    await axios.put(`http://localhost:8080/tickets/${id}/moderate`, 
    {
      new_state : 'rejected',
    },
    {
      withCredentials: true,
    });

  } catch (error) {
    console.error('Ошибка при отклонении заявки:', error);
  }
};

export const writeTicket = (id) => async () => {
  try {
    await axios.put(`http://localhost:8080/tickets/${id}/start_writing`, 
    {
      withCredentials: true,
    });

  } catch (error) {
    console.error('Ошибка при записи заявки:', error);
  }
};
