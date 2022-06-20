import { gql } from '@apollo/client'


 const GET_RES_TYPES = gql`
 query{
   res_types{
     id
     name
   }
 }
 `

 const ALL_RESTAURANTS = gql`
  query{
    get_restaurants{
      id
      name
      address
      number
      social_net
      image
      ref_id
    }
  }`

 export {
    GET_RES_TYPES,
    ALL_RESTAURANTS
 }