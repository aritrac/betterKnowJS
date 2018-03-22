function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

//in the above example, the this keyword still points to the global context,
//but once we use new keyword, the this then changes reference to the object context

var elie = new Person("Elie","Schoppik");