/**
 * create object using factory method
 * 缺点： 不知道类型信息
 */

var sayHi = function(){
	console.log("Hello World!");
}


function Person(name, age) {
	var person = new Object();
	person.name = name;
	person.age = age;
	person.sayHi = sayHi;
	return person;
}

console.log("start-----------");
var person = Person('michael', 22);
console.log(person.name);
console.log(person.age);
person.sayHi();
console.log("end-------------");