
const express = require('express')
const server  = express();

const spawn = require('child_process').spawn
const child = spawn('sh',['./startcsgo.sh'])

child.stdin.setEncoding('utf-8')
child.stdout.pipe(process.stdout)


server.use('/', express.static('dist'))
server.get('/api/cmd/:cmd',(req,res)=>{
    child.stdin.write( req.params.cmd + "\n");
	res.send('OK!')
})

server.listen(8080)
