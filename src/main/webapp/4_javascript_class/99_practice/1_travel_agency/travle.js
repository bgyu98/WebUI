		window.onload = function(){
			
			let adultPrice = frm.adultTf;
			let childPrice = frm.childTf;
			let kidsPrice = frm.kidsTf;
			
			adultPrice.onchange = calc;
			childPrice.onchange = calc;
			kidsPrice.onchange  = calc;
			
			function calc(){
				frm.sumTf.value = adultPrice.value*39000 + childPrice.value*29000 + kidsPrice.value*19000;
			}
			
			frm.onsubmit = function(evt){
				evt.stopPropagation();
				evt.preventDefault();
				if(!frm.agree.checked || !frm.agree2.checked){
					alert('약관에 동의해야 합니다.');
				}else
				frm.submit();
			}
			
			
			
		}
