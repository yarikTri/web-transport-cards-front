import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import NavbarAnyMetro from './Navbar';
import FooterAnyMetro from './Footer';
import Header from './Header';
import { Link } from 'react-router-dom';
import { getRouteDetailed } from '../actions/routeDetailedActions';
import '../style/RouteDetailedPage.css';

const RouteDetailedPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;
  const details = useSelector((state) => state.routesDetailed.routeDetailed);

  useEffect(() => {
    if (id) {
      dispatch(getRouteDetailed(id));
    }
  }, [id, dispatch, details?.name]);

  return (
    <div>
      <NavbarAnyMetro />
      <Header showDraft={false} showApp={true}/>
      <div className="model-card">
        <div className="model-card-image">
          <img src={`${details?.image}`} alt={details?.name} className="model-detail-card" />
        </div>
        <div className="model-card-description">
          <h2>{details?.name}</h2>
          <p>{details?.description}</p>
          <p>Едет от {details?.start_station} до {details?.end_station}</p>
          <p><b>Раписание</b>: с {details?.start_time} до {details?.end_time} каждые {details?.interval_minutes} минут</p>
          <p><b>Вместимость</b>: {details?.capacity} человек</p>
          <Link to="/routes/" className="btn-back-to-models">Ко всем маршрутам</Link>
        </div>
      </div>
      <FooterAnyMetro />
    </div>
  );
}

export default RouteDetailedPage;
