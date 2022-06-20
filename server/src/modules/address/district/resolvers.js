const {get_districts} = require('./model')

module.exports = {
   Query: {
      get_districts: async (_, {id}) => {
         return await get_districts(id)
      }
   },

   District: {
      id: global => global.district_id,
      name: global => global.district_name,
   }
}