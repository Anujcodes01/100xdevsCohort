// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
let count = 0;

function counter() {
  if (count >= 0) {
    setTimeout(function() {
      count++;
      console.log(count);
      counter(); // Call the function again to continue the countdown
    }, 1000);
  }
}

counter(); // Start the counter



































































// (Hint: setTimeout)