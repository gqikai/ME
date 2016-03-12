// JavaScript Document


define(function(require,exports){
	
	function show(aA,aDiv){
		
		var firstHash = window.location.hash.substring(1) || 'main';
	
		for(var i=0;i<aDiv.length;i++){
			
			aDiv[i].style.display = 'none';
			
			if( firstHash == aDiv[i].dataset.hash ){
				
				aDiv[i].style.display = 'block';
				
				switch( firstHash ){
					case 'main':
						require('mainIn.js').init(aDiv[i]);
					break;
					case 'student':
						require('aboutMeIn.js').init(aDiv[i]);
					break;
					case 'message':
						require('photographIn.js').init(aDiv[i]);
					break;
				}
				
			}
		}
		
	}
	
	exports.show = show;
	
});