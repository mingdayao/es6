
/**
* 感觉创建Person的时候默认会创建一个对象，然后
* new出来的person都是继承这个对象的所有属性和方法
* 对于对象类型的持有的是一个引用所以指向的是同一个东东，改动的也是同一个东西
* prototype特点是共享
*/


function Person() {};

//priperties
Person.prototype.name='Michael';
Person.prototype.age=20;
Person.prototype.friends=['alex','lincon'];
//methods
Person.prototype.sayHi=function() {
	console.log('----------');
	for(var i=0; i<this.friends.length; i++) {
		console.log(this.friends[i]);
	}
	console.log('----------');
}

var person1 = new Person();
var person2 = new Person();
person2.name='sara';
person1.friends.push('maggie');
console.log(person1.name);
person1.sayHi();
console.log('------------------------------------------');
console.log(person2.name);
person2.sayHi();

/**
$ node 0102_createobject_prototype.js
Michael
----------
alex
lincon
maggie
----------
------------------------------------------
sara
----------
alex
lincon
maggie
*/
