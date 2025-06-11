import React, { useState } from 'react';
import axios from 'axios';
import logotipo from '../../assets/logotipo.svg';
import './footer.css';

const Footer = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    numero: '',
    correo: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const esNumeroValido = (numero) => {
    const soloNumeros = numero.replace(/\s+/g, '');
    return /^\d{9}$/.test(soloNumeros);
  };

  const esCorreoValido = (correo) => {
    return /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(correo);
  };

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
    } catch (error) {
      console.error('❌ Error al enviar los datos:', error);
      alert('Ocurrió un error');
    }
  };

  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">¿Estás listo para llevar tu negocio al éxito?</h1>
      </div>

      <div className="gpt3__footer-btn" onClick={() => setMostrarFormulario(true)}>
        <p>Solicitar información</p>
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
          <p>Términos y Condiciones</p>
          <p>Políticas</p>
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
};

export default Footer;
