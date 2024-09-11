import { useState, useEffect } from "react";
export default function Contacts({ reference, prenotaRef, start }) {
  const [showCont, setShowCont] = useState(false);
  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (
        scrollTop >
        reference.current.clientHeight + prenotaRef.current.clientHeight / 3
      ) {
        setShowCont(true);
      } else {
        setShowCont(false);
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
    <div className={`container-contacts  ${showCont ? "showCont" : ""}`}>
      <figure id="img-cont-prenota">
        <img
          className="figure-contacts"
          src="img/apparecchiare4.jpg"
          alt="sposa"
        ></img>
      </figure>
      <div className="script-contacts">
        <div className="contact-title">
          <h1>Contatti</h1>
          <img
            className="greca-title"
            src="https://sapori-incantati.vercel.app/images/dividers.png"
            alt=""
          ></img>
        </div>

        <p>
          Vieni a trovarci quando vuoi per assaporare le nostre specialità. Per
          ogni informazione o prenotazione, siamo sempre a tua disposizione.
        </p>
        <div className="tel-email">
          <ul>
            <li>
              <span>Tel:</span> +39 3281251994
            </li>
            <li>
              <span>Email:</span> ristorantesi@gmail.com
            </li>
          </ul>
        </div>
        <div className="orari">
          <h2>Orari</h2>
          <ul>
            <li>
              <span>Lunedì</span> 12.30 - 15
            </li>
            <li>
              <span>Martedì</span> 12.30 - 15 / 19.00 - 23.00
            </li>
            <li>
              <span>Mercoledì</span> 12.30 - 15 / 19.00 - 23.00
            </li>
            <li>
              <span>Giovedì</span> 12.30 - 15 / 19.00 - 23.00
            </li>
            <li>
              <span>Venerdì</span> 12.00 - 15 / 19.00 - 24.00
            </li>
            <li>
              <span>Sabato</span> 12.00 - 15 / 19.00 - 24.00
            </li>
          </ul>
        </div>
        <div className="diviso-due contacts-back">
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
      </div>
    </div>
  );
}
