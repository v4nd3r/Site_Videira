$(document).ready(function(){

	$( window ).scroll(function() {
		//alterar a logo de acordo com o navbar
		if ($(".ftco-navbar-light.scrolled.awake").length > 0) {
			$("#logo-menu").attr("src", "Content/images/logo-menu.png");
		}
		else{
			$("#logo-menu").attr("src", "Content/images/logo-letra-branca.png");
		}
	});
});