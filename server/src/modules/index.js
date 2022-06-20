const resTypes = require('./res_types')
const restaurants = require('./restaurants')
const food = require('./chosen-restaurant')
const city = require('./address/city')
const district = require('./address/district')
const delete_res = require('./delete_res')

module.exports = [
   resTypes,
   restaurants,
   food,
   city,
   district,
   delete_res
]
