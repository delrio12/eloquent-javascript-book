//----------------------Minimum---------------------//

console.log("Write a function \'min\' that takes two arguments and returns their minimum");
function min(num1, num2) {
    let minimum = Math.min(num1, num2);
    console.log(minimum);
};

min(prompt("Number 1?"), prompt( "Number 2?"));

//----------------------Recursion---------------------//
/* 
- Recursion is a great resource as it will save lines of code.
- Recursion is a fuction that calls itself.
- Implementing recursion affects processing speed
- Fuctions can call itselves infitely and can overflow the stack.
*/ 
console.log("Write a function that accepts a single parameter and determines if the number is even or odd");
function isEven(num) {
    if(num < 0) {
        return isEven(-num);
    }
    else if(num == 0) {
        return true;
    } 
    else if(num == 1) {
        return false;
    }
    else {
        return isEven(num - 2);
    };
}
console.log(isEven(prompt("Check if this number is Even or Odd:")));


//----------------------Bean Counting--------------------//
