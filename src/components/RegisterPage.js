import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import '../PageLoginRegister.css';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [telefono, setTelefono] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validación de campos vacíos
    if (!nombre || !email || !password || !telefono) {
      setError('Todos los campos son obligatorios');
      return;
    }

    try {
      // Hacemos la solicitud POST al backend
      const response = await fetch('http://localhost:5000/api/crearUsuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, email, password, telefono }),
      });

      const data = await response.json();

      if (response.status === 201) {
        setSuccess('Usuario registrado correctamente');
        setTimeout(() => {
          // Redirige al login después de 2 segundos
          navigate('/login');
        }, 2000);
      } else {
        setError(data.mensaje || 'Hubo un error al registrar el usuario');
      }
    } catch (err) {
      setError('Hubo un error al registrar el usuario');
    }
  };

  return (
    <div className="container-form register">
      <div className="form-information">
        <div className="form-information-childs">
          <h2>Crear una Cuenta</h2>
          <p>o usa tu email para registrarte</p>
          <form className="form form-register" onSubmit={handleSubmit} noValidate>
            <div>
              <label>
                <i className="bx bx-user"></i>
                <input
                  type="text"
                  placeholder="Nombre Completo"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label>
                <i className="bx bx-envelope"></i>
                <input
                  type="email"
                  placeholder="Correo Electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label>
                <i className="bx bx-lock-alt"></i>
                <input
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label>
                <i className="bx bx-phone"></i>
                <input
                  type="text"
                  placeholder="Teléfono"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                />
              </label>
            </div>
            <input type="submit" value="Registrarse" />
          </form>
          {error && <div className="alerta-error">{error}</div>}
          {success && <div className="alerta-exito">{success}</div>}
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
