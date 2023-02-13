window.onload = function(){
	
	let musicState = true;
	let popupState = false;
	let adPlayingState = false;
	let mutedByUser;

	// Changing state to 'popupState'.
	function changeStateToPopup() {
		musicState = false;
		popupState = true;
		adPlayingState = false;
	}
	
	// Changing state to 'adPlayingState'. Muting sound if necessary.
	// The 'muteButton' should be used as an argument when this function is invoked.
	function changeStateToAdPlaying(element) {
		musicState = false;
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

	// Changing state from 'adPlayingState' to default 'musicState'. Unmuting sound if needed.
	// The 'muteButton' should be used as an argument when this function is invoked.
	function changeStateFromAdvertToMusic(element) {
		musicState = true;
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

	// Changing state from 'popupState' to default 'musicState'
	function changeStateFromPopupToMusic() {
		musicState = true;
		popupState = false;
		adPlayingState = false;
						
		// This function clicks Play button (if playback is stopped by Popup):
		// document.getElementById('play-pause-button').click(); 

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
		const upperContainer = popup.closest('tp-yt-paper-dialog');
		// const popupButton = popup.querySelector('[aria-label="Yes"]');
		const advert = document.querySelector('.ytp-ad-player-overlay');

		// Default state, checking for popup or advert
		if (musicState) {
			if (isHere(popup)) {
				if (isHere(upperContainer)) {
					changeStateToPopup();
					// console.log("Changed to Popup State " +Date.now());
				}
			}
			else if (isHere(advert)) {
				changeStateToAdPlaying(muteButton);	
				// console.log("Changed to AdPlaying State " +Date.now());	
			}
		}

		// Closing pop-up element and continuing to music.
		else if (popupState) {
			const popupButton = popup.querySelector('[aria-label="Yes"]');
			if (popupButton) {
				popupButton.click();
				// console.log("'Yes' button clicked at " +Date.now());

				changeStateFromPopupToMusic();
				// console.log("Changed to Music State " +Date.now());
			}
		}

		// Skipping advert if possible, continuing to music.
		else if (adPlayingState) {
			if (isHere(advert)) {
				const skipButton = document.querySelector('.ytp-ad-skip-button');
				if (skipButton) {
					skipButton.click();
					// console.log("Ad skipped at " +Date.now());

					changeStateFromAdvertToMusic(muteButton);
					// console.log("Back to Music State " +Date.now());
				}
			}
			else {
				changeStateFromAdvertToMusic(muteButton);
				// console.log("Back to Music State " +Date.now());
			}
		}

	}, 1000);

}
