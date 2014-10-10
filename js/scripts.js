$(function(){
		$('.btnMenu').click(function(e){
				$('nav').toggleClass('open');
		});
		
		var mySwiper = $('.swiper-container').swiper({
			mode:'horizontal',
			loop: true
		});
});
