/**
* 优点：对比工厂模式，这里可以知道创建对象的具体的类型信息
* 缺点：对于内部的函数，每个函数都要在新的对象上创建一遍，造成内存浪费，
        如果我们提到全局域去做的话则又破坏了封装性
        prototype很好的解决了这个问题
  constructor特点是一个对象一个全新的东西
*/

function Person(name, age) {
	this.name = name;
	this.age = age;
	this.sayHi = function() {
		console.log("Hello World!");
	};
}


console.log("start person--------------");
var person = new Person('michael', 22);
var person2 = new Person('michael', 22);
console.log(person.name);
console.log(person.age);
person.sayHi();

console.log(person instanceof Object);
console.log(person instanceof Person);
console.log(person.sayHi == person2.sayHi);  //false

console.log("end person--------------");

var sayHi = function() {
	console.log("Hello World!");
};

function Student(name, age) {
	this.name = name;
	this.age = age;
	this.sayHi = sayHi;
}


console.log("start student--------------");
var student = new Student('michael', 22);
var student2 = new Student('michael', 22);

console.log(student.sayHi == student2.sayHi);   //true

console.log("end student--------------");

