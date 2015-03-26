
;window.Modernizr=function(e,t,n){function r(e){g.cssText=e}function o(e,t){return typeof e===t}function i(e,t){return!!~(""+e).indexOf(t)}function a(e,t){for(var r in e){var o=e[r];if(!i(o,"-")&&g[o]!==n)return"pfx"==t?o:!0}return!1}function c(e,t,r){for(var i in e){var a=t[e[i]];if(a!==n)return r===!1?e[i]:o(a,"function")?a.bind(r||t):a}return!1}function s(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+E.join(r+" ")+r).split(" ");return o(t,"string")||o(t,"undefined")?a(i,t):(i=(e+" "+C.join(r+" ")+r).split(" "),c(i,t,n))}function u(){p.input=function(n){for(var r=0,o=n.length;o>r;r++)S[n[r]]=n[r]in b;return S.list&&(S.list=!!t.createElement("datalist")&&!!e.HTMLDataListElement),S}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),p.inputtypes=function(e){for(var r,o,i,a=0,c=e.length;c>a;a++)b.setAttribute("type",o=e[a]),r="text"!==b.type,r&&(b.value=w,b.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&b.style.WebkitAppearance!==n?(v.appendChild(b),i=t.defaultView,r=i.getComputedStyle&&"textfield"!==i.getComputedStyle(b,null).WebkitAppearance&&0!==b.offsetHeight,v.removeChild(b)):/^(search|tel)$/.test(o)||(r=/^(url|email)$/.test(o)?b.checkValidity&&b.checkValidity()===!1:b.value!=w)),$[e[a]]=!!r;return $}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var l,d,f="2.8.3",p={},m=!0,v=t.documentElement,h="modernizr",y=t.createElement(h),g=y.style,b=t.createElement("input"),w=":)",x=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),T="Webkit Moz O ms",E=T.split(" "),C=T.toLowerCase().split(" "),P={svg:"http://www.w3.org/2000/svg"},k={},$={},S={},j=[],A=j.slice,L=function(e,n,r,o){var i,a,c,s,u=t.createElement("div"),l=t.body,d=l||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:h+(r+1),u.appendChild(c);return i=["&#173;",'<style id="s',h,'">',e,"</style>"].join(""),u.id=h,(l?u:d).innerHTML+=i,d.appendChild(u),l||(d.style.background="",d.style.overflow="hidden",s=v.style.overflow,v.style.overflow="hidden",v.appendChild(d)),a=n(u,e),l?u.parentNode.removeChild(u):(d.parentNode.removeChild(d),v.style.overflow=s),!!a},N=function(){function e(e,i){i=i||t.createElement(r[e]||"div"),e="on"+e;var a=e in i;return a||(i.setAttribute||(i=t.createElement("div")),i.setAttribute&&i.removeAttribute&&(i.setAttribute(e,""),a=o(i[e],"function"),o(i[e],"undefined")||(i[e]=n),i.removeAttribute(e))),i=null,a}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),z={}.hasOwnProperty;d=o(z,"undefined")||o(z.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return z.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=A.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(A.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(A.call(arguments)))};return r}),k.flexbox=function(){return s("flexWrap")},k.flexboxlegacy=function(){return s("boxDirection")},k.canvas=function(){var e=t.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")},k.canvastext=function(){return!!p.canvas&&!!o(t.createElement("canvas").getContext("2d").fillText,"function")},k.webgl=function(){return!!e.WebGLRenderingContext},k.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:L(["@media (",x.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},k.geolocation=function(){return"geolocation"in navigator},k.hashchange=function(){return N("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},k.history=function(){return!!e.history&&!!history.pushState},k.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},k.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),i(g.backgroundColor,"rgba")||i(g.backgroundColor,"hsla")},k.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(g.background)},k.borderradius=function(){return s("borderRadius")},k.boxshadow=function(){return s("boxShadow")},k.cssanimations=function(){return s("animationName")},k.csstransforms=function(){return!!s("transform")},k.csstransforms3d=function(){var e=!!s("perspective");return e&&"webkitPerspective"in v.style&&L("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t){e=9===t.offsetLeft&&3===t.offsetHeight}),e},k.csstransitions=function(){return s("transition")},k.fontface=function(){var e;return L('@font-face {font-family:"font";src:url("https://")}',function(n,r){var o=t.getElementById("smodernizr"),i=o.sheet||o.styleSheet,a=i?i.cssRules&&i.cssRules[0]?i.cssRules[0].cssText:i.cssText||"":"";e=/src/i.test(a)&&0===a.indexOf(r.split(" ")[0])}),e},k.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},k.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},k.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(e){return!1}},k.applicationcache=function(){return!!e.applicationCache},k.svg=function(){return!!t.createElementNS&&!!t.createElementNS(P.svg,"svg").createSVGRect},k.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==P.svg};for(var M in k)d(k,M)&&(l=M.toLowerCase(),p[l]=k[M](),j.push((p[l]?"":"no-")+l));return p.input||u(),p.addTest=function(e,t){if("object"==typeof e)for(var r in e)d(e,r)&&p.addTest(r,e[r]);else{if(e=e.toLowerCase(),p[e]!==n)return p;t="function"==typeof t?t():t,"undefined"!=typeof m&&m&&(v.className+=" "+(t?"":"no-")+e),p[e]=t}return p},r(""),y=b=null,p._version=f,p._prefixes=x,p._domPrefixes=C,p._cssomPrefixes=E,p.hasEvent=N,p.testProp=function(e){return a([e])},p.testAllProps=s,p.testStyles=L,v.className=v.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(m?" js "+j.join(" "):""),p}(this,this.document);
;!function(i){}(this);
;/*!
 * Justified Gallery - v3.5.4
 * http://miromannino.github.io/Justified-Gallery/
 * Copyright (c) 2015 Miro Mannino
 * Licensed under the MIT license.
 */
!function(a){a.fn.justifiedGallery=function(b){function c(a,b,c){var d;return d=a>b?a:b,100>=d?c.settings.sizeRangeSuffixes.lt100:240>=d?c.settings.sizeRangeSuffixes.lt240:320>=d?c.settings.sizeRangeSuffixes.lt320:500>=d?c.settings.sizeRangeSuffixes.lt500:640>=d?c.settings.sizeRangeSuffixes.lt640:c.settings.sizeRangeSuffixes.lt1024}function d(a,b){return-1!==a.indexOf(b,a.length-b.length)}function e(a,b){return a.substring(0,a.length-b.length)}function f(a,b){var c=!1;for(var e in b.settings.sizeRangeSuffixes)if(0!==b.settings.sizeRangeSuffixes[e].length){if(d(a,b.settings.sizeRangeSuffixes[e]))return b.settings.sizeRangeSuffixes[e]}else c=!0;if(c)return"";throw"unknown suffix for "+a}function g(a,b,d,g){var h=a.match(g.settings.extension),i=null!=h?h[0]:"",j=a.replace(g.settings.extension,"");return j=e(j,f(j,g)),j+=c(b,d,g)+i}function h(b){var c=a(b.currentTarget).find(".caption");b.data.settings.cssAnimation?c.addClass("caption-visible").removeClass("caption-hidden"):c.stop().fadeTo(b.data.settings.captionSettings.animationDuration,b.data.settings.captionSettings.visibleOpacity)}function i(b){var c=a(b.currentTarget).find(".caption");b.data.settings.cssAnimation?c.removeClass("caption-visible").removeClass("caption-hidden"):c.stop().fadeTo(b.data.settings.captionSettings.animationDuration,b.data.settings.captionSettings.nonVisibleOpacity)}function j(a,b,c){c.settings.cssAnimation?(a.addClass("entry-visible"),b()):a.stop().fadeTo(c.settings.imagesAnimationDuration,1,b)}function k(a,b){b.settings.cssAnimation?a.removeClass("entry-visible"):a.stop().fadeTo(0,0)}function l(a){var b=a.find("> img");return 0===b.length&&(b=a.find("> a > img")),b}function m(b,c,d,e,f,k,m){function n(){p!==q&&o.attr("src",q)}var o=l(b);o.css("width",e),o.css("height",f),o.css("margin-left",-e/2),o.css("margin-top",-f/2),b.width(e),b.height(k),b.css("top",d),b.css("left",c);var p=o.attr("src"),q=g(p,e,f,m);o.one("error",function(){o.attr("src",o.data("jg.originalSrc"))}),"skipped"===o.data("jg.loaded")?x(p,function(){j(b,n,m),o.data("jg.loaded",!0)}):j(b,n,m);var r=b.data("jg.captionMouseEvents");if(m.settings.captions===!0){var s=b.find(".caption");if(0===s.length){var t=o.attr("alt");"undefined"==typeof t&&(t=b.attr("title")),"undefined"!=typeof t&&(s=a('<div class="caption">'+t+"</div>"),b.append(s))}0!==s.length&&(m.settings.cssAnimation||s.stop().fadeTo(m.settings.imagesAnimationDuration,m.settings.captionSettings.nonVisibleOpacity),"undefined"==typeof r&&(r={mouseenter:h,mouseleave:i},b.on("mouseenter",void 0,m,r.mouseenter),b.on("mouseleave",void 0,m,r.mouseleave),b.data("jg.captionMouseEvents",r)))}else"undefined"!=typeof r&&(b.off("mouseenter",void 0,m,r.mouseenter),b.off("mouseleave",void 0,m,r.mouseleave),b.removeData("jg.captionMouseEvents"))}function n(a,b){var c,d,e,f,g,h,i=a.settings,j=!0,k=0,m=a.galleryWidth-2*a.border-(a.buildingRow.entriesBuff.length-1)*i.margins,n=m/a.buildingRow.aspectRatio,o=a.buildingRow.width/m>i.justifyThreshold;if(b&&"hide"===i.lastRow&&!o){for(c=0;c<a.buildingRow.entriesBuff.length;c++)d=a.buildingRow.entriesBuff[c],i.cssAnimation?d.removeClass("entry-visible"):d.stop().fadeTo(0,0);return-1}for(b&&!o&&"nojustify"===i.lastRow&&(j=!1),c=0;c<a.buildingRow.entriesBuff.length;c++)e=l(a.buildingRow.entriesBuff[c]),f=e.data("jg.imgw")/e.data("jg.imgh"),j?(g=c===a.buildingRow.entriesBuff.length-1?m:n*f,h=n):(g=i.rowHeight*f,h=i.rowHeight),m-=Math.round(g),e.data("jg.jimgw",Math.round(g)),e.data("jg.jimgh",Math.ceil(h)),(0===c||k>h)&&(k=h);return i.fixedHeight&&k>i.rowHeight&&(k=i.rowHeight),{minHeight:k,justify:j}}function o(a){a.lastAnalyzedIndex=-1,a.buildingRow.entriesBuff=[],a.buildingRow.aspectRatio=0,a.buildingRow.width=0,a.offY=a.border}function p(a,b){var c,d,e,f,g=a.settings,h=a.border;if(f=n(a,b),e=f.minHeight,b&&"hide"===g.lastRow&&-1===e)return a.buildingRow.entriesBuff=[],a.buildingRow.aspectRatio=0,void(a.buildingRow.width=0);g.maxRowHeight>0&&g.maxRowHeight<e?e=g.maxRowHeight:0===g.maxRowHeight&&1.5*g.rowHeight<e&&(e=1.5*g.rowHeight);for(var i=0;i<a.buildingRow.entriesBuff.length;i++)c=a.buildingRow.entriesBuff[i],d=l(c),m(c,h,a.offY,d.data("jg.jimgw"),d.data("jg.jimgh"),e,a),h+=d.data("jg.jimgw")+g.margins;a.$gallery.height(a.offY+e+a.border+(a.spinner.active?a.spinner.$el.innerHeight():0)),(!b||e<=a.settings.rowHeight&&f.justify)&&(a.offY+=e+a.settings.margins,a.buildingRow.entriesBuff=[],a.buildingRow.aspectRatio=0,a.buildingRow.width=0,a.$gallery.trigger("jg.rowflush"))}function q(a){a.checkWidthIntervalId=setInterval(function(){var b=parseInt(a.$gallery.width(),10);a.galleryWidth!==b&&(a.galleryWidth=b,o(a),u(a,!0))},a.settings.refreshTime)}function r(a){clearInterval(a.intervalId),a.intervalId=setInterval(function(){a.phase<a.$points.length?a.$points.eq(a.phase).fadeTo(a.timeslot,1):a.$points.eq(a.phase-a.$points.length).fadeTo(a.timeslot,0),a.phase=(a.phase+1)%(2*a.$points.length)},a.timeslot)}function s(a){clearInterval(a.intervalId),a.intervalId=null}function t(a){a.yield.flushed=0,null!==a.imgAnalyzerTimeout&&clearTimeout(a.imgAnalyzerTimeout)}function u(a,b){t(a),a.imgAnalyzerTimeout=setTimeout(function(){v(a,b)},.001),v(a,b)}function v(b,c){for(var d,e=b.settings,f=b.lastAnalyzedIndex+1;f<b.entries.length;f++){var g=a(b.entries[f]),h=l(g);if(h.data("jg.loaded")===!0||"skipped"===h.data("jg.loaded")){d=f>=b.entries.length-1;var i=b.galleryWidth-2*b.border-(b.buildingRow.entriesBuff.length-1)*e.margins,j=h.data("jg.imgw")/h.data("jg.imgh");if(i/(b.buildingRow.aspectRatio+j)<e.rowHeight&&(p(b,d),++b.yield.flushed>=b.yield.every))return void u(b,c);b.buildingRow.entriesBuff.push(g),b.buildingRow.aspectRatio+=j,b.buildingRow.width+=j*e.rowHeight,b.lastAnalyzedIndex=f}else if("error"!==h.data("jg.loaded"))return}b.buildingRow.entriesBuff.length>0&&p(b,!0),b.spinner.active&&(b.spinner.active=!1,b.$gallery.height(b.$gallery.height()-b.spinner.$el.innerHeight()),b.spinner.$el.detach(),s(b.spinner)),t(b),b.$gallery.trigger(c?"jg.resize":"jg.complete")}function w(a){function b(a){if("string"!=typeof d.sizeRangeSuffixes[a])throw"sizeRangeSuffixes."+a+" must be a string"}function c(a,b){if("string"==typeof a[b]){if(a[b]=parseFloat(a[b],10),isNaN(a[b]))throw"invalid number for "+b}else{if("number"!=typeof a[b])throw b+" must be a number";if(isNaN(a[b]))throw"invalid number for "+b}}var d=a.settings;if("object"!=typeof d.sizeRangeSuffixes)throw"sizeRangeSuffixes must be defined and must be an object";if(b("lt100"),b("lt240"),b("lt320"),b("lt500"),b("lt640"),b("lt1024"),c(d,"rowHeight"),c(d,"maxRowHeight"),d.maxRowHeight>0&&d.maxRowHeight<d.rowHeight&&(d.maxRowHeight=d.rowHeight),c(d,"margins"),c(d,"border"),"nojustify"!==d.lastRow&&"justify"!==d.lastRow&&"hide"!==d.lastRow)throw'lastRow must be "nojustify", "justify" or "hide"';if(c(d,"justifyThreshold"),d.justifyThreshold<0||d.justifyThreshold>1)throw"justifyThreshold must be in the interval [0,1]";if("boolean"!=typeof d.cssAnimation)throw"cssAnimation must be a boolean";if(c(d.captionSettings,"animationDuration"),c(d,"imagesAnimationDuration"),c(d.captionSettings,"visibleOpacity"),d.captionSettings.visibleOpacity<0||d.captionSettings.visibleOpacity>1)throw"captionSettings.visibleOpacity must be in the interval [0, 1]";if(c(d.captionSettings,"nonVisibleOpacity"),d.captionSettings.visibleOpacity<0||d.captionSettings.visibleOpacity>1)throw"captionSettings.nonVisibleOpacity must be in the interval [0, 1]";if("boolean"!=typeof d.fixedHeight)throw"fixedHeight must be a boolean";if("boolean"!=typeof d.captions)throw"captions must be a boolean";if(c(d,"refreshTime"),"boolean"!=typeof d.randomize)throw"randomize must be a boolean"}function x(b,c,d){if(c||d){var e=new Image,f=a(e);c&&f.one("load",function(){f.off("load error"),c(e)}),d&&f.one("error",function(){f.off("load error"),d(e)}),e.src=b}}var y={sizeRangeSuffixes:{lt100:"",lt240:"",lt320:"",lt500:"",lt640:"",lt1024:""},rowHeight:120,maxRowHeight:0,margins:1,border:-1,lastRow:"nojustify",justifyThreshold:.75,fixedHeight:!1,waitThumbnailsLoad:!0,captions:!0,cssAnimation:!1,imagesAnimationDuration:500,captionSettings:{animationDuration:500,visibleOpacity:.7,nonVisibleOpacity:0},rel:null,target:null,extension:/\.[^.\\/]+$/,refreshTime:100,randomize:!1};return this.each(function(c,d){var e=a(d);e.addClass("justified-gallery");var f=e.data("jg.context");if("undefined"==typeof f){if("undefined"!=typeof b&&null!==b&&"object"!=typeof b)throw"The argument must be an object";var g=a('<div class="spinner"><span></span><span></span><span></span></div>'),h=a.extend({},y,b),i=h.border>=0?h.border:h.margins;f={settings:h,imgAnalyzerTimeout:null,entries:null,buildingRow:{entriesBuff:[],width:0,aspectRatio:0},lastAnalyzedIndex:-1,"yield":{every:2,flushed:0},border:i,offY:i,spinner:{active:!1,phase:0,timeslot:150,$el:g,$points:g.find("span"),intervalId:null},checkWidthIntervalId:null,galleryWidth:e.width(),$gallery:e},e.data("jg.context",f)}else if("norewind"===b)for(var j=0;j<f.buildingRow.entriesBuff.length;j++)k(f.buildingRow.entriesBuff[j],f);else f.settings=a.extend({},f.settings,b),f.border=f.settings.border>=0?f.settings.border:f.settings.margins,o(f);if(w(f),f.entries=e.find("> a, > div:not(.spinner)").toArray(),0!==f.entries.length){f.settings.randomize&&(f.entries.sort(function(){return 2*Math.random()-1}),a.each(f.entries,function(){a(this).appendTo(e)}));var m=!1,n=!1;a.each(f.entries,function(b,c){var d=a(c),g=l(d);if(d.addClass("jg-entry"),g.data("jg.loaded")!==!0&&"skipped"!==g.data("jg.loaded")){null!==f.settings.rel&&d.attr("rel",f.settings.rel),null!==f.settings.target&&d.attr("target",f.settings.target);var h="undefined"!=typeof g.data("safe-src")?g.data("safe-src"):g.attr("src");g.data("jg.originalSrc",h),g.attr("src",h);var i=parseInt(g.attr("width"),10),j=parseInt(g.attr("height"),10);if(f.settings.waitThumbnailsLoad!==!0&&!isNaN(i)&&!isNaN(j))return g.data("jg.imgw",i),g.data("jg.imgh",j),g.data("jg.loaded","skipped"),n=!0,u(f,!1),!0;g.data("jg.loaded",!1),m=!0,f.spinner.active===!1&&(f.spinner.active=!0,e.append(f.spinner.$el),e.height(f.offY+f.spinner.$el.innerHeight()),r(f.spinner)),x(h,function(a){g.data("jg.imgw",a.width),g.data("jg.imgh",a.height),g.data("jg.loaded",!0),u(f,!1)},function(){g.data("jg.loaded","error"),u(f,!1)})}}),m||n||u(f,!1),q(f)}})}}(jQuery);!function(e,i,t,s){t.swipebox=function(o,a){var n,r,l={useCSS:!0,useSVG:!0,initialIndexOnArray:0,removeBarsOnMobile:!0,hideCloseButtonOnMobile:!1,hideBarsDelay:3e3,videoMaxWidth:1140,vimeoColor:"cccccc",beforeOpen:null,afterOpen:null,afterClose:null,loopAtEnd:!1,autoplayVideos:!1,queryStringData:{},toggleClassOnLoad:""},d=this,p=[],b=o.selector,c=t(b),u=navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i),h=null!==u||i.createTouch!==s||"ontouchstart"in e||"onmsgesturechange"in e||navigator.msMaxTouchPoints,w=!!i.createElementNS&&!!i.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,m=e.innerWidth?e.innerWidth:t(e).width(),g=e.innerHeight?e.innerHeight:t(e).height(),f=0,v='<div id="swipebox-overlay">					<div id="swipebox-container">						<div id="swipebox-slider"></div>						<div id="swipebox-top-bar">							<div id="swipebox-title"></div>						</div>						<div id="swipebox-bottom-bar">							<div id="swipebox-arrows">								<a id="swipebox-prev"></a>								<a id="swipebox-next"></a>							</div>						</div>						<a id="swipebox-close"></a>					</div>			</div>';d.settings={},t.swipebox.close=function(){n.closeSlide()},t.swipebox.extend=function(){return n},d.init=function(){d.settings=t.extend({},l,a),t.isArray(o)?(p=o,n.target=t(e),n.init(d.settings.initialIndexOnArray)):t(i).on("click",b,function(e){if("slide current"===e.target.parentNode.className)return!1;t.isArray(o)||(n.destroy(),r=t(b),n.actions()),p=[];var i,s,a;a||(s="data-rel",a=t(this).attr(s)),a||(s="rel",a=t(this).attr(s)),r=a&&""!==a&&"nofollow"!==a?c.filter("["+s+'="'+a+'"]'):t(b),r.each(function(){var e=null,i=null;t(this).attr("title")&&(e=t(this).attr("title")),t(this).attr("href")&&(i=t(this).attr("href")),p.push({href:i,title:e})}),i=r.index(t(this)),e.preventDefault(),e.stopPropagation(),n.target=t(e.target),n.init(i)})},n={init:function(e){d.settings.beforeOpen&&d.settings.beforeOpen(),this.target.trigger("swipebox-start"),t.swipebox.isOpen=!0,this.build(),this.openSlide(e),this.openMedia(e),this.preloadMedia(e+1),this.preloadMedia(e-1),d.settings.afterOpen&&d.settings.afterOpen()},build:function(){var e,i=this;t("body").append(v),w&&d.settings.useSVG===!0&&(e=t("#swipebox-close").css("background-image"),e=e.replace("png","svg"),t("#swipebox-prev, #swipebox-next, #swipebox-close").css({"background-image":e})),u&&d.settings.removeBarsOnMobile&&t("#swipebox-bottom-bar, #swipebox-top-bar").remove(),t.each(p,function(){t("#swipebox-slider").append('<div class="slide"></div>')}),i.setDim(),i.actions(),h&&i.gesture(),i.keyboard(),i.animBars(),i.resize()},setDim:function(){var i,s,o={};"onorientationchange"in e?e.addEventListener("orientationchange",function(){0===e.orientation?(i=m,s=g):(90===e.orientation||-90===e.orientation)&&(i=g,s=m)},!1):(i=e.innerWidth?e.innerWidth:t(e).width(),s=e.innerHeight?e.innerHeight:t(e).height()),o={width:i,height:s},t("#swipebox-overlay").css(o)},resize:function(){var i=this;t(e).resize(function(){i.setDim()}).resize()},supportTransition:function(){var e,t="transition WebkitTransition MozTransition OTransition msTransition KhtmlTransition".split(" ");for(e=0;e<t.length;e++)if(i.createElement("div").style[t[e]]!==s)return t[e];return!1},doCssTrans:function(){return d.settings.useCSS&&this.supportTransition()?!0:void 0},gesture:function(){var e,i,s,o,a,n,r=this,l=!1,d=!1,b=10,c=50,u={},h={},w=t("#swipebox-top-bar, #swipebox-bottom-bar"),g=t("#swipebox-slider");w.addClass("visible-bars"),r.setTimeout(),t("body").bind("touchstart",function(r){return t(this).addClass("touching"),e=t("#swipebox-slider .slide").index(t("#swipebox-slider .slide.current")),h=r.originalEvent.targetTouches[0],u.pageX=r.originalEvent.targetTouches[0].pageX,u.pageY=r.originalEvent.targetTouches[0].pageY,t("#swipebox-slider").css({"-webkit-transform":"translate3d("+f+"%, 0, 0)",transform:"translate3d("+f+"%, 0, 0)"}),t(".touching").bind("touchmove",function(r){if(r.preventDefault(),r.stopPropagation(),h=r.originalEvent.targetTouches[0],!d&&(a=s,s=h.pageY-u.pageY,Math.abs(s)>=c||l)){var w=.75-Math.abs(s)/g.height();g.css({top:s+"px"}),g.css({opacity:w}),l=!0}o=i,i=h.pageX-u.pageX,n=100*i/m,!d&&!l&&Math.abs(i)>=b&&(t("#swipebox-slider").css({"-webkit-transition":"",transition:""}),d=!0),d&&(i>0?0===e?t("#swipebox-overlay").addClass("leftSpringTouch"):(t("#swipebox-overlay").removeClass("leftSpringTouch").removeClass("rightSpringTouch"),t("#swipebox-slider").css({"-webkit-transform":"translate3d("+(f+n)+"%, 0, 0)",transform:"translate3d("+(f+n)+"%, 0, 0)"})):0>i&&(p.length===e+1?t("#swipebox-overlay").addClass("rightSpringTouch"):(t("#swipebox-overlay").removeClass("leftSpringTouch").removeClass("rightSpringTouch"),t("#swipebox-slider").css({"-webkit-transform":"translate3d("+(f+n)+"%, 0, 0)",transform:"translate3d("+(f+n)+"%, 0, 0)"}))))}),!1}).bind("touchend",function(e){if(e.preventDefault(),e.stopPropagation(),t("#swipebox-slider").css({"-webkit-transition":"-webkit-transform 0.4s ease",transition:"transform 0.4s ease"}),s=h.pageY-u.pageY,i=h.pageX-u.pageX,n=100*i/m,l)if(l=!1,Math.abs(s)>=2*c&&Math.abs(s)>Math.abs(a)){var p=s>0?g.height():-g.height();g.animate({top:p+"px",opacity:0},300,function(){r.closeSlide()})}else g.animate({top:0,opacity:1},300);else d?(d=!1,i>=b&&i>=o?r.getPrev():-b>=i&&o>=i&&r.getNext()):w.hasClass("visible-bars")?(r.clearTimeout(),r.hideBars()):(r.showBars(),r.setTimeout());t("#swipebox-slider").css({"-webkit-transform":"translate3d("+f+"%, 0, 0)",transform:"translate3d("+f+"%, 0, 0)"}),t("#swipebox-overlay").removeClass("leftSpringTouch").removeClass("rightSpringTouch"),t(".touching").off("touchmove").removeClass("touching")})},setTimeout:function(){if(d.settings.hideBarsDelay>0){var i=this;i.clearTimeout(),i.timeout=e.setTimeout(function(){i.hideBars()},d.settings.hideBarsDelay)}},clearTimeout:function(){e.clearTimeout(this.timeout),this.timeout=null},showBars:function(){var e=t("#swipebox-top-bar, #swipebox-bottom-bar");this.doCssTrans()?e.addClass("visible-bars"):(t("#swipebox-top-bar").animate({top:0},500),t("#swipebox-bottom-bar").animate({bottom:0},500),setTimeout(function(){e.addClass("visible-bars")},1e3))},hideBars:function(){var e=t("#swipebox-top-bar, #swipebox-bottom-bar");this.doCssTrans()?e.removeClass("visible-bars"):(t("#swipebox-top-bar").animate({top:"-50px"},500),t("#swipebox-bottom-bar").animate({bottom:"-50px"},500),setTimeout(function(){e.removeClass("visible-bars")},1e3))},animBars:function(){var e=this,i=t("#swipebox-top-bar, #swipebox-bottom-bar");i.addClass("visible-bars"),e.setTimeout(),t("#swipebox-slider").click(function(){i.hasClass("visible-bars")||(e.showBars(),e.setTimeout())}),t("#swipebox-bottom-bar").hover(function(){e.showBars(),i.addClass("visible-bars"),e.clearTimeout()},function(){d.settings.hideBarsDelay>0&&(i.removeClass("visible-bars"),e.setTimeout())})},keyboard:function(){var i=this;t(e).bind("keyup",function(e){e.preventDefault(),e.stopPropagation(),37===e.keyCode?i.getPrev():39===e.keyCode?i.getNext():27===e.keyCode&&i.closeSlide()})},actions:function(){var e=this,i="touchend click";p.length<2?(t("#swipebox-bottom-bar").hide(),s===p[1]&&t("#swipebox-top-bar").hide()):(t("#swipebox-prev").bind(i,function(i){i.preventDefault(),i.stopPropagation(),e.getPrev(),e.setTimeout()}),t("#swipebox-next").bind(i,function(i){i.preventDefault(),i.stopPropagation(),e.getNext(),e.setTimeout()})),t("#swipebox-close").bind(i,function(){e.closeSlide()})},setSlide:function(e,i){i=i||!1;var s=t("#swipebox-slider");f=100*-e,this.doCssTrans()?s.css({"-webkit-transform":"translate3d("+100*-e+"%, 0, 0)",transform:"translate3d("+100*-e+"%, 0, 0)"}):s.animate({left:100*-e+"%"}),t("#swipebox-slider .slide").removeClass("current"),t("#swipebox-slider .slide").eq(e).addClass("current"),this.setTitle(e),i&&s.fadeIn(),t("#swipebox-prev, #swipebox-next").removeClass("disabled"),0===e?t("#swipebox-prev").addClass("disabled"):e===p.length-1&&d.settings.loopAtEnd!==!0&&t("#swipebox-next").addClass("disabled")},openSlide:function(i){t("html").addClass("swipebox-html"),h?(t("html").addClass("swipebox-touch"),d.settings.hideCloseButtonOnMobile&&t("html").addClass("swipebox-no-close-button")):t("html").addClass("swipebox-no-touch"),t(e).trigger("resize"),this.setSlide(i,!0)},preloadMedia:function(e){var i=this,t=null;p[e]!==s&&(t=p[e].href),i.isVideo(t)?i.openMedia(e):setTimeout(function(){i.openMedia(e)},1e3)},openMedia:function(e){var i,o,a=this;return p[e]!==s&&(i=p[e].href),0>e||e>=p.length?!1:(o=t("#swipebox-slider .slide").eq(e),void(a.isVideo(i)?o.html(a.getVideo(i)):(o.addClass("slide-loading"),a.loadMedia(i,function(){o.removeClass("slide-loading"),o.html(this)}))))},setTitle:function(e){var i=null;t("#swipebox-title").empty(),p[e]!==s&&(i=p[e].title),i?(t("#swipebox-top-bar").show(),t("#swipebox-title").append(i)):t("#swipebox-top-bar").hide()},isVideo:function(e){if(e){if(e.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/)||e.match(/vimeo\.com\/([0-9]*)/)||e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/))return!0;if(e.toLowerCase().indexOf("swipeboxvideo=1")>=0)return!0}},parseUri:function(e,s){var o=i.createElement("a"),a={};return o.href=decodeURIComponent(e),a=JSON.parse('{"'+o.search.toLowerCase().replace("?","").replace(/&/g,'","').replace(/=/g,'":"')+'"}'),t.isPlainObject(s)&&(a=t.extend(a,s,d.settings.queryStringData)),t.map(a,function(e,i){return e&&e>""?encodeURIComponent(i)+"="+encodeURIComponent(e):void 0}).join("&")},getVideo:function(e){var i="",t=e.match(/((?:www\.)?youtube\.com|(?:www\.)?youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/),s=e.match(/(?:www\.)?youtu\.be\/([a-zA-Z0-9\-_]+)/),o=e.match(/(?:www\.)?vimeo\.com\/([0-9]*)/),a="";return t||s?(s&&(t=s),a=n.parseUri(e,{autoplay:d.settings.autoplayVideos?"1":"0",v:""}),i='<iframe width="560" height="315" src="//'+t[1]+"/embed/"+t[2]+"?"+a+'" frameborder="0" allowfullscreen></iframe>'):o?(a=n.parseUri(e,{autoplay:d.settings.autoplayVideos?"1":"0",byline:"0",portrait:"0",color:d.settings.vimeoColor}),i='<iframe width="560" height="315"  src="//player.vimeo.com/video/'+o[1]+"?"+a+'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'):i='<iframe width="560" height="315" src="'+e+'" frameborder="0" allowfullscreen></iframe>','<div class="swipebox-video-container" style="max-width:'+d.settings.videoMaxWidth+'px"><div class="swipebox-video">'+i+"</div></div>"},loadMedia:function(e,i){if(0===e.trim().indexOf("#"))i.call(t("<div>",{"class":"swipebox-inline-container"}).append(t(e).clone().toggleClass(d.settings.toggleClassOnLoad)));else if(!this.isVideo(e)){var s=t("<img>").on("load",function(){i.call(s)});s.attr("src",e)}},getNext:function(){var e,i=this,s=t("#swipebox-slider .slide").index(t("#swipebox-slider .slide.current"));s+1<p.length?(e=t("#swipebox-slider .slide").eq(s).contents().find("iframe").attr("src"),t("#swipebox-slider .slide").eq(s).contents().find("iframe").attr("src",e),s++,i.setSlide(s),i.preloadMedia(s+1)):d.settings.loopAtEnd===!0?(e=t("#swipebox-slider .slide").eq(s).contents().find("iframe").attr("src"),t("#swipebox-slider .slide").eq(s).contents().find("iframe").attr("src",e),s=0,i.preloadMedia(s),i.setSlide(s),i.preloadMedia(s+1)):(t("#swipebox-overlay").addClass("rightSpring"),setTimeout(function(){t("#swipebox-overlay").removeClass("rightSpring")},500))},getPrev:function(){var e,i=t("#swipebox-slider .slide").index(t("#swipebox-slider .slide.current"));i>0?(e=t("#swipebox-slider .slide").eq(i).contents().find("iframe").attr("src"),t("#swipebox-slider .slide").eq(i).contents().find("iframe").attr("src",e),i--,this.setSlide(i),this.preloadMedia(i-1)):(t("#swipebox-overlay").addClass("leftSpring"),setTimeout(function(){t("#swipebox-overlay").removeClass("leftSpring")},500))},closeSlide:function(){t("html").removeClass("swipebox-html"),t("html").removeClass("swipebox-touch"),t(e).trigger("resize"),this.destroy()},destroy:function(){t(e).unbind("keyup"),t("body").unbind("touchstart"),t("body").unbind("touchmove"),t("body").unbind("touchend"),t("#swipebox-slider").unbind(),t("#swipebox-overlay").remove(),t.isArray(o)||o.removeData("_swipebox"),this.target&&this.target.trigger("swipebox-destroy"),t.swipebox.isOpen=!1,d.settings.afterClose&&d.settings.afterClose()}},d.init()},t.fn.swipebox=function(e){if(!t.data(this,"_swipebox")){var i=new t.swipebox(this,e);this.data("_swipebox",i)}return this.data("_swipebox")}}(window,document,jQuery);