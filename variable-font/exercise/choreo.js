$(document).ready(function() {

	$('button').click(function(){
		console.log('darkmode');
		$('.interaction-1').toggleClass('darkmode');
		$('button').toggleClass('active');
	});

	$('.element').click(function(){
		console.log('element rotation')
		$(this).toggleClass('play');
	});
	// you can also use: addClass/removeClass

	$('input[type=range]').on('input',function(){
		let inputType=$(this).attr('id');
		let inputValue=$(this).val();

		if (inputType=='move'){
			$('.interaction-4').css('--variable-axis', inputValue);
		}
	});

	const wdthmax=100;
	$('.interaction-5').mousemove(function(event){
		console.log(event.pageX, event.pageY);
		let cursorX = event.pageX/$(this).width();
		let cursorY = 1 - (event.pageY)/ $(this).height();

		let settingX= Math.floor(cursorX * wdthmax);

		$('.interaction-5').css({
			"--variable-axis":settingX,
		});


	});
});
