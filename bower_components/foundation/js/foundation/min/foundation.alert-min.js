!function($,t,n,i){"use strict";Foundation.libs.alert={name:"alert",version:"5.4.3",settings:{callback:function(){}},init:function(t,n,i){this.bindings(n,i)},events:function(){var t=this,n=this.S;$(this.scope).off(".alert").on("click.fndtn.alert","["+this.attr_name()+"] .close",function(i){var e=n(this).closest("["+t.attr_name()+"]"),s=e.data(t.attr_name(!0)+"-init")||t.settings;i.preventDefault(),Modernizr.csstransitions?(e.addClass("alert-close"),e.on("transitionend webkitTransitionEnd oTransitionEnd",function(t){n(this).trigger("close").trigger("close.fndtn.alert").remove(),s.callback()})):e.fadeOut(300,function(){n(this).trigger("close").trigger("close.fndtn.alert").remove(),s.callback()})})},reflow:function(){}}}(jQuery,window,window.document);