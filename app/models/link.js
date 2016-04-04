// var db = require('../config');
// var crypto = require('crypto');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var linkSchema = new Schema({
  url: String ,
  base_url: String ,
  code: String,
  title: String,
  visits: Number,
});

var Link = mongoose.model('Link', linkSchema);

// var createShasum = function(url) {
//   var shasum = crypto.createHash('sha1');
//   shasum.update(url);
//   return shasum.digest('hex').slice(0, 5);
// };

// linkSchema.pre('save', function(next) {
//   this.code = createShasum(this.url);
//   next();
// });

module.exports = Link;