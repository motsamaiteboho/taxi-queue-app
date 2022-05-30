function TaxiQueue(_counter, _taxiCounter) {

	var counter = _counter ? _counter : 0;
	var taxiCounter = _taxiCounter ? _taxiCounter : 0;

	function joinQueue() {
		counter++;
	}

	function leaveQueue() {
		if(counter > 0)
		{
			counter--;
		}
	}

	function joinTaxiQueue() {
		taxiCounter++;
	}

	function queueLength(){
		return counter;
	}

	function taxiQueueLength() {
		return taxiCounter;
	}

	function taxiDepart(){
		if(counter >= 12 && taxiCounter > 0)
		{
			taxiCounter--;
			counter = counter - 12;
		}
	}

	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart
	}
}