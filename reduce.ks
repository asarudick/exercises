Array.prototype.reduce = function(process, initial) {
  for (var i = 0; i < this.length; i++) {
    process( this[i], initial );
  }
};
