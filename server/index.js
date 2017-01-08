const express 	 = require('express')
const mongoose	 = require("mongoose")

/* Database */
const mongo = require('./config/mongo.json')
const connection = mongoose.connect('mongodb://'+mongo.host+':'+mongo.port+'/'+mongo.database);

/* Routes */
const server = express()
require('./routes/login')(server)  // Login
require('./routes/api')(server)    // API
require('./routes/www')(server)    // Frontend

/* Server listen... */
server.listen(8080, ()=>{
	console.log('Server running...')
})
