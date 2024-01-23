// routesActions.js
import axios from 'axios';

import {
  setSearchValue,
  setRoutes,
  setLoading,
} from '../slices/routesSlice';

import { getRoutes } from '../modules/get-routes';
import { setDraftId } from '../slices/draftSlice';
import { toast } from 'react-toastify';

axios.defaults.withCredentials = true

const filterRoutes = (
  data,
  searchValue,
) => data.filter((route) => route.name.toLowerCase().includes(searchValue.toLowerCase()));

export const setRouteAction = (searchValue) => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true));

    const response = await getRoutes(searchValue);
    const draft_id = response[0];
    const data = response;

    if (data.length !== 0 && data[0].image === '/default_bus.jpeg') {
      const filteredData = filterRoutes(data, searchValue);
      dispatch(setRoutes(filteredData));
    } else {
      dispatch(setRoutes(data));
    }

    dispatch(setLoading(false));

    if (draft_id) {
      dispatch(setDraftId(draft_id));
    }
  } catch (error) {
    console.error('Ошибка получения маршрутов:', error);
    dispatch(setLoading(false));
  }
};

export const setSearchValueAction = (searchValue) => (dispatch) => {
  dispatch(setSearchValue(searchValue));
};

export const getRoutesForEdit = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const response = await getRoutes();
    const data = response;

    if (data.length !== 0 && data[0].image === '/default_bus.jpeg') {
      const filteredData = filterRoutes(data, searchValue);
      dispatch(setRoutes(filteredData));
    } else {
      dispatch(setRoutes(data));
    }

    dispatch(setLoading(false));
  } catch (error) {
    console.error('Ошибка во время получения маршрутов:', error);
  }
}

export const deleteRoute = (id) => async () => {
  try {
    if (id) {
      await axios.delete(`http://localhost:8080/routes/${id}`, {
        withCredentials: true,
      });
    }
    toast.success('Маршрут успешно удалён');
  } catch (error) {
    toast.warning('Не получилось удалить маршрут, попробуйте ещё раз');
  }
};

export const updateRoute = (id, data) => async () => {
  try {
    if (data.image !== null) {
      var formData = new FormData();
      formData.append("image", data.image);
      await axios.put(`http://localhost:8080/routes/${id}/image`, 
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true,
        }
      );
    }

    await axios.put(`http://localhost:8080/routes/${id}`, 
      {
        name: data.name,
        start_time: data.start_time,
        end_time: data.end_time,
        start_station: data.start_station,
        end_station: data.end_station,
        capacity: data.capacity,
        interval_minutes: data.interval_minutes,
        description: data.description,
      },
      {
        withCredentials: true,
      }
    );
    toast.success('Изменения сохранены');
  } catch (error) {
    console.error(`Ошибка при изменении маршрута с ID: ${id}:`, error);
  }
};

export const createRoute = (data) => async () => {
  try {
    console.log(data)
    await axios.post(`http://localhost:8080/routes`, 
      {
        name: data.name,
        start_time: data.start_time,
        end_time: data.end_time,
        start_station: data.start_station,
        end_station: data.end_station,
        capacity: Number(data.capacity),
        interval_minutes: Number(data.interval_minutes),
        description: data.description,
      },
      {
        withCredentials: true,
      }
    );
    toast.success('Новый маршрут создан');
    return 0;
  } catch (error) {
    console.error(`Ошибка при изменении создании маршрута:`, error);
  }
};
