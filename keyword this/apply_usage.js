var colt = {
    firstName: "Colt",
    sayHi: function(){
        return "Hi " + this.firstName;
    },
    addNumbers: function(a,b,c,d){
        return this.firstName + " just calculated " + (a+b+c+d);
    }
}

var elie = {
    firstName: "Elie"
}

console.log(colt.sayHi());//Hi Colt  
//If there are no arguments to be passed, call and apply can be used interchangeably as seen here
console.log(colt.sayHi.apply(elie));//Hi Elie

//Well this seems the same... but what happens when we start adding arguments?
console.log(colt.addNumbers(1,2,3,4)); //Colt just calculated 10
//Passing elie object to be set to this, and any additional arguments needed for the method to run after that
//Using call
console.log(colt.addNumbers.call(elie,1,2,3,4));//Elie just calculated 10
//Using apply
console.log(colt.addNumbers.apply(elie,[1,2,3,4]));//Elie just calculated 10

