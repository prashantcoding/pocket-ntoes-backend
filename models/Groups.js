const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  notes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Note' }],
  color: { type: String, default: "blue" }
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;
