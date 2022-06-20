const { ApolloServer } = require('apollo-server-express')
const express = require('express')
const modules = require('./modules')
const {NEW_RES} = require('./modules/new-restaurant/model')
const { PORT } = require('./config')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
const get_food = require('./modules/chosen-restaurant/model')

const server = new ApolloServer({
   modules,
   context: ({req, connection}) => {
      // console.log(req.headers);
   }
})

server.applyMiddleware({app})

app.get("/images/:imageName", (req, res) => {
   const {imageName} = req.params
   res.sendFile(__dirname + '/files/images/' + imageName)
})

app.post('/newRestaurant', NEW_RES)

app.listen(PORT, () => {
   console.log("server is running on port: 4004" + server.graphqlPath);
})