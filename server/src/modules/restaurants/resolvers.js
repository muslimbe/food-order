const {get_Restaurants} = require('./model')

module.exports = {
   Query: {
      get_restaurants: async () => {
         // console.log(await get_Restaurants());
         return await get_Restaurants()   
      }
   },

   Restaurant: {
      id: global => global.restaurant_id,
      name: global => global.restaurant_name,
      address: global => global.restaurant_address,
      number: global => global.restaurant_contact_number,
      social_net: global => global.restaurant_contact_telegram,
      image: global => 'http://localhost:4004/images/' + global.restaurant_image,
      ref_id: global => global.restaurant_ref_id
   }
}