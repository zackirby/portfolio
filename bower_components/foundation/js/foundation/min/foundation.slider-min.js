!function($,t,e,a){"use strict";Foundation.libs.slider={name:"slider",version:"5.4.7",settings:{start:0,end:100,step:1,initial:null,display_selector:"",vertical:!1,on_change:function(){}},cache:{},init:function(t,e,a){Foundation.inherit(this,"throttle"),this.bindings(e,a),this.reflow()},events:function(){var e=this;$(this.scope).off(".slider").on("mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider","["+e.attr_name()+"]:not(.disabled, [disabled]) .range-slider-handle",function(t){e.cache.active||(t.preventDefault(),e.set_active_slider($(t.target)))}).on("mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider",function(a){if(e.cache.active)if(a.preventDefault(),$.data(e.cache.active[0],"settings").vertical){var n=0;a.pageY||(n=t.scrollY),e.calculate_position(e.cache.active,(a.pageY||a.originalEvent.clientY||a.originalEvent.touches[0].clientY||a.currentPoint.y)+n)}else e.calculate_position(e.cache.active,a.pageX||a.originalEvent.clientX||a.originalEvent.touches[0].clientX||a.currentPoint.x)}).on("mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider",function(t){e.remove_active_slider()}).on("change.fndtn.slider",function(t){e.settings.on_change()}),e.S(t).on("resize.fndtn.slider",e.throttle(function(t){e.reflow()},300))},set_active_slider:function(t){this.cache.active=t},remove_active_slider:function(){this.cache.active=null},calculate_position:function(t,e){var a=this,n=$.data(t[0],"settings"),i=$.data(t[0],"handle_l"),r=$.data(t[0],"handle_o"),s=$.data(t[0],"bar_l"),l=$.data(t[0],"bar_o");requestAnimationFrame(function(){var i;i=Foundation.rtl&&!n.vertical?a.limit_to((l+s-e)/s,0,1):a.limit_to((e-l)/s,0,1),i=n.vertical?1-i:i;var r=a.normalized_value(i,n.start,n.end,n.step);a.set_ui(t,r)})},set_ui:function(t,e){var a=$.data(t[0],"settings"),n=$.data(t[0],"handle_l"),i=$.data(t[0],"bar_l"),r=this.normalized_percentage(e,a.start,a.end),s=r*(i-n)-1,l=100*r;Foundation.rtl&&!a.vertical&&(s=-s),s=a.vertical?-s+i-n+1:s,this.set_translate(t,s,a.vertical),a.vertical?t.siblings(".range-slider-active-segment").css("height",l+"%"):t.siblings(".range-slider-active-segment").css("width",l+"%"),t.parent().attr(this.attr_name(),e).trigger("change").trigger("change.fndtn.slider"),t.parent().children("input[type=hidden]").val(e),t[0].hasAttribute("aria-valuemin")||t.attr({"aria-valuemin":a.start,"aria-valuemax":a.end}),t.attr("aria-valuenow",e),""!=a.display_selector&&$(a.display_selector).each(function(){this.hasOwnProperty("value")?$(this).val(e):$(this).text(e)})},normalized_percentage:function(t,e,a){return Math.min(1,(t-e)/(a-e))},normalized_value:function(t,e,a,n){var i=a-e,r=t*i,s=(r-r%n)/n,l=r%n,o=l>=.5*n?n:0;return s*n+o+e},set_translate:function(t,e,a){a?$(t).css("-webkit-transform","translateY("+e+"px)").css("-moz-transform","translateY("+e+"px)").css("-ms-transform","translateY("+e+"px)").css("-o-transform","translateY("+e+"px)").css("transform","translateY("+e+"px)"):$(t).css("-webkit-transform","translateX("+e+"px)").css("-moz-transform","translateX("+e+"px)").css("-ms-transform","translateX("+e+"px)").css("-o-transform","translateX("+e+"px)").css("transform","translateX("+e+"px)")},limit_to:function(t,e,a){return Math.min(Math.max(t,e),a)},initialize_settings:function(t){var e=$.extend({},this.settings,this.data_options($(t).parent()));e.vertical?($.data(t,"bar_o",$(t).parent().offset().top),$.data(t,"bar_l",$(t).parent().outerHeight()),$.data(t,"handle_o",$(t).offset().top),$.data(t,"handle_l",$(t).outerHeight())):($.data(t,"bar_o",$(t).parent().offset().left),$.data(t,"bar_l",$(t).parent().outerWidth()),$.data(t,"handle_o",$(t).offset().left),$.data(t,"handle_l",$(t).outerWidth())),$.data(t,"bar",$(t).parent()),$.data(t,"settings",e)},set_initial_position:function(t){var e=$.data(t.children(".range-slider-handle")[0],"settings"),a=e.initial?e.initial:Math.floor(.5*(e.end-e.start)/e.step)*e.step+e.start,n=t.children(".range-slider-handle");this.set_ui(n,a)},set_value:function(t){var e=this;$("["+e.attr_name()+"]",this.scope).each(function(){$(this).attr(e.attr_name(),t)}),$(this.scope).attr(e.attr_name())&&$(this.scope).attr(e.attr_name(),t),e.reflow()},reflow:function(){var t=this;t.S("["+this.attr_name()+"]").each(function(){var e=$(this).children(".range-slider-handle")[0],a=$(this).attr(t.attr_name());t.initialize_settings(e),a?t.set_ui($(e),parseFloat(a)):t.set_initial_position($(this))})}}}(jQuery,window,window.document);