var p=Object.defineProperty;var r=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var s=(t,n,e)=>n in t?p(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,i=(t,n)=>{for(var e in n||(n={}))c.call(n,e)&&s(t,e,n[e]);if(r)for(var e of r(n))u.call(n,e)&&s(t,e,n[e]);return t};import{i as l}from"./vendor.7b0b1a93.js";import"./ToolsSettings.19389363.js";import"./index.ee423bf3.js";import{M as m}from"./MetaTag.ceacc375.js";import{n as _}from"./vueComponentNormalizer.4c221f82.js";import{C as f}from"./Card.4dc7db9b.js";import{C as d}from"./SettingsRow.e87657d6.js";import"./Tooltip.80812e50.js";import"./index.ff60205e.js";import"./QuestionMark.4dbc0d97.js";import"./Slide.c8a2867c.js";import"./Row.de5121b5.js";var g=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"aioseo-pinterest"},[e("core-card",{attrs:{slug:"pinterest","header-text":t.strings.pinterest}},[e("div",{staticClass:"aioseo-settings-row aioseo-section-description"},[t._v(" "+t._s(t.strings.description)+" "),e("span",{domProps:{innerHTML:t._s(t.$links.getDocLink(t.strings.learnHowToGetPinterestTag,"pinterestSiteVerification",!0))}}),e("br"),e("br"),e("strong",[t._v(t._s(t.strings.skipStep))])]),e("core-settings-row",{attrs:{name:t.strings.pinterestVerificationCode,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-input",{attrs:{size:"medium"},on:{blur:function(o){return t.maybeUpdateId("pinterest")}},model:{value:t.options.webmasterTools.pinterest,callback:function(o){t.$set(t.options.webmasterTools,"pinterest",o)},expression:"options.webmasterTools.pinterest"}})]},proxy:!0}])})],1)],1)},y=[];const v={components:{CoreCard:f,CoreSettingsRow:d},mixins:[m],data(){return{pagePostOptions:[],strings:{pinterest:"Pinterest",description:"Pinterest uses Open Graph metadata just like Facebook, so be sure to keep Open Graph enabled on the Facebook tab checked if you want to optimize your site for Pinterest.",learnHowToGetPinterestTag:"Learn how to get your Pinterest Verification Code",skipStep:"If you have already confirmed your website with Pinterest, you can skip the step below.",pinterestVerificationCode:"Pinterest Verification Code"}}},computed:i({},l(["options"]))},a={};var b=_(v,g,y,!1,w,null,null,null);function w(t){for(let n in a)this[n]=a[n]}var A=function(){return b.exports}();export{A as default};
