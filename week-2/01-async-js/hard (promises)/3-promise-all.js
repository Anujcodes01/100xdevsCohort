/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
 return new Promise(resolve =>setTimeout(resolve,2000))
}

function wait2(t) {
    return new Promise(resolve =>setTimeout(resolve,3000))

}

function wait3(t) {
    return new Promise(resolve =>setTimeout(resolve,4000))

}

async function calculateTime() {



    const startTime = new Date().getTime() ;
    
    await Promise.all([wait1(), wait2(), wait3()]);
    
    const endTime = new Date().getTime() ;
    const timeTaken = endTime - startTime;
    console.log(timeTaken/1000)
}



calculateTime()
module.exports = calculateTime;
