console.log(this);  //will output window if run from browser or empty if run from node directly

function whatIsThis(){
    return this;
}

whatIsThis();  //prints out the global this object

function variablesInThis(){
    //since the value of this is the window or node global object
    //all we are doing here is creating a global variable
    this.person = "Elie";
}

variablesInThis(); //This call sets the person variable in the global context

/*global person*/
console.log(person); //This prints out the person value from the global this reference

var data = {};

data.instructor = "Ellie";

console.log(data);