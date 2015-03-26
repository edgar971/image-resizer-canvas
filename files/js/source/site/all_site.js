$(window).load(function(){
	
    $('select').material_select();
    
	$('.cropper-container img').cropper({
	  aspectRatio: 16 / 9,
	  autoCropArea: 0.65,
	  strict: false,
	  guides: false,
	  highlight: false,
	  dragCrop: false,
	  movable: false,
	  resizable: false
	});

})