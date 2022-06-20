const {fetch} = require('../../utils/pg')

const DELETE = `
   delete from restaurants
      where restaurant_id = $1
`

const delete_res = (id) => {
   console.log(id);
   fetch(DELETE, id)
}

module.exports = {
   delete_res
}