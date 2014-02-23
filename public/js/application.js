function feedanimate(){
	$('.tweet-feed-post').hide();
	$('.tweet-feed-post').slideDown(1000);
}

function spinnerInit() {
		var opts = {
		  lines: 10, // The number of lines to draw
		  length: 5, // The length of each line
		  width: 3, // The line thickness
		  radius: 5, // The radius of the inner circle
		  corners: 1, // Corner roundness (0..1)
		  rotate: 0, // The rotation offset
		  direction: 1, // 1: clockwise, -1: counterclockwise
		  color: '#000', // #rgb or #rrggbb or array of colors
		  speed: 2, // Rounds per second
		  trail: 60, // Afterglow percentage
		  shadow: false, // Whether to render a shadow
		  hwaccel: false, // Whether to use hardware acceleration
		  className: 'spinner', // The CSS class to assign to the spinner
		  zIndex: 2e9, // The z-index (defaults to 2000000000)
		  top: 'auto', // Top position relative to parent in px
		  left: 'auto' // Left position relative to parent in px
		};
		var target = document.getElementById('spinner-container');
		var spinner = new Spinner(opts).spin(target);
   	$('.spinner-feed-post').show()
		$('#spinner-container').css("visibility", "visible")
	}



	function scrolling(){
		var posts = "<div class='tweet-feed-post'><aside> <img class='tweeter-pro-img' src='../public/images/juan.jpeg'> </aside>"
		var posts2	= "<section><div class='tweeter-name'><p> <a href=''>Juan Mata Garcia</a> @DerrenBown </p></div>"
		var posts3	= "<div class='tweeter-tweet'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Nulla convallis neque non luctus tristique. V </p>"
		var posts4	= "</div>	</section></div>"
		var finalPost = posts+posts2+posts3+posts4;

		$(window).scroll(function(){
    if($(window).scrollTop() == $(document).height() - $(window).height()) {
    		
    		spinnerInit()

    		setTimeout(function() {
 					$('.spinner').fadeOut();
   				$('.tweet-feed').append(finalPost)
   				$('.spinner-feed-post').hide()
				}, 3000)
    }
		});
	}

$(function(){
	scrolling();
})