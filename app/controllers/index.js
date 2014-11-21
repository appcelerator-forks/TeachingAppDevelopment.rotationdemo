var angle = 0;
function doClickRotateImage(e){
	// rotate the image
	angle += 20;
	if(angle >= 360){
		angle = 0;
	}
	var m = Ti.UI.create2DMatrix({ 
    	rotate: angle 
	});
	var a = {
  		transform: m,
  		duration: 2000,
  		autoreverse: true
	};
	
	$.ivRotateImage.animate(a);
}

$.index.open();
