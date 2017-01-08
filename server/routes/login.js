const passport = require('passport')
const SteamStrategy = require('passport-steam').Strategy
const session = require('express-session')

const users = require('../controllers/user')

passport.use(new SteamStrategy(
	require('../config/steam.json'), (id, profile, done)=>{
		users.createOrGet(profile, done)
  	}
))
passport.serializeUser((user, done)=>{
	if(user) if(user.id) return done(null, user.id)
	return done('Invalid user to serialize.', null)
})
passport.deserializeUser((id, done)=>{
	users.get(id, done)
})

module.exports = function(server){

	server.use(session(require('../config/session.json')))
	server.use(passport.initialize())
	server.use(passport.session())

	server.get('/auth/steam', passport.authenticate('steam'))

	server.get('/auth/steam/callback', passport.authenticate('steam', {
		successRedirect: '/', failureRedirect: '/auth/steam'
	}))

	server.all('*', (req,res,next)=>{
		// redirect authenticated users to previous path if exists
		/*if(req.path=='/' && req.isAuthenticated() && req.session.returnTo)
			if(!req.session.returnTo.includes('favicon'))
				return res.redirect(req.session.returnTo)*/

		// redirect authenticated users to dashboard
		if(req.path=='/' && req.isAuthenticated())
			return res.redirect('/dashboard')

		// No authentication needed
		if(req.path=='/' || req.path.substring(0,7)=='/files/')
			return next()

		if(req.user) if(!['76561198091608905','76561197982582377','76561198018510421','76561198184308615'].includes(req.user.id)) res.redirect('/logout')

		// redirect non-authenticated users to login
		if(req.isAuthenticated()) return next()
		//req.session.returnTo = req.path;
		return res.redirect('/auth/steam')
	})
}
