
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import '../style/ModelCard.css';
import { addRouteToDraft } from '../actions/draftActions';

const RouteCard = ({
  id,
  name,
  image,
}) => {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  const isUserAuthorized = isAuthenticated && user;

  const handleAddToDraft = () => {
    dispatch(addRouteToDraft(id));
  };

  return (
    <div className="custom-card">
      <Link to={`/routes/${id}`} className="card-href">
        <img src={`${image}`} alt={name} className="custom-card-img" />
        <div className="custom-card-body">
          <p className="custom-card-text text-center">{name}</p>
        </div>
      </Link>
      
      {isUserAuthorized && (
        <div className="add-to-cart-container">
          <button className="add-to-cart-button" onClick={handleAddToDraft}>
            В корзину
          </button>
        </div>
      )}
    </div>
  );
};

export default RouteCard;
