const {fetch} = require('../../../utils/pg')

const GET_DIS = `
   select district_id, district_name
      from districts
         where district_ref_id = $1;
`
const get_districts = async (value) => {
   return await fetch(GET_DIS, value)
}

module.exports = {
   get_districts
}