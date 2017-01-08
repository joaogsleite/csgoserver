
const bodyParser = require('body-parser')
const {spawn} = require('child_process')
const document = require('../controllers/document')

let csgo = false

module.exports = function(server){

	server.use(bodyParser.json());

	server.get('/api/me', (req,res)=>{
		res.json(req.user)
	})

	server.get('/api/cmd/:cmd',(req,res)=>{
		if(!csgo) return res.send('ERROR!')
	    csgo.stdin.write( req.params.cmd + "\n");
		res.send('OK!')
	})
	server.get('/api/state',(req,res)=>{
		res.send(csgo)
	})
	server.get('/api/start',(req,res)=>{
		if(csgo) return res.send('ERROR!')
		csgo = spawn('sh',['startcsgo.sh'])
		csgo.stdin.setEncoding('utf-8')
		csgo.stdout.pipe(process.stdout)
		res.send('OK!')
	})
	server.get('/api/stop',(req,res)=>{
		if(!csgo) return res.send('ERROR!')
		csgo.stdin.end()
		csgo.kill()
		csgo = false
		res.send('OK!')
	})
}
