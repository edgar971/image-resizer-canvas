
;function downloadCanvas(p,a){return console.log(document.getElementById(a).toDataURL()),!1}var CropApp=CropApp||{};CropApp.canvasArea=null,CropApp.image=null,CropApp.downloadCanvas=function(p,a,o){if(null==p||null==a||null==o)return!1;var e=a.cropper("getCroppedCanvas")||null,r=o.name||null,n=/.png/,t=/.jpeg/;if(o.type.match(n))e=e.toDataURL("image/png");else{if(!o.type.match(t))return!1;e=e.toDataURL("image/jpeg",.75)}(null!=e||null!=r)&&(console.log($(p)[0]),$(p).attr({download:r,href:e}))},CropApp.processUpload=function(p){var a=/image.*/;return p.target.files[0].type.match(a)?(CropApp.image=p.target.files[0],CropApp.processImage(CropApp.image),!0):!1},CropApp.processImage=function(p){if(null!=p){var a=new FileReader;$(a).on("load",function(p){var a=p.target.result;console.log(a),CropApp.loadToCanvas(a)}),a.readAsDataURL(p)}},CropApp.loadToCanvas=function(p){CropApp.canvasArea.cropper("reset",!0).cropper("replace",p)},$(window).load(function(){var p=$(".cropper-container > img"),a=$('[data-crop="download"]'),o=$(".image-uploader");$("select").material_select(),CropApp.canvasArea=p,p.cropper({aspectRatio:0/0,crop:function(p){$("#height_input").val(Math.round(p.height)),$("#width_input").val(Math.round(p.width))}}),a.on("click",function(){CropApp.downloadCanvas(this,CropApp.canvasArea,CropApp.image)}),o.on("change",CropApp.processUpload)});
