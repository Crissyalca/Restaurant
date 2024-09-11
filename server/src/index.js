import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import session from "express-session";
import twilio from "twilio";
const accountSid = process.env.ACCOUNT;
const authToken = process.env.AUTHENTIC_TOKEN;
const fromUsaPhone = process.env.USA_PHONE;
const toItalianPhone = process.env.IT_PHONE;
const client = new twilio(accountSid, authToken);
const app = express();
const port = 3000;

// app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
const corsOptions = {
  origin: "http://localhost:3001",
  credentials: true,
};
app.use(cors(corsOptions));

app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: "mainsecret21",
    cookie: {
      secure: false,
    },
  })
);
import { reservation } from "./db.js";
app.post("/reservationData", async (req, res) => {
  let [checkReserv, output] = await reservation(
    req.body.data.nome,
    req.body.data.ospiti,
    req.body.data.telefono,
    req.body.data.email,
    req.body.data.data,
    req.body.data.ora,
    req.body.data.pasto
  );

  if (checkReserv) {
    client.messages
      .create({
        body: `Pre favore guarda la nuova prenotazione. Nome: ${req.body.data.nome},Telefono: ${req.body.data.telefono} Ospiti: ${req.body.data.ospiti}, Data: ${req.body.data.data}, Ora: ${req.body.data.ora}`,
        from: `whatsapp:${fromUsaPhone}`,
        to: `whatsapp:${toItalianPhone}`,
      })
      .then((message) => console.log("Messaggio inviato con ID:", message.sid))
      .catch((error) =>
        console.error("Errore nell'invio del messaggio:", error)
      );

    res
      .status(200)
      .json({ message: "Prenotazione avvenuta con successo", id: output });
  } else {
    console.log("risposta", output);
    res.status(400).json({ err: "server error", check: output });
  }
});

import { getGuestsForDate } from "./db.js";
app.get("/getReservationsByDate", async (req, res) => {
  const { date, meal } = req.query; // Estrarre la data dai parametri della query
  const [check, output] = await getGuestsForDate(date, meal);
  if (check) {
    res.status(200).json(output);
  } else {
    res.status(500).json({ message: "Errore nel recupero delle prenotazioni" });
  }
});

import { deleteOldReservation } from "./db.js";

setInterval(async () => {
  await deleteOldReservation();
}, 24 * 60 * 60 * 1000);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
