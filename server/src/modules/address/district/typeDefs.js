const {gql} = require('apollo-server-express')

module.exports = gql`
   extend type Query{
      get_districts(id: ID): [District!]! 
   }


   type District{
      id: ID!
      name: String!
   }
`