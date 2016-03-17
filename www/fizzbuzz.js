module.exports = function(number, callback) {
  cordova.exec(callback, function(error) {
    callback("Invalid Number");
  }, "FizzBuzz", "fizzbuzz", [number])
};
