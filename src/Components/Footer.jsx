import React, { useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';
import '../index.css'; // Importa los estilos desde index.css

const Footer = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <footer className='footer'>
      <div className="footer-red">
        VOTAR PARA DH
      </div>
      <div className="footer-content">
        <div className="footer-left">
          <p>Powered by</p>
          <img src="/images/DH.png" alt='DH-logo' className="footer-logo" />
        </div>
        <div className="footer-right">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/ico-facebook.png" alt="Facebook" className="social-icon" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/ico-instagram.png" alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/ico-tiktok.png" alt="TikTok" className="social-icon" />
          </a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/ico-whatsapp.png" alt="WhatsApp" className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
