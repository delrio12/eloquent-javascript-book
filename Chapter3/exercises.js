//----------------------Minimum---------------------//

console.log("Write a function \'min\' that takes two arguments and returns their minimum");
function min(num1, num2) {
    let minimum = Math.min(num1, num2);
    console.log(minimum);
};
min(prompt("Number 1?"), prompt( "Number 2?"));

//----------------------Recursion---------------------//
/* 
- Recursion is a great resource as it saves lines of code.
- Recursion is a fuction that calls itself.
- Implementing recursion affects processing speed
- Fuctions can call itselves infinitely and can overflow the stack.
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
console.log("Write a function called countBs that takes a string as its only argument and returns a number that indicates how many uppercase \"B\" characters there are in the string");

function countBs(str) {
    let counter = 0;
    for(i=0 ; i<=str.length ; i++ ) {
        if(str[i] === "B") {
            counter++;
        }
    }
  console.log(counter);  
}
countBs(prompt("Please add a word to count number of \'B\'s in it"));

console.log("Now write a function called countChar that behaves like countBs, except that it takes a second argument that indicates the char that is to be counted.");

function countChar(str, charToCount) {

    let counter = 0;
    for(i=0 ; i<=str.length ; i++ ) {
        if(str[i] === charToCount) {
            counter++;
        }
    }
  console.log(counter);  
}
countChar(prompt("Please add a word to check:"), prompt("Which char would you like to look for?"));
