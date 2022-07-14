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

