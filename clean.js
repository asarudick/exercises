var fs = require('fs');

// endsWith polyfill
if (!String.prototype.endsWith) {
  Object.defineProperty(String.prototype, 'endsWith', {
    value: function (searchString, position) {
      var subjectString = this.toString();
      if (position === undefined || position > subjectString.length) {
        position = subjectString.length;
      }
      position -= searchString.length;
      var lastIndex = subjectString.indexOf(searchString, position);
      return lastIndex !== -1 && lastIndex === position;
    }
  });
}




var replaceOriginals = function(files){

	for (var i = 0; i < files.length; i++) {
		if( files[i].endsWith('_original.jpg') || files[i].endsWith('_original.JPG') )
			{
				if( fs.existsSync(files[i].replace('_original','')) ) fs.unlinkSync(files[i].replace('_original',''));
				fs.renameSync(files[i], files[i].replace('_original',''));
			}
	}

};

var foundFiles = fs.readdirSync(process.argv[2]);
foundFiles = foundFiles.map(function(a){ return process.argv[2] + '/' + a; });
//console.log(foundFiles);
replaceOriginals(foundFiles);
