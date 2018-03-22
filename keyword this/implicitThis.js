//strict mode does not make a difference here

var person = {
    firstName: "Elie",
    sayHi: function(){
        return "Hi " + this.firstName; //Here this is referring to the person object and not the global object
    },
    determineContext: function(){
        return this === person;//Here also it is referring to the person object and not the global object
    }
};

var msg = person.sayHi();
console.log(msg); //Hi Elie

var ctx = person.determineContext();
console.log(ctx); //true