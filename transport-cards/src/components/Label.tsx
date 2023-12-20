import { Container, Row, Col} from 'react-bootstrap';

import '../style/Label.css'

function Label() {
  const sectionStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  };

  return (
    <section style={sectionStyle} className="py-5 text-center">
      <Container>
        <Row className="py-lg-5">
          <Col lg={6} md={8} className="mx-auto">
            <h1 className="main-label">Транспортные Карты Рыбинска</h1>
            <p className="main-description-text">
                Транспортные карты на любой маршрут Рыбинского Автотранспортного Предприятия
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Label;
