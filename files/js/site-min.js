
;function downloadCanvas(p,a,o){p.href=document.getElementById(a).toDataURL(),p.download=o}var CropApp=CropApp||{};CropApp.canvasArea=null,CropApp.image=null,CropApp.downloadCanvas=function(){},CropApp.processUpload=function(p){var a=/image.*/;return p.target.files[0].type.match(a)?(CropApp.image=p.target.files[0],CropApp.processImage(CropApp.image),!0):!1},CropApp.processImage=function(p){if(null!=p){var a=new FileReader;$(a).on("load",function(p){var a=p.target.result;CropApp.loadToCanvas(a)}),a.readAsDataURL(p)}},CropApp.loadToCanvas=function(p){CropApp.canvasArea.cropper("reset",!0).cropper("replace",p)},$(window).load(function(){var p=$(".cropper-container > img"),a=$('[data-crop="download"]'),o=$(".image-uploader");$("select").material_select(),CropApp.canvasArea=p,p.cropper({aspectRatio:0/0,crop:function(p){$("#height_input").val(Math.round(p.height)),$("#width_input").val(Math.round(p.width))}}),a.on("click",function(){var a=this,o=p.cropper("getCroppedCanvas").toDataURL(),r="example.png";$(a).attr({download:r,href:o})}),o.on("change",CropApp.processUpload)});
