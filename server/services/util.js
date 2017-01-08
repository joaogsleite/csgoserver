module.exports.makeID = function(size){
	let t="";
	let p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for(let i=0;i<size;i++){
		t+=p.charAt(Math.floor(Math.random()*p.length));
	}
	return text;
}
