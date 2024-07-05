const convertToCelsius = function(temp) {
  tempConversion = (temp - 32) * (5 / 9);
  return parseFloat(tempConversion.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  tempConversion = (temp * (9 / 5) + 32);
  return parseFloat(tempConversion.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
