//Preload function.

$(document).ready(function () {
        setTimeout(function(){
            $('.preloader').fadeOut('slow');
        },2000); 
});

//Show and hide the navbar after collapse.

$(document).ready(function(){
	$("#menuButton").click(function(){
	    $("#myNavbar").slideToggle("slow");
	});
});

// Returns true if the specified element has been scrolled into the viewport.

function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

//Check for photoMe animation.

function checkPhotoMe(){
	if (isElementInViewport($('#photoMe'))){
		$('#photoMe').addClass('start');
	}
}

function checkSpanMe(){
	if (isElementInViewport($('#spanAboutMe'))){
		$('#spanAboutMe').addClass('start');
	}
}

// Check if it's time to start the animation.

function checkAnimation() {

	//Create an array for photos.
	var photoSet = ['#divPhotoPortfolio1', '#divPhotoPortfolio2', '#divPhotoPortfolio3'];
	var i = 0;

	// Add animation to each photo.
	for (i; i<photoSet.length; i++){
		var $elem = $(photoSet[i]);

		// If the animation has already been started.
	    if ($elem.hasClass('start')) return;

	    // If the animation is in the viewport.
	    else if (isElementInViewport($elem)){

	        // Show the div which one contains the animation.
	        $('#divCarousel').css('-webkit-visibility', 'visible');
	        $('#divCarousel').css('-moz-visibility', 'visible');
	        $('#divCarousel').css('-ms-visibility', 'visible');
	        $('#divCarousel').css('visibility', 'visible');

	        // Start the animation.
	        $elem.addClass('start').delay(3000).queue(function(next){

	        	//Stop the animation.
	        	$('.divPhotoPortfolio').css("-webkit-animation", "none");
	   			$('.divPhotoPortfolio').css("-moz-animation", "none");
	   			$('.divPhotoPortfolio').css("-ms-animation", "none");
	        	$('.divPhotoPortfolio').css("animation", "none");
	        	next();
	        });
	    }
	}
}

// Capture scroll events

$(window).scroll(function(){
	
	checkPhotoMe();
	checkSpanMe();
    checkAnimation();   
});

// Add smooth scrolling to the website.

$(document).on('click', '#navOMnie, #navPortfolio, #navKontakt', function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href')).offset().top
    }, 600);
});

/*
//Show and hide the navbar after sroll.

var hideShowNavbarPreviousScroll = 0;

function hideShowNavbar(){

   var scroll = $(this).scrollTop();
   if (scroll > hideShowNavbarPreviousScroll){
       $('#rowMenu').slideUp("slow");
   }else {
      $('#rowMenu').slideDown("slow");
   }
   hideShowNavbarPreviousScroll = scroll;
};
*/