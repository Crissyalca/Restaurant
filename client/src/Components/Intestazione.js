export default function Heading({
  menuScroll,
  carouselScroll,
  reservationScroll,
  contactsScroll,
}) {
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="menu">
      <ul>
        {/* <li>
          <a href="main">Home</a>
        </li> */}
        <li>
          <a href="#menu" onClick={() => scrollToSection(menuScroll)}>
            Menu
          </a>
        </li>
        <li>
          {" "}
          <a
            href="#reservation"
            onClick={() => scrollToSection(reservationScroll)}
          >
            Prenota
          </a>{" "}
        </li>
        <li>
          <a href="#carousel" onClick={() => scrollToSection(carouselScroll)}>
            Gallery
          </a>
        </li>
        <li>
          <a href="#contacts" onClick={() => scrollToSection(contactsScroll)}>
            Contatti
          </a>
        </li>
      </ul>
      <h1>Al Creantum</h1>
    </div>
  );
}
