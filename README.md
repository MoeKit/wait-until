# wait-until [![spm version](https://moekit.timo.today/badge/wait-until)](https://moekit.timo.today/package/wait-until)

---



## Install

```
$ spm install wait-until --save
```

## Usage

```js
var waitUntil = require('wait-until');
// use waitUntil
var globalVariable=0;

setTimeout(function () { globalVariable=1; },2000);

waitUntil(
  function () {
      console.log("checking globalVariable="+globalVariable);
      return globalVariable==1;
  },
  function () {
      alert("done!");
  }
);
```
