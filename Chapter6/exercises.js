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
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => code >= from &&
                                           code < to)) {
      return script;
    }
  }
  return null;
}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function dominantDirection(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");
  switch (scripts.length) {
    case 0:
      return 'no dominant direction found';
    case 1:
      return scripts[0].name;
    default:
      if (scripts.reduce((acc, cur) => acc.count === cur.count)) {
        return 'no dominant direction found';
      } else {
        return scripts.reduce((acc, cur) => acc.count >= cur.count ? acc.name : cur.name);
      }
  }
}

console.log(dominantDirection("Hello!"));
// ltr
console.log(dominantDirection("Hey, مساء الخير"));
// rtl
console.log(dominantDirection(""));
// no dominant direction found
console.log(dominantDirection("Heyخير"));
// no dominant direction found