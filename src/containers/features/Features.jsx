import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Tu tienda online al siguiente nivel',
    text: 'Gracias a nuestra tecnología avanzada y diseño intuitivo, tu tienda online se transforma en una plataforma moderna, eficiente y competitiva en el mercado digital actual.',
  },
  {
    title: 'El diseño que tu negocio merece',
    text: 'Con interfaces personalizadas y visualmente atractivas, creamos diseños únicos que reflejan la identidad de tu marca y mejoran la experiencia del cliente.',
  },
  {
    title: 'Seguridad  en cada línea de código',
    text: 'Protegemos tu negocio y los datos de tus clientes con sistemas de seguridad avanzados, garantizando confianza, cumplimiento legal y protección ante amenazas digitales.',
  },
  {
    title: 'Mayor volumen de clientes',
    text: 'Nuestras soluciones digitales abren tu negocio a nuevos mercados y canales de venta, aumentando tu visibilidad y atrayendo a más clientes de forma constante y sostenible.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">El futuro es la tecnologia. <br></br> Empieza el futuro hoy y hazlo realidad.</h1>
      <p>Tu web ideal a solo unos clicks.</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
