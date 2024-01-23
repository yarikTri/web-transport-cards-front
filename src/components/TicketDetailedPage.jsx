// TicketDetailedPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getTicketById } from '../modules/get-ticket-by-id.ts';

import NavbarAnyMetro from './Navbar.jsx';
import Header from './Header.jsx';

import '../style/DraftPage.css'

const TicketDetailedPage = () => {
  const { id } = useParams();
  const [loadingResults, setLoadingResults] = useState(false);
  const [routeResults, setRouteResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoadingResults(true);
        const response = await getTicketById(id);
        setRouteResults(response.routes);
      } catch (error) {
        console.error('Ошибка при запросе на заявку', error);
      } finally {
        setLoadingResults(false);
      }
    };

    fetchResults();
  }, [id]);

  return (
    <div>
        <NavbarAnyMetro />
        <Header showDraft={false} showApp={true} />
        <div className="applications-container">
            <div className='applications-title'> Заявка № {id}</div>
            {loadingResults ? (
                <p>Загрузка...</p>
            ) : (
                <table className='table-applications'>
                <thead>
                    <tr>
                      <th>Маршрут</th>
                      <th>Станции</th>
                      <th>Режим работы</th>
                      <th>Описание</th>
                    </tr>
                </thead>
                <tbody>
                    {routeResults.map((route) => (
                      <tr key={route.id}>
                          <td>{route.name}</td>
                          <td>{route.start_station} - {route.end_station}</td>
                          <td>{route.start_time} - {route.end_time}</td>
                          <td>{route.description}</td>
                      </tr>
                    ))}
                </tbody>
                </table>
            )}
        </div>
    </div>
  );
};

export default TicketDetailedPage;
