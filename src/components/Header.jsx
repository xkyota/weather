import { useState, useEffect } from "react";
import '../styles/Header.css';
import Modal from "../components/Modal.jsx";

import headerLogo from './header-icon/hlogo.svg';
import headerUser from './header-icon/huser.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
      setUsername(savedUsername);
      setIsLoggedIn(true);
    }
  }, []);

  const handleRegister = (user) => {
    setUsername(user);
    setIsLoggedIn(true);
    localStorage.setItem('username', user);
  };

  const handleLogout = () => {
    setUsername('');
    setIsLoggedIn(false);
    localStorage.removeItem('username');
  };

  return (
    <>
      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        onRegister={handleRegister}
      />

      <div className="header">
        <div className="header__container">
          <div className="header-container__menu">
            <img
              src={headerLogo}
              alt="headerLogo"
              className="header-container-menu__logo"
            />
            <ul className="header-menu__list">
              <li className="header-menu-list__item">
                <p className="header-meni-list-item__text">
                  Who we are
                </p>
              </li>
              <li className="header-menu-list__item">
                <p className="header-meni-list-item__text">
                  Contacts
                </p>
              </li>
              <li className="header-menu-list__item">
                <p className="header-meni-list-item__text">
                  Menu
                </p>
              </li>
            </ul>
            
            <div className="header-container-menu__wrapper">
              {isLoggedIn ? (
                <div className="user-info">
                  <img
                    src={headerUser}
                    alt="headerUser"
                    className="header-container-menu-wrapper__icon"
                  />
                  <span className="username-text">{username}</span>
                  <button 
                    onClick={handleLogout}
                    className="logout-button"
                  >
                    Выйти
                  </button>
                </div>
              ) : (
                <>
                  <button 
                    className="header-container-menu-wrapper__button" 
                    onClick={() => setIsOpen(true)}
                  >
                    Sign Up
                  </button>
                  <img
                    src={headerUser}
                    alt="headerUser"
                    className="header-container-menu-wrapper__icon"
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;