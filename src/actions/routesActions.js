// routesActions.js
import {
  setSearchValue,
  setRoutes,
  setLoading,
} from '../slices/routesSlice';

import { getRoutes } from '../modules/get-routes';
import { setDraftId } from '../slices/draftSlice';

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
