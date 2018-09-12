const random = require('random');

function init(cb) {
  const a = random.int(min = 0, max = 1000)
  cb(null, a);
}


module.exports = {
  init
}