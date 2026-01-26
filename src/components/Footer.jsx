import '../styles/Footer.css';

import fbSvg from '../components/img-footer/fb.svg';
import instSvg from '../components/img-footer/inst.svg';
import footerImg from '../components/img-footer/logo.svg';
import wsSvg from '../components/img-footer/whatsapp.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="information-div">
          <img src={footerImg} alt="footerImg" />
          <ul className="address-list">
            <li className="address-item">
              <h3 className="address-item-title">Address</h3>
            </li>
            <li className="address-item">
              <p className="address-paragraph">
                Svobody str. 35 Kyiv <br /> Ukraine
              </p>
            </li>
          </ul>
          <div className="cotacts-div">
            <h3 className="contact-title">Contact us</h3>
            <ul className="contacts-list">
              <li className="contacts-item">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instSvg} alt="inst" className="social-media" />
                </a>
              </li>
              <li className="contacts-item">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={fbSvg} alt="facebook" className="social-media" />
                </a>
              </li>
              <li className="contacts-item">
                <a
                  href="https://www.whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={wsSvg} alt="whatsapp" className="social-media" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
