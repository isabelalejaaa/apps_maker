import React from 'react';
import logotipo from '../../assets/logotipo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">¿Estás listo para llevar tu negocio al éxito?</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Solicitar información</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={logotipo} alt="gpt3_logo" />
        <p>Apps Maker.<br /> Derechos Reservados.</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Enlaces</h4>
        <p>Linkndln</p>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>TikTok</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Empresa</h4>
        <p>Terminos y Condiciones</p>
        <p>Politicas</p>
        <p>Contacto</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Contáctanos</h4>
        <p>999999999</p>
        <p>085-132567</p>
        <p>info@appsmaker.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2025 AppsMaker. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
