import React from "react";
import "./footer-style.css";
function Footer() {
  return (
    <footer className="footer-container">
      <div className="wrapper">
        <div className="footer-content">
          <img src="./images/logo.png" alt="" />
          <div className="footer-enlases">
            <h3>Acerca de</h3>
            <ul>
              <li>
                <a href="">Acerca de Calendry</a>
              </li>
              <li>
                <a href="">Póngase en contacto con el equipo de ventas</a>
              </li>
              <li>
                <a href="">Vacantes</a>
              </li>
              <li>
                <a href="">Seguridad</a>
              </li>
              <li>
                <a href="">Privacidad</a>
              </li>
              <li>
                <a href="">Términos</a>
              </li>
            </ul>
          </div>
          <div className="footer-enlases">
            <h3>Asistencia</h3>
            <ul>
              <li>
                <a href="">Centro de ayuda</a>
              </li>
              <li>
                <a href="">Tutoriales en vídeo</a>
              </li>
            </ul>
          </div>
          <div className="footer-enlases">
            <h3>Desarrolladores</h3>
            <ul>
              <li>
                <a href="">Herramientas de desarrollo</a>
              </li>
            </ul>
          </div>
          <div className="footer-enlases">
            <h3>Soluciones</h3>
            <ul>
              <li>
                <a href="">Éxito de clientes</a>
              </li>
              <li>
                <a href="">Ventas</a>
              </li>
              <li>
                <a href="">Contratación</a>
              </li>
              <li>
                <a href="">Educación</a>
              </li>
              <li>
                <a href="">Particulares</a>
              </li>
              <li>
                <a href="">Términos</a>
              </li>
            </ul>
          </div>
          <div className="footer-enlases">
            <h3>Funciones populares</h3>
            <ul>
              <li>
                <a href="">Éxito de clientes</a>
              </li>
              <li>
                <a href="">Ventas</a>
              </li>
              <li>
                <a href="">Vacantes</a>
              </li>
              <li>
                <a href="">Contratación</a>
              </li>
              <li>
                <a href="">Educación</a>
              </li>
              <li>
                <a href="">Particulares</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
