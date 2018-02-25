$(document).ready(function(){
	(function() {
		var app = {
			initialize: function() {
				this.setUpListeners();
				this.initPlaginsOnes();
				this.initPlagins();
			},
			setUpListeners: function() {
				$('.calc-step1 .trig1').on('click', app.step1);
				$('.calc-step2 .trig2').on('click', app.step2);
				$('.calc-step3 .trig3').on('click', app.step3);
				$('.calc-step4 .trig4').on('click', app.step4);
				$('.calc-step5 .trig5').on('click', app.step5);


				$('.calc-step6 input[name=option1]').click(function() {
	        if ($(this).is(':checked'))
	        	$('.calc-step6 .price').html(Number($('.calc-step6 .price').attr('data-value')) + 100).attr('data-value', Number($('.calc-step6 .price').attr('data-value')) + 100).parent().addClass('shake');
	        else
	        	$('.calc-step6 .price').html(Number($('.calc-step6 .price').attr('data-value')) - 100).attr('data-value', Number($('.calc-step6 .price').attr('data-value')) - 100).parent().addClass('shake');
					setTimeout(function() { $('.calc-step6 .price').parent().removeClass('shake') }, 500);
    		});
    		$('.calc-step6 input[name=option2]').click(function() {
	        if ($(this).is(':checked'))
	        	$('.calc-step6 .price').html(Number($('.calc-step6 .price').attr('data-value')) + 200).attr('data-value', Number($('.calc-step6 .price').attr('data-value')) + 200).parent().addClass('shake');
	        else
	        	$('.calc-step6 .price').html(Number($('.calc-step6 .price').attr('data-value')) - 200).attr('data-value', Number($('.calc-step6 .price').attr('data-value')) - 200).parent().addClass('shake');
					setTimeout(function() { $('.calc-step6 .price').parent().removeClass('shake') }, 500);
    		});
    		$('.calc-step6 input[name=option3]').click(function() {
	        if ($(this).is(':checked'))
	        	$('.calc-step6 .price').html(Number($('.calc-step6 .price').attr('data-value')) + 300).attr('data-value', Number($('.calc-step6 .price').attr('data-value')) + 300).parent().addClass('shake');
	        else
	        	$('.calc-step6 .price').html(Number($('.calc-step6 .price').attr('data-value')) - 300).attr('data-value', Number($('.calc-step6 .price').attr('data-value')) - 300).parent().addClass('shake');
					setTimeout(function() { $('.calc-step6 .price').parent().removeClass('shake') }, 500);
    		});
			},
			initPlaginsOnes: function(){
				$('.flexslider').flexslider({
					animation: "slide",
					controlNav: !1,
    			customDirectionNav: $(".custom-navigation a")
				});
			},
			initPlagins: function(){},

			typeHome: !1,
			size: [0, 0],
			qtyWindow: 0,
			typeWindow: [!1, !1, !1],
			qtyGlass: !1,
			step1: function(){
				app.typeHome = $(this).attr('data-value');
				$('.calc-step1').addClass('bounceOutLeft');
				setTimeout(function() {
				  $('.calc-step1').addClass('d-none');
					$('.calc-step2').removeClass('d-none').addClass('bounceInRight');
				}, 300);
			},
			step2: function(){
				app.size = [Number($('.calc-step2 input.width').val()), Number($('.calc-step2 input.height').val())];
				$('.calc-step2').addClass('bounceOutLeft');
				setTimeout(function() {
				  $('.calc-step2').addClass('d-none');
					$('.calc-step3').removeClass('d-none').addClass('bounceInRight');
				}, 300);
			},
			step3: function(){
				app.qtyWindow = Number($(this).attr('data-value'));
				switch(app.qtyWindow){
					case 1: $('.calc-step4 .third-stvor, .calc-step4 .second-stvor').hide(); break;
					case 2: $('.calc-step4 .third-stvor').hide(); break;
				}
				$('.calc-step3').addClass('bounceOutLeft');
				setTimeout(function() {
				  $('.calc-step3').addClass('d-none');
					$('.calc-step4').removeClass('d-none').addClass('bounceInRight');
				}, 300);
			},
			step4: function(){
				app.typeWindow = [$('.calc-step4 input[name=typeStvor1]').val(), $('.calc-step4 input[name=typeStvor2]').val(), $('.calc-step4 input[name=typeStvor3]').val()];
				$('.calc-step4').addClass('bounceOutLeft');
				setTimeout(function() {
				  $('.calc-step4').addClass('d-none');
					$('.calc-step5').removeClass('d-none').addClass('bounceInRight');
				}, 300);
			},
			step5: function(){
				app.qtyGlass = $(this).attr('data-value');
				$('.calc-step6 .param1').html(app.typeHome);
				$('.calc-step6 .param2').html(app.size.join(' x '));
				$('.calc-step6 .param3').html(app.qtyWindow);
				switch(app.qtyWindow){
					case 1: $('.calc-step6 .param4').html(app.typeWindow[0]); break;
					case 2: $('.calc-step6 .param4').html(app.typeWindow[0]+', '+app.typeWindow[1]); break;
					case 3: $('.calc-step6 .param4').html(app.typeWindow[0]+', '+app.typeWindow[1]+', '+app.typeWindow[2]); break;
				}
				$('.calc-step6 .param5').html(app.qtyGlass);

				var price, typeHome, qtyGlass;
				switch(app.typeHome){
					case 'Панельный': typeHome = 1000; break;
					case 'Кирпичный': typeHome = 2000; break;
				}
				switch(app.qtyGlass){
					case 'Однокамерный': qtyGlass = 1000; break;
					case 'Двухкамерный': qtyGlass = 2000; break;
				}

				price = (typeHome + qtyGlass) * ((Number(app.size[0])/1000 + Number(app.size[1])/1000)/2) * Number(app.qtyWindow);
				$('.calc-step6 .price').html(Math.round(price/100)*100).attr('data-value', Math.round(price/100)*100);

				$('.calc-step5').addClass('bounceOutLeft');
				setTimeout(function() {
				  $('.calc-step5').addClass('d-none');
					$('.calc-step6').removeClass('d-none').addClass('bounceInRight');
				}, 300);
			},
			step6: function(){

			}
		}
		app.initialize();
	}());
});