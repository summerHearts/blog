Array.prototype.S=String.fromCharCode(2),Array.prototype.in_array=function(t){var i=new RegExp(this.S+t+this.S);return i.test(this.S+this.join(this.S)+this.S)},Array.prototype.pull=function(t){for(var i=0,r=0;i<this.length;i++)this[i]!=t&&(this[r++]=this[i]);this.length-=1},jQuery(function(t){if(window._lazyimgs=t("img.hx_lazyimg"),0!=_lazyimgs.length){var i=[],r=[],a=[],e={},n=function(){if(r.length!=_lazyimgs.length){var n=200,s="data-original";_lazyimgs.each(function(o){if(_self=t(this),void 0===_self.attr("lazyloadpass")&&_self.attr(s)&&(!_self.attr("src")||_self.attr("src")&&_self.attr(s)!=_self.attr("src"))&&_self.offset().top<t(window).height()+t(document).scrollTop()+n&&_self.offset().left<t(window).width()+t(document).scrollLeft()+n&&_self.offset().top>t(document).scrollTop()-n&&_self.offset().left>t(document).scrollLeft()-n){if(i.in_array(o))return;i.push(o),void 0===e["count"+o]&&(e["count"+o]=0),_self.css("opacity",1),t('<img ind="'+o+'"/>').bind("load",function(){var i=t(this).attr("ind");if(!r.in_array(i)){r.push(i);var a=_lazyimgs.eq(i);a.attr("src",a.attr(s)).css("background-image","none").attr("lazyloadpass","1"),a.parent().is("a")&&a.parent().attr("href").indexOf("loading.gif")>0&&a.parent().attr("href",a.attr(s))}}).bind("error",function(){var r=t(this).attr("ind");a.in_array(r)||a.push(r),e["count"+r]++,e["count"+r]<2&&i.pull(r)}).attr("src",_self.attr(s))}})}};n();var s;t(window).scroll(function(){clearTimeout(s),s=setTimeout(n,100)}),t(window).resize(function(){clearTimeout(s),s=setTimeout(n,100)})}}),jQuery(function(t){var i=function(t){var i=t.attr("width"),r=t.attr("height");if(i&&r&&i>=300){var a=t.width(),e=parseInt(r*(a/i));t.css("height",e)}},r=function(){_lazyimgs.each(function(){i(t(this))})};r(),t(window).resize(r)});