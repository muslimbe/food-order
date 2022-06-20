const {fetch} = require('../../utils/pg')

const NewRes = `
INSERT INTO restaurants (
   restaurant_name,
   restaurant_address,
   restaurant_contact_number,
   restaurant_image,
   restaurant_ref_id
)
VALUES (
  $1,$2,$3,$4,$5
);
`

module.exports = {
   NEW_RES: async (req, res) => {
      const {name, address, number, image, ref_id} = req.body
      fetch(NewRes, [name, address, number, image, ref_id])
   }
}