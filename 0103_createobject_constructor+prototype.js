
/**
* 通常情况下都会使用这种方式来创建对象，在ES5的时候
*
*
*/



function Person(name, age) {
	this.name = name;
	this.age = age;
	this.friends = [];
};

Person.prototype.sayHi = function() {
	console.log("----------------");
	for(var i=0; i<this.friends.length; i++) {
		console.log(this.friends[i]);
	}
	console.log("----------------");
}


var person1 = new Person('michael',20);
var person2 = new Person("sara", 30);
person1.friends.push("alex");
person2.friends.push("lincoln");
person1.sayHi();
console.log("----------------------------------");
person2.sayHi();


/**
$ node 0103_createobject_constructor+prototype.js
----------------
alex
----------------
----------------------------------
----------------
lincoln
----------------
*/