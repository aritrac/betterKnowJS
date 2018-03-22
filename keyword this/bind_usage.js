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

var elieCalc = colt.addNumbers.bind(elie,1,2,3,4); //function(){}...
console.log(elieCalc()); //Elie just calculated 10

//with bind - we do not need to know all the arguments up front!
//We use something called partial application in bind and also
//we set the context of this for a function which will be called at a later point in time.

var elieCalc2 = colt.addNumbers.bind(elie,1,2);
console.log(elieCalc(3,4)); //Elie just calculated 10