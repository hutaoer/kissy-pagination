/*!build time : 2013-12-06 4:51:16 PM*/
KISSY.add("gallery/kissy-pagination/1.0/index",function(a,b,c,d,e){"use strict";function f(b,c){this.targetBox=a.one(b),f.superclass.constructor.call(this,c),this._init()}var g=(c.all,{currentPage:{value:1},totalPage:{value:10},styleSheet:{value:"../src/style.css"},clsPrefix:{value:"y-"}});return a.extend(f,b,{_init:function(){a.one("head").append('<link rel="stylesheet" href="'+this.get("styleSheet")+'">'),this._render()._event()},_getItemHtml:function(a,b){var c=this;b=b||"default";this.get("clsPrefix");return"current"==b?'<span class="current p-elem">'+a+"</span>":"etc"==b||"etc"==a?'<span class="etc p-elem">\u2026</span>':"total"==b||"total"==a?'<span class="p-total p-elem">\u5171'+c.get("totalPage")+"\u9875</span>":"prev"==b||"prev"==a?'<a class="p-prev p-elem" href="javascript:void(0);">\u4e0a\u4e00\u9875</a>':"prev-disable"==b||"prev-disable"==a?'<span class="p-prev-disable p-elem">\u4e0a\u4e00\u9875</span>':"next"==b||"next"==a?'<a class="p-next p-elem" href="javascript:void(0);">\u4e0b\u4e00\u9875</a>':"next-disable"==b||"next-disable"==a?'<span class="p-next-disable p-elem">\u4e0b\u4e00\u9875</span>':"goto"==b||"goto"==a?'<span class="p-elem p-item-go">\u7b2c<input class="p-ipt-go">\u9875<a class="p-btn-go" href="javascript:void(0);">GO</a></span>':'<a class="p-item p-elem" href="javascript:void(0);" data-page="'+a+'">'+a+"</a>"},_render:function(){var a=this,b=a.get("totalPage"),c=a.get("currentPage"),d='<div class="'+a.get("clsPrefix")+'pagination">';if(d+=a._getItemHtml("prev"),7>=b)for(var f=1;b+1>f;f++)d+=c==f?a._getItemHtml(f,"current"):a._getItemHtml(f);else if(3>=c){for(var f=1;c>f;f++)d+=a._getItemHtml(f);d+=a._getItemHtml(c,"current")+a._getItemHtml(c+1)+a._getItemHtml(c+2)+a._getItemHtml("etc")+a._getItemHtml(b)}else if(c>=b-2){d+=a._getItemHtml(1)+a._getItemHtml("etc")+a._getItemHtml(c-2)+a._getItemHtml(c-1)+a._getItemHtml(c,"current");for(var f=c+1;b+1>f;f++)d+=a._getItemHtml(f)}else d+=a._getItemHtml(1),c-2>2&&(d+=a._getItemHtml("etc")),d+=a._getItemHtml(c-2)+a._getItemHtml(c-1)+a._getItemHtml(c,"current")+a._getItemHtml(c+1)+a._getItemHtml(c+2),b-1>c+2&&(d+=a._getItemHtml("etc")),d+=a._getItemHtml(b);return d+=a._getItemHtml("next"),d+=a._getItemHtml("total"),d+=a._getItemHtml("goto"),e.html(a.targetBox,d),a},_event:function(){var a=this;d.delegate(a.targetBox,"click",".p-item",function(b){var c=b.currentTarget,d=e.attr(c,"data-page");a.gotoPage(d),b.preventDefault()}),d.delegate(a.targetBox,"click",".p-prev",function(b){a.gotoPrev(),b.preventDefault()}),d.delegate(a.targetBox,"click",".p-next",function(b){a.gotoNext(),b.preventDefault()}),d.delegate(a.targetBox,"click",".p-first",function(b){a.gotoFirst(),b.preventDefault()}),d.delegate(a.targetBox,"click",".p-last",function(b){a.gotoLast(),b.preventDefault()});var b=function(){var b=a.targetBox.one(".p-ipt-go").val();a.gotoPage(b)};return d.delegate(a.targetBox,"click",".p-btn-go",function(a){b(),a.preventDefault()}),d.delegate(a.targetBox,"keyup",".p-ipt-go",function(a){13==a.keyCode&&b(),a.preventDefault()}),a},destroy:function(){try{d.undelegate(this.targetBox,"click"),this.targetBox.html(""),delete this}catch(a){return!1}return!0},getCurrentPage:function(){return this.get("currentPage")},show:function(){return this.targetBox.show(),this},hide:function(){return this.targetBox.show(),this},gotoPage:function(a){var b=this,c=b.get("currentPage");if(!a||isNaN(a))return!1;if(a=parseInt(a),1>a&&(a=1),a>b.get("totalPage")&&(a=b.get("totalPage")),a!=c){{b.targetBox.one(".current"),b.targetBox.one('[data-page="'+a+'"]')}b.set("currentPage",a),b.targetBox.html(""),b._render().fire("switch",{targetPage:a})}return this},gotoNext:function(){var a=this.get("currentPage");return this.gotoPage(a+1),this},gotoPrev:function(){var a=this.get("currentPage");return this.gotoPage(a-1),this},gotoFirst:function(){return this.gotoPage(1),this},gotoLast:function(){return this.gotoPage(this.get("totalPage")),this}},{ATTRS:g}),f},{requires:["base","node","event","dom"]});