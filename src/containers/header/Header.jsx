import React, { useState } from 'react';
import people from '../../assets/people.png';
import head1 from '../../assets/head1.png';
import logotipo from '../../assets/logotipo.svg'; // asegúrate de que esté la imagen
import './header.css';
import axios from 'axios';

const Header = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [correoTemporal, setCorreoTemporal] = useState('');
  const [formData, setFormData] = useState({
    nombre: '',
    numero: '',
    correo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'correo') setCorreoTemporal(value);
  };

  const esNumeroValido = (numero) => /^\d{9}$/.test(numero.replace(/\s+/g, ''));
  const esCorreoValido = (correo) => /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(correo);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!esNumeroValido(formData.numero)) {
      alert('❌ El número debe tener exactamente 9 dígitos.');
      return;
    }

    if (!esCorreoValido(formData.correo)) {
      alert('❌ El correo debe ser válido (ej: usuario@dominio.com).');
      return;
    }

    try {
      await axios.post('http://localhost:8000/api/registro/', formData);
      alert('✅ Datos enviados correctamente');
      setFormData({ nombre: '', numero: '', correo: '' });
      setMostrarFormulario(false);
      setCorreoTemporal('');
    } catch (error) {
      console.error('❌ Error al enviar los datos:', error);
      alert('Ocurrió un error');
    }
  };

  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Es hora de impulsar <br />tu negocio <br />digitalmente.</h1>
        <p>
          La solución digital que convierte visitas en clientes, fortalece tu marca y te diferencia de la competencia.
          Da el salto ahora y lleva tu negocio al siguiente nivel. <br />
          No te quedes atrás, impulsa tu marca ahora.
        </p>

        <div className="gpt3__header-content__input">
          <input
            type="email"
            placeholder="Tu correo electrónico"
            value={correoTemporal}
            onChange={(e) => {
              setCorreoTemporal(e.target.value);
              setFormData({ ...formData, correo: e.target.value });
            }}
          />
          <button type="button" onClick={() => setMostrarFormulario(true)}>Empezar</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} />
          <p>1,600 personas han solicitado información.</p>
        </div>
      </div>

      <div className="gpt3__header-image">
        <img src={head1} />
      </div>

      {mostrarFormulario && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-logo">
              <img src={logotipo} alt="Logotipo" />
            </div>
            <button className="modal-close" onClick={() => setMostrarFormulario(false)}>✕</button>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="numero"
                placeholder="Teléfono"
                value={formData.numero}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="correo"
                placeholder="Correo"
                value={formData.correo}
                onChange={handleChange}
                required
              />
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
