import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/TableRow.css';

const TableRow = ({ ticket }) => {
  const statusAliases = {
    'approved': 'Одобрена',
    'formed': 'Сформирована',
    'ended': 'Выполнена',
    'rejected': 'Отклонена',
    'draft': 'Черновик'
  };
  const navigate = useNavigate();

  const redirectToDetail = () => {
    if (ticket.id === 0) {
      navigate(`/tickets/draft`);
    } else {
      navigate(`/tickets/${ticket.id}`);
    }
  };

  return (
    <tr className='table-row' onClick={redirectToDetail}>
      <td>{ticket.id}</td>
      <td>{ticket.create_time}</td>
      <td>{ticket.form_time}</td>
      <td>{ticket.end_time}</td>
      <td>{statusAliases[ticket.state]}</td>
    </tr>
  );
};

export default TableRow;
