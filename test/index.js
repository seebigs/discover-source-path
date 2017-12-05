var one = require('./one/_one.js');

var withDefalutStackDrop = one();
console.log('\nwithDefalutStackDrop');
if (withDefalutStackDrop === __dirname + '/three') {
    console.log('   Passed');
} else {
    console.log('   FAILED');
    console.log(withDefalutStackDrop);
}

var withSpecifiedStackDrop = one(4);
console.log('\nwithSpecifiedStackDrop');
if (withSpecifiedStackDrop === __dirname + '/one') {
    console.log('   Passed');
} else {
    console.log('   FAILED');
    console.log(withSpecifiedStackDrop);
}
