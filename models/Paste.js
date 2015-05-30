var mongoose = require('mongoose');

var PasteSchema = new mongoose.Schema({
  title: String,
  body: String,
  hidden: Boolean,
  uploaderIP: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Paste', PasteSchema);