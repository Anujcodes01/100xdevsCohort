// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function getCurrentTime() {
    const currentTime = new Date();

    const timeFormat24 = currentTime.toLocaleTimeString('en-US', { hour12: false });
    const timeFormat12 = currentTime.toLocaleTimeString('en-US', { hour12: true });

    console.log(`24-hour format: ${timeFormat24}`);
    console.log(`12-hour format: ${timeFormat12}`);
}

setInterval(getCurrentTime, 1000);
