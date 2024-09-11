import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";
import "dotenv/config";
import moment from "moment";

const uri = process.env.MONGODB_CONNECTION_STRING;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,

    strict: true,
    deprecationErrors: true,
  },
});
export async function reservation(
  name,
  guests,
  phone,
  email,
  date,
  hour,
  meal
) {
  try {
    await connect();
    const res = await client
      .db("Restaurant")
      .collection("reservations")
      .insertOne({ name, guests, phone, email, date, hour, meal });
    return [true, res.insertedId];
  } catch (err) {
    return [false, err];
  } finally {
    await close();
  }
}
export async function connect() {
  await client.connect();
}
export async function close() {
  await client.close();
}
export async function deleteOldReservation() {
  try {
    await connect();

    // Calcola la data di un giorno fa

    const oneDayAgo = moment().subtract(1, "days").format("YYYY-MM-DD");

    const result = await client
      .db("Restaurant")
      .collection("reservations")
      .deleteMany({ date: { $lt: oneDayAgo } }); // Elimina i documenti con `createdAt` più vecchi di un giorno

    return [true, result.deletedCount];
  } catch (err) {
    return [false, err];
  } finally {
    await close();
  }
}

export async function getGuestsForDate(date, meal) {
  try {
    await connect();
    const reservations = await client
      .db("Restaurant")
      .collection("reservations")
      .find({ date: date, meal: meal })
      .toArray();
    return [true, reservations];
  } catch (err) {
    return [false, err];
  } finally {
    await close();
  }
}
