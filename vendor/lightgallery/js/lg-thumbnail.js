!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.LgThumbnail=t()}}(function(){var t;return function e(t,i,o){function u(s,l){if(!i[s]){if(!t[s]){var h="function"==typeof require&&require;if(!l&&h)return h(s,!0);if(r)return r(s,!0);var n=new Error("Cannot find module '"+s+"'");throw n.code="MODULE_NOT_FOUND",n}var a=i[s]={exports:{}};t[s][0].call(a.exports,function(e){var i=t[s][1][e];return u(i?i:e)},a,a.exports,e,t,i,o)}return i[s].exports}for(var r="function"==typeof require&&require,s=0;s<o.length;s++)u(o[s]);return u}({1:[function(e,i,o){!function(e,i){if("function"==typeof t&&t.amd)t([],i);else if("undefined"!=typeof o)i();else{var u={exports:{}};i(),e.lgThumbnail=u.exports}}(this,function(){"use strict";var t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},e={thumbnail:!0,animateThumb:!0,currentPagerPosition:"middle",thumbWidth:100,thumbContHeight:100,thumbMargin:5,exThumbImage:!1,showThumbByDefault:!0,toggleThumb:!0,pullCaptionUp:!0,enableThumbDrag:!0,enableThumbSwipe:!0,swipeThreshold:50,loadYoutubeThumbnail:!0,youtubeThumbSize:1,loadVimeoThumbnail:!0,vimeoThumbSize:"thumbnail_small",loadDailymotionThumbnail:!0},i=function(i){return this.el=i,this.core=window.lgData[this.el.getAttribute("lg-uid")],this.core.s=t({},e,this.core.s),this.thumbOuter=null,this.thumbOuterWidth=0,this.thumbTotalWidth=this.core.items.length*(this.core.s.thumbWidth+this.core.s.thumbMargin),this.thumbIndex=this.core.index,this.left=0,this.init(),this};i.prototype.init=function(){var t=this;this.core.s.thumbnail&&this.core.items.length>1&&(this.core.s.showThumbByDefault&&setTimeout(function(){utils.addClass(t.core.outer,"lg-thumb-open")},700),this.core.s.pullCaptionUp&&utils.addClass(this.core.outer,"lg-pull-caption-up"),this.build(),this.core.s.animateThumb?(this.core.s.enableThumbDrag&&!this.core.isTouch&&this.core.doCss()&&this.enableThumbDrag(),this.core.s.enableThumbSwipe&&this.core.isTouch&&this.core.doCss()&&this.enableThumbSwipe(),this.thumbClickable=!1):this.thumbClickable=!0,this.toggle(),this.thumbkeyPress())},i.prototype.build=function(){function t(t,e,r){var s,l=i.core.isVideo(t,r)||{},h="";l.youtube||l.vimeo||l.dailymotion?l.youtube?s=i.core.s.loadYoutubeThumbnail?"//img.youtube.com/vi/"+l.youtube[1]+"/"+i.core.s.youtubeThumbSize+".jpg":e:l.vimeo?i.core.s.loadVimeoThumbnail?(s="//i.vimeocdn.com/video/error_"+u+".jpg",h=l.vimeo[1]):s=e:l.dailymotion&&(s=i.core.s.loadDailymotionThumbnail?"//www.dailymotion.com/thumbnail/video/"+l.dailymotion[1]:e):s=e,o+='<div data-vimeo-id="'+h+'" class="lg-thumb-item" style="width:'+i.core.s.thumbWidth+"px; margin-right: "+i.core.s.thumbMargin+'px"><img src="'+s+'" /></div>',h=""}var e,i=this,o="",u="",r='<div class="lg-thumb-outer"><div class="lg-thumb group"></div></div>';switch(this.core.s.vimeoThumbSize){case"thumbnail_large":u="640";break;case"thumbnail_medium":u="200x150";break;case"thumbnail_small":u="100x75"}if(utils.addClass(i.core.outer,"lg-has-thumb"),i.core.outer.querySelector(".lg").insertAdjacentHTML("beforeend",r),i.thumbOuter=i.core.outer.querySelector(".lg-thumb-outer"),i.thumbOuterWidth=i.thumbOuter.offsetWidth,i.core.s.animateThumb&&(i.core.outer.querySelector(".lg-thumb").style.width=i.thumbTotalWidth+"px",i.core.outer.querySelector(".lg-thumb").style.position="relative"),this.core.s.animateThumb&&(i.thumbOuter.style.height=i.core.s.thumbContHeight+"px"),i.core.s.dynamic)for(var s=0;s<i.core.s.dynamicEl.length;s++)t(i.core.s.dynamicEl[s].src,i.core.s.dynamicEl[s].thumb,s);else for(var l=0;l<i.core.items.length;l++)i.core.s.exThumbImage?t(i.core.items[l].getAttribute("href")||i.core.items[l].getAttribute("data-src"),i.core.items[l].getAttribute(i.core.s.exThumbImage),l):t(i.core.items[l].getAttribute("href")||i.core.items[l].getAttribute("data-src"),i.core.items[l].querySelector("img").getAttribute("src"),l);i.core.outer.querySelector(".lg-thumb").innerHTML=o,e=i.core.outer.querySelectorAll(".lg-thumb-item");for(var h=0;h<e.length;h++)!function(t){var o=e[t],u=o.getAttribute("data-vimeo-id");if(u){window["lgJsonP"+i.el.getAttribute("lg-uid")+h]=function(t){o.querySelector("img").setAttribute("src",t[0][i.core.s.vimeoThumbSize])};var r=document.createElement("script");r.className="lg-script",r.src="//www.vimeo.com/api/v2/video/"+u+".json?callback=lgJsonP"+i.el.getAttribute("lg-uid")+h,document.body.appendChild(r)}}(h);utils.addClass(e[i.core.index],"active"),utils.on(i.core.el,"onBeforeSlide.lgtm",function(){for(var t=0;t<e.length;t++)utils.removeClass(e[t],"active");utils.addClass(e[i.core.index],"active")});for(var n=0;n<e.length;n++)!function(t){utils.on(e[t],"click.lg touchend.lg",function(){setTimeout(function(){(i.thumbClickable&&!i.core.lgBusy||!i.core.doCss())&&(i.core.index=t,i.core.slide(i.core.index,!1,!0))},50)})}(n);utils.on(i.core.el,"onBeforeSlide.lgtm",function(){i.animateThumb(i.core.index)}),utils.on(window,"resize.lgthumb orientationchange.lgthumb",function(){setTimeout(function(){i.animateThumb(i.core.index),i.thumbOuterWidth=i.thumbOuter.offsetWidth},200)})},i.prototype.setTranslate=function(t){utils.setVendor(this.core.outer.querySelector(".lg-thumb"),"Transform","translate3d(-"+t+"px, 0px, 0px)")},i.prototype.animateThumb=function(t){var e=this.core.outer.querySelector(".lg-thumb");if(this.core.s.animateThumb){var i;switch(this.core.s.currentPagerPosition){case"left":i=0;break;case"middle":i=this.thumbOuterWidth/2-this.core.s.thumbWidth/2;break;case"right":i=this.thumbOuterWidth-this.core.s.thumbWidth}this.left=(this.core.s.thumbWidth+this.core.s.thumbMargin)*t-1-i,this.left>this.thumbTotalWidth-this.thumbOuterWidth&&(this.left=this.thumbTotalWidth-this.thumbOuterWidth),this.left<0&&(this.left=0),this.core.lGalleryOn?(utils.hasClass(e,"on")||utils.setVendor(this.core.outer.querySelector(".lg-thumb"),"TransitionDuration",this.core.s.speed+"ms"),this.core.doCss()||(e.style.left=-this.left+"px")):this.core.doCss()||(e.style.left=-this.left+"px"),this.setTranslate(this.left)}},i.prototype.enableThumbDrag=function(){var t=this,e=0,i=0,o=!1,u=!1,r=0;utils.addClass(t.thumbOuter,"lg-grab"),utils.on(t.core.outer.querySelector(".lg-thumb"),"mousedown.lgthumb",function(i){t.thumbTotalWidth>t.thumbOuterWidth&&(i.preventDefault(),e=i.pageX,o=!0,t.core.outer.scrollLeft+=1,t.core.outer.scrollLeft-=1,t.thumbClickable=!1,utils.removeClass(t.thumbOuter,"lg-grab"),utils.addClass(t.thumbOuter,"lg-grabbing"))}),utils.on(window,"mousemove.lgthumb",function(s){o&&(r=t.left,u=!0,i=s.pageX,utils.addClass(t.thumbOuter,"lg-dragging"),r-=i-e,r>t.thumbTotalWidth-t.thumbOuterWidth&&(r=t.thumbTotalWidth-t.thumbOuterWidth),r<0&&(r=0),t.setTranslate(r))}),utils.on(window,"mouseup.lgthumb",function(){u?(u=!1,utils.removeClass(t.thumbOuter,"lg-dragging"),t.left=r,Math.abs(i-e)<t.core.s.swipeThreshold&&(t.thumbClickable=!0)):t.thumbClickable=!0,o&&(o=!1,utils.removeClass(t.thumbOuter,"lg-grabbing"),utils.addClass(t.thumbOuter,"lg-grab"))})},i.prototype.enableThumbSwipe=function(){var t=this,e=0,i=0,o=!1,u=0;utils.on(t.core.outer.querySelector(".lg-thumb"),"touchstart.lg",function(i){t.thumbTotalWidth>t.thumbOuterWidth&&(i.preventDefault(),e=i.targetTouches[0].pageX,t.thumbClickable=!1)}),utils.on(t.core.outer.querySelector(".lg-thumb"),"touchmove.lg",function(r){t.thumbTotalWidth>t.thumbOuterWidth&&(r.preventDefault(),i=r.targetTouches[0].pageX,o=!0,utils.addClass(t.thumbOuter,"lg-dragging"),u=t.left,u-=i-e,u>t.thumbTotalWidth-t.thumbOuterWidth&&(u=t.thumbTotalWidth-t.thumbOuterWidth),u<0&&(u=0),t.setTranslate(u))}),utils.on(t.core.outer.querySelector(".lg-thumb"),"touchend.lg",function(){t.thumbTotalWidth>t.thumbOuterWidth&&o?(o=!1,utils.removeClass(t.thumbOuter,"lg-dragging"),Math.abs(i-e)<t.core.s.swipeThreshold&&(t.thumbClickable=!0),t.left=u):t.thumbClickable=!0})},i.prototype.toggle=function(){var t=this;t.core.s.toggleThumb&&(utils.addClass(t.core.outer,"lg-can-toggle"),t.thumbOuter.insertAdjacentHTML("beforeend",'<span class="lg-toggle-thumb lg-icon"></span>'),utils.on(t.core.outer.querySelector(".lg-toggle-thumb"),"click.lg",function(){utils.hasClass(t.core.outer,"lg-thumb-open")?utils.removeClass(t.core.outer,"lg-thumb-open"):utils.addClass(t.core.outer,"lg-thumb-open")}))},i.prototype.thumbkeyPress=function(){var t=this;utils.on(window,"keydown.lgthumb",function(e){38===e.keyCode?(e.preventDefault(),utils.addClass(t.core.outer,"lg-thumb-open")):40===e.keyCode&&(e.preventDefault(),utils.removeClass(t.core.outer,"lg-thumb-open"))})},i.prototype.destroy=function(){if(this.core.s.thumbnail&&this.core.items.length>1){utils.off(window,".lgthumb"),this.thumbOuter.parentNode.removeChild(this.thumbOuter),utils.removeClass(this.core.outer,"lg-has-thumb");for(var t=document.getElementsByClassName("lg-script");t[0];)t[0].parentNode.removeChild(t[0])}},window.lgModules.thumbnail=i})},{}]},{},[1])(1)});