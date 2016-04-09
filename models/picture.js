/**
 * Module dependencies.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Vote Schema
 */

var PictureSchema = new Schema({
  img: String,
  positive: Number,
  negative: Number,
  ts: { type: Date, default: Date.now },
}, { strict: false });

PictureSchema.index({ ts: 1 });

mongoose.model('Picture', PictureSchema, 'pictures');