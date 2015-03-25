(function() {
  "use strict";

  function skrzat(type, input) {

    var toWeirdBinary = function(decimal) {


      var result = '',
        remainder = 0,
        oldValue = decimal;

      while (decimal !== 0) {
        remainder = decimal % -2;
        result += ((remainder !== 0) ? '1' : '0').toString(2);
        decimal = Math.ceil(decimal / -2);
      }

      if (result === '') {
        result = '0';
      }

      return 'From decimal: ' + oldValue + ' is ' + result.split('').reverse()
        .join('');
    };

    var toDecimal = function(binary) {
      var result = 0;

      for (var i = binary.length - 1; i >= 0; --i) {
        if (binary[i] === '1')
          result += Math.pow(-2, (binary.length - 1) - i);
      }

      return 'From binary: ' + binary + ' is ' + result;
    }

    if (type === 'd')
      return toWeirdBinary(input);
    return toDecimal(input);
  }

  // console.log("15: " + skrzat('b', 15));
  // console.log("14: " + skrzat('b', 14));
  // console.log("13: " + skrzat('b', 13));
  // console.log("12: " + skrzat('b', 12));
  // console.log("11: " + skrzat('b', 11));
  // console.log("10: " + skrzat('b', 10));
  console.log(skrzat('d', '0'));

}());
