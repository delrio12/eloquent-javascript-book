//------------------------The Sum of a Range---------------------------//
//---1---//
function range(start,end) {
    let setOfNums=[];
    for(let i=start;i<=end; i++)
    {
        setOfNums.push(i);
    }
    return setOfNums;
     
}
console.log('1.1');
console.log(range(1,10));

//---2---//
function sum(arrayOfNums) {
    result = 0;
    for(let i=0;i<arrayOfNums.length; i++)
    {
        result+=arrayOfNums[i];
    }
    return result;
}
console.log('1.2');
console.log(sum(range(1,10)));

//---3---//
function range2(start,end,step) {
    let setOfNums=[];
    if(start > end && step == null) step = -1;   
    if (step == null) step = 1;
    
    if(step > 0) {
        for(let i=start;i<=end; i+=step)
            {
                setOfNums.push(i);
                
            }
    }
    else {
        for(let i=start;i>=end; i+=step)
            {
                
                setOfNums.push(i);
            }
    }
    
    return setOfNums;
}
console.log('1.3');
console.log(range2(1,10,2));
console.log('1.4');
console.log(+range2(5,2));

//------------------------Reversing an Array--------------------------//
//---1---//
function reverseArray(array1) {
    let array2 = [];
    for(i=array1.length-1 ; i>=0 ; i--) {
        array2.push(array1[i]);
    }
    return array2;
}
console.log('2.1');
console.log(reverseArray([1,2,32,4,5,6,7]));

//---2---//
function reverseArrayInPlace(array1) {
    for(i=array1.length-1 ; i>=0 ; i--) {
        array1.push(array1[i]);
    }
    for(i=0 ; i<array1.length ; i++) {
            array1.shift();
        }
    return array1;
}
console.log('2.2');
console.log(reverseArrayInPlace([432,2,32,4,5,6,7]));

//------------------------------A List--------------------------------//
//---1---//
var array1 = [10, 20, 30];
function arrayToList(array) {
    var list = {};
    for (var i = 0; i < array.length; i++) {
        list.value = array.splice(0, 1)[0];
        list.rest = (array.length > 0) ? arrayToList(array) : null;
    }
    return list;
}
console.log('3.1');
console.log(arrayToList(array1));

//---2---//
let list1 = {
    value: 10,
    rest: {
        value: "dude",
        rest: {
            value: 30,
            rest: 0
        }
    }
};
function listToArray(list) {
    var result = [];
    while(list.value){
        result.push(list.value);
        list = list.rest;
    }
    return result;  
};

console.log('3.2');
console.log(listToArray(list1));

//---3---//
function prepend(value, list) {
    return {value, rest: list};
}
console.log(prepend('ok', list1));

//---4---//
function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
}
console.log(nth(arrayToList([10, 20, 30]), 1));
//---------------------------Deep Comparison--------------------------//

function deepEqual(value1, value2) {
    var result = false;
    if (value1 === value2) {
      return true;
    } else if (value1 === null || value2 === null) {
      return false;
    } else {
      if (typeof(value1) === "object" || typeof(value2) === "object") {
        for (var key in value1) {
          if (JSON.stringify(value1[key]) === JSON.stringify(value2[key])) {
            result = true;
          } else {
            return false;
          }
        };
        //return result after all the values in object are compared.
        return result;
      }
    }
  }
let obj = {here: {is: "an"}, object: 2};
let obj2= {here: {is: "the"}, object: 2};3

console.log(deepEqual(obj, obj2));
console.log(deepEqual(obj2, obj2));
console.log(deepEqual(obj, {here: 21, object: 2}));