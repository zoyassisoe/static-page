//		var a = $("#twoone").position().top;
//		var b = $("body").scrollLeft();
$(document).scroll(function() {     
	var scroH = $(document).scrollTop(); //滚动高度
	var bg = $("#topbarid");      
	if(scroH >= 870) {
		bg.css("position", "fixed");
	} else {
		bg.css("position", "");
	}
	if(scroH >= 1080) {
		$("#down").css("display", "none");
		//				$("#up").css("display","inline");
	} else {
		//				$("#down").css("display","inline");
		//				$("#up").css("display","none");
	}
});
layui.use('carousel', function() {
	var carousel = layui.carousel;
	carousel.render({
		elem: '#test1',
		arrow: 'always',
		width: '100%',
		height: '350px',
		indicator: 'none'
	});
});