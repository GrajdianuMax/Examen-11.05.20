(function (window, $) {
	'use strict';

	var document = window.document;


	$('a.toggle-menu').click(function(){
        $(".menu").slideToggle(400);
		return false;
    });




	$(".menu a").click(function(){
		var id =  $(this).attr('class');
		id = id.split('-');
		$("#menu-container .content").hide();
		$("#menu-container #menu-"+id[1]).addClass("animated fadeInDown").show();
		return false;
	});

	$(".menu a.homebutton").click(function(){
		$(".menu").slideUp();
	});


	$(window).resize(function(){
		if ($(window).width() <= 769){	
			$(".menu a").click(function(){
				$(".menu").hide();
				return false;
			});
		}	
	});

		$('ul.tabs').each(function(){

		var $active, $content, $links = $(this).find('a');

		$active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
		$active.addClass('active');

		$content = $($active[0].hash);

		$links.not($active).each(function () {
		$(this.hash).hide();  
		});

		$(this).on('click', 'a', function(e){
		$active.removeClass('active');
		$content.hide();

		$active = $(this);
		$content = $(this.hash);

		$active.addClass('active');
		$content.slideToggle();

		e.preventDefault();
		});
	});

	$(function(){
		$('[data-rel="lightbox"]').lightbox();
	});


})(window, jQuery);

