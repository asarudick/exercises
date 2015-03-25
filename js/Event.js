function Event() {


  var handlers = [];
  var queue = [];
  var emitting = false;

  /**
   * Removes most recent handler.
   */
  var removeHandler = function(handler) {

    if (emitting) {
      queue.push({
        operation: removeHandler,
        'handler': handler
      });
      return;
    }

    // Exclude if argument isn't a function.
    if (typeof handler.handler !== 'function') return;

    // Remove only once, and remove at the end.
    for (var j = handlers.length - 1; j >= 0; --j) {

      // Remove jth handler if match with an argument.
      if (handlers[j].handler === handler.handler) {
        handlers.splice(j, 1);
        break;
      }

    }
  };



  /**
   * Adds new handler, with context, to the end of the handlers.
   */
  var addHandler = function(handler) {
    if (emitting) {
      queue.push({
        operation: addHandler,
        'handler': handler
      });
      return;
    }
    // Exclude if argument isn't a function.
    if (typeof handler.handler !== 'function') return;

    // Append to end.
    handlers.push(handler);
  };



  /**
   * Processes the queue of addHandler/removeHandler accrued during
   * emitting.
   */
  var processQueue = function() {
    if (queue.length === 0) return;

    for (var i = 0; i < queue.length; i++) {
      queue[i].operation(queue[i].handler);
    }

    // Empty queue.
    queue = [];
  };


  /**
   * Triggers handlers in order of subscription.
   */
  this.emit = function() {

    emitting = true;

    var args = Array.prototype.slice.call(arguments, 0);

    for (var i = 0; i < handlers.length; i++) {
      for (var j = 0; j < args.length; j++) {
        handlers[i].handler.call(handlers[i].context, args[j]);
      }
    }

    processQueue();
    emitting = false;
  };

  this.subscribe = function() {
    var args = Array.prototype.slice.call(arguments, 0);

    for (var i = 0; i < args.length; i++) {
      addHandler({
        handler: args[i],
        context: this
      });
    }
  };

  this.unsubscribe = function() {

    var args = Array.prototype.slice.call(arguments, 0);

    for (var i = 0; i < args.length; i++) {
      removeHandler({
        handler: args[i],
        context: this
      });
    }

  };
}


function l(arr) {
  arr.push('l');
}

function o(arr) {
  arr.push('o');
}

var e = new Event(),
  bucket = [];

e.subscribe(l, o, l);
e.emit(bucket);

console.log(bucket);

e.unsubscribe(o, l);
bucket = [];

e.emit(bucket); //bucket should be ['l']
console.log(bucket);