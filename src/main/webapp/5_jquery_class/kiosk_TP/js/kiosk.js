$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');

	})
		

		$('img').click(function(){
			var tr = $('<tr/>');
			var count = $('<td><button class="btn"> - </button><span id="cnt">1</span><button class="btn"> + </button></td>')
			alert($('#listtr').length);
				/*
			for(let i=1; i<=9; i++) {		
			tr.append([$('<td/>').text($('#label'+i).text()),count]);
			$('#listtr').append(tr);
			}*/
			var name = $(this).parent().find("span").attr("data-name");
			var price = $(this).parent().find("span").attr("data-price");
			//alert(price);
		
			tr.append([$('<td/>').text(name),count]);
			$('#list').append(tr);
			$('#total').val(price);
		
		
		});
		/*
		del.click(function(){
			$(this).parent().remove();
			
		});
*/
		$('#list').on("click",".btn:eq(0)",function(){
				if( (parseInt($('#cnt').text()) - 1) == 0 ){
					$(this).parent().parent().remove();
				}else{
					let cnt = parseInt($('#cnt').text()) - 1;
					$(this).parent().find("#cnt").text(cnt);
				}
		});
		
		
		$('#list').on("click",".btn:eq(1)", function(){
			let cnt = parseInt($('#cnt').text()) + 1;
			cnt = String(cnt);
			$(this).parent().find("#cnt").text(cnt);
		});
})