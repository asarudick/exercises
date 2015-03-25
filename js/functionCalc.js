function zero() {
  return val(0, Array.prototype.slice.call(arguments));
}

function one() {
  return val(0, Array.prototype.slice.call(arguments));
  }

function two() {}

function three() {}

function four() {}

function five() {}

function six() {}

function seven() {}

function eight() {}

function nine() {}

function value(val, args) {

  if (args.length > 0 && typeof args[0] === 'function') {
    return args[0](val);
  }
  return val;

}

function plus(right_operand) {
  return function(left_operand) {
    return left_operand + right_operand;
  };
}

function minus() {
  return function(left_operand) {
    return left_operand - right_operand;
  };
}

function times() {
  return function(left_operand) {
    return left_operand * right_operand;
  };
}

function dividedBy() {
  return function(left_operand) {
    return left_operand / right_operand;
  };
}
