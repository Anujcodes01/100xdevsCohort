// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.


// this function remove the existing data and insert the given input


// const fs = require('fs');
// let data = "this is the updated text"
// fs.writeFile('a.txt',data,(err)=>{
//     if (err) throw err;
//     console.log('sucessfully updated the text file')


// })


// this function just just update the file and doesn't harm the existing data 


const fs = require('fs');
let data = " now we are using append functtion"
fs.appendFile('a.txt',data,(err)=>{
    if (err) throw err;
    console.log('sucessfully updated the text file using append')


})
