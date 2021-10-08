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
		const popupButton = document.querySelector('.crackdown-popup.popup.popup_modal .d-button.crackdown-popup__close');

		if (popupButton) {
			popupButton.click();
			document.querySelector('.d-icon.d-icon_play').click();
		}
	}, 1000);

	// if (localStorage.getItem('i_have_shit')) {
	// 	localStorage.removeItem('i_have_shit');
	//
	// 	var clicker = setInterval(function(){
	// 		var target = document.querySelector('.playable') || document.querySelector('.player-controls__btn_next');
	//
	// 		if (location.host === "music.yandex.ru") {
	// 			var reg = /.+\(Вперёд \[L\]\)/gi;
	//
	// 			if (target && reg.test(target.title)) {
	// 				target.click();
	// 				clearInterval(clicker);
	// 			}
	// 		} else {
	// 			if (target && target.title === 'Пауза [P]') {
	// 				clearInterval(clicker);
	// 				return;
	// 			}
	//
	// 			if (target && target.title === 'Играть [P]') {
	// 				target.click();
	// 				clearInterval(clicker);
	// 			}
	// 		}
	// 	}, 200);
	// }
	//
	// setInterval(function(){
	// 	var radioSpam = document.querySelector('.slider__item.slider__item_advert.slider__item_shown');
	// 	var musicSpam = document.querySelector('.audio-advert:not(.audio-advert_hidden)');
	//
	// 	if ((radioSpam || musicSpam) && !localStorage.getItem('i_have_shit')) {
	// 		localStorage.setItem('i_have_shit', '1');
	// 		window.location = '';
	// 	}
	// }, 200);
};

// <div class="crackdown-popup popup_compact local-theme-white local-icon-theme-white popup deco-pane-popup popup_modal"
//      data-b="3517" style="top: 44px; left: 527px;">
// 	<div class="crackdown-popup__inner">
// 		<button
// 				class="d-button deco-button deco-button-flat d-button_type_flat d-button_w-icon d-button_w-icon-centered crackdown-popup__close"
// 				data-b="3518" type="button"><span class="d-button-inner deco-button-stylable"><span
// 				class="d-button__inner"><span class="d-icon deco-icon d-icon_cross-big  "></span></span></span></button>
// 		<div class="crackdown-popup__slide crackdown-popup__content"><h2 class="crackdown-popup__title typo-display_bold">
// 			Музыка без остановки</h2>
// 			<div class="crackdown-popup__description">Бесплатно слушать музыку в&nbsp;фоновом режиме можно только ограниченное
// 				время. Оформите подписку, и&nbsp;музыку ничего не&nbsp;остановит.
// 			</div>
// 			<div class="crackdown-popup__products">
// 				<div class="crackdown-popup__products">
// 					<button
// 							class="d-button deco-button deco-button-action local-icon-theme-white d-button_with-sublabel d-button_rounded d-button_size_XL crackdown-popup__product crackdown-popup__product_30"
// 							data-b="3519" data-product-id="ru.yandex.web.plus.native.1month.autorenewable.2month.trial.new_plus.199v2"
// 							type="button"><span class="d-button-inner deco-button-stylable"><span class="d-button__inner"><span
// 							class="d-button__label">60 дней бесплатно</span><span
// 							class="d-button__sublabel">а потом 199 ₽ в месяц</span></span></span></button>
// 					<button
// 							class="d-button deco-button d-button_rounded d-button_size_XL crackdown-popup__product crackdown-popup__product_360"
// 							data-b="3520" data-product-id="ru.yandex.web.music.native.1year.autorenewable.notrial.new_plus.1690"
// 							type="button"><span class="d-button-inner deco-button-stylable"><span class="d-button__inner"><span
// 							class="d-button__label">1690 ₽ в год</span></span></span></button>
// 				</div>
// 			</div>
// 		</div>
// 		<div class="crackdown-popup__mbform _hidden">
// 			<div class="mbform" data-b="3521"></div>
// 		</div>
// 	</div>
// </div>
//
// <div class="overlay deco-pane-overlay overlay_shown"></div>
//


