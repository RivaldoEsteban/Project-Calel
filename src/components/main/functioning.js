import React from "react";
// import "main-style.css";

function FunctioningApp() {
  return (
    <section className="functioning-container">
      <p className="functioning-p">CÓMO FUNCIONA</p>
      <h2 className="functioning-title">Ver Celel en acción</h2>
      <img src="./images/calendly.png" alt="image calendly easy ahead" />
      <div className="functioning-features">
        <div className="feature believe">
          <h3>Cree sencillas reglas</h3>
          <p>
            Dígale a Calel cuáles son sus preferencias en cuanto a la
            disponibilidad y este hará el trabajao por usted.
          </p>
        </div>
        <div className="feature share">
          <h3>Comparta su enlace</h3>
          <p>
            Redirija a los invitados al elace de Calendly o intégrelo en sitios
            web.
          </p>
        </div>
        <div className="feature recive">
          <h3>Reciba reservas</h3>
          <p>Cuando se elige una hora, el evento se añade en su calendario.</p>
        </div>
      </div>
    </section>
  );
}

export default FunctioningApp;
