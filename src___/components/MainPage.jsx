import { Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Label from './Label';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import '../style/MainPage.css';

// import backgroundImage from '/bg_simulation.jpg'

const MainPage = () => {
//   const sectionStyle = {
//     backgroundImage: `url(${backgroundImage})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     backgroundAttachment: 'fixed',
//     height: '100vh',
//   };

  return (
    <div>
      <Navbar />
      <Header showCart={false} showApp={true} />
      <Label />
      <div className="hrContainer"></div>
      <section className="py-5 text-center sectionContent"> {/* style={sectionStyle} */}
        <Container>
        <h1 className="text-center text-white h1Style">Почему Вы должны выбрать именно нас?</h1>
          <Row className="justify-content-md-center">
            <Col md="6" className="text-left text-white">
              <div className='bullet-point'>
                <p className="text-white slogan">
                  <strong>Высокая скорость расчётов</strong>
                </p>
                <p className="font-weight-normal text-white description">
                  Наши технологии позволяют осуществлять быстрые и точные расчеты потоков метро, обеспечивая эффективность в решении различных задач и сценариев.
                </p>
              </div>
              <div className='bullet-point'>
                <p className="text-white slogan">
                  <strong>Широкий обхват моделирования</strong>
                </p>
                <p className="font-weight-normal text-white description">
                  Наша компания охватывает различные аспекты моделирования потоков метро, включая разные линии, станции, и условия, что обеспечивает полноту и точность воспроизведения реальных сценариев.
                </p>
              </div>
              <div className='bullet-point'>
                <p className="text-white slogan">
                  <strong>Индивидуальный подход к заказам</strong>
                </p>
                <p className="font-weight-normal text-white description">
                  Мы ценим каждого клиента и готовы предоставить индивидуальный подход, отвечая на ваши запросы и предлагая персонализированные решения.
                </p>
              </div>
            </Col>
            <Col md="6" className="text-center">
              <Link to="/modelings" className="buttonStyle">
                Модели
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="hrContainer"></div>
      <Footer />
    </div>
  );

};
export default MainPage;
