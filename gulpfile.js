var requireDir = require('require-dir');
var config = require('./gulp/config.js');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });
