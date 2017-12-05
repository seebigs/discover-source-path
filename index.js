/*!
 * discover-source-path
 * Use tricks to find the source file path of the current function being executed
 *
 *   var discoverSourcePath = require('discover-source-path');
 *   var sourcePath = discoverSourcePath(new Error());
 *
 *   Github: https://github.com/seebigs/discover-source-path
 *   Released under the MIT license: https://opensource.org/licenses/MIT
 */

function discoverSourcePath (stackDrop) {
    var error = new Error();

    if (typeof stackDrop === 'undefined') {
        stackDrop = 2;
    }

    var err = error.stack.split('\n');

    for (var i = 0; i < stackDrop; i++) {
        err.shift();
    }

    var pathPieces = err.shift().split('/');
    pathPieces.shift();
    pathPieces.pop();

    return '/' + pathPieces.join('/');
}

discoverSourcePath.debug = function () {
    console.log('`discover-source-path` is looking for source origin in stack:');
    console.log(new Error());
    console.log();
};

module.exports = discoverSourcePath;
