/* eslint-env node */
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Stripe from "stripe";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Koble til MongoDB
// eslint-disable-next-line no-undef
mongoose.connect(process.env.MONGODB_URI);
// eslint-disable-next-line no-undef
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

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

app.post("/api/payment", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [{
        price_data: {
          currency: "nok",
          product_data: { name: "Spa booking" },
          unit_amount: req.body.amount * 100,
        },
        quantity: 1,
      }],
      mode: "payment",
      success_url: "https://din-frontend.no/success",
      cancel_url: "https://din-frontend.no/cancel",
    });
    res.json({ url: session.url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, "0.0.0.0", () => console.log("Backend kjører på http://localhost:5000"));