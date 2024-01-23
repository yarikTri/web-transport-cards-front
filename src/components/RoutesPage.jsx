import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRouteAction, setSearchValueAction } from '../actions/routesActions';
import { Col, Row, Spinner, Container } from 'react-bootstrap';
import RybNavbar from './Navbar';
import Header from './Header';
import InputField from './InputField';
import RouteCard from './RouteCard';
import RybFooter from './Footer';
import '../style/RoutesPage.css';
import { getDraft } from '../actions/draftActions';

const RoutesPage = () => {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const { searchValue, routes, loading } = useSelector(
    (state) => state.routes
  );

  // const draft_id = useSelector((state) => state.draft.draft_id);

  const handleSearchSubmit = async () => {
    dispatch(setRouteAction(searchValue));
  };

  useEffect(() => {
    handleSearchSubmit();
  }, [dispatch, searchValue]);

  // useEffect(() => {
  //   if (isAuthenticated && draft_id) {  
  //     dispatch(getDraft(draft_id));
  //   }
  // }, [dispatch, isAuthenticated, draft_id]);

  return (
    <div>
      <RybNavbar showConstructor={true} />
      <Header showDraft={true} showApp={true}/>
      <InputField
        value={searchValue}
        setValue={(value) => dispatch(setSearchValueAction(value))}
        onSubmit={handleSearchSubmit}
        loading={loading}
        placeholder="Введите поисковый запрос"
        buttonTitle="Искать"
      />

      <Container className="mx-auto">
        <div className={`mx-auto ${loading ? 'custom-loading' : 'custom-container'} text-center d-flex align-items-center justify-content-center`}>
          {loading && <div className="loadingBg"><Spinner animation="border" /></div>}
        </div>
        <div>
          {!routes?.length ? (
            <div className="text-center сustom-text">Ничего не найдено</div>
          ) : (
            <Row xs={1} md={2} lg={3} className="g-4">
              {routes.map((item, index) => (
                <Col key={index}>
                  <RouteCard {...item} />
                </Col>
              ))}
            </Row>
          )}
        </div>
      </Container>
      {/* <RybFooter /> */}
    </div>
  );
};

export default RoutesPage;
