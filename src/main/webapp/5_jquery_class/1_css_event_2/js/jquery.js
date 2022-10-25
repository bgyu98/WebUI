/*$(function(){
	$('#menu1').hover(function(){
		$('#menu1').attr('src', 'imgs/menu01_on.png')
	}, function(){
		$('#menu1').attr('src', 'imgs/menu01_off.png')
	});
	$('#menu2').hover(function(){
		$(this).attr('src', 'imgs/menu02_on.png')
	}, function(){
		$(this).attr('src', 'imgs/menu02_off.png')
	});
	$('#menu3').hover(function(){
		$(this).attr('src', 'imgs/menu03_on.png')
	}, function(){
		$(this).attr('src', 'imgs/menu03_off.png')
	});
});*/

$(function(){
	$('.header .menu li img').hover(function(){
		var src = $(this).attr('src');
		$(this).attr('src',src.replace('off','on'));
	}, function(){
		var src = $(this).attr('src');
		$(this).attr('src',src.replace('on','off'));
	})
});

