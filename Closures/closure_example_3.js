//Is this a closure? <- This is not a closure as it does not make use of any variables from the outer function
function outerFn(){
    var data = "something from outer";
    return function innerFn(){
        return "Just returned from the inner function";
    }
}

//What about this? <- This is a closure as it makes use of variables from the outer function
function outerFn(){
    var data = "something from outer";
    return function innerFn(){
        var innerData = "something from inner";
        return data + " " + innerData;
    }
}