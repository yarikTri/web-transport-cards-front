import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
/* import Image from 'react-bootstrap/Image'; */
import { Link } from 'react-router-dom';
/* import logoImage from '/logo.png'; */
import '../style/Navbar.css';

function CustomNavbar() {
    return (
        <Navbar className="color-navbar" expand="lg">
        <Container>
            <Link to="/routes/">
                {/* <Image src={logoImage} roundedCircle className="logo-img" alt="Логотип Rybinsk Transport Cards" /> */}
            </Link>
            <Navbar.Brand as={Link} to="/routes/" className="brand-text">
                Rybinsk Transport Cards
            </Navbar.Brand>
            <Nav className="ms-auto">
                <Link to="" className="btns-log">Зарегистрироваться</Link>
                <Link to="" className="btns-log">Войти</Link>
            </Nav>
        </Container>
        </Navbar>
    );
}
  
export default CustomNavbar;
