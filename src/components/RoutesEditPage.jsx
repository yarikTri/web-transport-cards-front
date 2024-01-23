import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import {  Container } from 'react-bootstrap';
import RybNavbar from './Navbar';
import Header from './Header';

import TableRowRoutes from './TableRowRoutes.jsx'
import '../style/RoutesEditPage.css';

import { getRoutesForEdit } from '../actions/routesActions'

const RoutesEditPage = () => {
  const dispatch = useDispatch();
  const { routes } = useSelector(
    (state) => state.routes
  );

  useEffect(() => {
    dispatch(getRoutesForEdit())
  }, [dispatch]);

  return (
    <div>
      <RybNavbar showConstructor={true}/>
      <Header showCart={false} showApp={true} showConstructor={true}/>
      <Container className="mx-auto">
        <div>
          {!routes?.length ? (
            <div className="text-center сustom-text">К сожалению, пока ничего не найдено :(</div>
          ) : (
            <div className="routes-container">
              <div className='routes-title'>Маршруты</div>
              <table className='table-routes'>
                <thead>
                  <tr>
                    <th>№</th>
                    <th>Название</th>
                    <th>Маршрут</th>
                    <th>Время работы</th>
                    <th>Вместимость, человек</th>
                    <th>Интервал, минут</th>
                    <th>Описание</th>
                    <th>Действие</th>
                  </tr>
                </thead>

                <tbody>
                  {routes.map((item, index) => (
                      <TableRowRoutes
                        key={index}
                        route={item}
                      />
                  ))}
                </tbody>
              </table>
          </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default RoutesEditPage;
