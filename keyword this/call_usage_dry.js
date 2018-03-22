var colt = {
    firstName: "Colt",
    sayHi: function(){
          return "Hi " + this.firstName;
    }
};

// var elie = {
//     firstName: "Elie",
//     //Look at all this duplication :(
//     sayHi: function(){
//         return "Hi " + this.firstName;
//     }
// }

console.log(colt.sayHi()); //Hi Colt
//commenting out this method as this will refer to undefined
//console.log(elie.sayHi()); //Hi Elie

//Instead we can refactor elie like this
var elie = {
    firstName: "Elie"
}
//and change the method calls to the following
console.log(colt.sayHi());
console.log(colt.sayHi.call(elie)); //We are using the sayHi() method with this pointing to elie object hence reducing code duplication