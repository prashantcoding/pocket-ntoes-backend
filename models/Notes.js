const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  content: { type: String, required: true },
  group: { type: mongoose.Schema.Types.ObjectId, ref: 'Group', required: true }
}, {
  timestamps: true  // Automatically adds createdAt and updatedAt fields
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
