// Your constructor function goes here
function Dog(name,age){
    this.name = name;
    this.age = age;
    this.bark = function(){
        console.log(this.name + " just barked");
    }
}
//This code should work if you have implementedd it correctly

var rusty = new Dog('Rusty', 3);
var fido = new Dog('Fido',1);

rusty.bark(); //Rusty just barked
fido.bark();  //Fido just barked