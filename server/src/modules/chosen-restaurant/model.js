const { fetch } = require('../../utils/pg')

const GET_FOOD = `
   select * from 
      foods
   where
      food_ref_id = $1;
`

const get_food = async (value) => {
   return await fetch(GET_FOOD, value)
}

module.exports = {
   get_food
}