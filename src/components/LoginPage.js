import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para redirección
import axios from 'axios';
import '../PageLoginRegister.css'; // Asegúrate de incluir los estilos necesarios.

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });

      if (response.status === 200) {
        const { token, nombre } = response.data;

        setSuccess(`Bienvenido, ${nombre}`);
        setUserName(nombre);


        localStorage.setItem('token', token);

        // Redirige después de 2 segundos
        setTimeout(() => {
          navigate('/eco-accion'); // Cambia '/principal' por la ruta de tu pantalla principal
        }, 2000);
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.mensaje || 'Hubo un error al iniciar sesión');
    }
  };

  return (
    <div className="container-form login">
      <div className="information">
        <div className="info-childs">
          <h2>¡¡Bienvenido nuevamente!!</h2>
          <p>Para unirte a nuestra comunidad por favor Inicia Sesión con tus datos</p>
          <input type="button" value="Registrarse" id="sign-up" />
        </div>
      </div>
      <div className="form-information">
        <div className="form-information-childs">
          <h2>Iniciar Sesión</h2>
          <div className="icons">
            <i className="bx bxl-google"></i>
            <i className="bx bxl-github"></i>
            <i className="bx bxl-linkedin"></i>
          </div>
          <p>o Iniciar Sesión con una cuenta</p>
          <form className="form form-login" onSubmit={handleSubmit} noValidate>
            <div>
              <label>
                <i className="bx bx-envelope"></i>
                <input
                  type="email"
                  placeholder="Correo Electrónico"
                  name="userEmail"
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
                  name="userPassword"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>
            <input type="submit" value="Iniciar Sesión" />
            {error && <div className="alerta-error">{error}</div>}
            {success && <div className="alerta-exito">{success}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
