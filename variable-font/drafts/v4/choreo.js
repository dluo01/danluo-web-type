$(document).ready(function() {

	$('body').click(function(){
		console.log('darkmode');
		$('body').toggleClass('darkmode');
		$('.navi-wrapper').toggleClass('darkmode');
		$('.title').toggleClass('darkmode');
		$('.subtitles').toggleClass('darkmode');
		$('.click').toggleClass('darkmode');
		$('#k').toggleClass('darkmode');
	});


	const wdthmax=100;
	$('.k').mousemove(function(event){
		console.log(event.pageX, event.pageY);
		console.log($(this).width(),$(this).height());
		let cursorX = event.pageX/$(this).width();
		let cursorY = 1 - (event.pageY)/ $(this).height();

		let settingX= Math.floor(cursorX * wdthmax);

		$('.k').css({
			"--variable-axis":settingX,
		});
	});

	// event.pageX = the cursor's position in coordinates
	// $(this).width() = the width of the space the mouse moves
	// it's about caculating the ratio = the coordinate/ the width of the space 其实就是把整个屏幕上的mousemove scale down到某一个位置。
	//then use the ratio to multiply with 100 to correspond to the variable font's changing range.

});