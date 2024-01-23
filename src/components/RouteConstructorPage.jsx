import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRouteDetailed } from '../actions/routeDetailedActions';
import { updateRoute, createRoute } from '../actions/routesActions.js'
import { setRouteField, toInitState } from '../slices/routeDetailedSlice.js';
import RybNavbar from './Navbar';
import Header from './Header';
import { useCustomNavigate } from '../modules/redirect';
import '../style/RouteConstructorPage.css';
import routeDetailed from '../slices/routeDetailedSlice.js';

const RouteConstructorPage = () => {
  const dispatch = useDispatch();
  const navigate = useCustomNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id === "0") {
      dispatch(toInitState());
    } else if (id !== null && id !== "0") {
      dispatch(getRouteDetailed(id));
    }
  }, [id]);

  const details = useSelector((state) => state.routesDetailed.routeDetailed);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
  
    dispatch(setRouteField({
      fieldName: name,
      fieldValue: name === 'image' ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = {
        name: details.name,
        start_time: details.start_time,
        end_time: details.end_time,
        start_station: details.start_station,
        end_station: details.end_station,
        capacity: Number(details.capacity),
        interval_minutes: Number(details.interval_minutes),
        description: details.description,
        image: (typeof(details.image) === 'object') ? details.image : null,
    };

    if (id !== null && id !== "0") {
        await dispatch(updateRoute(id, data));
        navigate('/routes/edit');
    } else {
        const resultStatus = await dispatch(createRoute(data));
        if (resultStatus === 0) {
            navigate('/routes/edit');
        }
    }
  };

  return (
    <div>
      <RybNavbar showConstructor={true} />
      <Header showDraft={false} showApp={true} showConstructor={true} />
      <div className="model-card">
        <form onSubmit={handleSubmit} className="form-grid">
          <div className="model-card-image">
            <img
              src={details.image === null ? "" : (typeof(details.image) === 'object') ? URL.createObjectURL(details.image) : details.image}
              alt=""
              className="model-detail-card"
            />
            <input className="file-input" type="file" name="route_image" onChange={handleChange} accept="image/*" />
          </div>
          <div className="model-card-description">
            <div className="form-field">
                <label htmlFor="name">Название:</label>
                <input
                  type="text"
                  name="name"
                  value={details.name}
                  onChange={handleChange}
                  placeholder="Введите название"
                  className="form-control"
                />
            </div>
            <div className="form-field">
                <label htmlFor="description">Описание:</label>
                <textarea
                  name="description"
                  value={details.description}
                  onChange={handleChange}
                  placeholder="Введите описание"
                  className="description-area form-control"
                />
            </div>
            <div className="form-field">
                <label htmlFor="start_station">Первая конечная остановка:</label>
                <input
                  type="text"
                  name="start_station"
                  value={details.start_station}
                  onChange={handleChange}
                  placeholder="Введите остановку"
                  className="form-control"
                />
            </div>
            <div className="form-field">
                <label htmlFor="end_station">Вторая конечная остановка:</label>
                <input
                  type="text"
                  name="end_station"
                  value={details.end_station}
                  onChange={handleChange}
                  placeholder="Введите остановку"
                  className="form-control"
                />
            </div>
            <div className="form-field">
                <label htmlFor="start_time">Время выезда из ПАТП:</label>
                <input
                  type="text"
                  name="start_time"
                  value={details.start_time}
                  onChange={handleChange}
                  placeholder="Введите время"
                  className="form-control"
                />
            </div>
            <div className="form-field">
                <label htmlFor="end_time">Возвращение в ПАТП:</label>
                <input
                  type="text"
                  name="end_time"
                  value={details.end_time}
                  onChange={handleChange}
                  placeholder="Введите время"
                  className="form-control"
                />
            </div>
            <div className="form-field">
                <label htmlFor="capacity">Вместимость:</label>
                <input
                  type="number"
                  name="capacity"
                  value={details.capacity}
                  onChange={handleChange}
                  placeholder="Введите количество человек"
                  className="form-control"
                />
            </div>
            <div className="form-field">
                <label htmlFor="interval_minutes">Интервал в минутах:</label>
                <input
                  type="number"
                  name="interval_minutes"
                  value={details.interval_minutes}
                  onChange={handleChange}
                  placeholder="Введите интервал"
                  className="form-control"
                />
            </div>
            <div className="form-field">
                <button className='btn-save' type="submit">Сохранить</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RouteConstructorPage;
