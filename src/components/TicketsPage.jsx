// TicketsPage.jsx

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTickets } from '../actions/ticketActions';
import TableRow from './TableRow';
import { useCustomNavigate } from '../modules/redirect'
import RybNavbar from './Navbar';
import Header from './Header';
import { Link } from 'react-router-dom';

const SHORT_POLLING_INTERVAL = 5000

import '../style/DraftPage.css'

const TicketsPage = () => {
  const dispatch = useDispatch();
  const navigate = useCustomNavigate();
  const user = useSelector((state) => state.auth.user);
  const isModerator = user && user.is_moderator

  const handleGetTickets = async () => {
    if (user) {
      await dispatch(getTickets(user.user_id));
    }
  };
  useEffect(() => {
    handleGetTickets();
  }, [dispatch]);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        if (user) {
          await dispatch(getTickets(user.user_id));
        } else {
          navigate('/routes');
        }
      } catch (error) {
        console.error('Ошибка во время получения заявок:', error);
      }
    }, SHORT_POLLING_INTERVAL);
    return () => clearInterval(intervalId);
  }, [dispatch, user, navigate]);

  const tickets = useSelector((state) => state.tickets.tickets);

  return (
    <div>
      <RybNavbar showConstructor={true}/>
      <Header showDraft={false} showApp={false} />
      <div className="applications-container">
        <div className='applications-title'>Заявки</div>
        {(tickets.length > 0) ? (
          <table className='table-applications'>
            <thead>
              <tr>
                <th>№ заявки</th>
                <th>Время создания</th>
                <th>Время формирования</th>
                <th>Время завершения</th>
                {isModerator && (
                  <th> Создатель </th>
                )}
                <th>Статус</th>
                <th>Статус записи на карту</th>
                {isModerator && (
                  <th>Действие</th>
                )}
              </tr>
            </thead>

            <tbody>
              {tickets.map((ticket) => (
                  <TableRow
                    key={ticket.id}
                    ticket={ticket}
                  />
              ))}
            </tbody>
          </table>
        ) : (
          <p>Пока что у вас нет заявок</p>
        )}
      </div>
    </div>
  );
};

export default TicketsPage;
