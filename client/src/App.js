import "./App.css";
import Carousel from "./Components/Carousel.js";
import Contacts from "./Components/Contatti.js";
import { useRef } from "react";
import Reservation from "./Components/Reservation.js";
import Menu from "./Components/Menu";
import Heading from "./Components/Intestazione.js";
function App() {
  const elementRef = useRef(null);
  const prenotaRef = useRef(null);
  const menuScroll = useRef(null);
  const carouselScroll = useRef(null);
  const reservationScroll = useRef(null);
  const contactsScroll = useRef(null);
  const startMenuScroll = useRef(null);

  return (
    <div className="App">
      <div ref={startMenuScroll}>
        <div ref={elementRef}>
          <Heading
            menuScroll={menuScroll}
            carouselScroll={carouselScroll}
            reservationScroll={reservationScroll}
            contactsScroll={contactsScroll}
          ></Heading>
          <div ref={menuScroll}>
            <Menu></Menu>
          </div>
          <div ref={carouselScroll}>
            <Carousel></Carousel>
          </div>
        </div>
      </div>
      <div className="reserv-contact ress" ref={reservationScroll}>
        <Reservation
          prenotaRef={prenotaRef}
          reference={elementRef}
          start={startMenuScroll}
        ></Reservation>
      </div>
      <div className="reserv-contact contt" ref={contactsScroll}>
        <Contacts
          reference={elementRef}
          prenotaRef={prenotaRef}
          start={startMenuScroll}
        ></Contacts>
      </div>

      <div className="pie-di-pagina">
        <div className="place">
          <p>Ristorante Al Creantum</p>
          <p>Via Verdi,15 Monza (MB)</p>
          <p id="last-p">Seguici sui social:</p>
          <div className="social">
            <a href="https://www.google.com/maps/place/L'Albero+dei+Gelati/@45.5892993,9.2595999,17z/data=!4m6!3m5!1s0x4786b97232284dc7:0xd1250b8be471e930!8m2!3d45.5893038!4d9.261841!16s%2Fg%2F1q64fd9p0?entry=ttu">
              <img id="google-map" src="img/pos.png" alt="dove"></img>
            </a>
            <img src="img/fb.png" alt="fb"></img>
            <img src="img/insta2.png" alt="insta"></img>
            <img src="img/tripadv1.png" alt="tripadv"></img>
          </div>
          {/* <div className="social-container"> */}
          {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="30 0 50 50"
            >
              <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
            </svg> */}
          {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="15 0 42 32"
            >
              <path d="M 16 6.59375 C 11.746094 6.59375 7.777344 7.734375 5.0625 9.5625 L 0 9.5625 C 0.828125 10.53125 1.441406 11.851563 1.59375 12.75 C 0.636719 14.0625 0.0625 15.6875 0.0625 17.4375 C 0.0625 21.835938 3.632813 25.40625 8.03125 25.40625 C 10.527344 25.40625 12.757813 24.234375 14.21875 22.4375 C 14.8125 23.132813 15.800781 24.53125 16 24.9375 C 16 24.9375 17.136719 23.257813 17.78125 22.46875 C 19.242188 24.261719 21.476563 25.40625 23.96875 25.40625 C 28.367188 25.40625 31.9375 21.835938 31.9375 17.4375 C 31.9375 15.691406 31.363281 14.0625 30.40625 12.75 C 30.558594 11.851563 31.171875 10.53125 32 9.5625 L 26.6875 9.5625 C 23.972656 7.734375 20.25 6.59375 16 6.59375 Z M 16 7.9375 C 18.851563 7.9375 21.4375 8.472656 23.71875 9.46875 C 19.4375 9.601563 16 13.121094 16 17.4375 C 16 13.042969 12.457031 9.476563 8.0625 9.46875 C 10.339844 8.476563 13.152344 7.9375 16 7.9375 Z M 8.03125 11 C 11.574219 11 14.4375 13.898438 14.4375 17.4375 C 14.4375 20.980469 11.570313 23.84375 8.03125 23.84375 C 4.488281 23.84375 1.625 20.980469 1.625 17.4375 C 1.625 13.898438 4.488281 11 8.03125 11 Z M 23.96875 11 C 27.507813 11 30.375 13.898438 30.375 17.4375 C 30.375 20.980469 27.507813 23.84375 23.96875 23.84375 C 20.425781 23.84375 17.5625 20.980469 17.5625 17.4375 C 17.5625 13.898438 20.425781 11 23.96875 11 Z M 7.9375 13.53125 C 5.800781 13.53125 4.0625 15.269531 4.0625 17.40625 C 4.0625 19.542969 5.800781 21.28125 7.9375 21.28125 C 10.074219 21.28125 11.8125 19.542969 11.8125 17.40625 C 11.8125 15.269531 10.074219 13.53125 7.9375 13.53125 Z M 23.96875 13.53125 C 21.832031 13.53125 20.09375 15.269531 20.09375 17.40625 C 20.09375 19.542969 21.832031 21.25 23.96875 21.25 C 26.105469 21.25 27.84375 19.542969 27.84375 17.40625 C 27.84375 15.269531 26.105469 13.53125 23.96875 13.53125 Z M 7.9375 14.71875 C 9.417969 14.71875 10.625 15.925781 10.625 17.40625 C 10.625 18.886719 9.417969 20.09375 7.9375 20.09375 C 6.457031 20.09375 5.25 18.886719 5.25 17.40625 C 5.25 15.925781 6.457031 14.71875 7.9375 14.71875 Z M 23.96875 14.71875 C 25.449219 14.71875 26.65625 15.925781 26.65625 17.40625 C 26.65625 18.886719 25.449219 20.0625 23.96875 20.0625 C 22.488281 20.0625 21.28125 18.886719 21.28125 17.40625 C 21.28125 15.925781 22.488281 14.71875 23.96875 14.71875 Z M 7.75 16.09375 C 7.03125 16.09375 6.4375 16.6875 6.4375 17.40625 C 6.4375 18.125 7.03125 18.71875 7.75 18.71875 C 8.46875 18.71875 9.03125 18.125 9.03125 17.40625 C 9.03125 16.6875 8.46875 16.09375 7.75 16.09375 Z M 23.75 16.09375 C 23.03125 16.09375 22.46875 16.6875 22.46875 17.40625 C 22.46875 18.125 23.03125 18.6875 23.75 18.6875 C 24.46875 18.6875 25.0625 18.125 25.0625 17.40625 C 25.0625 16.6875 24.46875 16.09375 23.75 16.09375 Z"></path>
            </svg>{" "} */}
          {/* </div> */}
        </div>
        <img className="logo-pdp" src="img/alCreantum2.png" alt="logo"></img>
      </div>
    </div>
  );
}

export default App;
