# JS Challenge

Stack
- JavaScript / Node.js
- Jest

Topics:
- Asynchronous programming
- Callbacks
- Promises
- async/await
- Unit testing
- Mocking


## Introduction
In JavaScript, whether in a Node.js or a browser environment, the callback pattern is frequently used for handling asynchronous operations.

As our application scales, we might find the Promise pattern more beneficial due to its superior error handling and its ability to chain asynchronous operations more effectively.

Consider the function below that uses a callback:

```javascript
function fetchFromService(callback) {
  setTimeout(() => {
    // Simulate a service operation
    const value = Math.random();
    const error = value > 0.8 ? new Error('An error occurred.') : null; // Simulate a potential error
    let dataFromSvc = 'This is data from the service: ' + value;
    if (error) {
      dataFromSvc = null;
    }
    callback(error, dataFromSvc);
  }, 1000);
}
```
This function fetches data from a service, simulated by the setTimeout function. If an error occurs during this operation (randomly generated for simulation), it's passed as the first argument to the callback. If the operation is successful, the data is passed as the second argument.

## Challenge

### Level 1
Write a small JavaScript script to demonstrate the use of the `fetchFromService` function. Utilize `console.info` and `console.error` to display the output of `fetchFromService`.

### Level 2
Create a wrapper function that transforms the callback-based `fetchFromService` function into a Promise-based function. Demonstrate how to use this wrapped function.

### Level 3 & 4
Write Jest unit tests for both the Promise-based function and the original callback-based function.

Given that the function relies on a random number to simulate potential failures, how can we achieve consistent testing?

### Level 5
The function simulates a service operation with a timeout of 1 second. What if the timeout took longer? How can we handle tests that take an extended amount of time to execute?