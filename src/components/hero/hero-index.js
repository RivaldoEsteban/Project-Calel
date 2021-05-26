import React from "react";
import "./style.css";
function Hero() {
  return (
    <section className="hero-container" aria-label="hero">
      <div className="wrapper">
        <div className="hero-content">
          <div className="hero-description">
            <h1 className="hero-title">
              Programación fácil con <b> anticipación</b>
            </h1>
            <p className="hero-txt">
              Calel es su centro de programación de reuniones de manera
              profesional y eficiente y elimina el problema del intercambio de
              correos electrónicos para que pueda dedicar más tiempo a su
              trabajo.
            </p>
            <form className="hero-form" aria-label="formulario">
              <input type="email" placeholder="ingrese su email" />
              <button>Registrese</button>
            </form>
          </div>
          <div className="hero-img">
            <img
              src="./images/hero-img.png"
              alt="imagen computador en el hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
