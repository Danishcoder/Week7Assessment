const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}

const arrObj = {
tinyArray: getSizedArray(10),
smallArray: getSizedArray(100),
mediumArray: getSizedArray(1000),
largeArray: getSizedArray(10000),
extraLargeArray: getSizedArray(100000),
}



    // How long does it take to double every number in a given 
    // array? 

    for (arr in arrObj) {
    // Try it with first function
    perf.start();                     // Starts timer
    doublerAppend(arrObj[arr]);
    let resultsAppend = perf.stop();  // Stops timer and save time results


    // Try it with second function
    perf.start();
    doublerInsert(arrObj[arr]);
    let resultsInsert = perf.stop();


    console.log('Results for the ' + arr);
    console.log("insert", resultsInsert.preciseWords);
    console.log("append", resultsAppend.preciseWords);
}



// Results Table

// Results for the tinyArray
// insert 30.2 μs
// append 62.6 μs

// Results for the smallArray
// insert 11.5 μs
// append 9.3 μs

// Results for the mediumArray
// insert 107.8 μs
// append 31.7 μs

// Results for the largeArray
// insert 6.768 ms
// append 286.7 μs

// Results for the extraLargeArray
// insert 609.8499 ms
// append 2.6312 ms


//paragraph explanation
/*
The insert function performs almost as well as the append function on smaller arrays but the difference between speed is notable when the array
gets larger, with the append function being orders of magnitude faster. I can tell that the append function scales better because I can see the that
the difference between the speed of insert and append starts to get much larger as the quantity of the array gets larger.
*/