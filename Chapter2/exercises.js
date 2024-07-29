//----------------------Looping a triangle---------------------//
console.log("write a loop that makes 7 calls to console.log to output a triangle")
let lines = 7, msg = "#";
for(pounds=0; pounds<lines; pounds+=1) {
    console.log(msg);
    msg = msg + "#";
}
//----------------------FizzBuzz---------------------//
console.log("write program that uses console.log to print all the numbers from 1 - 100. For numbers divisible by 3, print \"Fizz\", for numbers divisible by 5, print \"Buzz\", and numbers divisible by both, print \"FizzBuzz\"");
for(let theNumber = 1; theNumber <= 100; theNumber++) {
    if(theNumber % 3 == 0) {
        if(theNumber % 5 == 0) {
            console.log("FizzBuzz");  
        }
        else {
            console.log("Fizz");
        }
    }
    else if(theNumber % 5 == 0) {
        console.log("Buzz");
    }
    else{
        console.log(theNumber);
    }
}
//----------------------Chessboard--------------------//
console.log("write a program that creates a string that represents 8x8 grid, using line characters to separate lines.");
let size = 8, rowComplete = "";
for(let rowLine = 1; rowLine <= size; rowLine++) {
    for(let columnSpace = 1; columnSpace <= size; columnSpace++) {
        if((columnSpace + rowLine) % 2 == 0) {
            rowComplete = rowComplete + " ";  
        }
        else {
            rowComplete = rowComplete + "#";  
        }
    }
    console.log(rowComplete);
    rowComplete = "";
}

