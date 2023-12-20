import { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CustomNavbar from './Navbar';
import FooterAnyMetro from './Footer';
import { Link } from 'react-router-dom';
import { Route, getDetailedRoute } from '../modules/get-route-detailed';
import '../style/Details.css'

const RouteDetailsPage: FC = () => {
  const [details, setDetails] = useState<Route | null>(null);
  const { id } = useParams<{ id: string }>();

  const handlerGetDetail = async () => {
    if (id) {
      const route = await getDetailedRoute(parseInt(id, 10));
      setDetails(route);
    }
  }

  useEffect(() => {
    handlerGetDetail();
  }, [id]);

  return (
    <div>
        <CustomNavbar />
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
                <Link to="/routes/" className="btn-back-to-models">Вернуться к услугам</Link>
            </div>
        </div>
        <FooterAnyMetro />
    </div>
  );
}

export default RouteDetailsPage;