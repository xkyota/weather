import '../styles/Header.css';

import headerLogo from './header-icon/hlogo.svg';
import headerUser from './header-icon/huser.svg';

const Header = () => {
  return (
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
              <p href="" className="header-meni-list-item__text">
                Who we are
              </p>
            </li>
            <li className="header-menu-list__item">
              <p href="" className="header-meni-list-item__text">
                Contacts
              </p>
            </li>
            <li className="header-menu-list__item">
              <p href="" className="header-meni-list-item__text">
                Menu
              </p>
            </li>
          </ul>
          <div className="header-container-menu__wrapper">
            <button className="header-container-menu-wrapper__button">
              Sign Up
            </button>
            <img
              src={headerUser}
              alt="headerUser"
              className="header-container-menu-wrapper__icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
