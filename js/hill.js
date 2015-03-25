function hill(v)
{
  var max = 0;
  for (var i = 0; i < v.length - 1; i++) {
    if( v[i] < v[i+1] ) continue;
    if( Math.abs( v[i] - (v[i+1] - 1))) > max )
      max = Math.abs( v[i] - (v[i+1] - 1));
  }

  console.log( max );
}
