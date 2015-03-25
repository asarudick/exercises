function check_anagrams(first_words, second_words)
{
  'use strict';
  var checkAnagram = function(a,b) {
    if( typeof a !== 'string' || typeof b !== 'string' ) return false;
    return a.split('').sort().join('') === b.split('').sort().join('');
  }

  var maxLength = Math.max(first_words.length, second_words.length);

  for (var i = 0; i < maxLength; i++) {
   console.log((checkAnagram(first_words[i], second_words[i]) ? 1 : 0));
  }

}
