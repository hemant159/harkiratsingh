/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(); // Resolve with undefined
        }, milliseconds);
    });
}

async function main() {
    const value = await sleep(3000); // Wait for 3 seconds
    console.log(value); // Logs: undefined
}

main(); // Call main function to start execution


module.exports = sleep;
