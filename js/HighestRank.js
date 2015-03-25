function highestRank(arr)
{
  if( typeof(arr) !== 'object' || Array.isArray(arr) === false ) return;
  if( arr.length === 0 ) return 0;

  var ranks = {};

  for (var i = 0; i < arr.length; i++) {
    if( ranks[arr[i]] === undefined ) ranks[arr[i]] = 0;
    ranks[arr[i]]++;
  }
  console.log(ranks);

  var highest;

  for (var rank in ranks) {
    if (ranks.hasOwnProperty(rank)) {
      if( highest === undefined || ranks[rank] > ranks[highest] ) highest = rank;
      else if( ranks[rank] == ranks[highest] && rank > highest ) highest = rank
    }
  }
  var args = Array.prototype.slice.call(arguments,0).sort();
  return highest;
}

var arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
console.log( highestRank(arr) );
