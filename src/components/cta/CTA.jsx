import React, { useState } from 'react';
import axios from 'axios';
import logotipo from '../../assets/logotipo.svg'; // Asegúrate de que esta ruta sea correcta
import './cta.css';

const CTA = () => {
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
    const soloNumeros = numero.replace(/\s+/g, ''); // elimina espacios
    return /^\d{9}$/.test(soloNumeros); // exactamente 9 dígitos
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
    <div className="gpt3__cta">
      <div className="gpt3__cta-content">
        <p>Accede a las últimas tecnologas.</p>
        <h3>Regístrate ahora y empieza a explorar las posibilidades.</h3>
      </div>
      <div className="gpt3__cta-btn">
        <button type="button" onClick={() => setMostrarFormulario(true)}>Empezar</button>
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

export default CTA;
