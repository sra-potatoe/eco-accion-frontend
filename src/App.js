import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ImpactSection from './components/ImpactSection';
import Projects from './components/Projects';
import ImpactCounter from './components/ImpactCounter';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import './index.css';

function App() {
  // Datos de los proyectos
  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09',
      name: 'Bosque Andino',
      location: 'Cusco, Perú',
      trees: 12500,
      co2: 250,
      progress: 75,
    },
    {
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09',
      name: 'Bosque Verde',
      location: 'Santiago, Chile',
      trees: 3000,
      co2: 50,
      progress: 60,
    },
    {
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09',
      name: 'Bosque Nativo',
      location: 'Santa Cruz, Bolivia',
      trees: 2000,
      co2: 40,
      progress: 80,
    },
  ];

  const totalTrees = projects.reduce((total, project) => total + project.trees, 0);

  return (
    <Router>
      <Header />
      <Routes>
        {/* Redirección predeterminada */}
        <Route path="/" element={<Navigate to="/eco-accion" />} />

        {/* Ruta principal */}
        <Route
          path="/eco-accion"
          element={
            <>
              <Hero />
              <ImpactSection />
              <ImpactCounter totalTrees={totalTrees} />
              <Projects projects={projects} />
              <ImpactSection />
            </>
          }
        />

        {/* Ruta de inicio de sesión */}
        <Route path="/login" element={<LoginPage />} />

        {/* Ruta de registro */}
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
