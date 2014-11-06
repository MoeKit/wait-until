# Demo

---

## Normal usage

````javascript
seajs.use('index', function(waitUntil) {
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
});
````
