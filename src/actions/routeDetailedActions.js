import { getDetailedRoute } from '../modules/get-route-detailed';

import {
  getRouteDetailedSlice,
} from '../slices/routeDetailedSlice';

export const getRouteDetailed = (id) => async (dispatch) => {
  try {
    const response = await getDetailedRoute(id);
    dispatch(getRouteDetailedSlice(response));
  } catch (error) {
    console.error(`Ошибка при получении данных о маршруте с ID: ${id}:`, error);
  }
};
