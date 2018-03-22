



function notifyAll(sns, email) {
	console.log("notifyAll");
	setTimeout(function(){
		sns();
		email();
	}, 2000);
	console.log("end");
} 


notifyAll(function(){
	console.log("sns");
}, function(){
	console.log("email");
});
