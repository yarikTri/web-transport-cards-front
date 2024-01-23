import axios from 'axios';
import { setDraftItem, setDraftId, resetDraft } from '../slices/draftSlice.js';
import { getTicketById } from "../modules/get-ticket-by-id.ts";

import { toast } from 'react-toastify';

axios.defaults.withCredentials = true

export const getDraft = () => async (dispatch) => {
  try {
    const ticket = await getTicketById(0);

    if (ticket && ticket.routes.length !== 0) {
        dispatch(setDraftItem(ticket.routes));
    } else if (ticket) {
        dispatch(setDraftItem([]));
    }
  } catch (error) {
    console.error('Error getDraft:', error);
  }
};

export const addRouteToDraft = (id) => async (dispatch, getState) => {
  try {
    const response = await axios.post(`http://localhost:8080/tickets/routes/${id}`, {
      withCredentials: true
    });
    
    if (response.status === 200) {
      dispatch(setDraftId(0));
      toast.success('Услуга добавлена в корзину');
    }
  } catch (error) {
    if (error.response.status === 409) {
        toast.warning('Этот маршрут уже есть в корзине');
    } else {
        toast.error('Ошибка, что-то пошло не так');
        console.error('Ошибка во время добавления услуги в корзину:', error);
    }
    
  }
};

export const deleteRouteFromDraft = (id) => async (dispatch, getState) => {
  try {
    const response = await axios.delete(`http://localhost:8080/tickets/routes/${id}`, {
      withCredentials: true
    });

    if (response.status === 200) {
      dispatch(getDraft());
    } else {
      console.error(`Ошибка во время удаления маршрута из корзины. Статус: ${response.status}`);
    }
  } catch (error) {
    console.error('Ошибка во время удаления маршрута из корзины:', error);
  }
};

export const deleteDraft = () => async (dispatch, getState) => {
  try {
    await axios.delete(`http://localhost:8080/tickets/draft`, {
      withCredentials: true
    });
    dispatch(resetDraft());
  } catch (error) {
    console.error('Ошибка во время удаления черновика:', error);
  }
};

export const formDraft = () => async (dispatch, getState) => {
    try {
      const response = await axios.put(`http://localhost:8080/tickets/draft/form`, {
        withCredentials: true
      });
  
      if (response.status === 200) {
        dispatch(resetDraft());
      } else {
        console.error(`Ошибка во время формирования черновика. Статус: ${response.status}`);
      }
    } catch (error) {
      console.error('Ошибка во время формирования черновика:', error);
    }
  };
