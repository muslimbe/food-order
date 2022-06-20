const { fetch, fetchAll } = require("../../utils/pg")

const GET_RESTAURANTS = `
   select
      *
   from
      restaurants
`

const get_Restaurants = async () => {
   return await fetchAll(GET_RESTAURANTS)
}

module.exports = {get_Restaurants}