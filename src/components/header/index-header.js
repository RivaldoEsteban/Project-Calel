import React from "react";
import "./style-header.css";

function Header() {
  return (
    <header className="header-container">
      <div className="wrapper">
        <div className="header-content">
          <img src="./images/logo.png" alt="logo de la página" />
          <nav className="navigation">
            <ul>
              <li>
                <a href="">particulares</a>
              </li>
              <li>
                <a href="">equipos</a>
              </li>
              <li>
                <a href="">producto</a>
              </li>
              <li>
                <a href="">precios</a>
              </li>
              <li>
                <a href="">recursos</a>
              </li>
            </ul>
          </nav>
          <div className="registro">
            <a href="">Iniciar sesión</a>
            <button>Regístrese</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
