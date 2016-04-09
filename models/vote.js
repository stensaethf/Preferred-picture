/**
 * Module dependencies.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Vote Schema
 */

var VoteSchema = new Schema({
  left: {type: Schema.Types.ObjectId, ref: 'Picture'},
  right: {type: Schema.Types.ObjectId, ref: 'Picture'},
  ts: { type: Date, default: Date.now },
  vote: {type: Schema.Types.ObjectId, ref: 'Picture'}
}, { strict: false });

VoteSchema.index({ ts: 1 });

mongoose.model('Vote', VoteSchema, 'votes');