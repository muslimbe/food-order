import {gql} from '@apollo/client'

const FOODS = gql`
query($id: String){
   get_food(id: $id){
     id
     name
     price
     image
   }
 }
`

export default FOODS