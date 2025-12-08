import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Koble til MongoDB
mongoose.connect("mongodb+srv://nejskun_db_user:5rSdztxWUDcL7nnl@cluster0.aw9a50d.mongodb.net/zenharmony?retryWrites=true&w=majority");

// Booking-schema
const bookingSchema = new mongoose.Schema({
  date: Date,
  time: String,
  people: Number,
  name: String,
  email: String,
  phone: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

const Booking = mongoose.model("Booking", bookingSchema);

// POST /api/booking
app.post("/api/booking", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ success: true, booking });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// GET /api/booking
app.get("/api/booking", async (req, res) => {
  const bookings = await Booking.find().sort({ createdAt: -1 });
  res.json(bookings);
});

app.listen(5000, "0.0.0.0", () => console.log("Backend kjører på http://localhost:5000"));