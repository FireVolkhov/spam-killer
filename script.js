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

	if (localStorage.getItem('i_have_shit')) {
		localStorage.removeItem('i_have_shit');

		var clicker = setInterval(function(){
			var target = document.querySelector('.playable') || document.querySelector('.player-controls__btn_next');

			if (target && target.title === 'Пауза [P]') {
				clearInterval(clicker);
				return;
			}

			if (target) {
				target.click();
				clearInterval(clicker);
			}
		}, 200);
	}

	setInterval(function(){
		var spam = document.querySelector('.slider__item.slider__item_advert.slider__item_shown');

		if (spam) {
			localStorage.setItem('i_have_shit', 'true');
			window.location = '';
		}
	}, 200);
};
