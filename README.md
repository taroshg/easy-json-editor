# Easy JSON Editor
Edit JSON files with ease.

## Installation
Install this at your project location.

```
$ npm i easy-json-editor
```

## Docs
Get Easy JSON Editor up and running in just a few lines of code.

```
const easyJSON = require(easy-json-editor);
const jsonFile = easyJSON.file(foo.json); //replace your JSON file
```

### Add
```
add(object)
```
Example:
```
jsonFile.add({
    foo: 'boo',
    foo1: 'boo1'
});
```
### Remove
```
remove(key, value) //removes an object where (key = value)
```
Example:
```
jsonFile.remove('foo1', 'boo1');
```

### Find
```
find(key, value) //returns an object where (key = value)
```
Example:
```
jsonFile.find('foo', 'boo');
```
