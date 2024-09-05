//------------------------Flattening---------------------------//
// reduce(), reduce the elements of an array to a single value 
let arrayOfArrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrayOfArrays.reduce((accumulator, next) => accumulator.concat(next)));


//------------------------Your Own Loop--------------------------//

function loop(value, test, update, execute) {
    if (test(value)) {
      execute(value);
      return loop(update(value), test, update, execute);
    } // else stop
  }
//-----------------------------Everything--------------------------------//
function every(array, test) {
  for (let element of array) {
    if (test(element) === false) {
      return false;
    }
  }
  return true;
}

console.log(every([1, 3, 5], n => n < 10));
//  true
console.log(every([2, 4, 16], n => n < 10));
//  false
console.log(every([], n => n < 10));
//  true

// every using array.some
function every(array, test) {
  return array.some(test);
}

console.log(every([1, 3, 5], n => n < 10));
//  true
console.log(every([2, 4, 16], n => n < 10));
//  false
console.log(every([], n => n < 10));
//  true

//---------------------------Dominant Writing Direction--------------------------//
