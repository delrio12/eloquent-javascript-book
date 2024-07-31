//----------------------Looping a triangle---------------------//
console.log("write a loop that makes 7 calls to console.log to output a triangle")
let lines = 7, msg = "#";
for(nums=0; nums<lines; nums+=1) {
    console.log(msg);
    msg += "#";
}
//----------------------FizzBuzz---------------------//
console.log("write program that uses console.log to print all the numbers from 1 - 100. For numbers divisible by 3, print \"Fizz\", for numbers divisible by 5, print \"Buzz\", and numbers divisible by both, print \"FizzBuzz\"");

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz"); 
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}
//----------------------Chessboard--------------------//
console.log("write a program that creates a string that represents 8x8 grid, using line characters to separate lines.");
let fullRow = "";
let size = prompt("Please input the size of the grid:");

for(let rowLine = 1; rowLine <= size; rowLine++) {
    for(let columnSpace = 1; columnSpace <= size; columnSpace++) {
        if((columnSpace + rowLine) % 2 == 0) {
            fullRow += " ";  
        }
        else {
            fullRow += "#";  
        }
    }
    console.log(fullRow);
    fullRow = "";
}

