(function () {
	'use strict';

	//If serviceWorker supported, then register it
	//Else warn use that serviceWorker is not supported
	if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./serviceWorker.js') //Registering service worker
    .then(initializeFunz);
	}
	else {
		console.warn('Your browser does not support service worker, please update your browser');
	}

	var btn = document.getElementById('subscribe');
	//Adding click event to btn
	btn.addEventListener('click', function () {
		console.log('Clicked ------->');
	});

	//After service worker register, check for notification support
	function initializeFunz() {
		console.log('Initialized -------->', Notification.permission);

		//Check for Notification permission
		if (Notification.permission === 'denied') {
			alert('User blocked the notification');
			return false;
		}

		//Check for push notification support
		if (!('pushManager' in window)) {
			alert('Push notification is not supported');
			return false;
		}
	}

})();