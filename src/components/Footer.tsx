import { Container, Nav, Navbar } from 'react-bootstrap';
import '../style/Footer.css';

function RybFooter() {
  return (
    <div className='ryb-footer'>
        <Navbar className="color-navbar custom-navbar" expand="lg">
            <Container>
                <Nav className="ms-auto footer-text">
                  <p>ИУ5-52Б, Кузьмин Ярослав Артемович</p>
                </Nav>
            </Container>
        </Navbar>
    </div>
  );
}

export default RybFooter;
