import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Nuestros proyectos</h4>
      <h1 className="gradient__text">Explora nuestros proyectos <br /> y empieza esta aventura</h1>
      <p>Cada trabajo en nuestro portafolio es la prueba de lo que podemos lograr para ti. Innovación, calidad y resultados tangibles: así es como transformamos ideas en soluciones. No eliges, no programas, solo exploras y te convences.

¿Listo para llevar tu proyecto al siguiente nivel? Mira lo que hemos creado para otros y déjanos hacerlo por ti. La excelencia no es casualidad, es nuestro estándar. ¡Explora nuestros proyectos y hablemos pronto!"</p>
      <a href="https://www.figma.com/proto/mYvlw6V2IJryOdj8wQTreZ/Proyecto-Frameworks-Ingles?node-id=154-99&t=ag5GjKemSACGFWK1-0&scaling=scale-down&content-scaling=fixed&page-id=62%3A234&starting-point-node-id=154%3A99&show-proto-sidebar=1" className="ver-proyectos-link">Ver proyectos</a>
    </div>
  </div>
);

export default Possibility;
