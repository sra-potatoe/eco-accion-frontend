import React from 'react';
import '../index.css';


function Projects({ projects }) {
  return (
    <section className="projects">
      <h2 className="section-title">Nuestros Proyectos</h2>
      <p className="section-subtitle">Cada proyecto tiene un impacto directo en el medio ambiente.</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card animate" key={index}>
            {/* Imagen del proyecto */}
            <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}>
              <img src={project.image} alt={`Descripción de la iniciativa de reforestación en ${project.location}`} width="600" height="400" />
            </div>
            <div className="project-info">
              <h3>{project.name}</h3>
              <p>{project.location}</p>
              <p className="project-impact">Cada árbol plantado aquí es una esperanza renovada para la biodiversidad local.</p>
              
              {/* Estadísticas del proyecto */}
              <div className="project-stats">
                <div className="stat-item">
                  <span className="stat-value">{project.trees.toLocaleString()}</span>
                  <span>Árboles por plantar</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">{project.co2}</span>
                  <span>Ton CO₂ a capturar</span>
                </div>
              </div>

              {/* Barra de progreso */}
              <div className="impact-indicator">
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${project.progress}%` }}></div>
                </div>
                <p className="progress-text">
                  <strong>{project.progress}%</strong>
                  <span> financiado ¡Ayúdanos a llegar al 100%!</span>
                </p>
              </div>
              
              {/* Botones */}
              <div className="button-group">
                <button className="nav-btn primary-btn">Sé un guardián del bosque</button>
                <button className="nav-btn secondary-btn">Conoce más</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
