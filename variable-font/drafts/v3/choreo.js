$(document).ready(function() {

// // cover mousemove
// 	const wdthmax=100;
// 	const wghtmax = 100;
// 	$('.title').mousemove(function(event){
// 		console.log(event.pageX, event.pageY);
// 		let cursorX = event.pageX/$(this).width();
// 		let cursorY = 1 - (event.pageY)/ $(this).height();

// 		let settingX = Math.floor(cursorX * wdthmax);
// 		let settingY = Math.floor(cursorY * wghtmax);

// 		$('.title').css({
// 			"--variable-axis":settingX,
// 		});
// 	});

//cover toggle darkmode
	// $('body').click(function(){
	// 	console.log('darkmode');
	// 	$('body').toggleClass('darkmode');
	// 	$('.cover').toggleClass('darkmode');
	// 	$('.title').toggleClass('darkmode');
	// 	$('.subtitle-1').toggleClass('darkmode');
	// 	$('.subtitle-2').toggleClass('darkmode');
	// 	$('.subtitle-3').toggleClass('darkmode');
	// 	$('.clickclick').toggleClass('darkmode');
	// 	$('.black').toggleClass('darkmode');
	// 	$('.white').toggleClass('darkmode');
	// 	$(".page-1").toggleClass('darkmode');
	// 	$(".left-column").toggleClass('darkmode');
	// 	$(".page-2").toggleClass('darkmode');
	// 	$(".left").toggleClass('darkmode');
	// 	$(".right").toggleClass('darkmode');
	// 	$(".bar-small").toggleClass('darkmode');
	// 	$(".bar-small-last").toggleClass('darkmode');

	// });
 
	// specimen click for big letters

	$('.element').click(function(){
		console.log('element rotation')
		$(this).toggleClass('rotation');
	});

	$('.element').click(function(){
		let letter = $(this).text();

		$('.big-letter-wrapper').text( letter );

	});
		// $(".A").click(function(){
	// 	$(".big-letter-A").toggle();
	// 	});

	// $(".B").click(function(){
	// 	$(".big-letter-B").toggle();
	// });

	// $(".C").click(function(){
	// 	$(".big-letter-C").toggle();
	// });

	// slider

	$('input[type=range]').on('input', function(){
		 inputType = $(this).attr('id');
		 inputValue = $(this).val();

		 if (inputType == 'move'){
		 	$('.element, .big-letter').add($).css('--variable-axis', inputValue);
		 }else{
		 	$('.element, .big-letter').css('--variable-axis', inputValue);
		 }

	});


});
