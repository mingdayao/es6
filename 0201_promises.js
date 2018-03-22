
/**
* promise遵循链式编程
* 多层嵌套如何实现
*
*/

function getSum(n1, n2) {
	var isAnyNegative = function() {
		return n1 < 0 || n2 < 0;
	}

	var promise = new Promise(function(resolve, reject){
		if(isAnyNegative()) {
			reject(Error("Negatives not supported"));
		}
		resolve(n1+n2);
	});
	return promise;
}

getSum(1, 4).then(function(result){
	console.log("success = " + result);
}, function(error){
	console.log("error = " + error);
});

console.log("==========================");

getSum(1, 4).then(function(result){
	console.log("success = " + result);
	return getSum(1, -1)
}, function(error){
	console.log("error = " + error);
}).then(function(result){
	console.log("success = " + result);
}, function(error){
	console.log("error = " + error);
});
