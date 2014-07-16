$(document).ready( function() {
    $('.navbar').smint({
    	'scrollSpeed' : 1000
    });
});

$(document).ready(function() {
	var startY= $('#bio').position().top + $('#bio').outerHeight();
	$('.back_top').html($('#nav').html());
	$(window).scroll(function () {
	    if($(this).scrollTop() > startY ){
	        $('.back_top').slideDown();
	    }else{
	        $('.back_top').slideUp();
	    }
	});
});


