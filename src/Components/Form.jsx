import React, { useState } from "react";
import '../index.css'; // Importa los estilos desde index.css

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length > 5 && /\S+@\S+\.\S+/.test(email)) {
      setSuccess(`Gracias ${name}, te contactaremos cuando antes vía mail`);
      setError('');
    } else {
      setError('Por favor verifique su información nuevamente');
      setSuccess('');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label className="form-label">Nombre completo:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />
        </div>
        <button type="submit" className="form-button">Enviar</button>
      </form>
      {error && <p className="form-error">{error}</p>}
      {success && <p className="form-success">{success}</p>}
    </div>
  );
};

export default Form;
