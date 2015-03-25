Array.prototype.reduce = function(process, initial) {
  var value = initial;
  for (var i = 0; i < this.length; i++) {
    if( ( i === 0 ) && ( value === undefined || value === null ))
    {
        value = this[0];
        continue;
    }
    value = process( value, this[i] );
  }
  return value;
};
