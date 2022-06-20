const { gql } = require('apollo-server-express')

module.exports = gql`
   extend type Query {
      get_food(id: String): [Food!]!
   }

   type Food{
      id: ID!
      name: String!
      price: Int
      image: String!
   }
`
