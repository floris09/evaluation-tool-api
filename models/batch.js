// models/batch.js
const mongoose = require('../config/database')
const { Schema } = mongoose

const cardSchema = new Schema({
  symbol: { type: String, required: true },
  visible: { type: Boolean, default: false },
  won: { type: Boolean, default: false },
});

const studentSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'users' },
  pairs: [String],
});

const batchSchema = new Schema({
  cards: [cardSchema],
  students: [studentSchema],
  turn: { type: Number, default: 0 }, // student index
  started: { type: Boolean, default: false },
  winnerId: { type: Schema.Types.ObjectId, ref: 'users' },
  userId: { type: Schema.Types.ObjectId, ref: 'users' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  lastCard: { type: Number },
  draw: { type: Boolean, default: false },
});

module.exports = mongoose.model('batches', batchSchema)
