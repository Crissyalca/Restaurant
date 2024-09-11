export default function Menu() {
  return (
    <div>
      <div className="script-menu">
        <div className="contact-title">
          <h1>Il nostro menù</h1>
          <img
            className="greca-title"
            src="https://sapori-incantati.vercel.app/images/dividers.png"
            alt=""
          ></img>
        </div>

        <div className="container-menu">
          <div className="container-antipasti">
            <h3>Antipasti</h3>
            <div className="row-menu">
              <span>Sauté di cozze e vongole veraci alla marinara </span>
              <span>17€</span>
            </div>
            <div className="row-menu">
              <span>
                Tartare di tonno con avocado, salsa ponzu e chips di taro
              </span>
              <span>20€</span>
            </div>
            <div className="row-menu">
              <span>
                Cannolo croccante ripieno di ricotta di bufala, pomodorini
                confit e basilico
              </span>
              <span>15€</span>
            </div>
            <div className="row-menu">
              <span>
                Alici del Mar Cantabrico Selección PREMIUM con burrata e
                pomodorini confit 12, 13
              </span>
              <span>17€</span>
            </div>
          </div>
          <div className="container-primi">
            <h3>Primi piatti</h3>
            <div className="row-menu">
              <span>Linguine con astice, pomodorini e basilico</span>
              <span>25€</span>
            </div>
            <div className="row-menu">
              <span>
                Scialatielli di pasta fresca con granchio, zucchine e menta
              </span>
              <span>20€</span>
            </div>
            <div className="row-menu">
              <span>
                Ravioli neri ripieni di tonno al profumo di lime, spadellati con
                seppie su bisque di crostacei
              </span>
              <span>18€</span>
            </div>
            <div className="row-menu">
              <span>
                Tagliolini ai tuorli d’uovo con salsiccia, tartufo nero estivo e
                crema di parmigiano
              </span>
              <span>19€</span>
            </div>
          </div>
          <div className="container-secondi">
            <h3>Secondi piatti</h3>
            <div className="row-menu">
              <span>
                Pescato del giorno cotto a piacere da richiedere al personale
              </span>
              <span>17€</span>
            </div>
            <div className="row-menu">
              <span>
                Frittura di calamari o mista con chips di zucchine e patate
              </span>
              <span>23€</span>
            </div>
            <div className="row-menu">
              <span>
                Calamari ripieni di caprino e code di gamberini alla griglia su
                carpaccio di pomodori del Vesuvio e battuta di olive Kalamata
              </span>
              <span>25€</span>
            </div>
            <div className="row-menu">
              <span>
                Costata di scottona Bavarese servita con verdure alla griglia
              </span>
              <span>17€</span>
            </div>
          </div>
          <div className="container-dolci">
            <h3>Dolci</h3>
            <div className="row-menu">
              <span>Millefoglie con gelato alla crema</span>
              <span>7€</span>
            </div>
            <div className="row-menu">
              <span>
                Crostata scomposta al limone, pistacchio e fragole fresche
              </span>
              <span>8€</span>
            </div>
            <div className="row-menu">
              <span>Tortino con cuore morbido al cioccolato fondente</span>
              <span>8€</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
