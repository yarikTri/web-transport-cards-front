import { FC } from 'react';
import { Link } from 'react-router-dom';
import '../style/Card.css';

interface Card {
  id: string;
  name: string;
  start_time: string;
  end_time: string;
  interval_minutes: number;
  start_station: string;
  end_station: string;
  capacity: number;
  description: string;
  image: string;
}

const Card: FC<Card> = ({
  id,
  name,
  image,
}) => (
    <div className="custom-card">
    <Link to={`/routes/${id}`} className="card-href">
      <img src={`${image}`} alt={name} className="custom-card-img" />
      <div className="custom-card-body">
        <p className="custom-card-text text-center">{name}</p>
      </div>
    </Link>
  </div>
);

export default Card;
