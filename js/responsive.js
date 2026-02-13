$( document ).ready(function(){

// Кнопка для мобильного меню. Раскомментировать при необходимости.
$(".button-collapse").sideNav();

// Красивые изображения с возможностью открытия и текстом-подписью.
$('.materialboxed').materialbox();

// Боковая навигация по странице по типу якорей.
$('.scrollspy').scrollSpy();

// Pushpin - летающий сайдбар, прилипающий к верху и низу страницы.
	setTimeout(function() {
      var tocWrapperHeight = 260; // Max height
      var tocHeight = $('.toc-wrapper .table-of-contents').length ? $('.toc-wrapper .table-of-contents').height() : 0;
      var socialHeight = 150; // Height from bottom
      var footerOffset = $('body > footer').first().length ? $('body > footer').first().offset().top : 0;
      var bottomOffset = footerOffset - socialHeight - tocHeight - tocWrapperHeight;

      var pushpinObj = {
        bottom: bottomOffset
      };

      if ($('nav').length) {
        pushpinObj.top = $('nav').height();

      } else if ($('#index-banner').length) {
        pushpinObj.top = $('#index-banner').height();

      } else {
        pushpinObj.top = 0;
      }

      if ($('.fixed-announcement').length) {
        pushpinObj.top += 48;
      }

      $('.toc-wrapper').pushpin(pushpinObj);
    }, 100);
	
// Вылетающий сбоку список. Для работы присвоить списку класс .staggered-test
 var options = [
	{selector: '.staggered-test', offset: 400, callback: function(el) {
        Materialize.showStaggeredList($(el));
	} } ]
	Materialize.scrollFire(options);
// Слайдер
	$('.carousel.carousel-slider').carousel({
		fullWidth: true,
		
		
		});

var $btnTop = $(".back-to-top");
$(window).on("scroll", function(){
	if ($(window).scrollTop() >= 600){
		$btnTop.fadeIn();
	}else{
		$btnTop.fadeOut();
	}
});

$btnTop.on("click", function(){
	$("html,body").animate({scrollTop:0}, 900)
});
});

// Прелоадер Circle Blue
document.addEventListener("DOMContentLoaded", function(){
	$('.preloader-background').delay(1700).fadeOut('slow');
	
	$('.preloader-wrapper')
		.delay(1700)
		.fadeOut();
});