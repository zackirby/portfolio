!function($,t,e,i){"use strict";var s=function(){},a=function(s,a){if(s.hasClass(a.slides_container_class))return this;var l=this,c,d=s,_,u,p,m=0,g,f,h=!1,v=!1;l.slides=function(){return d.children(a.slide_selector)},l.slides().first().addClass(a.active_slide_class),l.update_slide_number=function(t){a.slide_number&&(_.find("span:first").text(parseInt(t)+1),_.find("span:last").text(l.slides().length)),a.bullets&&(u.children().removeClass(a.bullets_active_class),$(u.children().get(t)).addClass(a.bullets_active_class))},l.update_active_link=function(t){var e=$('[data-orbit-link="'+l.slides().eq(t).attr("data-orbit-slide")+'"]');e.siblings().removeClass(a.bullets_active_class),e.addClass(a.bullets_active_class)},l.build_markup=function(){d.wrap('<div class="'+a.container_class+'"></div>'),c=d.parent(),d.addClass(a.slides_container_class),a.stack_on_small&&c.addClass(a.stack_on_small_class),a.navigation_arrows&&(c.append($('<a href="#"><span></span></a>').addClass(a.prev_class)),c.append($('<a href="#"><span></span></a>').addClass(a.next_class))),a.timer&&(p=$("<div>").addClass(a.timer_container_class),p.append("<span>"),p.append($("<div>").addClass(a.timer_progress_class)),p.addClass(a.timer_paused_class),c.append(p)),a.slide_number&&(_=$("<div>").addClass(a.slide_number_class),_.append("<span></span> "+a.slide_number_text+" <span></span>"),c.append(_)),a.bullets&&(u=$("<ol>").addClass(a.bullets_container_class),c.append(u),u.wrap('<div class="orbit-bullets-container"></div>'),l.slides().each(function(t,e){var i=$("<li>").attr("data-orbit-slide",t).on("click",l.link_bullet);u.append(i)}))},l._goto=function(t,e){if(t===m)return!1;"object"==typeof f&&f.restart();var i=l.slides(),s="next";if(h=!0,m>t&&(s="prev"),t>=i.length){if(!a.circular)return!1;t=0}else if(0>t){if(!a.circular)return!1;t=i.length-1}var n=$(i.get(m)),r=$(i.get(t));n.css("zIndex",2),n.removeClass(a.active_slide_class),r.css("zIndex",4).addClass(a.active_slide_class),d.trigger("before-slide-change.fndtn.orbit"),a.before_slide_change(),l.update_active_link(t);var o=function(){var s=function(){m=t,h=!1,e===!0&&(f=l.create_timer(),f.start()),l.update_slide_number(m),d.trigger("after-slide-change.fndtn.orbit",[{slide_number:m,total_slides:i.length}]),a.after_slide_change(m,i.length)};d.height()!=r.height()&&a.variable_height?d.animate({height:r.height()},250,"linear",s):s()};if(1===i.length)return o(),!1;var c=function(){"next"===s&&g.next(n,r,o),"prev"===s&&g.prev(n,r,o)};r.height()>d.height()&&a.variable_height?d.animate({height:r.height()},250,"linear",c):c()},l.next=function(t){t.stopImmediatePropagation(),t.preventDefault(),l._goto(m+1)},l.prev=function(t){t.stopImmediatePropagation(),t.preventDefault(),l._goto(m-1)},l.link_custom=function(t){t.preventDefault();var e=$(this).attr("data-orbit-link");if("string"==typeof e&&""!=(e=$.trim(e))){var i=c.find("[data-orbit-slide="+e+"]");-1!=i.index()&&l._goto(i.index())}},l.link_bullet=function(t){var e=$(this).attr("data-orbit-slide");if("string"==typeof e&&""!=(e=$.trim(e)))if(isNaN(parseInt(e))){var i=c.find("[data-orbit-slide="+e+"]");-1!=i.index()&&l._goto(i.index()+1)}else l._goto(parseInt(e))},l.timer_callback=function(){l._goto(m+1,!0)},l.compute_dimensions=function(){var t=$(l.slides().get(m)),e=t.height();a.variable_height||l.slides().each(function(){$(this).height()>e&&(e=$(this).height())}),d.height(e)},l.create_timer=function(){var t=new n(c.find("."+a.timer_container_class),a,l.timer_callback);return t},l.stop_timer=function(){"object"==typeof f&&f.stop()},l.toggle_timer=function(){var t=c.find("."+a.timer_container_class);t.hasClass(a.timer_paused_class)?("undefined"==typeof f&&(f=l.create_timer()),f.start()):"object"==typeof f&&f.stop()},l.init=function(){l.build_markup(),a.timer&&(f=l.create_timer(),Foundation.utils.image_loaded(this.slides().children("img"),f.start)),g=new o(a,d),"slide"===a.animation&&(g=new r(a,d)),c.on("click","."+a.next_class,l.next),c.on("click","."+a.prev_class,l.prev),a.next_on_click&&c.on("click","."+a.slides_container_class+" [data-orbit-slide]",l.link_bullet),c.on("click",l.toggle_timer),a.swipe&&c.on("touchstart.fndtn.orbit",function(t){t.touches||(t=t.originalEvent);var e={start_page_x:t.touches[0].pageX,start_page_y:t.touches[0].pageY,start_time:(new Date).getTime(),delta_x:0,is_scrolling:i};c.data("swipe-transition",e),t.stopPropagation()}).on("touchmove.fndtn.orbit",function(t){if(t.touches||(t=t.originalEvent),!(t.touches.length>1||t.scale&&1!==t.scale)){var e=c.data("swipe-transition");if("undefined"==typeof e&&(e={}),e.delta_x=t.touches[0].pageX-e.start_page_x,"undefined"==typeof e.is_scrolling&&(e.is_scrolling=!!(e.is_scrolling||Math.abs(e.delta_x)<Math.abs(t.touches[0].pageY-e.start_page_y))),!e.is_scrolling&&!e.active){t.preventDefault();var i=e.delta_x<0?m+1:m-1;e.active=!0,l._goto(i)}}}).on("touchend.fndtn.orbit",function(t){c.data("swipe-transition",{}),t.stopPropagation()}),c.on("mouseenter.fndtn.orbit",function(t){a.timer&&a.pause_on_hover&&l.stop_timer()}).on("mouseleave.fndtn.orbit",function(t){a.timer&&a.resume_on_mouseout&&f.start()}),$(e).on("click","[data-orbit-link]",l.link_custom),$(t).on("load resize",l.compute_dimensions),Foundation.utils.image_loaded(this.slides().children("img"),l.compute_dimensions),Foundation.utils.image_loaded(this.slides().children("img"),function(){c.prev("."+a.preloader_class).css("display","none"),l.update_slide_number(0),l.update_active_link(0),d.trigger("ready.fndtn.orbit")})},l.init()},n=function(t,e,i){var s=this,a=e.timer_speed,n=t.find("."+e.timer_progress_class),r,o,l=-1;this.update_progress=function(t){var e=n.clone();e.attr("style",""),e.css("width",t+"%"),n.replaceWith(e),n=e},this.restart=function(){clearTimeout(o),t.addClass(e.timer_paused_class),l=-1,s.update_progress(0)},this.start=function(){return t.hasClass(e.timer_paused_class)?(l=-1===l?a:l,t.removeClass(e.timer_paused_class),r=(new Date).getTime(),n.animate({width:"100%"},l,"linear"),o=setTimeout(function(){s.restart(),i()},l),void t.trigger("timer-started.fndtn.orbit")):!0},this.stop=function(){if(t.hasClass(e.timer_paused_class))return!0;clearTimeout(o),t.addClass(e.timer_paused_class);var i=(new Date).getTime();l-=i-r;var n=100-l/a*100;s.update_progress(n),t.trigger("timer-stopped.fndtn.orbit")}},r=function(t,e){var i=t.animation_speed,s=1===$("html[dir=rtl]").length,a=s?"marginRight":"marginLeft",n={};n[a]="0%",this.next=function(t,e,s){t.animate({marginLeft:"-100%"},i),e.animate(n,i,function(){t.css(a,"100%"),s()})},this.prev=function(t,e,s){t.animate({marginLeft:"100%"},i),e.css(a,"-100%"),e.animate(n,i,function(){t.css(a,"100%"),s()})}},o=function(t,e){var i=t.animation_speed,s=1===$("html[dir=rtl]").length,a=s?"marginRight":"marginLeft";this.next=function(t,e,s){e.css({margin:"0%",opacity:"0.01"}),e.animate({opacity:"1"},i,"linear",function(){t.css("margin","100%"),s()})},this.prev=function(t,e,s){e.css({margin:"0%",opacity:"0.01"}),e.animate({opacity:"1"},i,"linear",function(){t.css("margin","100%"),s()})}};Foundation.libs=Foundation.libs||{},Foundation.libs.orbit={name:"orbit",version:"5.4.7",settings:{animation:"slide",timer_speed:1e4,pause_on_hover:!0,resume_on_mouseout:!1,next_on_click:!0,animation_speed:500,stack_on_small:!1,navigation_arrows:!0,slide_number:!0,slide_number_text:"of",container_class:"orbit-container",stack_on_small_class:"orbit-stack-on-small",next_class:"orbit-next",prev_class:"orbit-prev",timer_container_class:"orbit-timer",timer_paused_class:"paused",timer_progress_class:"orbit-progress",slides_container_class:"orbit-slides-container",preloader_class:"preloader",slide_selector:"*",bullets_container_class:"orbit-bullets",bullets_active_class:"active",slide_number_class:"orbit-slide-number",caption_class:"orbit-caption",active_slide_class:"active",orbit_transition_class:"orbit-transitioning",bullets:!0,circular:!0,timer:!0,variable_height:!1,swipe:!0,before_slide_change:s,after_slide_change:s},init:function(t,e,i){var s=this;this.bindings(e,i)},events:function(t){var e=new a(this.S(t),this.S(t).data("orbit-init"));this.S(t).data(this.name+"-instance",e)},reflow:function(){var t=this;if(t.S(t.scope).is("[data-orbit]")){var e=t.S(t.scope),i=e.data(t.name+"-instance");i.compute_dimensions()}else t.S("[data-orbit]",t.scope).each(function(e,i){var s=t.S(i),a=t.data_options(s),n=s.data(t.name+"-instance");n.compute_dimensions()})}}}(jQuery,window,window.document);