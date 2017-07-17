const discoverSourcePath = require('../../index.js');

function three (stackDrop) {
    return discoverSourcePath(stackDrop);
}

module.exports = three;
