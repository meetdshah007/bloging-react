// keys.js - logic to generate based.
if(process.env.NODE_ENV === 'production'){
  module.exports = require('./prod');
}else{
  module.exports = require('./dev');
}
