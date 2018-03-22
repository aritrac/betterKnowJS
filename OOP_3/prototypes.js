//Use of the new keyword

//1.Creates an object out of thin air
//2.Assigns the value of 'this' to be that object
//3.Adds a 'return this' to the end of the function
//4.Creates a link (which we can access as __proto__)
//betweeen the object created and the prototype property of the
//constructor function

//this is the constructor function
function Person(name){
    this.name = name;
}

//these are objects created from the Person constructor
var elie = new Person("Elie");
var colt = new Person("Colt");

console.log(Person.prototype);

console.log(elie.__proto__ === Person.prototype);
console.log(colt.__proto__ === Person.prototype);

//The Person.prototype object also has a property
//called constructor which points back to the function

console.log(Person.prototype.constructor === Person);