export const testData = new (class {
	testStarted = $state(false);
	time = $state(60);
	timerInSecs = $state(0);
	accuracy = $state(100);
	wpm = $state(0);
	userInput = $state('');

	restart() {
		this.testStarted = false;
		this.time = 60;
		this.accuracy = 100;
		this.wpm = 0;
		this.userInput = '';
		this.timerInSecs = 0;
	}
})();
