import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/TableRowRoutes.css';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteRoute, getRoutesForEdit } from '../actions/routesActions'

const TableRowRoutes = ({ route }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const redirectToEdit = () => {
    navigate(`/routes/edit/${route.id}`);
  };

  const handleDelete = async () => {
    await dispatch(deleteRoute(route.id));
    await dispatch(getRoutesForEdit());
  };

  return (
    <tr className='table-row'>
      <td onClick={redirectToEdit}> {route.id}</td>
      <td onClick={redirectToEdit}> {route.name}</td>
      <td onClick={redirectToEdit}> {route.start_station} - {route.end_station}</td>
      <td onClick={redirectToEdit}> {route.start_time} - {route.end_time}</td>
      <td onClick={redirectToEdit}> {route.capacity}</td>
      <td onClick={redirectToEdit}> {route.interval_minutes}</td>
      <td onClick={redirectToEdit}> {route.description}</td>
      <td>
        <Link onClick={handleDelete} className='form-button delete-button'> Удалить </Link>
      </td>
    </tr>
  );
};

export default TableRowRoutes;
