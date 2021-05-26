import React from "react";

function Advantage() {
  return (
    <section className="advantage-container">
      <div className="advantage-title">
        <h2>Dedique más tiempo a lo que hace mejor</h2>
        <p>
          Al eliminar los inconvenientes e interrupciones relacionados con la
          programación de reuniones, su día estará libre para lograr sus
          objetivos.
        </p>
      </div>
      <div className="work-flow">
        <div>
          <h5 className="sub-title">GESTIÓN DE FLUJOS DE TRABAJO</h5>
          <h3 className="title">Automatice recordatorios y seguimientos</h3>
          <p className="texto">
            Calel automatiza sus reuniones con flujos de trabajo y envía desde
            correos electrónicos de recordatorio hasta notas de agradecimiento,
            para que pueda centrarse en el trabajo que solo usted puede
            realizar. Es como tener un asistente, incluso si tiene un negocio
            unipersonal.
          </p>
        </div>
        <div>
          <img src="./images/automatiza.png" alt="" />
        </div>
      </div>
      <div className="efficient-calls">
        <div>
          <img src="./images/llamada.png" alt="" />
        </div>
        <div>
          <h5 className="sub-title">PROGRAMACIÓN BAJO DEMANDA</h5>
          <h3 className="title">
            Haga más contactos y reduzca las cancelaciones
          </h3>
          <p className="texto">
            Los clientes potenciales pueden programar reuniones con tan solo
            unos clics, siempre en el momento oportuno. Y se reducen las
            cancelaciones porque la reprogramación es fácil, rápida y según sus
            propias condiciones.
          </p>
        </div>
      </div>
      <div className="focues-calel">
        <div>
          <h5 className="sub-title">EL ENFOQUE CORTÉS</h5>
          <h3 className="title">
            Deleite a los invitados con una programación moderna
          </h3>
          <p className="texto">
            El tiempo es un bien preciado. Calel es una manera cortés de
            reservar reuniones y otras citas, porque programar con unos pocos
            clics ahorra el máximo de tiempo para todos.
          </p>
        </div>
        <div>
          <img src="./images/phone.png" alt="" />
        </div>
      </div>
      <div className="sales-representative">
        <img src="./images/person.png" alt="" />
        <div>
          <h5 className="sub-title">BITLY</h5>
          <p className="sales-representative-txt">
            Los representantes de desarrollo de ventas no solo acaban con todo
            un calendario lleno de clientes potenciales con los que hablar, sino
            que estos clientes potenciales asisten más a las reuniones.
          </p>
          <p className="person-name">Dave Rotholz</p>
          <div className="corona">
            <img src="./images/corona.png" alt="" />
          </div>
        </div>
      </div>
      <div className="free-trial">
        <div>
          <h2>Pruebe Calel gratis</h2>
          <p>
            Tras su prueba de 14 días de nuestro plan Profesional, disfrute de
            la versión gratuita de Calendly para siempre.
          </p>
          <a href="#">
            Para consultar sobre nuestros planes Enterprise, haga clic aquí.
          </a>
        </div>
        <img src="./images/registro.png" alt="" />
      </div>
    </section>
  );
}

export default Advantage;
