const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const logroSchema = Schema({
  title: {type: String, required: true},
  author: {type: String, required: true},
  description: {type: String}
});

export const Logro = mongoose.model('logro', logroSchema);
