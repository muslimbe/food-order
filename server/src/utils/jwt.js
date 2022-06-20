const jwt = require('jsonwebtoken')
const {ACCESS_KEY_TOKEN, xaxa} = require('../config/index.js') 

module.exports = {
   sign: (data) => jwt.sign(data, key),
   verify: (data) => jwt.verify(data, key),
}

console.log(xaxa);