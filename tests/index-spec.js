var expect = require('expect.js');
var waitUntil = require('../index');

describe('wait-until', function() {

	it('normal usage', function(done) {
		var globalVariable = 0;
		expect(globalVariable).to.be(0);

		setTimeout(function() {
			globalVariable = 1;
		}, 1000);

		waitUntil(
			function() {
				console.log("checking globalVariable=" + globalVariable);
				return globalVariable == 1;
			},
			function() {
				expect(globalVariable).to.be(1);
				done();
			}
		);
	});

});