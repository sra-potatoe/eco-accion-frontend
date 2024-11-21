import React from 'react';
import '../index.css'; // Asegúrate de que este archivo contiene los estilos adecuados.

function ImpactSection() {
  return (
    <section className="impact-section">
      <div className="impact-container">
        <h2 className="section-title">La Emergencia de Bolivia</h2>
        <div className="impact-grid">
          <div className="impact-text">
            <p>
              En el 2024, Bolivia vivió uno de los peores episodios de incendios forestales en su historia. Millones de
              hectáreas de selva y bosque fueron arrasadas, dejando daños irreparables en nuestros ecosistemas y afectando
              la biodiversidad.
            </p>
            <div className="impact-stats">
              <div className="stat">
                <span className="stat-number">48</span>
                <span className="stat-label">libras de CO₂ absorbidas por árbol al año</span>
              </div>
              <div className="stat">
                <span className="stat-number">1M+</span>
                <span className="stat-label">hectáreas afectadas</span>
              </div>
            </div>
          </div>
          <div className="impact-visualization">
            <div className="before-after-container">
              <img 
                alt="Bosque amazónico antes de incendios, vegetación densa y verde"
                src="https://www.color-meanings.com/wp-content/uploads/2024/09/amazon-rainforest-aerial-view.jpeg"
                width="600"
                height="400"
              />
              <img 
                alt="Área forestal después de incendios, terreno árido"
                src="https://th.bing.com/th/id/R.52f3d24017821f69e04d11ea22b9135b?rik=psuC7RT4uX0lNw&pid=ImgRaw&r=0&sres=1&sresct=1"
                width="600"
                height="400"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImpactSection;
