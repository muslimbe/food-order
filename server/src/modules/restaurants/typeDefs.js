const { gql } = require('apollo-server-express')

module.exports = gql`   
   extend type Query {
      get_restaurants: [Restaurant!]!
   }  

   type Restaurant {
      id: ID!
      name: String!
      address: String!
      number: String!
      social_net: String
      image: String!
      ref_id: String!
   }
`