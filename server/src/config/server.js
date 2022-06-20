require('dotenv').config()

module.exports = {
   PORT: process.env.SERVER_PORT,
   ACCESS_KEY_TOKEN: process.env.ACCESS_KEY_TOKEN,
}
