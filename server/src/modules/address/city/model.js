const {fetchAll} = require('../../../utils/pg')

const GET_CITIES = `
   select * from cities;
`

const get_cities = async () => {
   return await fetchAll(GET_CITIES)
}

module.exports = {
   get_cities
}