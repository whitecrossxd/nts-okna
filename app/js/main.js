$(document).ready(function(){
	(function() {
		var app = {
			initialize: function() {
				this.setUpListeners();
				this.initPlaginsOnes();
				this.initPlagins();
			},
			setUpListeners: function() {
				// $('.add-to-cart').on('click', app.addCart);
			},
			initPlaginsOnes: function(){
				$('.flexslider').flexslider({
					animation: "slide",
					controlNav: !1,
    			customDirectionNav: $(".custom-navigation a")
				});
			},
			initPlagins: function(){}
		}
		app.initialize();
	}());
});