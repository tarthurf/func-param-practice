// Function parameters are the names listed in the function definition.
// Function arguments are the real values passed to (and received by) the function.

function functionName(parameter1, parameter2, parameter3) {
    // code to be executed
};

// Parameter Rules
// JavaScript function definitions do not specify data types for parameters.
// JavaScript functions do not perform type checking on the passed arguments.
// JavaScript functions do not check the number of arguments received.

// Lets say we want to make a function that checks if 2 numbers are the same.
// We could do it this way:

function compareNums() {
    if (2 === 2) {
        console.log("They're Equal!")
    } else {
        console.log("They're not equal...")
    }
};

// Uncomment the line of code below this to run the funtion

// compareNums()

// But lets say we want to compare two different numbers. Should we write a new function?
// NO! We are going to use parameters to create a function that is written once but can be used many times over

// Parameters can be named anything you want them to be named
// We will name our parameters "num1" and "num2" so we know what they are meant to be
function compare(num1, num2) {
    if (num1 === num2) {
        console.log("They're Equal!")
    } else {
        console.log("They're not equal...")
    }
};

// Now when we call our function we will add our numbers that we want to be compared as parameters
// Remember when we call out function our "Arguments" are what ever value we designate the parameters to be
// Uncomment the line of code below to run the function

// compare(2, 3);

// The argument for "num1" is "2" and the argument for "num2" is 3
// So the function is essentially this:

function compareExample() {
    if (2 === 3) {
        console.log("They're Equal!")
    } else {
        console.log("They're not equal...")
    }
};

// But instead of "hard coding" the arguments for our functions we can use parameters so we never have
// to rewrite our functions
// Uncomment the functions below

// compare(13, 12);
// compare(9, 9);
// compare(13, 112);
// compare(1000, 1000);
// compare(1, -1);

// To further show the importance of parameters lets try comparing strings instead of numbers
// Uncomment the functions below

// compare("hello", "hello");
// compare("hello", "world");

// Parameters are similar to declaring a variable such that the parameter "equals" what ever we
// add in as the argument

// *******************************************************************************************

// Now that we have a better understanding of function parameters and arguments lets explore
// the "Return" statement

// The return statement stops the execution of a function and returns a value from that function.

// Lets look at some previous code. Compare the function below to the "compare" function written on 
// line 33

function compareWithReturn(num1, num2) {
    if (num1 === num2) {
        return console.log("They're Equal!")
    } else {
        return console.log("They're not equal...")
    }
};

// This is the proper way to call the previous function. They both work the same way, but now
// our function is returning a value based on the comparison we make. That value returned is simply a console.log

// Lets try another example

function sentence(age, animal, color) {
    return console.log("My " + age + " year old " + animal + " is " + color + ".")
};

// Uncomment the function below to run it:

// sentence("5", "cat", "orange");

// Try creating your own sentence by adding arguments to the function call below

// sentence("", "", "");

// "return" is also important for using functions to pass on information to other parts of our code
// In this example we will add two numbers together in one function and then multiply the two numbers by 2

function add(num1, num2) {
    // lets declare a variable to hold our total value
    var total = 0;
    // lets make total equal to our arguments added together
    total = num1 + num2;
    // now we will return the total value
    return total;
};

// We cannot see this function working in our console though. We can see our total by wrapping our
// funtion in a console.log
// Uncomment the code below to run it:

// console.log(add(2, 2));

// When we console.log a function like this, our console will show us the returned value from the function

// Now that we have a function that adds two numbers we will make a function that multiplys a number by 2

function multiplyByTwo(num) {
    // once again, lets declare a variable to hold our total.
    var total = 0;
    // even though we declared total once already in this script, we can use total again as long as it is
    // declared in a function. Variables made in functions only exist in that function, and not in our
    // global script

    // now lets make total equal to our argument times 2
    total = num * 2;
    // now we will return the total value
    return total;
};

// You might be asking how we can get the number from a function and use it in another function
// when we return a value from a function, the called function essentially IS the value returned
// Uncomment the code below to run it:

// console.log(add(2, 2) + 2);

// We called our add function to add "2 + 2" and then added another "2" to the returned value of that function
// We can use functions as "variables" or "objects" in our code like this. now lets do the final call
// to add two numbers and then multiply it by 2
// Uncomment the code below to run it:

// console.log(multiplyByTwo(add(2, 2)));