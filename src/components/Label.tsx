import { Container, Row, Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import '../style/Label.css'

function Label() {
  const sectionStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    height: '86.5vh',
  };

  return (
    <section style={sectionStyle} className="py-5 text-center">
      <Container>
        <Row className="py-lg-5">
          <Col lg={6} md={8} className="mx-auto">
            <h1 className="main-label">Проезд по транспортным картам</h1>
            <p className="main-description-text">
              Лучшие предложения транспортных карт на пассажирские перевозки в Рыбинске
            </p>
            <div className='button-container'>
              <Link to="/registration" className="main-link-button">
                Попробовать RybTransportCards
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Label;
