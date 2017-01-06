
const express = require('express')
const {spawn} = require('child_process')
const path	  = require('path')
const server  = express();

/* API */
let csgo = false
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
	csgo = spawn('sh',['./startcsgo.sh'])
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

/* www */
const root = path.join(__dirname,'dist')
server.use('/files', express.static(root))
server.use('/themes/default/assets/', express.static(root))
server.get('*', (req,res)=>{
	res.sendFile('index.html', {root})
})

server.listen(8080)
