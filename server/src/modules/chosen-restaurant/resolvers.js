const {get_food} = require('./model')

module.exports = {
   Query: {
      get_food: async (_, {id}) => {
         return await get_food(id)
      }
   },

   Food: {
      id: global => global.food_id,
      name: global => global.food_name,
      price: global => global.food_price,
      image: global => `http://localhost:4004/images/${global.food_image}`
   }
}