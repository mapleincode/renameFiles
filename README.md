# renameFiles

processing batch to rename files.

## Install

```shell
cd node_module
git clone git@github.com:mapleincode/renameFiles.git
```

## Usage

This package has only one function:

```javascript
var rename = require('renameFiles');
```

### Rename Files's ExtensionName 

If there a file named 'abc.d'.

```javascript
var url = '';
rename.renameToExtensions(url, 'd', 'f');	//abc.d => abd.f
```

### Rename positive

If there a file named 'abc.d'.

```javascript
var url = '';
rename.posRename(url, 'ab', 'ba', 0);	//abc.d => bac.d
```

### Rename negative

If there a file named 'abc.d'.

```javascript
var url = '';
rename.negRename(url, 'ab', 'ba', 2);	//abc.d => bac.d
```

### Rename by RegExec

if there a file name 'abc.d'.

```javascript
var url = '';
rename.regRename(url, /ab/, 'ba');	//abc.d => bac.d
```

### Add Serial Number

if there a file name 'abc.d'.

```javascript
var url = '';
var initNum = 1;							//init first number
var digit = 4;								//Serial Number digit
rename.addNum(url, digit, initNum, '.');	//abc.d => 0001.abc.d	
```
