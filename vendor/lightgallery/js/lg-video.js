!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var o;o="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,o.LgVideo=e()}}(function(){var e;return function o(e,i,r){function t(s,a){if(!i[s]){if(!e[s]){var d="function"==typeof require&&require;if(!a&&d)return d(s,!0);if(l)return l(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var n=i[s]={exports:{}};e[s][0].call(n.exports,function(o){var i=e[s][1][o];return t(i?i:o)},n,n.exports,o,e,i,r)}return i[s].exports}for(var l="function"==typeof require&&require,s=0;s<r.length;s++)t(r[s]);return t}({1:[function(o,i,r){!function(o,i){if("function"==typeof e&&e.amd)e([],i);else if("undefined"!=typeof r)i();else{var t={exports:{}};i(),o.lgVideo=t.exports}}(this,function(){"use strict";var e=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var i=arguments[o];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},o={videoMaxWidth:"855px",youtubePlayerParams:!1,vimeoPlayerParams:!1,dailymotionPlayerParams:!1,vkPlayerParams:!1,videojs:!1,videojsOptions:{}},i=function(i){return this.el=i,this.core=window.lgData[this.el.getAttribute("lg-uid")],this.core.s=e({},o,this.core.s),this.videoLoaded=!1,this.init(),this};i.prototype.init=function(){var e=this;utils.on(e.core.el,"hasVideo.lgtm",function(o){if(e.core.___slide[o.detail.index].querySelector(".lg-video").insertAdjacentHTML("beforeend",e.loadVideo(o.detail.src,"lg-object",!0,o.detail.index,o.detail.html)),o.detail.html)if(e.core.s.videojs)try{videojs(e.core.___slide[o.detail.index].querySelector(".lg-html5"),e.core.s.videojsOptions,function(){e.videoLoaded||this.play()})}catch(i){console.error("Make sure you have included videojs")}else e.core.___slide[o.detail.index].querySelector(".lg-html5").play()}),utils.on(e.core.el,"onAferAppendSlide.lgtm",function(o){e.core.___slide[o.detail.index].querySelector(".lg-video-cont")&&(e.core.___slide[o.detail.index].querySelector(".lg-video-cont").style.maxWidth=e.core.s.videoMaxWidth,e.videoLoaded=!0)});var o=function(o){if(utils.hasClass(o.querySelector(".lg-object"),"lg-has-poster")&&"none"!==o.querySelector(".lg-object").style.display)if(utils.hasClass(o,"lg-has-video")){var i=o.querySelector(".lg-youtube"),r=o.querySelector(".lg-vimeo"),t=o.querySelector(".lg-dailymotion"),l=o.querySelector(".lg-html5");if(i)i.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*");else if(r)try{$f(r).api("play")}catch(s){console.error("Make sure you have included froogaloop2 js")}else if(t)t.contentWindow.postMessage("play","*");else if(l)if(e.core.s.videojs)try{videojs(l).play()}catch(s){console.error("Make sure you have included videojs")}else l.play();utils.addClass(o,"lg-video-playing")}else{utils.addClass(o,"lg-video-playing lg-has-video");var a,d,c=function(i,r){if(o.querySelector(".lg-video").insertAdjacentHTML("beforeend",e.loadVideo(i,"",!1,e.core.index,r)),r)if(e.core.s.videojs)try{videojs(e.core.___slide[e.core.index].querySelector(".lg-html5"),e.core.s.videojsOptions,function(){this.play()})}catch(t){console.error("Make sure you have included videojs")}else e.core.___slide[e.core.index].querySelector(".lg-html5").play()};e.core.s.dynamic?(a=e.core.s.dynamicEl[e.core.index].src,d=e.core.s.dynamicEl[e.core.index].html,c(a,d)):(a=e.core.items[e.core.index].getAttribute("href")||e.core.items[e.core.index].getAttribute("data-src"),d=e.core.items[e.core.index].getAttribute("data-html"),c(a,d));var n=o.querySelector(".lg-object");o.querySelector(".lg-video").appendChild(n),utils.hasClass(o.querySelector(".lg-video-object"),"lg-html5")||(utils.removeClass(o,"lg-complete"),utils.on(o.querySelector(".lg-video-object"),"load.lg error.lg",function(){utils.addClass(o,"lg-complete")}))}};if(e.core.doCss()&&e.core.items.length>1&&(e.core.s.enableSwipe&&e.core.isTouch||e.core.s.enableDrag&&!e.core.isTouch))utils.on(e.core.el,"onSlideClick.lgtm",function(){var i=e.core.___slide[e.core.index];o(i)});else for(var i=0;i<e.core.___slide.length;i++)!function(i){utils.on(e.core.___slide[i],"click.lg",function(){o(e.core.___slide[i])})}(i);utils.on(e.core.el,"onBeforeSlide.lgtm",function(o){var i=e.core.___slide[o.detail.prevIndex],r=i.querySelector(".lg-youtube"),t=i.querySelector(".lg-vimeo"),l=i.querySelector(".lg-dailymotion"),s=i.querySelector(".lg-vk"),a=i.querySelector(".lg-html5");if(r)r.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*");else if(t)try{$f(t).api("pause")}catch(d){console.error("Make sure you have included froogaloop2 js")}else if(l)l.contentWindow.postMessage("pause","*");else if(a)if(e.core.s.videojs)try{videojs(a).pause()}catch(d){console.error("Make sure you have included videojs")}else a.pause();s&&s.setAttribute("src",s.getAttribute("src").replace("&autoplay","&noplay"));var c;c=e.core.s.dynamic?e.core.s.dynamicEl[o.detail.index].src:e.core.items[o.detail.index].getAttribute("href")||e.core.items[o.detail.index].getAttribute("data-src");var n=e.core.isVideo(c,o.detail.index)||{};(n.youtube||n.vimeo||n.dailymotion||n.vk)&&utils.addClass(e.core.outer,"lg-hide-download")}),utils.on(e.core.el,"onAfterSlide.lgtm",function(o){utils.removeClass(e.core.___slide[o.detail.prevIndex],"lg-video-playing")})},i.prototype.loadVideo=function(e,o,i,r,t){var l="",s=1,a="",d=this.core.isVideo(e,r)||{};if(i&&(s=this.videoLoaded?0:1),d.youtube)a="?wmode=opaque&autoplay="+s+"&enablejsapi=1",this.core.s.youtubePlayerParams&&(a=a+"&"+utils.param(this.core.s.youtubePlayerParams)),l='<iframe class="lg-video-object lg-youtube '+o+'" width="560" height="315" src="//www.youtube.com/embed/'+d.youtube[1]+a+'" frameborder="0" allowfullscreen></iframe>';else if(d.vimeo)a="?autoplay="+s+"&api=1",this.core.s.vimeoPlayerParams&&(a=a+"&"+utils.param(this.core.s.vimeoPlayerParams)),l='<iframe class="lg-video-object lg-vimeo '+o+'" width="560" height="315"  src="//player.vimeo.com/video/'+d.vimeo[1]+a+'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';else if(d.dailymotion)a="?wmode=opaque&autoplay="+s+"&api=postMessage",this.core.s.dailymotionPlayerParams&&(a=a+"&"+utils.param(this.core.s.dailymotionPlayerParams)),l='<iframe class="lg-video-object lg-dailymotion '+o+'" width="560" height="315" src="//www.dailymotion.com/embed/video/'+d.dailymotion[1]+a+'" frameborder="0" allowfullscreen></iframe>';else if(d.html5){var c=t.substring(0,1);"."!==c&&"#"!==c||(t=document.querySelector(t).innerHTML),l=t}else d.vk&&(a="&autoplay="+s,this.core.s.vkPlayerParams&&(a=a+"&"+utils.param(this.core.s.vkPlayerParams)),l='<iframe class="lg-video-object lg-vk '+o+'" width="560" height="315" src="http://vk.com/video_ext.php?'+d.vk[1]+a+'" frameborder="0" allowfullscreen></iframe>');return l},i.prototype.destroy=function(){this.videoLoaded=!1},window.lgModules.video=i})},{}]},{},[1])(1)});