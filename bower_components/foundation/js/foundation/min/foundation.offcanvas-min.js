!function($,e,t,a){"use strict";Foundation.libs.offcanvas={name:"offcanvas",version:"5.4.7",settings:{open_method:"move",close_on_click:!1},init:function(e,t,a){this.bindings(t,a)},events:function(){var e=this,t=e.S,a="",s="",n="";"move"===this.settings.open_method?(a="move-",s="right",n="left"):"overlap_single"===this.settings.open_method?(a="offcanvas-overlap-",s="right",n="left"):"overlap"===this.settings.open_method&&(a="offcanvas-overlap"),t(this.scope).off(".offcanvas").on("click.fndtn.offcanvas",".left-off-canvas-toggle",function(n){e.click_toggle_class(n,a+s),"overlap"!==e.settings.open_method&&t(".left-submenu").removeClass(a+s),$(".left-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".left-off-canvas-menu a",function(n){var o=e.get_settings(n),i=t(this).parent();!o.close_on_click||i.hasClass("has-submenu")||i.hasClass("back")?t(this).parent().hasClass("has-submenu")?(n.preventDefault(),t(this).siblings(".left-submenu").toggleClass(a+s)):i.hasClass("back")&&(n.preventDefault(),i.parent().removeClass(a+s)):(e.hide.call(e,a+s,e.get_wrapper(n)),i.parent().removeClass(a+s)),$(".left-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".right-off-canvas-toggle",function(s){e.click_toggle_class(s,a+n),"overlap"!==e.settings.open_method&&t(".right-submenu").removeClass(a+n),$(".right-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".right-off-canvas-menu a",function(s){var o=e.get_settings(s),i=t(this).parent();!o.close_on_click||i.hasClass("has-submenu")||i.hasClass("back")?t(this).parent().hasClass("has-submenu")?(s.preventDefault(),t(this).siblings(".right-submenu").toggleClass(a+n)):i.hasClass("back")&&(s.preventDefault(),i.parent().removeClass(a+n)):(e.hide.call(e,a+n,e.get_wrapper(s)),i.parent().removeClass(a+n)),$(".right-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".exit-off-canvas",function(o){e.click_remove_class(o,a+n),t(".right-submenu").removeClass(a+n),s&&(e.click_remove_class(o,a+s),t(".left-submenu").removeClass(a+n)),$(".right-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".exit-off-canvas",function(t){e.click_remove_class(t,a+n),$(".left-off-canvas-toggle").attr("aria-expanded","false"),s&&(e.click_remove_class(t,a+s),$(".right-off-canvas-toggle").attr("aria-expanded","false"))})},toggle:function(e,t){t=t||this.get_wrapper(),t.is("."+e)?this.hide(e,t):this.show(e,t)},show:function(e,t){t=t||this.get_wrapper(),t.trigger("open").trigger("open.fndtn.offcanvas"),t.addClass(e)},hide:function(e,t){t=t||this.get_wrapper(),t.trigger("close").trigger("close.fndtn.offcanvas"),t.removeClass(e)},click_toggle_class:function(e,t){e.preventDefault();var a=this.get_wrapper(e);this.toggle(t,a)},click_remove_class:function(e,t){e.preventDefault();var a=this.get_wrapper(e);this.hide(t,a)},get_settings:function(e){var t=this.S(e.target).closest("["+this.attr_name()+"]");return t.data(this.attr_name(!0)+"-init")||this.settings},get_wrapper:function(e){var t=this.S(e?e.target:this.scope).closest(".off-canvas-wrap");return 0===t.length&&(t=this.S(".off-canvas-wrap")),t},reflow:function(){}}}(jQuery,window,window.document);