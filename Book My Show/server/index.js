require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const Booking = require("./connector");
const cors = require("cors");
app.use(cors());
const port = process.env.PORT || 8080;



//Getting orders
app.get("/api/booking", async (req, res) => {
  try {
    const data = await Booking.find().sort({ _id: -1 }).limit(1);

    if (data.length === 0) {
      return res.status(200).json({
        message: "No Previous Booking found!",
      });
    }

    return res.status(200).json({
      message: "Last booking fetched",
      data: data[0],
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});


//
app.post("/api/booking", async (req, res) => {
  try {
    const { movie, slot, seats } = req.body;

    if (!movie) {
      return res.status(400).json({
        message: "Please provide movie name",
      });
    } else if (!slot) {
      return res.status(400).json({
        message: "Please provide slot",
      });
    } else if (!seats) {
      return res.status(400).json({
        message: "Please provide seats",
      });
    } else {
      const newBooking = new Booking({
        movie: movie,
        slot: slot,
        seats: seats,
      });

      const data = await newBooking.save();
      return res.status(200).json({
        message: "Booking Successful",
        data: data,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      data: {},
    });
  }
});

app.get("/", (req, res) => {
  try {
    res.send("Backend and MangoDB is live!");
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
