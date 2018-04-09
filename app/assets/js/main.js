//============ Form ============//

$(document).ready(function() {
    $("#form-bottom").submit(function() {
        var form_data = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "email_send.php",
            data: form_data,
            success: function () {
                alert("Thank you, your message has been sent!");
            }
        });
        return false;
    });
});

//============ Navmenu ============//

$(document).ready(function() {
    $('.top-nav li').localScroll();
});

//============ Mobile header ============//

$(document).ready(function() {
    $('.navbar-toggle').click( function() {
        $(".navbar-default").css("background", "#f8bc3b");
    });
});

//============ Fixed header ============//

$(window).scroll( function() {
    var value = $(this).scrollTop();
    if ( value > 350 )
        $(".navbar-default").css("padding", "10px 0px 7px");
    else
        $(".navbar-default").css("padding", "50px 0px 50px");
});

$(window).scroll( function() {
    var value = $(this).scrollTop();
    if ( value > 350 )
        $(".navbar-brand").css("font-size", "35px");
    else
        $(".navbar-brand").css("font-size", "42px");
});

//==================== Project Slider ========================//

$(document).ready(function(){
	  $('#project-slider').flexslider({
	    animation: "slide",
	    controlNav: "false",
	    DirectionNav: "true"
	  });
});

//==================== Portfolio ========================//

$(function () {
	var filterList = {
		init: function () {
			// MixItUp plugin
			// http://mixitup.io
			$('#portfoliolist').mixitup({
				targetSelector: '.portfolio',
				filterSelector: '.filter',
				effects: ['fade'],
				easing: 'snap',
				// call the hover effect
				onMixEnd: filterList.hoverEffect()
			});
		},
		hoverEffect: function () {
		}
	};
	// Run the show!
	filterList.init();
});

$(document).ready(function() {
    $("#owl-demo").owlCarousel({

    navigation : false,
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem : true

    // "singleItem:true" is a shortcut for:
    // items : 1,
    // itemsDesktop : false,
    // itemsDesktopSmall : false,
    // itemsTablet: false,
    // itemsMobile : false

    });
});
