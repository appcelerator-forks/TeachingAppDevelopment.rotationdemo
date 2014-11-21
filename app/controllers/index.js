var angle = 0;
function doClickRotateImage(e){
	// rotate the image
	angle += 45;
	if(angle >= 180){
		angle = 0;
	}
	var m = Ti.UI.create2DMatrix({ 
    	rotate: angle,
    	scale: 1.5
    	 
	});
	var a = {
  		transform: m,
  		duration: 2000,
  		autoreverse: true
	};
	
	$.ivRotateImage.animate(a);
}

$.index.open();
