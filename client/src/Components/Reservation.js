import { useState, useEffect, useMemo } from "react";
import moment from "moment";
import { validationEmail } from "../functions/validationEmail.js";

export default function Reservation({ reference, prenotaRef, start }) {
  const [formData, setFormData] = useState({
    nome: "",
    telefono: "",
    email: "",
    data: "",
    ora: "",
    pasto: "",
    ospiti: "",
  });
  const [updateToday, setUpdateToday] = useState(true);
  const [showRes, setShowRes] = useState(false);
  const [verifyReservation, setVerifyReservation] = useState("");
  function handleChange(e) {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  async function checkingReservationGuests(date, guests, meal) {
    let res = await fetch(
      `http://localhost:3000/getReservationsByDate?date=${date}&meal=${meal}`
    );
    let data = await res.json();

    let guestSum = 0;
    for (let i = 0; i < data.length; i++) {
      guestSum = parseInt(data[i].guests, 10) + guestSum;
    }
    guestSum = guestSum + parseInt(guests, 10);

    return guestSum <= 40;
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (!validationEmail(formData.email)) {
      setVerifyReservation("Inserire un'email valida");
      return;
    }

    formData.ora <= "14:00"
      ? (formData.pasto = "pranzo")
      : (formData.pasto = "cena");
    const checkGuests = await checkingReservationGuests(
      formData.data,
      formData.ospiti,
      formData.pasto
    );
    if (
      formData.data > today ||
      (formData.data === today && formData.ora >= currentTime)
    ) {
      if (checkGuests) {
        let res = await fetch("http://localhost:3000/reservationData", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: formData }),
        });

        // let json = await res.json();
        if (res.status === 200) {
          setVerifyReservation(
            "Prenotazione avvenuta con successo. Ti aspettiamo!"
          );
        } else {
          setVerifyReservation("Errore interno, ti invitiamo a riprovare");
        }
      } else {
        setVerifyReservation(
          "Ti invitiamo a chiamare il ristorante, cercheremo di accontentarti"
        );
      }
    } else {
      setVerifyReservation("L'orario e/o la data scelti non sono prenotabili");
    }
  }
  const today = useMemo(() => moment().format("YYYY-MM-DD"), [updateToday]);

  // Calcola l'ora attuale usando moment.js
  const currentTime = useMemo(() => moment().format("HH:mm"), []);

  // Lista di opzioni per l'orario
  const allOptions = [
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:30",
    "14:00",
    "18:30",
    "19:00",
    "19:30",
    "20:30",
    "21:30",
    "22:00",
  ];

  // Filtra le opzioni in base all'ora attuale
  const filteredOptions = useMemo(() => {
    if (today === formData.data) {
      return allOptions.filter((option) => option > currentTime);
    } else {
      return allOptions;
    }
  }, [currentTime, today, formData.data]);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > (reference.current.clientHeight * 3) / 4) {
        setShowRes(true);
      } else {
        setShowRes(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`form-container ${showRes ? "showPren" : ""}`}
      ref={prenotaRef}
    >
      <form onSubmit={handleSubmit}>
        <div className="script-prenota">
          <h1>Prenota</h1>
          <img
            className="greca-title"
            src="https://sapori-incantati.vercel.app/images/dividers.png"
            alt=""
          ></img>
        </div>
        <h4 id="description-reserv">
          Prenota il tuo tavolo e goditi la serata, preparati a vivere
          un'esperienza extrasensoriale.<br></br> Saremo felici di accoglierti
          nel nostro ristorante.
        </h4>
        <div className="reservation-form">
          <div className="diviso-due">
            <div class>
              <label>Nome </label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
              ></input>
            </div>
            <div>
              <label>Ospiti</label>
              <input
                type="number"
                min={1}
                max={20}
                name="ospiti"
                value={formData.ospiti}
                onChange={handleChange}
                required
              ></input>
            </div>
          </div>
          <div className="diviso-due">
            <div>
              <label>Telefono</label>
              <input
                type="text"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
              ></input>
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => {
                  if (validationEmail(e.target.value)) {
                    setVerifyReservation("");
                    handleChange(e);
                  } else {
                    handleChange(e);
                    setVerifyReservation("email non valida");
                  }
                }}
                required
              ></input>
            </div>
          </div>

          <div className="diviso-due">
            <div>
              <label>Data</label>
              <input
                type="date"
                name="data"
                value={formData.data}
                min={today}
                onChange={handleChange}
                onClick={() => {
                  setUpdateToday(!updateToday);
                }}
                required
              ></input>
            </div>
            <div>
              <label>Orario</label>
              <select
                name="ora"
                value={formData.ora}
                onChange={handleChange}
                required
              >
                {((filteredOptions.filter((option) => option <= "14:00")
                  .length > 0 &&
                  today === formData.data) ||
                  today !== formData.data) && (
                  <optgroup label="Pranzo/Brunch">
                    <option value="">Seleziona</option>
                    {filteredOptions
                      .filter((option) => option <= "14:00")
                      .map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                  </optgroup>
                )}
                <optgroup label="Cena">
                  {filteredOptions
                    .filter((option) => option > "14:00")
                    .map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                </optgroup>
                {/* <option>11:00</option>
                <option>11:30</option>
                <option>12:00</option>
                <option>12:30</option>
                <option>13:30</option>
                <optgroup label="Cena">Cena</optgroup>
                <option>18:30</option>
                <option>19:00</option>
                <option>19:30</option>
                <option>20:30</option>
                <option>21:30</option>
                <option>22:00</option> */}
              </select>
            </div>
          </div>
          <div className="diviso-due prenota">
            <div></div>
            <div>
              <div></div>
              <button type="submit">Prenota</button>
            </div>
          </div>
          <div className="message">
            {" "}
            {verifyReservation && <p>{verifyReservation}</p>}
          </div>
        </div>
        <div className="diviso-due prenota">
          <div></div>
          <div>
            <div></div>
            <a
              className="back"
              href="#start"
              onClick={() => scrollToSection(start)}
            >
              Back
            </a>
          </div>
        </div>
      </form>
      <figure id="img-cont-prenota">
        <img
          className="figure-contacts"
          src="img/la_terrazza.webp"
          alt="restaurant"
        ></img>
      </figure>
    </div>
  );
}
