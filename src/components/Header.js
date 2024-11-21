import React from 'react';
import { Link } from 'react-router-dom'; // Usamos Link para la navegación

function Header() {
  return (
    <header>
      <div className="nav-container">
        <div className="logo">
          <img src="https://via.placeholder.com/50" alt="Logo" />
          <span>Eco Acción</span>
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-link">Explorar proyectos</Link>
          <Link to="/proyectos" className="nav-link">Cómo funciona</Link>
        </div>
        {/* Botón de inicio de sesión */}
        <Link to="/login">
          <button className="nav-btn secondary-btn">Iniciar Sesión</button>
        </Link>
        {/* Botón de registro (Únete) */}
        <Link to="/register">
          <button className="nav-btn primary-btn">Únete</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
