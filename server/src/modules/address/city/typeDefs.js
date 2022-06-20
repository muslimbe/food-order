const {gql} = require('apollo-server-express')

module.exports = gql`
   extend type Query{
      get_cities: [City!]!
   }

   type City{
      id: ID!
      name: String!
   }
`