var fs = require('fs');

var lines = fs.readFileSync('algorithm.yml').toString().split("\n");

var regex = /^\s+[-]\s+s[/](.*)[/](.*)[/]$/

var regexes = [];

for (line in lines) {
  var match = regex.exec(lines[line]);
  if (match) {
  	regexes.push(match[1] + ' ' + match[2]);
  }
}

var word = process.argv[2];

for (var i = 0; i < regexes.length; i++) {
	var q = regexes[i].split(' ');
  	
	new_word = word.replace(new RegExp(q[0], 'gu'), q[1]);

	if (new_word !== word) {
		console.log(`s/${q[0]}/${q[1]}/ ${word} => ${new_word}`)
	}

  	word = new_word;
}
