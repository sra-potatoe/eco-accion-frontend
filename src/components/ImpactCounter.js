import React from "react";
import '../index.css';// Si tienes estilos personalizados

function ImpactCounter({ totalTrees }) {
  return (
    <div className="impact-counter">
      <span>Árboles Plantados</span>
      <span className="counter-value">{totalTrees.toLocaleString()}</span>
    </div>
  );
}

export default ImpactCounter;
