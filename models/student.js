const mongoose = require('../config/database')
const { Schema } = mongoose

const studentSchema = new Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  evaluations: [{ type: Schema.Types.ObjectId, ref: 'evaluations' }],
});

module.exports = mongoose.model('students', studentSchema)