function downloadCanvas(link, canvasId, filename) {
	
	console.log(document.getElementById(canvasId).toDataURL());
    return false;
/*
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
*/
}

var CropApp = CropApp || {};

//image information
CropApp.canvasArea = null;
CropApp.image = null;
//download canvas
CropApp.downloadCanvas = function(link, canvas, file) {
	//exit if
	if(link == null || canvas == null || file == null) return false;
	
	var imageData = canvas.cropper('getCroppedCanvas') || null;
	var fileName = file.name || null;
	var matchTypePNG =  /.png/;
	var matchTypeJPG = /.jpeg/;
	//is it a PNG or JPEG
	if(file.type.match(matchTypePNG)) {
		imageData = imageData.toDataURL('image/png');
		//console.log('Is PNG');
		
 		
	} else if(file.type.match(matchTypeJPG)) {
		imageData = imageData.toDataURL('image/jpeg', .75);
		//console.log('Is JPG');
 		
	} else {
		return false;
	}
	
	if(imageData != null || fileName != null) {
		console.log($(link)[0]);
		$(link).attr({
			'download':fileName,
			'href':imageData
		});

	}

	
	
};

//upload and process image
CropApp.processUpload = function(data) {
	//allow only image types
	var type = /image.*/;
	if(data.target.files[0].type.match(type)) {
		CropApp.image = data.target.files[0];
		CropApp.processImage(CropApp.image);
		return true;
	} else {
		return false;
	}
	
	
}
//process image to canvas 
CropApp.processImage = function(image) {
	if(image != null) {
		//read files from system using FileReader()
		//Good Support http://caniuse.com/#feat=filereader
		//Docs: http://www.w3.org/TR/FileAPI/#dfn-filereader and https://docs.webplatform.org/wiki/apis/file/FileReader
		var $imageReader = new FileReader();
		//console.log(image);
		//read the image and convert to Base64-encoded string
		$($imageReader).on('load', function(imageData){
			var image = imageData.target.result
			console.log(image);
			CropApp.loadToCanvas(image);
		})
		$imageReader.readAsDataURL(image);
	} 
	
}
CropApp.loadToCanvas = function(image) {
	//console.log(image);
	CropApp.canvasArea.cropper('reset', true).cropper('replace', image);
 }
$(window).load(function(){
	//init cropper
	
	var $cropArea = $('.cropper-container > img'),
		$downloadBtn = $('[data-crop="download"]'),
		$imageUploader = $('.image-uploader');
    
    $('select').material_select();
	CropApp.canvasArea = $cropArea;
	$cropArea.cropper({
		aspectRatio: NaN,
		crop: function(data) {
			 $("#height_input").val(Math.round(data.height));
			 $("#width_input").val(Math.round(data.width));
		}
		
	});	
	
	//on download button click
	$downloadBtn.on('click', function(event){
		CropApp.downloadCanvas(this, CropApp.canvasArea, CropApp.image);
		
		
		
		
	});
	$imageUploader.on('change', CropApp.processUpload);
	
	
	
	
	
})

