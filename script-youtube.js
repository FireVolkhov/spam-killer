window.onload = function(){
	
	let musicPlayingState = true;
	let popupState = false;
	let adPlayingState = false;
	let mutedByUser;

	// Changing state to 'popupState'.
	// The 'muteButton' should be used as an argument when this function is invoked.
	function changeStateToPopup(element) {
		musicPlayingState = false;
		popupState = true;
		adPlayingState = false;
		if (isMuted(element)) {
			mutedByUser = true;
			// console.log("Has been muted by user");
		}
		else {
			mutedByUser = false;
		}
	}
	
	// Changing state to 'adPlayingState'. Muting sound if necessary.
	// The 'muteButton' should be used as an argument when this function is invoked.
	function changeStateToAdPlaying(element) {
		musicPlayingState = false;
		popupState = false;
		adPlayingState = true;
		if (isMuted(element)) {
			mutedByUser = true;
			// console.log("Has been muted by user");
		}
		else {
			element.click();
			mutedByUser = false;
			// console.log("Muted at " +Date.now());
		}
	}

	// Changing state to default 'musicPlayingState'. Unmuting sound if needed.
	// The 'muteButton' should be used as an argument when this function is invoked.
	function changeStateToMusicPlaying(element) {
		musicPlayingState = true;
		popupState = false;
		adPlayingState = false;		
		if (isMuted(element)) {
			if (mutedByUser) {
				// console.log("Staying mute because was muted by user");
			} 
			else {
				element.click();
				mutedByUser = false;
				// console.log("Unmuted at " +Date.now());
			}
		}
	}

	// Checking if the sound is muted.
	// The 'muteButton' should be used as an argument when this function is invoked.
	function isMuted(element) {
		if (element) {
			return element.getAttribute('aria-pressed') === 'true';
		} else {
			return true; // - I think it's better to stay 'true'.
		}
	}

	// Checking if element is displayed on a page.
	// The 'popup' or 'advert' can be used as an argument when this function is invoked.
	function isHere(element) {
		if (element) {
			return getComputedStyle(element).display !== 'none';
		}
		else {
			return false;
		}
	}



	setInterval(() => {
		const muteButton = document.querySelector('.volume.style-scope.ytmusic-player-bar');
		const popup = document.querySelector('.actions.style-scope.ytmusic-you-there-renderer');
		const advert = document.querySelector('.ytp-ad-player-overlay');

		// Default state, checking for popup or advert
		if (musicPlayingState) {
			if (isHere(popup)) {
				changeStateToPopup(muteButton);
				// console.log("Changed to Popup State " +Date.now());
			}
			else if (isHere(advert)) {
				changeStateToAdPlaying(muteButton);	
				// console.log("Changed to AdPlaying State " +Date.now());	
			}
		}

		// Closing pop-up element and continuing to music.
		else if (popupState) {
			if (isHere(popup)) {
				const popupButton = popup.querySelector('[aria-label="Yes"]');
				popupButton.click();
				
				// This function clicks Play button if playback was stopped by Popup.
				// document.getElementById('play-pause-button').click(); 

				// console.log("'Yes' button clicked at " +Date.now());
				changeStateToMusicPlaying();
				// console.log("Changed to MusicPlaying " +Date.now());
			}
		}

		// Skipping advert if possible, continuing to music.
		else if (adPlayingState) {
			if (isHere(advert)) {
				const skipButton = document.querySelector('.ytp-ad-skip-button');
				if (skipButton) {
					skipButton.click();
					// console.log("Ad skipped at " +Date.now());
					changeStateToMusicPlaying(muteButton);
					// console.log("Changed to MusicPlaying State " +Date.now());
				}
			}
			else {
				changeStateToMusicPlaying(muteButton);
				// console.log("Changed to MusicPlaying State " +Date.now());
			}
		}

	}, 1000);

}
