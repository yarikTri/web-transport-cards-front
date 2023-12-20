import { Container, Nav, Navbar, Image} from 'react-bootstrap';
import '../style/Footer.css';

function Footer() {

  return (
    <div>
        {/* <Image src={backgroundImage} fluid alt="Background Image" /> */}
        <Navbar className="color-navbar custom-navbar" expand="lg">
            <Container>
                <Nav className="ms-auto footer-text">
                <p>Кузьмин Ярослав Артемович</p>
                </Nav>
            </Container>
        </Navbar>
    </div>
  );
}

export default Footer;
