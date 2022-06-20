const { PORT, ACCESS_KEY_TOKEN } = require('./server')
const { connectionString, connectionStringOnline } = require('./pool')

module.exports = {
   PORT: PORT,
   ACCESS_KEY: ACCESS_KEY_TOKEN,
   connectionString,
   connectionStringOnline,
}