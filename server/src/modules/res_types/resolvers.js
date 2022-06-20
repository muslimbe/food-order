const {getTypes} = require('./model')

module.exports = {
   Query: {
      res_types: async (_, {args}) => {
         return await getTypes()
      }
   },

   ResType: {
      id: global => global.res_type_id,
      name: global => global.res_type_name
   }
}