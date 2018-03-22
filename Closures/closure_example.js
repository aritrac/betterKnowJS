//A closure is a function that makes use of variables defined in outer functions
//that have previously returned

//What does that mean?

function outer(){
    var data = "Closures are ";
    return function inner(){
        var innerData = "awesome";
        return data + innerData;
    }
}

console.log(outer()); //Calling just the outer function returns the function definition of the inner function

console.log(outer()()); //Now on the returned inner definition, we call the inner function