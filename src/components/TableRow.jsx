import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../style/TableRow.css';
import { getTickets, approveTicket, rejectTicket, writeTicket } from '../actions/ticketActions';
import { Link } from "react-router-dom";

const TableRow = ({ ticket }) => {
  const statusAliases = {
    'approved': 'Одобрена',
    'formed': 'Сформирована',
    'ended': 'Выполнена',
    'rejected': 'Отклонена',
    'draft': 'Черновик'
  };
  const writeStateAliases = {
    success: 'Записана',
    fail: 'Неудачная попытка записи',
    null: 'Не записывалась',
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const isModerator = user && user.is_moderator

  const redirectToDetail = () => {
    if (ticket.id === 0) {
      navigate(`/tickets/draft`);
    } else {
      navigate(`/tickets/${ticket.id}`);
    }
  };

  const handleComplete = async () => {
    await dispatch(approveTicket(ticket.id));
    await dispatch(getTickets());
  };

  const handleReject = async () => {
    await dispatch(rejectTicket(ticket.id));
    await dispatch(getTickets());
  };

  const handleWrite = async () => {
    await dispatch(writeTicket(ticket.id));
    await dispatch(getTickets());
  };

  return (
    <tr className='table-row'>
      <td onClick={redirectToDetail}> {ticket.id}</td>
      <td onClick={redirectToDetail}> {ticket.create_time}</td>
      <td onClick={redirectToDetail}> {ticket.form_time}</td>
      <td onClick={redirectToDetail}> {ticket.end_time}</td>
      {isModerator && (
        <td onClick={redirectToDetail}> {ticket.creator_username}</td>
      )}
      <td onClick={redirectToDetail}> {statusAliases[ticket.state]}</td>
      <td > 
        {writeStateAliases[ticket.write_state]} {isModerator && ticket.write_state !== 'success' && ticket.state === 'approved' && 
          <Link onClick={handleWrite} className='form-button complete-button'> Записать </Link>
        }
      </td>
    
      {isModerator && (
        <td>
            <>
              <Link onClick={handleComplete} className='form-button complete-button'> Подтвердить </Link>
              <Link onClick={handleReject} className='form-button reject-button'> Отклонить </Link>
            </>
        </td>  
      )}
    </tr>
  );
};

export default TableRow;
