function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
}


$(window).load(function(){
	var $cropArea = $('.cropper-container > img');
    $('select').material_select();
	
	$cropArea.cropper({
		aspectRatio: NaN,
		crop: function(data) {
			 $("#height_input").val(Math.round(data.height));
			 $("#width_input").val(Math.round(data.width));
		}
		
	});	
	
	$('[data-crop="download"]').on('click', function(event){
		var downloadBtn = this;
		var imageData = $cropArea.cropper('getCroppedCanvas').toDataURL();
		var filename  = "example.png";
		
		$(downloadBtn).attr({
			"download": filename,
			"href": imageData
		});
		
		
	});
	$('[data-crop="zoom-image"]').on('input', function(event){
		var zoomBtn = this;
		var zoomVal = zoomBtn.value / 100;
		$cropArea.cropper('zoom', zoomVal);
		
	});
	
	
})

