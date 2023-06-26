function fetchFromService(callback) {
  setTimeout(() => {
    // Simulate a service operation
    const value = Math.random();
    const error = value > 0.8 ? new Error('An error occurred.') : null; // Simulate a potential error
    const dataFromSvc = error
      ? null
      : 'This is data from the service: ' + value;
    callback(error, dataFromSvc);
  }, 1000);
}

module.exports = fetchFromService;
