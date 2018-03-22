
/**
* es6之后更面向对象的方法来创建所有的对象
*
*/
class Person {

	constructor(name, age) {  //构造函数
		this.name = name;
		this.age = age;
		this.friends = [];
	}

	pushFriends(friend) {   //方法
		this.friends.push(friend);
	}

	print() {    //方法
		for (var i = this.friends.length - 1; i >= 0; i--) {
			console.log(this.friends[i]);
		}
	}


}


var person1 = new Person('michael', 20);
var person2 = new Person('sara', 22);
console.log(person1.name);
console.log(person1.age);
person1.pushFriends('alex');
person2.pushFriends('lincoln');
person1.print();
console.log("------");
person2.print();


/**
$ node 0105_createobject_es6_class.js
michael
20
alex
------
lincoln
*/