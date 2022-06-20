const { fetchAll } = require('../../utils/pg')

const RES_TYPES = `
   select * from restaurant_types;
`

const getTypes = async () => {
   return await fetchAll(RES_TYPES)
}

module.exports = {getTypes}
