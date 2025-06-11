import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Sobre Nosotros" text="Somos una empresa especializada en brindar soluciones tecnológicas integrales para emprendimientos y negocios que buscan digitalizar sus operaciones. Nuestro equipo de expertos desarrolla aplicaciones móviles y páginas web personalizadas que se adaptan a las necesidades específicas de cada cliente." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Las posibilidades estan más allá de tu imaginación.</h1>
      <p>Explora nuestra proyectos</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="E-Commerce" text="Vende de manera fácil, segura y efectiva con una experiencia de compra optimizada para tus clientes." />
      <Feature title="Diseño UX/UI" text="Crea una web atractiva y funcional que brinde una experiencia única a tus clientes. Con un diseño intuitivo, tu negocio destacará y cautivará desde el primer vistazo." />
      <Feature title="Desarollo Web" text="Nos aseguramos de que cada línea de código sea eficiente y optimizada, creando soluciones personalizadas para que tu web funcione a la perfección con una experiencia fluida y segura." />
    </div>
  </div>
);

export default WhatGPT3;
