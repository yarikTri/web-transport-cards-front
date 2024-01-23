import NavbarAnyMetro from './Navbar';
import Label from './Label';

import { Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Header from './Header';
import FooterAnyMetro from './Footer';
import '../style/MainPage.css';

const MainPage = () => {
  const sectionStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    height: '100vh',
  };

  return (
    <div>
      <NavbarAnyMetro />
      <Header showDraft={false} showApp={true} />
      <Label />
      <div className="hrContainer"></div>
      <section style={sectionStyle} className="py-5 text-center sectionContent">
        <Container>
        <h1 className="text-center text-white h1Style">Почему Вы должны выбрать именно нас?</h1>
          <Row className="justify-content-md-center">
            <Col md="6" className="text-center">
              <Link to="/routes" className="buttonStyle">
                Маршруты
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="hrContainer"></div>
      <FooterAnyMetro />
    </div>
  );

};
export default MainPage;
