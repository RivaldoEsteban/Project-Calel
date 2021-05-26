import React from "react";

function ScheduleMeetings() {
  return (
    <section className="scheduleMeetings">
      <h2>Programe reuniones sin tanto intercambio de correos electrónicos</h2>
      <p className="scheduleMeetings-txt">
        Calel simplifica la programación ofreciendo únicamente horarios que se
        adapten a su disponibilidad en todos sus calendarios.
      </p>
      <div className="calendly">
        <div className="calendly-features">
          <img src="./images/left.png" alt="" />
          <div>
            <h4>Reúnase de la forma que desee</h4>
            <p>
              Muestre disponibilidad en su horario solo los días y las horas que
              se adapten a usted. Cuando su invitado elija la hora de la
              reunión, se confirmará al instante
            </p>
          </div>
        </div>
        <div className="calendly-features">
          <img src="images/right.png" alt="" />
          <div>
            <h4>Calel lo coordina todo</h4>
            <p>
              Las reuniones se programan sin conflictos de calendario, los
              recordatorios se envían automáticamente y reprogramar supone una
              bocana de aire fresco para todos.
            </p>
          </div>
        </div>
      </div>
      <button>Utilizar Calendly</button>
    </section>
  );
}

export default ScheduleMeetings;
