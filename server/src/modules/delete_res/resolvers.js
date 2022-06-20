const {delete_res} = require('./model')

module.exports = {
   Mutation: {
      delete_res: async (_, {id}) => {
         await delete_res(id)
      }
   }
}