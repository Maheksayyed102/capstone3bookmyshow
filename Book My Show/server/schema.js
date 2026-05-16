const { Schema } = require("mongoose");

const bookMovieSchema = new Schema(
  {
    movie: {
      type: String,
      required: true,
      trim: true,
    },
    slot: {
      type: String,
      required: true,
      trim: true,
    },
    seats: {
      A1: { type: Number, default: 0 },
      A2: { type: Number, default: 0 },
      A3: { type: Number, default: 0 },
      A4: { type: Number, default: 0 },
      D1: { type: Number, default: 0 },
      D2: { type: Number, default: 0 },
    },
  },
  {
    timestamps: true,
  }
);

exports.bookMovieSchema = bookMovieSchema;