const User = require('../models/User')

module.exports.createOrGet = function(profile, done){
	User.findOne({id:profile.id}, (err,data)=>{
		if(err) return done('Cannot create/get user: '+err)
		if(!data){

			let user = new User(profile);
			user.save((err,data)=>{
				if(err) done('Cannot create/get user: '+err)
				else done(null, data)
			})
		}
		else return done(null, data)
	})
}

module.exports.get = function(id, done){
	User.findOne({id}, (err,data)=>{
		if(err || !data) done('Cannot get user: '+err)
		else done(null, data)
	})
}
