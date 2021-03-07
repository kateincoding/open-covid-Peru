import React from "react";


function Selector(){
  return (
    <div className="selector_container">
      <h3>
        <strong>Casos por ubicación</strong>
      </h3>
      <h5>Ubicación</h5>

      <div className="provincia">
        <select name="Provincia">
          <option value="Lima">Lima</option>
          <option value="Arequipa">Arequipa</option>
          <option value="Iquitos">Iquitos</option>
        </select>
      </div>

      <div className="departamento">
        <select name="Departamento">
          <option value="Lima">Lima</option>
          <option value="Cañete">Cañete</option>
          <option value="Cerro_azul">Cerro Azul</option>
        </select>
      </div>

      <div className="distrito">
        <select name="Distrito">
          <option value="Lima">San Juan de Lurigancho</option>
          <option value="Arequipa">San Martín de Porres</option>
          <option value="Iquitos">La Molina</option>
          <option value="Iquitos">Cercado</option>
          <option value="Iquitos">Jesús María</option>
        </select>
      </div>
  </div>
  );
}


export default Selector;