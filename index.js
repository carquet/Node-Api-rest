'use strict'

const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const Product = require('./models/product')

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
	console.log('POST')
	console.log(req.body)
	let product = new Product()
	product.name = req.body.name
	product.picture = req.body.picture
	product.price = req.body.price
	product.category = req.body.category
	product.description = req.body.description

	product.save((err, productStored) => {
		if (err) res.status(500).send({message:`error when the product was sent: ${err}`})
		res.status(200).send({product: productStored})
	})
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
