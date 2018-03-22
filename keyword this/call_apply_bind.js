//NAME                      PARAMETERS                      INVOKE IMMEDIATELY?
//Call                      this,a,b,c,d,...                Yes
//Apply                     this,[a,b,c,d,...]              Yes
//Bind                      this,a,b,c,d,...                No

var person = {
    firstName:  "Aritra",
    sayHi:      function(){
        return "Hi " + this.firstName;
    },
    determineContext: function(){
        return this === person;
    },
    dog: {
            sayHello: function(){
                return "Hello " + this.firstName;
            },
            determineContext: function(){
                return this === person;
            }
        }
};

console.log(person.sayHi());    //Hi Aritra
console.log(person.determineContext()); //true

console.log(person.dog.sayHello.call(person)); //Hello Aritra
console.log(person.dog.determineContext.call(person)); //true

