'use strict'

const Product = require('../models/product')

function getProduct(req, res){
	let productId = req.params.productId

	Product.findById(productId, (err, product)=>{
		if (err) return res.status(500).send({message: `error in your request: ${err}`})
		if(!product) return res.status(404).send({message: `the product does not exist`})

		res.status(200).send({product})
	})
}

function getProducts(req, res){
	Product.find({}, (err, products)=>{
		if (err) return res.status(500).send({message: `error in your request: ${err}`})
		if (!products) return res.status(404).send({message: `the product does not exist`})

		res.status(200).send({products})	
	})
}

function saveProduct(req, res){
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
}

function updateProduct(req, res){
	let productId = req.params.productId
	let update = req.body

	Product.findByIdAndUpdate(productId, update, (err, productUpdated) =>{
		if (err) res.status(500).send({message: `error in your request: ${err}`})

		res.status(200).send({product: productUpdated})
		})
}

function deleteProduct(req, res){
	let productId = req.params.productId

	Product.findById(productId, (err, product) =>{
		if (err) res.status(500).send({message: `error in your request: ${err}`})

		product.remove(err => {
			if (err) res.status(500).send({message: `error in your request: ${err}`})
			res.status(200).send({message:`the product was deleted`})
		})
	})

}

module.exports = {
	getProduct,
	getProducts,
	saveProduct,
	updateProduct,
	deleteProduct
}