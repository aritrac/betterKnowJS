//In other languages, there exists support for variables that cannot be 
//modified externally, we call those private variables, but in Javascript
//we dont have that built in. No worries, closures can help!

function counter(){
    var count = 0;
    return function(){
        return ++count;
    }
}

var counter1 = counter();
console.log(counter1()); //1
console.log(counter1()); //2

var counter2 = counter();
console.log(counter2()); //1
console.log(counter2()); //2

console.log(counter1()); //3 this is not affected by counter2;

//console.log(count); //ReferenceError: count is not defined - because it is private!