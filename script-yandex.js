window.onload = function(){
	var style = document.createElement('style');

	// WebKit hack :(
	style.appendChild(document.createTextNode(''));
	document.head.appendChild(style);

	style.sheet.insertRule('' +
		'.ads-block {' +
			'opacity: 0;' +
			'pointer-events: none;' +
		'}', 0);

	setInterval(() => {
		const popup = document.querySelector('.crackdown-popup.popup.popup_modal');

		if (popup) {
			const popupIsDisplay = getComputedStyle(popup).display !== 'none';

			if (popupIsDisplay) {
				const popupButton = document.querySelector('.crackdown-popup.popup.popup_modal .d-button.crackdown-popup__close');
				popupButton.click();
				document.querySelector('.d-icon.d-icon_play').click();
			} // else do nothing
		} // else do nothing
	}, 1000);
};
