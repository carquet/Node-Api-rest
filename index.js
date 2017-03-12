'use strict'

const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/api/product', (req,res)=> {
	//callback function
	res.status(200).send({product: []})

} )

app.get('/api/product/:productId', (req, res) => {
	//callback function
})

app.post('/api/product', (req, res) => {
	//callback function
	console.log(req.body)
	res.status(200).send({message: 'your product was received'})
})

app.put('api/product/:productId', (req, res) => {

})

app.delete('api/product/:productId', (req, res) => {

})

mongoose.connect('mongodb://localhost:27017/shop', (err, res) => {
	if (err){
		console.log("check your connexion with the database. Launch $ mongod in another console")
	} else {
		console.log('connexion to database established')
	}
	

	app.listen(port, () =>{
	console.log(`api rest corriendo en http localhost:${port}`)
	})
})
