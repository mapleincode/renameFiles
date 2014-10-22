var fs = require('fs');
var filesArray = new Array();
var urlArray = new Array();
module.exports = walk;
function walk(fd, callback) {
	fs.readdir(fd.toString(), function(err, files) {
		if (err)
			console.log(new Error(err));
		files.forEach(function(f) {
			fs.stat((fd + f).toString(),function(err, stats) {
				if (err)
					console.log(new Error(err));
				if (stats.isDirectory()) {
					walk(fd + f + '/', callback);
				}
				else {
					callback(fd + f);
				}
			});
		});
		
	});
	
}
