const {get_cities} = require('./model')
module.exports = {
   Query: {
      get_cities: async (_, args) => {
         return await get_cities()
      }
   },

   City: {
      id: global => global.city_id,
      name: global => global.city_name
   }
}
