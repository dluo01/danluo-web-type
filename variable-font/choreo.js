$(document).ready(function() {

	// 	$(window).scroll(function(){
	// 	if ($('.design-concept').offset().top < $(window).scrollTop()+40 && $(window).scrollTop()+30 <$('.ballet-dancers').offset().top){
	// 		$('.navi-content').hover(function(){
	// 			$(this).css({"color":"black"}).mouseout(function(){
	// 				$(this).css({"color":"#FFB6CE"})
	// 			});
	// 		});
	// 	}
	// 	else if ($('.buffer-1').offset().top < $(window).scrollTop()+40 && $(window).scrollTop()+30 <$('.buffer-2').offset().top){
	// 		$('.navi-content').hover(function(){
	// 			$(this).css({"color":"black"}).mouseout(function(){
	// 				$(this).css({"color":"#FFB6CE"})
	// 			});
	// 		});
	// 	}
	// 	else{
	// 		$('.navi-content').hover(function(){
	// 			$(this).css({"color":"white"}).mouseout(function(){
	// 				$(this).css({"color":"#FFB6CE"})
	// 			});
	// 		});
	// 	}
	// });

	const wdthmax=100;
	$('.title').mousemove(function(event){
		console.log(event.pageX, event.pageY);
		console.log($(this).width(),$(this).height());
		let cursorX = event.pageX/$(this).width();
		let cursorY = 1 - (event.pageY)/ $(this).height();

		let settingX= Math.floor(cursorX * wdthmax);

		$('.title').css({
			"--variable-axis":settingX,
		});
	});
	// event.pageX = the cursor's position in coordinates
	// $(this).width() = the width of the space the mouse moves
	// it's about caculating the ratio = the coordinate/ the width of the space 其实就是把整个屏幕上的mousemove scale down到某一个位置。
	//then use the ratio to multiply with 100 to correspond to the variable font's changing range.

	$('.element').hover(function(){
			console.log('element still')
			$(this).toggleClass('still');
		});

		$('.element').hover(function(){
			let letter = $(this).text();

			$('.big-letters').text( letter );

		});

	$('input').on('input',function(){
		let inputType=$(this).attr('id');
		let inputValue=$(this).val();

		if (inputType=='dance'){
			$('.tester').css('--variable-axis', inputValue);
			console.log('font-size')
		}
		else if (inputType=='font-size'){
			$('.tester').css('font-size', inputValue+"px");
			console.log('font-size')
		}
		else{
			$('.tester').css('line-height', inputValue+'%');
			console.log('line-weight')
		}
	});

	$('button').click(function(){
		$('.tester').toggleClass('button');
	});

});