require('dotenv').config()

module.exports = {
   connectionString: {
      host: "localhost",
      user: "postgres",
      port: 5432,
      password: "1598753",
      database: "find_restaurant",
   },
   connectionStringOnline: `postgres://pvebeoxf:DbEsmsvtHlGrro53oGvb7yPtR6wIHtjh@kashin.db.elephantsql.com/pvebeoxf`,
}