const {gql} = require('apollo-server-express')

module.exports = gql`
   extend type Query{
      res_types: [ResType!]! 
   }

   type ResType{
      id: ID!
      name: String!
   }
`