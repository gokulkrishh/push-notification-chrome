(function () {
	'use strict';

	console.log('Came ----->');

	//If serviceWorker supported, then register it
	//Else warn use that serviceWorker is not supported
	if ('serviceWorker' in navigator) {
		console.log('Supports service worker --------->');

    navigator.serviceWorker.register('/serviceWorker.js') //Registering service worker
    .then(initializeFunz);
	}
	else {
		console.warn('Your browser does not support service worker, please update your browser');
	}


	function initializeFunz() {
		console.log('Initialized -------->');
	}

})();