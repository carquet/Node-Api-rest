'use strict'


const mongoose = require('mongoose')

const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, (err, res) => {
	if (err){
		console.log("check your connexion with the database. Launch $ mongod in another console")
	} else {
		console.log('connexion to database established')
	}
	

	app.listen(config.port, () =>{
	console.log(`api rest corriendo en http localhost:${config.port}`)
	})
})
