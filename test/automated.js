const one = require('./one/_one.js');

let withDefalutStackDrop = one();
console.log('\nwithDefalutStackDrop');
if (withDefalutStackDrop === __dirname + '/three') {
    console.log('   Passed');
} else {
    console.log('   FAILED');
    console.log(withDefalutStackDrop);
}

let withSpecifiedStackDrop = one(4);
console.log('\nwithSpecifiedStackDrop');
if (withSpecifiedStackDrop === __dirname + '/one') {
    console.log('   Passed');
} else {
    console.log('   FAILED');
    console.log(withSpecifiedStackDrop);
}
