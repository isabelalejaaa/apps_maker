import React from 'react';
import people from '../../assets/people.png';
import head1 from '../../assets/head1.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Es hora de impulsar <br></br>tu negocio <br></br>digitalmente. <br></br> </h1>
      <p>La solución digital que convierte visitas en clientes, fortalece tu marca y te diferencia de la competencia. Da el salto ahora y lleva tu negocio al siguiente nivel. <br></br>No te quedes atrás, impulsa tu marca ahora. </p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Empezar</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 personas han solictado información.</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={head1} />
    </div>
  </div>
);

export default Header;
