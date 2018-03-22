// function Person(name){
//     this.name = name;
//     this.sayHi = function(){
//         return "Hi " + this.name;
//     }
// }

// var elie = new Person("Elie");
// elie.sayHi(); //Hi Elie

//now this code works, but it is inefficient
//everytime we make an object using the new keyword we have to rredefine this function
//but its the same for everyonee! Let's put it on the prototype instead!

//We have now refactored the code, to not add sayHi everytime a new object is created, but
//we can add it only once
function Person(name){
    this.name = name;
}

Person.prototype.sayHi = function(){
    return "Hi " + this.name;
}

var elie = new Person("Elie");
console.log(elie.sayHi()); //Hi Elie