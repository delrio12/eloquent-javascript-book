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
console.log(range2(1,10,2));
console.log(range2(5,2));

//------------------------Reversing an Array--------------------------//
//---1---//
function reverseArray(array1) {
    let array2 = [];
    for(i=array1.length-1 ; i>=0 ; i--) {
        array2.push(array1[i]);
    }
    return array2;
}
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
console.log(reverseArrayInPlace([432,2,32,4,5,6,7]));
//------------------------------A List--------------------------------//

//---------------------------Deep Comparison--------------------------//
