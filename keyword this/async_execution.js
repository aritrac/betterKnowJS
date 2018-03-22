var colt = {
    firstName: "Colt",
    sayHi: function(){
        //the setTimeout though within the colt object context is a part of the window object and hence this refers
        //to the window object when executing it after 1 sec.
        setTimeout(function(){
            console.log("Hi " + this.firstName);
        }, 1000);
    }
}
colt.sayHi();// Hi undefined (1000 milliseconds later)

//Now the solution to the above problem
var colt2 = {
    firstName: "Colt",
    sayHi: function(){
        setTimeout(function(){
            console.log("Hi " + this.firstName);
            //below we are attaching the colt2 context to the function using bind
            //and later after 1 sec, when it executes, the this context
            //instead of referring to the window object will refer to
            //the colt2 object
        }.bind(this), 1000);
    }
}

colt2.sayHi();// Hi Colt