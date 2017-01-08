const mongoose = require('mongoose')

module.exports = mongoose.model('User', {
	id  		: String,
	displayName : String,
	photos 		: [
		{ value : String }
	]
})
