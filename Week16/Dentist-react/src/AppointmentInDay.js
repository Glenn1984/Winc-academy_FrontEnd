import React from "react";

const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);

export default (
  {
    time,
    patient,
    dentist,
    assistant,
    dentistSick,
    handleRemoveAppointment,
    handleMoveAppointment
  }
) => (
    <li
      className="appointment"
      style={dentistSick ? { backgroundColor: "#FF0000" } : null}>
    <div className="time">{format_time(time)}</div>
      <div className="patient">
        Patiënt: {patient}
        <button
          onClick={() => handleRemoveAppointment(patient, time)}
        >Verwijder afspraak</button>
        <button
          onClick={() => handleMoveAppointment(patient, time)}
        >Pas afspraak aan</button>
      </div>
    <div className="dentist">Tandarts: {dentist}</div>
    <div className="assistant">Assistent: {assistant}</div>
  </li>
);
