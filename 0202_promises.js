


function notifyAsync(sns) {

	 var promise = new Promise(function(resolve, reject){

	 	if(true) resolve(sns());
	 	else reject(Error("error"));
	});
	return promise;
}



var obj = notifyAsync(function() {
	return 1;
}).then(function(success){
	console.log(success);
}, function(error) {

})

console.log(obj instanceof Promise);  //类似于Java中的Future

console.log("done");

