'use strict'

const express = require('express');
const bodyParser = require('body-parser')

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

app.listen(port, () =>{
	console.log(`api rest corriendo en http localhost:${port}`)
})