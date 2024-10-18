$(function() {

	// Animated title card for Recent Work gallery

	function toggleFigcaptions() {
		$(this).children().filter('figcaption').slideToggle(200);
	}

	$('.work-figure').on('mouseenter mouseleave', toggleFigcaptions);


	// Collapsed "accordian" type menu for screens under 480px

 	function footerCollapsed() {
    	if ($(".footer-section").css("float") == "none" ) return true;
		else return false; 
	}

	function openList() {
 		if (footerCollapsed()) {
	 		$(this).next().toggle();
	 		$(this).parent().siblings().children().filter('ul').hide();
	 	}
	}
 	
  	$('.footer-section-heading').on('click', openList);	
  		
	function showAllLists() {
		if (!footerCollapsed()) {
		 	$('.footer-section-list').show();
		}
	}

	$(window).on('resize', showAllLists);
});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}