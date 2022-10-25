$(function(){
	$('#hideButton').click(function(){
			$('#grim').hide();
		});
	$('#showButton').click(function(){
			$('#grim').show();
		});
	$('#toggleButton').click(function(){
			$('#grim').slideToggle(2000);
		});		
		
	//테이블의 내용 중 홀수행의 배경색을 지정
	$('table.data > tbody > tr:even').addClass('table_striping')
	$('table.data > tbody > tr:odd').addClass('table_striping')
	
	//마우스가 올라갔을 때 배경색 바뀌고 다시 나오면 원상복구
	$('table.data > tbody > tr').hover(function(){
								$(this).addClass('td_mouseover');
							}, function(){
								$(this).removeClass('td_mouseover');
							});
	
});