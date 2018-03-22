//This is the constructor function
function Person(name){
    this.name = name;
}

//this is an object created from the Person constructor

var elie = new Person("Elie");
var colt = new Person("Colt");

Person.prototype.isInstructor = true;

console.log(elie.isInstructor); //true
console.log(colt.isInstructor); //true

//how were we able to access properties on the prototype?

//__proto__! thats how!!

var arr = [];

console.log(arr.hasOwnProperty("length"));

console.dir(arr);