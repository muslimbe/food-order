import {gql} from '@apollo/client'

const CITIES =gql `
   query{
      get_cities{
      id
      name
      }
   }
`

const DISTRICTS = gql`
   query($id: ID){
      get_districts(id: $id){
      id
      name
      }
   }
`

export {
   CITIES,
   DISTRICTS
}