var fs = require('fs');
var walk = require('./lib/walk');

var fore;
var later;

exports.renameExtensions = re; 
function re(url, _fore, _later) {
	fore = _fore;
	later = _later;
	chickURL(url,extensions);	
};
function extensions (path) {
	if (path.slice(path.length - fore.length, path.length) === fore) {
		console.log('fore_path:' + path);
		console.log('later_path:' + path.slice(0,path.length - fore.length) + later);
		fs.rename(path, path.slice(0,path.length - fore.length) + later,function() {
			console.log('Success!');
		});
	}
};
function chickURL(url, callback) {
	if(url.slice(url.length - 1, url.length) !== '/') {
		url = url + '/';
	}
	fs.exists(url, function(exists) {
		if(exists) {
			fs.stat(url, function(err, stats) {
				if (err)
					return new Error();
				if (stats.isDirectory()) {
					walk(url, callback);
				}
				else {
					return new Error('is not a Path');
				}
			});
		}
		else {
			return new Error('Path is not exists');
		}
	});

} ;
/*
var url = '/home/maple/Pictures/';
re(url, 'jpg', 'jpeg');			//test
*/
