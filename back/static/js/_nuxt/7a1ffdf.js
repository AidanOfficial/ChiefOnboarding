/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{662:function(t,e,n){t.exports=function(){"use strict";var t=Object.prototype.toString,e=Array.isArray||function(object){return"[object Array]"===t.call(object)};function n(object){return"function"==typeof object}function r(t){return e(t)?"array":typeof t}function o(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function l(t,e){return null!=t&&"object"==typeof t&&e in t}function c(t,e){return null!=t&&"object"!=typeof t&&t.hasOwnProperty&&t.hasOwnProperty(e)}var f=RegExp.prototype.test;function h(t,e){return f.call(t,e)}var d=/\S/;function v(t){return!h(d,t)}var m={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function y(t){return String(t).replace(/[&<>"'`=\/]/g,(function(s){return m[s]}))}var _=/\s*/,w=/\s+/,x=/\s*=/,k=/\s*\}/,C=/#|\^|\/|>|\{|&|=|!/;function $(template,t){if(!template)return[];var n,r,l,c=!1,f=[],h=[],d=[],m=!1,y=!1,$="",F=0;function I(){if(m&&!y)for(;d.length;)delete h[d.pop()];else d=[];m=!1,y=!1}function E(t){if("string"==typeof t&&(t=t.split(w,2)),!e(t)||2!==t.length)throw new Error("Invalid tags: "+t);n=new RegExp(o(t[0])+"\\s*"),r=new RegExp("\\s*"+o(t[1])),l=new RegExp("\\s*"+o("}"+t[1]))}E(t||V.tags);for(var P,D,j,M,O,H,L=new S(template);!L.eos();){if(P=L.pos,j=L.scanUntil(n))for(var i=0,A=j.length;i<A;++i)v(M=j.charAt(i))?(d.push(h.length),$+=M):(y=!0,c=!0,$+=" "),h.push(["text",M,P,P+1]),P+=1,"\n"===M&&(I(),$="",F=0,c=!1);if(!L.scan(n))break;if(m=!0,D=L.scan(C)||"name",L.scan(_),"="===D?(j=L.scanUntil(x),L.scan(x),L.scanUntil(r)):"{"===D?(j=L.scanUntil(l),L.scan(k),L.scanUntil(r),D="&"):j=L.scanUntil(r),!L.scan(r))throw new Error("Unclosed tag at "+L.pos);if(O=">"==D?[D,j,P,L.pos,$,F,c]:[D,j,P,L.pos],F++,h.push(O),"#"===D||"^"===D)f.push(O);else if("/"===D){if(!(H=f.pop()))throw new Error('Unopened section "'+j+'" at '+P);if(H[1]!==j)throw new Error('Unclosed section "'+H[1]+'" at '+P)}else"name"===D||"{"===D||"&"===D?y=!0:"="===D&&E(j)}if(I(),H=f.pop())throw new Error('Unclosed section "'+H[1]+'" at '+L.pos);return T(U(h))}function U(t){for(var e,n,r=[],i=0,o=t.length;i<o;++i)(e=t[i])&&("text"===e[0]&&n&&"text"===n[0]?(n[1]+=e[1],n[3]=e[3]):(r.push(e),n=e));return r}function T(t){for(var e,n=[],r=n,o=[],i=0,l=t.length;i<l;++i)switch((e=t[i])[0]){case"#":case"^":r.push(e),o.push(e),r=e[4]=[];break;case"/":o.pop()[5]=e[2],r=o.length>0?o[o.length-1][4]:n;break;default:r.push(e)}return n}function S(t){this.string=t,this.tail=t,this.pos=0}function F(view,t){this.view=view,this.cache={".":this.view},this.parent=t}function I(){this.templateCache={_cache:{},set:function(t,e){this._cache[t]=e},get:function(t){return this._cache[t]},clear:function(){this._cache={}}}}S.prototype.eos=function(){return""===this.tail},S.prototype.scan=function(t){var e=this.tail.match(t);if(!e||0!==e.index)return"";var n=e[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n},S.prototype.scanUntil=function(t){var e,n=this.tail.search(t);switch(n){case-1:e=this.tail,this.tail="";break;case 0:e="";break;default:e=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=e.length,e},F.prototype.push=function(view){return new F(view,this)},F.prototype.lookup=function(t){var e,r=this.cache;if(r.hasOwnProperty(t))e=r[t];else{for(var o,f,h,d=this,v=!1;d;){if(t.indexOf(".")>0)for(o=d.view,f=t.split("."),h=0;null!=o&&h<f.length;)h===f.length-1&&(v=l(o,f[h])||c(o,f[h])),o=o[f[h++]];else o=d.view[t],v=l(d.view,t);if(v){e=o;break}d=d.parent}r[t]=e}return n(e)&&(e=e.call(this.view)),e},I.prototype.clearCache=function(){void 0!==this.templateCache&&this.templateCache.clear()},I.prototype.parse=function(template,t){var e=this.templateCache,n=template+":"+(t||V.tags).join(":"),r=void 0!==e,o=r?e.get(n):void 0;return null==o&&(o=$(template,t),r&&e.set(n,o)),o},I.prototype.render=function(template,view,t,e){var n=this.getConfigTags(e),r=this.parse(template,n),o=view instanceof F?view:new F(view,void 0);return this.renderTokens(r,o,t,template,e)},I.prototype.renderTokens=function(t,e,n,r,o){for(var l,symbol,c,f="",i=0,h=t.length;i<h;++i)c=void 0,"#"===(symbol=(l=t[i])[0])?c=this.renderSection(l,e,n,r,o):"^"===symbol?c=this.renderInverted(l,e,n,r,o):">"===symbol?c=this.renderPartial(l,e,n,o):"&"===symbol?c=this.unescapedValue(l,e):"name"===symbol?c=this.escapedValue(l,e,o):"text"===symbol&&(c=this.rawValue(l)),void 0!==c&&(f+=c);return f},I.prototype.renderSection=function(t,r,o,l,c){var f=this,h="",d=r.lookup(t[1]);function v(template){return f.render(template,r,o,c)}if(d){if(e(d))for(var m=0,y=d.length;m<y;++m)h+=this.renderTokens(t[4],r.push(d[m]),o,l,c);else if("object"==typeof d||"string"==typeof d||"number"==typeof d)h+=this.renderTokens(t[4],r.push(d),o,l,c);else if(n(d)){if("string"!=typeof l)throw new Error("Cannot use higher-order sections without the original template");null!=(d=d.call(r.view,l.slice(t[3],t[5]),v))&&(h+=d)}else h+=this.renderTokens(t[4],r,o,l,c);return h}},I.prototype.renderInverted=function(t,n,r,o,l){var c=n.lookup(t[1]);if(!c||e(c)&&0===c.length)return this.renderTokens(t[4],n,r,o,l)},I.prototype.indentPartial=function(t,e,n){for(var r=e.replace(/[^ \t]/g,""),o=t.split("\n"),i=0;i<o.length;i++)o[i].length&&(i>0||!n)&&(o[i]=r+o[i]);return o.join("\n")},I.prototype.renderPartial=function(t,e,r,o){if(r){var l=this.getConfigTags(o),c=n(r)?r(t[1]):r[t[1]];if(null!=c){var f=t[6],h=t[5],d=t[4],v=c;0==h&&d&&(v=this.indentPartial(c,d,f));var m=this.parse(v,l);return this.renderTokens(m,e,r,v,o)}}},I.prototype.unescapedValue=function(t,e){var n=e.lookup(t[1]);if(null!=n)return n},I.prototype.escapedValue=function(t,e,n){var r=this.getConfigEscape(n)||V.escape,o=e.lookup(t[1]);if(null!=o)return"number"==typeof o&&r===V.escape?String(o):r(o)},I.prototype.rawValue=function(t){return t[1]},I.prototype.getConfigTags=function(t){return e(t)?t:t&&"object"==typeof t?t.tags:void 0},I.prototype.getConfigEscape=function(t){return t&&"object"==typeof t&&!e(t)?t.escape:void 0};var V={name:"mustache.js",version:"4.1.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){E.templateCache=t},get templateCache(){return E.templateCache}},E=new I;return V.clearCache=function(){return E.clearCache()},V.parse=function(template,t){return E.parse(template,t)},V.render=function(template,view,t,e){if("string"!=typeof template)throw new TypeError('Invalid template! Template should be a "string" but "'+r(template)+'" was given as the first argument for mustache#render(template, view, partials)');return E.render(template,view,t,e)},V.escape=y,V.Scanner=S,V.Context=F,V.Writer=I,V}()},663:function(t,e,n){var content=n(671);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("19b267cc",content,!0,{sourceMap:!1})},668:function(t,e,n){"use strict";n(127);var r=n(662),o=n.n(r),l={name:"ContentDisplay",props:{content:{default:function(){return[]},type:Array},disableMustache:{default:!1,type:Boolean}},methods:{getYoutubeLink:function(t){var e=/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;return null!==t.trim().match(e)&&2===t.trim().match(e).length?"https://youtube.com/embed/"+t.trim().match(e)[1]:""},mustaching:function(content){return this.disableMustache?content:void 0===content?"":o.a.render(content,this.$store.state.baseInfo.new_hire||this.$store.state.admins[0])},downloadFile:function(t){this.$newhirepart.getFileURL(t.id,t.uuid).then((function(t){window.open(t,"_blank")}))}}},c=(n(670),n(23)),f=n(24),h=n.n(f),d=n(215),v=n(175),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.content,(function(i,e){return n("div",{key:e},["p"===i.type?n("p",[n("span",{domProps:{innerHTML:t._s(t.mustaching(i.content))}})]):t._e(),t._v(" "),"h1"===i.type?n("h1",[n("span",{domProps:{innerHTML:t._s(t.mustaching(i.content))}})]):t._e(),t._v(" "),"h2"===i.type?n("h2",[n("span",{domProps:{innerHTML:t._s(t.mustaching(i.content))}})]):t._e(),t._v(" "),"h3"===i.type?n("h3",[n("span",{domProps:{innerHTML:t._s(t.mustaching(i.content))}})]):t._e(),t._v(" "),"ul"===i.type?n("ul",{staticClass:"mb-3"},t._l(i.items,(function(e){return n("li",[n("span",{domProps:{innerHTML:t._s(t.mustaching(e.content))}})])})),0):t._e(),t._v(" "),"file"===i.type?n("h3",[n("label",[t._v("Files")]),n("br"),t._v(" "),t._l(i.files,(function(e,r){return n("v-chip",{key:r,on:{click:function(n){return t.downloadFile(e)}}},[t._v("\n        "+t._s(e.name)+"\n      ")])}))],2):t._e(),t._v(" "),"image"===i.type&&i.files.length?n("h3",[n("v-img",{attrs:{src:i.files[0].file_url}})],1):t._e(),t._v(" "),"video"===i.type&&i.files.length?n("div",[n("video",{staticStyle:{width:"100%"},attrs:{controls:""}},[n("source",{attrs:{src:i.files[0].file_url,type:"video/"+i.files[0].ext}})])]):t._e(),t._v(" "),"youtube"===i.type?n("div",[""!==t.getYoutubeLink(i.content)?n("iframe",{attrs:{src:t.getYoutubeLink(i.content),width:"560",height:"315",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}):t._e()]):t._e(),t._v(" "),"quote"===i.type?n("blockquote",{style:"border-left-color: "+t.$store.state.baseInfo.org.base_color},[t._v("\n      "+t._s(i.content)+"\n    ")]):t._e()])})),0)}),[],!1,null,null,null);e.a=component.exports;h()(component,{VChip:d.a,VImg:v.a})},669:function(t,e,n){var content=n(674);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("87b00410",content,!0,{sourceMap:!1})},670:function(t,e,n){"use strict";n(663)},671:function(t,e,n){var r=n(16)(!1);r.push([t.i,"blockquote,h1,h2,h3{margin-bottom:10px}blockquote{margin-top:10px;padding:20px 30px;background:#f9f9f9;border-left:2px solid #ffbb42}p{margin-bottom:20px!important}",""]),t.exports=r},673:function(t,e,n){"use strict";n(669)},674:function(t,e,n){var r=n(16)(!1);r.push([t.i,".v-file input[type=file][data-v-62316f79]{display:none}",""]),t.exports=r},675:function(t,e,n){"use strict";n(21),n(25);var r={name:"UploadNewHireFile",props:{value:{type:Array,default:function(){return[]}},label:{type:String,default:"File input"},color:{required:!0,type:String}},data:function(t){return{uploadingFile:!1}},watch:{value:{handler:function(t){this.$emit("input",t)},deep:!0}},methods:{upload:function(t){var e=this;this.uploadingFile=!0,this.$org.getPreSignedURL({name:t.name}).then((function(data){e.$org.uploadToAWS(data.url,t).then((function(){e.$org.confirmUploaded(data.id).then((function(t){e.value=t}))}))}))}}},o=(n(673),n(23)),l=n(24),c=n.n(l),f=n(865),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-file-input",{staticClass:"mt-2",attrs:{color:t.color,label:t.label,placeholder:"Select your file","prepend-icon":"mdi-paperclip",outlined:""},on:{change:t.upload},model:{value:t.files,callback:function(e){t.files=e},expression:"files"}})}),[],!1,null,"62316f79",null),h=component.exports;c()(component,{VFileInput:f.a});var d={name:"CustomForm",components:{UploadForm:h},props:{value:{type:Array,required:!0},org:{type:Object,required:!0},id:{type:Number,required:!0},external:{type:Boolean,default:!1}},data:function(){return{formPart:[]}},watch:{formPart:{handler:function(t){this.$emit("input",t)},deep:!0}},mounted:function(){var t=this;setTimeout((function(){t.formPart=JSON.parse(JSON.stringify(t.value))}),200)}},v=n(712),m=n(713),y=n(714),_=n(65),w=n(655),x=Object(o.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-3 formpart"},t._l(t.value,(function(i,e){return n("div",{key:e},["input"===i.type?n("div",[n("v-text-field",{staticClass:"my-0",attrs:{color:t.org.base_color,label:i.text,outline:""},model:{value:i.value,callback:function(e){t.$set(i,"value",e)},expression:"i.value"}})],1):t._e(),t._v(" "),"upload"===i.type?n("div",[n("UploadForm",{attrs:{id:t.id,label:i.text,color:t.org.base_color},model:{value:i.value,callback:function(e){t.$set(i,"value",e)},expression:"i.value"}})],1):t._e(),t._v(" "),"text"===i.type?n("div",[n("v-textarea",{staticClass:"my-0",attrs:{color:t.org.base_color,label:i.text,outline:""},model:{value:i.value,callback:function(e){t.$set(i,"value",e)},expression:"i.value"}})],1):t._e(),t._v(" "),"check"===i.type?n("div",[n("p",{staticStyle:{color:"rgba(0,0,0,.54)"}},[t._v("\n        "+t._s(i.text)+"\n      ")]),t._v(" "),t._l(i.items,(function(e){return n("v-checkbox",{key:e.name,staticClass:"my-0",attrs:{color:t.org.base_color,label:e.name},model:{value:e.value,callback:function(n){t.$set(e,"value",n)},expression:"n.value"}})}))],2):t._e(),t._v(" "),"select"===i.type?n("div",[n("v-radio-group",{attrs:{label:i.text,color:t.org.base_color},model:{value:i.value,callback:function(e){t.$set(i,"value",e)},expression:"i.value"}},t._l(i.options,(function(e){return n("v-radio",{key:e.name,attrs:{color:t.org.base_color,label:e.name,value:e.name}})})),1)],1):t._e()])})),0)}),[],!1,null,null,null);e.a=x.exports;c()(x,{VCheckbox:v.a,VRadio:m.a,VRadioGroup:y.a,VTextField:_.a,VTextarea:w.a})},883:function(t,e,n){"use strict";n.r(e);n(7);var r=n(662),o=n.n(r),l=n(668),c=n(675),f={name:"Slackform",layout:"empty",components:{ContentDisplay:l.a,CustomForm:c.a},data:function(){return{loading:!0,toDoUserItem:{to_do:{},form:[]},newHire:{},org:{},sendingForm:!1}},mounted:function(){var t=this;this.$user.getCSRFToken().then((function(){t.$newhirepreboarding.authenticate(t.$route.query.token).then((function(){t.$newhirepart.getSlackToDoItem(t.$route.query.id).then((function(data){t.toDoUserItem=data,t.loading=!1})),t.$newhirepart.getMe().then((function(data){t.$i18n.locale=data.new_hire.language,t.$store.commit("setBaseInfo",data),t.newHire=data.new_hire,t.org=data.org})).catch((function(){t.$store.dispatch("showSnackbar",t.$t("newHirePortal.notAuthorized"))}))})).catch((function(){t.$router.push({name:"index"})}))}))},methods:{Mustaching:function(content){return o.a.render(content,this.newHire)},sendFormBack:function(){var t=this;this.submittingForm=!0,this.$newhirepart.submitSlackToDoForm(this.toDoUserItem.id,this.toDoUserItem.to_do.form).then((function(data){t.toDoUserItem.completed_form=!0})).catch((function(e){t.$store.dispatch("showSnackbar",t.$t("newHirePortal.genericError"))})).finally((function(){t.submittingForm=!1}))}}},h=n(23),d=n(24),v=n.n(d),m=n(140),y=n(208),_=n(43),w=n(68),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.loading?n("LoadingIcon",{attrs:{"is-loading":t.loading}}):n("div",[n("v-toolbar",{attrs:{color:"org.base_color",dark:"",extended:"",flat:""}}),t._v(" "),n("v-card",{staticClass:"mx-auto mb-4",staticStyle:{"margin-top":"-64px"},attrs:{"max-width":"590"}},[n("v-card-title",[n("h2",[t._v("\n          "+t._s(t.Mustaching(t.toDoUserItem.to_do.name))+"\n        ")])]),t._v(" "),t.toDoUserItem.completed_form?n("v-card-text",[t._v("\n        You have already filled in this form!\n      ")]):n("v-card-text",[n("ContentDisplay",{attrs:{content:t.toDoUserItem.to_do.content}}),t._v(" "),n("CustomForm",{attrs:{org:t.org},on:{input:function(e){t.form=arguments[0]}},model:{value:t.toDoUserItem.to_do.form,callback:function(e){t.$set(t.toDoUserItem.to_do,"form",e)},expression:"toDoUserItem.to_do.form"}}),t._v(" "),n("v-btn",{staticStyle:{"margin-left":"0px"},attrs:{color:t.org.base_color,loading:t.submittingForm,dark:""},on:{click:t.sendFormBack}},[t._v("\n          "+t._s(t.$t("buttons.submit"))+"\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:m.a,VCard:y.a,VCardText:_.b,VCardTitle:_.c,VToolbar:w.a})}}]);