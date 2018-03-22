"use strict"

console.log(this);

function whatIsThis(){
    return this;
}

whatIsThis();

function variablesInThis(){
    //since we are in strict mode this is undefined
    //so what happens if we add a property on undefined?
    //let's see what happens when we call the function...
    this.person = "Elie";
}

variablesInThis();