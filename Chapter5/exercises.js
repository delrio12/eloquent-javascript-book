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
//---1---//


//---2---//


//---3---//


//---4---//

//---------------------------Dominant Writing Direction--------------------------//
