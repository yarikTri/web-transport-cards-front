import { FC, useState, useEffect } from 'react';
import { Col, Row, Spinner, Container } from 'react-bootstrap'
import CustomNavbar from './Navbar';
import Label from './Label';
import InputField from './Input';
import Card from './Card';
import FooterAnyMetro from './Footer';
import { Route, getRoutes } from '../modules/get-routes';
import "../style/Routes.css"

const Routes: FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [routes, setRoutes] = useState<Route[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearchSubmit = async () => {
    setLoading(true);
    const data = await getRoutes(searchValue);
    setRoutes(data);
    setLoading(false);
  }

  useEffect(() => {
    handleSearchSubmit();
  }, []);

  return (
    <div>
      <CustomNavbar />
      <Label />
          <InputField
            value={searchValue}
            setValue={setSearchValue}
            onSubmit={handleSearchSubmit}
            loading={loading}
            placeholder="Поиск маршрута"
            buttonTitle="Искать"
          />

          <Container className="mx-auto">
            <div className={`mx-auto ${loading ? 'custom-loading' : 'custom-container'} text-center d-flex align-items-center justify-content-center`}>
              {loading && <div className="loadingBg"><Spinner animation="border" /></div>}
            </div>
            <div>
              {!routes?.length ? (
                <div className="text-center сustom-text">К сожалению, ничего не найдено</div>
              ) : (
                <Row xs={1} md={2} lg={3} className="g-4">
                  {routes.map((item, index) => (
                    <Col key={index}>
                      <Card {...item} />
                    </Col>
                  ))}
                </Row>
              )}
            </div>
          </Container>
      <FooterAnyMetro />
    </div>
  );
}

export default Routes;
