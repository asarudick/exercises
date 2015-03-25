function VigenereCipher(key, abc) {
  var _key = key;

  var makeAlphabet = function(letters) {
    var alpha = Array.prototype.slice.call(letters);
    var result = {};
    for (var i = 0; i < alpha.length; i++) {
      result[alpha[i]] = i;
    }

    return result;
  };

  var invert = function(obj) {

    var new_obj = {};

    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        new_obj[obj[prop]] = prop;
      }
    }

    return new_obj;
  };

  var alphabet = makeAlphabet(abc);
  var invertedAlphabet = invert(alphabet);

  this.encode = function(str) {
    var result = [],
      strArray = Array.prototype.slice.call(str);


    for (var i = 0; i < strArray.length; i++) {
      if (!alphabet.hasOwnProperty(strArray[i])) {
        result.push(strArray[i]);
        continue;
      }
      result.push(invertedAlphabet[((alphabet[strArray[i]] + alphabet[_key[i %
        _key.length]]) % Object.keys(alphabet).length)]);
    }

    return result.join("");
  };
  this.decode = function(str) {
    var result = [],
      strArray = Array.prototype.slice.call(str);


    for (var i = 0; i < strArray.length; i++) {
      if (!alphabet.hasOwnProperty(strArray[i])) {
        result.push(strArray[i]);
        continue;
      }
      var pos = (alphabet[strArray[i]] - alphabet[_key[i % _key.length]]);
      if (pos < 0) pos = Object.keys(alphabet).length + pos;
      result.push(invertedAlphabet[pos]);
    }

    return result.join("");
  };
}

function getTestElements() {
  return document.getElementsByClassName('test');
}

function replaceTestContent() {
  var testElements = getTestElements();

  var replace = function(elements) {
    if (elements.length > 0) elements[0].innerHTML = 'elem';
    if (elements.length > 1) elements[1].innerHTML = 'elem 2';
    if (elements.length > 2) replace(Array.prototype.slice.call(elements, 2));
  };

  replaces(testElements);

}



var v = new VigenereCipher("password", "abcdefghijklmnopqrstuvwxyz");
console.log(v.encode("codewars"));
console.log(v.decode("rovwsoiv"));