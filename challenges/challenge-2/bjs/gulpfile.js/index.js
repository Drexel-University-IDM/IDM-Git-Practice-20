const { parallel } = require('gulp');
const cssTask = require('./tasks/css')

function defaultTask(cb) {
	cb()
}

exports.css = cssTask
exports.default = defaultTask