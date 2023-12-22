/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
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

    const startTime = new Date().getTime();

    await wait1();
    await wait2();
    await wait3();

    const endTime = new Date().getTime();

    const timeTaken = (endTime - startTime)/1000;

    console.log(`The time taken in the proccess is ${timeTaken}`)
}
calculateTime()
module.exports = calculateTime;
