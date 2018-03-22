function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    //we can also set properties on the keyword this
    //that are preset values
    this.numWheels = 4;
}

// function Motorcycle(make,model,year){
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.numWheels = 2;
// }

//There is so much of code being duplicated in the Motorcycle function. We can use call/apply
//in the Motorcycle function to reduce it
//as follows

// function Motorcycle(make,model,year){
//     //using call
//     Car.call(this,make,model,year);
//     this.numWheels = 2;
// }

//we can also use apply in the following Motorcycle function with arguments
// function Motorcycle(make,model,year){
//     Car.apply(this,[make,model,year]);
//     this.numWheels = 2;
// }

//we can also use the following Motorcycle function with arguments
function Motorcycle(make,model,year){
    Car.call(this,arguments);
    this.numWheels = 2;
}
