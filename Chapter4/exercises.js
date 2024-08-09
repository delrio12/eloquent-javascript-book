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

//---------------------------Your Own Loop-----------------------------//

//----------------------------Everything------------------------------//

//----------------------Dominant Writing Direction--------------------//
