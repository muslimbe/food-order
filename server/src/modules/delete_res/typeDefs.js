const {gql} = require('apollo-server-express')


module.exports = gql`
   scalar Delete
   extend type Mutation{
      delete_res(id: String): Delete 
   }
`