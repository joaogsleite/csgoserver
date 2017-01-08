
const path 		= require('path')
const express 	= require('express')

const root = path.join(__dirname,'../','../','dist')

module.exports = function(server){

	server.use('/files', express.static(root))
	server.use('/themes/default/assets/', express.static(root))

	server.get('/logout', (req, res)=>{
		req.logout()
		res.sendFile('logout.html', {root})
	})
	server.get('*', (req,res)=>{
		res.sendFile('index.html', {root})
	})

}
