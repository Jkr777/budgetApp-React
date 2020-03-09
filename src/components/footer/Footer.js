import React from 'react';
import Facebook from '../../img/facebook.svg';
import Twitter from '../../img/twitter.svg';

const Footer = () => (
  <footer className="footer-container">
    <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer"><img className="footer-container__icon" src={Facebook} alt="facebook"/></a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img className="footer-container__icon" src={Twitter} alt="twitter"/></a>
  </footer>
);

export default Footer;