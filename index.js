/**
 * Simple init method
 * @param {*} cb 
 */
function init(cb) {
  var time = require('time')(Date);
  var d = new Date();
  d.setTimezone('UTC');
  cb(null, d.toString());
}


module.exports = {
  init
}