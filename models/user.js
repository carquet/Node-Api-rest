'use strict'

const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
const crypto = require('crypto')

const UserSchema = new mongoose.Schema({
	email: {type: String, unique: true, lowercase: true};
	name: String,
	avatar: String,
	password: { type: String, select: false},
	signupDate: { type: Date, default: Date.now()},
	lastlogin: Date
	
})

UserSchema.pre('save', (next) => {
	let user = this
	if(!user.isModified('password')) return next()
		bcrypt.genSalt(10, (err,salt)=>{
			if (err) return next(err)

			bcrypt.hash(user.password, salt, null, (err, hash) =>{
				if (err) return next(err)

			user.password = hash
			next()
			})
		})
})

UserSchema.methods.gravatar = function(){
	if(!this.email) return `https://gravatar.com/avatar/?s=2006d=retro`

	const md5 = crypto.createHash('md5').update(this.email).digest('hex')
	return `https://gravatar.com/avatar/${md5}?s=2006d=retro`
}

module.exports = mongoose.model('User', UserSchema)