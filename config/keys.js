//Figure out what kind of credentials to return
if(process.env.production === 'production'){
   //We are in production return production set of keys
   module.exports = require('./prod');
}else{
   //we are in development we are production set of keys
  module.exports = require('./dev')
}