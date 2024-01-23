import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../style/Navbar.css';

import UserProfileMenuPortal from './UserProfileMenuPortal';

function NavbarAnyMetro() {

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  const [showUserProfileMenu, setShowUserProfileMenu] = React.useState(false);

  // const dispatch = useDispatch();
  const handleUserProfileClick = () => {
    setShowUserProfileMenu(!showUserProfileMenu);
  };

  const handleCloseUserProfileMenu = () => {
    setShowUserProfileMenu(false);
  };

  return (
    <Navbar className="color-navbar" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-text">
          RybTransportCards
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Link to="/routes" className="btns-log">
            Маршруты
          </Link>
          {isAuthenticated ? (
            <>
              <div className='user-name'>
               {user?.full_name}
              </div>
              <div className="user-icon" onClick={handleUserProfileClick}>
                {/* <Image src={personIcon} className="logo-img" alt="Иконка пользователя" /> */}
              </div>
              <Link to="/logout" className="btns-log">
                Выйти
              </Link>
              <UserProfileMenuPortal user={user} show={showUserProfileMenu} onClose={handleCloseUserProfileMenu} />
            </>
          ) : (
            <>
              <Link to="/registration" className="btns-log">
                Зарегистрироваться
              </Link>
              <Link to="/login" className="btns-log">
                Войти
              </Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarAnyMetro;
