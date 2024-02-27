/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
function delay(seconds) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, seconds * 1000); // Convert seconds to milliseconds
    });
  }
  
  // Example usage:
  delay(3).then(() => {
    console.log('This message will be logged after 3 seconds.');
  });
  
module.exports = wait;
