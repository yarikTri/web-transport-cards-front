import React from 'react';
import ReactDOM from 'react-dom';
import '../style/Navbar.css';

const UserProfileMenuPortal = ({ user, show, onClose }) => {
  const portalRoot = document.getElementById('user-profile-menu-root');

  if (!portalRoot) return null;

  const role = user?.is_moderator ? 'Модератор' : 'Пользователь';

  return ReactDOM.createPortal(
    (
      <>
        <div className={`user-profile-menu ${show ? 'show' : ''}`}>
          <div className="user-profile-menu-header">
            <span>Профиль пользователя</span>
            <button onClick={onClose}>Закрыть</button>
          </div>
          <div className="user-profile-menu-content">
            <p>Имя: {user?.full_name}</p>
            <p>Username: {user?.username}</p>
            <p>Модератор: {user?.is_moderator}</p>
          </div>
        </div>

        {show && <div className="overlay" onClick={onClose}></div>}
      </>
    ),
    portalRoot
  );
};

export default UserProfileMenuPortal;
