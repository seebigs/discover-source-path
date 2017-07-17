# discover-source-path
**Use tricks to find the source file path of the current function being executed**

## Install
```
$ npm install discover-source-path
```

## Use
```js
var discoverRelativePath = require('discover-source-path');
var myFilePath = discoverRelativePath();
```

### stackDrop
If you need to trace back a different number of levels than the default, you can pass the number of lines to drop as a parameter (default is 2 lines dropped from the stack)
```js
discoverRelativePath(3);
```
