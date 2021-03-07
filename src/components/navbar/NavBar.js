import React from "react";

function NavBar(){
  return (
    <div>
    <div className="logo">
      <nav>
        <a className="navbar-brand">
          <img src="https://storage.googleapis.com/opencovid-peru-static/home/img/virus_icon.svg" width="40" height="40" class="logo" alt="" loading="lazy"></img>
        </a>
        <div className="logo">OpenCovid - Perú</div> 
        <ul className="nav-links">
          <li><a >Inicio</a></li>
          <li><a>Estadísticas</a></li>
          <li><a>Recursos</a></li>
          <li><a>Nosotros</a></li>
        </ul>
        <i className="fas fa-bars menu fa-2x"></i>
      </nav>
      
    </div>
  </div>
  );
}


export default NavBar;