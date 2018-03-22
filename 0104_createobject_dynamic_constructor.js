
/**
*
*
*/

function Person(name, age) {
	this.name = name;
	this.age = age;
	this.friends = [];
	if(typeof this.sayHi != "function") {
		Person.prototype.sayHi = function() {
			for(var i=0; i<this.friends.length; i++) {
				console.log(this.friends[i]);
			}
		}	
	}
	
}


var person1 = new Person('michael',20);
var person2 = new Person("sara", 30);
person1.friends.push("alex");
person2.friends.push("lincoln");
person1.sayHi();
console.log("----------------------------------");
person2.sayHi();

console.log(person1.sayHi == person2.sayHi);


/**
$ node 0104_createobject_dynamic_constructor.js
alex
----------------------------------
lincoln
*/
