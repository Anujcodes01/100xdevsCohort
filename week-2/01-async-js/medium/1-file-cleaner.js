// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```
const fs = require('fs');

fs.readFile('medium.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    // Remove extra spaces using regular expression
    const trimmedData = data.replace(/\s+/g, ' ').trim();

    fs.writeFile('medium.txt', trimmedData, 'utf8', (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('File updated successfully.');
    });
});
