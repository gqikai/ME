// JavaScript Document


define(function(require,exports){
	
	
	//require('logo.js').init();
	
	//require('menu.js').init();
	
	//require('foot.js').init();
	
	var aA = [];
    var links  = ['aboutMeLink','photographLink','skillLink','contactMeLink'];
    for(var i = 0; i < links.length; i ++){
        aA.push(document.getElementById(links[i]));
    }

    var aDiv = [];
    var divs  = ['aboutMe','photograph','skill','contactMe'];
    for(var i = 0; i < links.length; i ++){
        aDiv.push(document.getElementById(divs[i]));
    }
	window.bBtn = true;
	
	window.onhashchange = function(){
		if(window.bBtn){
			window.location.reload();
		}
	};
	
	require('show.js').show( aA , aDiv );
	
	require('hide.js').hide( aA , aDiv );
	
});