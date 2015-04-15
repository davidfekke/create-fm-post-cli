#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var pkg = require( path.join(__dirname, 'package.json') );

var program = require('commander')
	.version(pkg.version)
    .arguments('<title> [tags]')
	.action(function (title, tags) {
		titleValue = title;
		tagValue = tags;
	});
	
program.parse(process.argv);

if (typeof titleValue === 'undefined') {
   console.error('no title given!');
   process.exit(1);
}
console.log('title:', titleValue);
console.log('tags:', tagValue || "no tags given");

