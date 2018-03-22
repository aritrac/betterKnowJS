//Closures exists when an inner function makes use of variables declared
//in an outer function which has previously returned

//Closure does not exist if you do not return an inner function and if that
//inner function does not make use of variables returned by an outer function

//We can use closures to create private variables and write better code that 
//isolates our logic and application.

function classRoom(){
    var instructors = ["Colt", "Elie"];
    return {
        getInstructors: function(){
            return instructors;
        },
        addInstructor: function(instructor){
            instructors.push(instructor);
            return instructors;
        }
    }
}

var course1 = classRoom();
console.log(course1.getInstructors()); //["Elie","Colt"]
console.log(course1.addInstructor("Ian")); //["Elie", "Colt", "Ian"]
console.log(course1.getInstructors());   //["Elie","Colt","Ian"]

var course2 = classRoom();
console.log(course2.getInstructors());