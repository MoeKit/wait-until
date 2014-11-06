module.exports = function(check, onComplete, delay, timeout) {
	// if the check returns true, execute onComplete immediately
	if (check()) {
		onComplete();
		return;
	}

	if (!delay) delay = 100;

	var timeoutPointer;
	var intervalPointer = setInterval(function() {
		if (!check()) return; // if check didn't return true, means we need another check in the next interval

		// if the check returned true, means we're done here. clear the interval and the timeout and execute onComplete
		clearInterval(intervalPointer);
		if (timeoutPointer) clearTimeout(timeoutPointer);
		onComplete();
	}, delay);
	// if after timeout milliseconds function doesn't return true, abort
	if (timeout) timeoutPointer = setTimeout(function() {
		clearInterval(intervalPointer);
	}, timeout);
};