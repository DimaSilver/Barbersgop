$(function(){
	$('.news-gallery__block-slider').slick({
		prevArrow: '<button type="button" class="btn news-gallery__block-slider__arrows news-gallery__block-slider__prev">Назад</button>',
		nextArrow: '<button type="button" class="btn news-gallery__block-slider__arrows news-gallery__block-slider__next">Вперед</button>',
		autoplay: true,
		autoplaySpeed: 3000,
		infinite: true,
		responsive: [
			{
				breakpoint: 500,
				settings: {
					arrows: false,
					dots: true,
					dotsClass: 'news-gallery__block-slider__dots'
				}
			}
		]
	});
	$(document).ready(function() {
		$('.header__right-item').magnificPopup({
			type: 'inline',
			preloader: false,
			focus: '#login__form',
			callbacks: {
				beforeOpen: function() {
					if($(window).width() < 700) {
						this.st.focus = false;
					} else {
						this.st.focus = '#login__form';
					}
				}
			}
		});
	});
	$('.login__form-checkbox, .catalog__filter-checkbox').styler();
	$(document).ready(function() {
		$('.contacts__block-btn__map').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	});
	$('.menu__list').on("click", ".menu__item", function() {
		$(this).addClass('menu__item--active').siblings().removeClass('menu__item--active');
	});
	$('.pagination__list-item').on('click', function () {
		$(this).addClass('pagination__list-item--active').siblings().removeClass('pagination__list-item--active');
	});
	$('.product-page__gallery').slick({
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		asNavFor: '.product-page__gallery-small',
		responsive: [
			{
				breakpoint: 531,
				settings: {
					fade: false,
					dots: true,
					dotsClass: 'product-page__gallery-dots'
				}
			}
		]
	});
	$('.product-page__gallery-small').slick({
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.product-page__gallery',
		focusOnSelect: true
	});
	$('.header__menu-btn').on('click', function () {
		$('.header__left-list').slideToggle();
	});
});