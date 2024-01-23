import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../actions/registrationActions';
import { useNavigate } from 'react-router-dom';

import NavbarAnyMetro from './Navbar';
import Header from './Header';

import '../style/AuthorizationPage.css';

const useCustomNavigate = () => {
  const navigate = useNavigate();

  const customNavigate = (url) => {
    navigate(url);
  };

  return customNavigate;
};

const RegistrationPage = () => {
  const backgroundStyle = {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useCustomNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/routes');
    }
  }, [isAuthenticated, navigate]);

  const handleRegister = async () => {
    const userData = {
      full_name: fullName,
      username,
      password,
    };

    await dispatch(registerUser(userData));
  
    if (isAuthenticated) {
      navigate('/routes');
    };
  };

  return (
    <div>
      <NavbarAnyMetro />
      <Header showCart={false} showApp={false}/>
      <div className="authorization-container" style={backgroundStyle}>
        <div>
          <div className="custom-form">
            <label htmlFor="fullName">Имя:</label>
            <input
              type="text"
              id="fullName"
              placeholder="Введите имя"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            <label htmlFor="username">Логин:</label>
            <input
              type="text"
              id="username"
              placeholder="Введите логин"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label htmlFor="password">Пароль:</label>
            <input
              type="password"
              id="password"
              placeholder="Введите пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="button-container">
              <div className="custom-button" onClick={handleRegister}>
                Зарегистрироваться
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hrContainer"></div>
    </div>
  );
};

export default RegistrationPage;
