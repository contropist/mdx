!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/wp-content/themes/mdx/js",n(n.s=111)}([function(t,e,n){"use strict";n(60);e.a=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if("object"==typeof t)return t;if("string"!=typeof t)return document.createElement("div");let n=null,o=!1;return t.match(/[ <>:~+^=]/)?n=document.querySelectorAll(t):"#"===t[0]?(n=document.getElementById(t.slice(1)),o=!0):n="."===t[0]?document.getElementsByClassName(t.slice(1)):t.match(/[ .<>:~+^=#]/)?document.querySelectorAll(t):document.getElementsByTagName(t),null===n||0===n.length?document.createElement("div"):(null!==e&&(o?e(n):Array.prototype.map.call(n,t=>(e(t),t))),o?n:n[0])}},function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(47))},function(t,e,n){var o=n(7);t.exports=function(t){if(!o(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var o=n(1),r=n(29),i=n(5),s=n(34),a=n(35),c=n(49),l=r("wks"),u=o.Symbol,d=c?u:u&&u.withoutSetter||s;t.exports=function(t){return i(l,t)||(a&&i(u,t)?l[t]=u[t]:l[t]=d("Symbol."+t)),l[t]}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var o=n(8),r=n(9),i=n(20);t.exports=o?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var o=n(3);t.exports=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e,n){var o=n(8),r=n(31),i=n(2),s=n(33),a=Object.defineProperty;e.f=o?a:function(t,e,n){if(i(t),e=s(e,!0),i(n),r)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var o=n(1),r=n(6),i=n(5),s=n(17),a=n(23),c=n(25),l=c.get,u=c.enforce,d=String(String).split("String");(t.exports=function(t,e,n,a){var c=!!a&&!!a.unsafe,l=!!a&&!!a.enumerable,m=!!a&&!!a.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||r(n,"name",e),u(n).source=d.join("string"==typeof e?e:"")),t!==o?(c?!m&&t[e]&&(l=!0):delete t[e],l?t[e]=n:r(t,e,n)):l?t[e]=n:s(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&l(this).source||a(this)}))},function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},function(t,e,n){var o=n(48),r=n(10);t.exports=function(t){return o(r(t))}},function(t,e,n){var o=n(52),r=n(1),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(o[t])||i(r[t]):o[t]&&o[t][e]||r[t]&&r[t][e]}},function(t,e,n){var o=n(13),r=Math.min;t.exports=function(t){return t>0?r(o(t),9007199254740991):0}},function(t,e,n){var o=n(1),r=n(6);t.exports=function(t,e){try{r(o,t,e)}catch(n){o[t]=e}return e}},function(t,e,n){"use strict";var o,r,i=n(46),s=n(58),a=RegExp.prototype.exec,c=String.prototype.replace,l=a,u=(o=/a/,r=/b*/g,a.call(o,"a"),a.call(r,"a"),0!==o.lastIndex||0!==r.lastIndex),d=s.UNSUPPORTED_Y||s.BROKEN_CARET,m=void 0!==/()??/.exec("")[1];(u||m||d)&&(l=function(t){var e,n,o,r,s=this,l=d&&s.sticky,f=i.call(s),p=s.source,y=0,h=t;return l&&(-1===(f=f.replace("y","")).indexOf("g")&&(f+="g"),h=String(t).slice(s.lastIndex),s.lastIndex>0&&(!s.multiline||s.multiline&&"\n"!==t[s.lastIndex-1])&&(p="(?: "+p+")",h=" "+h,y++),n=new RegExp("^(?:"+p+")",f)),m&&(n=new RegExp("^"+p+"$(?!\\s)",f)),u&&(e=s.lastIndex),o=a.call(l?n:s,h),l?o?(o.input=o.input.slice(y),o[0]=o[0].slice(y),o.index=s.lastIndex,s.lastIndex+=o[0].length):s.lastIndex=0:u&&o&&(s.lastIndex=s.global?o.index+o[0].length:e),m&&o&&o.length>1&&c.call(o[0],n,(function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(o[r]=void 0)})),o}),t.exports=l},function(t,e){t.exports=!1},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){t.exports={}},function(t,e){t.exports={}},function(t,e,n){var o=n(30),r=Function.toString;"function"!=typeof o.inspectSource&&(o.inspectSource=function(t){return r.call(t)}),t.exports=o.inspectSource},function(t,e,n){var o=n(8),r=n(54),i=n(20),s=n(14),a=n(33),c=n(5),l=n(31),u=Object.getOwnPropertyDescriptor;e.f=o?u:function(t,e){if(t=s(t),e=a(e,!0),l)try{return u(t,e)}catch(t){}if(c(t,e))return i(!r.f.call(t,e),t[e])}},function(t,e,n){var o,r,i,s=n(53),a=n(1),c=n(7),l=n(6),u=n(5),d=n(28),m=n(21),f=a.WeakMap;if(s){var p=new f,y=p.get,h=p.has,g=p.set;o=function(t,e){return g.call(p,t,e),e},r=function(t){return y.call(p,t)||{}},i=function(t){return h.call(p,t)}}else{var b=d("state");m[b]=!0,o=function(t,e){return l(t,b,e),e},r=function(t){return u(t,b)?t[b]:{}},i=function(t){return u(t,b)}}t.exports={set:o,get:r,has:i,enforce:function(t){return i(t)?r(t):o(t,{})},getterFor:function(t){return function(e){var n;if(!c(e)||(n=r(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var o=n(1),r=n(24).f,i=n(6),s=n(12),a=n(17),c=n(44),l=n(38);t.exports=function(t,e){var n,u,d,m,f,p=t.target,y=t.global,h=t.stat;if(n=y?o:h?o[p]||a(p,{}):(o[p]||{}).prototype)for(u in e){if(m=e[u],d=t.noTargetGet?(f=r(n,u))&&f.value:n[u],!l(y?u:p+(h?".":"#")+u,t.forced)&&void 0!==d){if(typeof m==typeof d)continue;c(m,d)}(t.sham||d&&d.sham)&&i(m,"sham",!0),s(n,u,m,t)}}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,n){var o=n(29),r=n(34),i=o("keys");t.exports=function(t){return i[t]||(i[t]=r(t))}},function(t,e,n){var o=n(19),r=n(30);(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:o?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var o=n(1),r=n(17),i=o["__core-js_shared__"]||r("__core-js_shared__",{});t.exports=i},function(t,e,n){var o=n(8),r=n(3),i=n(32);t.exports=!o&&!r((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var o=n(1),r=n(7),i=o.document,s=r(i)&&r(i.createElement);t.exports=function(t){return s?i.createElement(t):{}}},function(t,e,n){var o=n(7);t.exports=function(t,e){if(!o(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!o(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+o).toString(36)}},function(t,e,n){var o=n(3);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){return!String(Symbol())}))},function(t,e,n){"use strict";n(61);var o=n(12),r=n(3),i=n(4),s=n(18),a=n(6),c=i("species"),l=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u="$0"==="a".replace(/./,"$0"),d=i("replace"),m=!!/./[d]&&""===/./[d]("a","$0"),f=!r((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,d){var p=i(t),y=!r((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),h=y&&!r((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[c]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return e=!0,null},n[p](""),!e}));if(!y||!h||"replace"===t&&(!l||!u||m)||"split"===t&&!f){var g=/./[p],b=n(p,""[t],(function(t,e,n,o,r){return e.exec===s?y&&!r?{done:!0,value:g.call(e,n,o)}:{done:!0,value:t.call(n,e,o)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:m}),v=b[0],x=b[1];o(String.prototype,t,v),o(RegExp.prototype,p,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)})}d&&a(RegExp.prototype[p],"sham",!0)}},function(t,e,n){var o=n(11),r=n(18);t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var i=n.call(t,e);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==o(t))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},function(t,e,n){var o=n(3),r=/#|\.prototype\./,i=function(t,e){var n=a[s(t)];return n==l||n!=c&&("function"==typeof e?o(e):!!e)},s=i.normalize=function(t){return String(t).replace(r,".").toLowerCase()},a=i.data={},c=i.NATIVE="N",l=i.POLYFILL="P";t.exports=i},function(t,e,n){"use strict";var o=n(62).charAt;t.exports=function(t,e,n){return e+(n?o(t,e).length:1)}},,function(t,e,n){var o=n(5),r=n(14),i=n(50).indexOf,s=n(21);t.exports=function(t,e){var n,a=r(t),c=0,l=[];for(n in a)!o(s,n)&&o(a,n)&&l.push(n);for(;e.length>c;)o(a,n=e[c++])&&(~i(l,n)||l.push(n));return l}},function(t,e,n){var o=n(9).f,r=n(5),i=n(4)("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,i)&&o(t,i,{configurable:!0,value:e})}},function(t,e,n){"use strict";e.a=(t,e,n)=>{"in"===e?(t.style.opacity="0",t.style.display="block",t.style.transition="opacity ".concat(n/1e3,"s"),setTimeout(()=>{t.style.opacity="1"},0),setTimeout(()=>{t.style.display="block",t.style.transition="",t.style.opacity="1"},n)):(t.style.opacity="1",t.style.display="block",t.style.transition="opacity ".concat(n/1e3,"s"),t.style.opacity="0",setTimeout(()=>{t.style.display="none",t.style.transition="",t.style.opacity="0"},n))}},function(t,e,n){var o=n(5),r=n(55),i=n(24),s=n(9);t.exports=function(t,e){for(var n=r(e),a=s.f,c=i.f,l=0;l<n.length;l++){var u=n[l];o(t,u)||a(t,u,c(e,u))}}},function(t,e,n){var o=n(41),r=n(27).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return o(t,r)}},function(t,e,n){"use strict";var o=n(2);t.exports=function(){var t=o(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var o=n(3),r=n(11),i="".split;t.exports=o((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==r(t)?i.call(t,""):Object(t)}:Object},function(t,e,n){var o=n(35);t.exports=o&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,n){var o=n(14),r=n(16),i=n(51),s=function(t){return function(e,n,s){var a,c=o(e),l=r(c.length),u=i(s,l);if(t&&n!=n){for(;l>u;)if((a=c[u++])!=a)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===n)return t||u||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},function(t,e,n){var o=n(13),r=Math.max,i=Math.min;t.exports=function(t,e){var n=o(t);return n<0?r(n+e,0):i(n,e)}},function(t,e,n){var o=n(1);t.exports=o},function(t,e,n){var o=n(1),r=n(23),i=o.WeakMap;t.exports="function"==typeof i&&/native code/.test(r(i))},function(t,e,n){"use strict";var o={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!o.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:o},function(t,e,n){var o=n(15),r=n(45),i=n(56),s=n(2);t.exports=o("Reflect","ownKeys")||function(t){var e=r.f(s(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var o=n(10);t.exports=function(t){return Object(o(t))}},function(t,e,n){"use strict";var o=n(3);function r(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=o((function(){var t=r("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=o((function(){var t=r("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},function(t,e,n){var o=n(15);t.exports=o("document","documentElement")},function(t,e,n){"use strict";var o=n(36),r=n(2),i=n(16),s=n(10),a=n(39),c=n(37);o("match",1,(function(t,e,n){return[function(e){var n=s(this),o=null==e?void 0:e[t];return void 0!==o?o.call(e,n):new RegExp(e)[t](String(n))},function(t){var o=n(e,t,this);if(o.done)return o.value;var s=r(t),l=String(this);if(!s.global)return c(s,l);var u=s.unicode;s.lastIndex=0;for(var d,m=[],f=0;null!==(d=c(s,l));){var p=String(d[0]);m[f]=p,""===p&&(s.lastIndex=a(l,i(s.lastIndex),u)),f++}return 0===f?null:m}]}))},function(t,e,n){"use strict";var o=n(26),r=n(18);o({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},function(t,e,n){var o=n(13),r=n(10),i=function(t){return function(e,n){var i,s,a=String(r(e)),c=o(n),l=a.length;return c<0||c>=l?t?"":void 0:(i=a.charCodeAt(c))<55296||i>56319||c+1===l||(s=a.charCodeAt(c+1))<56320||s>57343?t?a.charAt(c):i:t?a.slice(c,c+2):s-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,e,n){var o,r=n(2),i=n(79),s=n(27),a=n(21),c=n(59),l=n(32),u=n(28),d=u("IE_PROTO"),m=function(){},f=function(t){return"<script>"+t+"<\/script>"},p=function(){try{o=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;p=o?function(t){t.write(f("")),t.close();var e=t.parentWindow.Object;return t=null,e}(o):((e=l("iframe")).style.display="none",c.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(f("document.F=Object")),t.close(),t.F);for(var n=s.length;n--;)delete p.prototype[s[n]];return p()};a[d]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m.prototype=r(t),n=new m,m.prototype=null,n[d]=t):n=p(),void 0===e?n:i(n,e)}},function(t,e,n){"use strict";var o,r,i,s=n(65),a=n(6),c=n(5),l=n(4),u=n(19),d=l("iterator"),m=!1;[].keys&&("next"in(i=[].keys())?(r=s(s(i)))!==Object.prototype&&(o=r):m=!0),null==o&&(o={}),u||c(o,d)||a(o,d,(function(){return this})),t.exports={IteratorPrototype:o,BUGGY_SAFARI_ITERATORS:m}},function(t,e,n){var o=n(5),r=n(57),i=n(28),s=n(83),a=i("IE_PROTO"),c=Object.prototype;t.exports=s?Object.getPrototypeOf:function(t){return t=r(t),o(t,a)?t[a]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},,,function(t,e,n){var o=n(2),r=n(84);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(t){}return function(n,i){return o(n),r(i),e?t.call(n,i):n.__proto__=i,n}}():void 0)},,,,,,,function(t,e,n){var o=n(1),r=n(76),i=n(77),s=n(6),a=n(4),c=a("iterator"),l=a("toStringTag"),u=i.values;for(var d in r){var m=o[d],f=m&&m.prototype;if(f){if(f[c]!==u)try{s(f,c,u)}catch(t){f[c]=u}if(f[l]||s(f,l,d),r[d])for(var p in i)if(f[p]!==i[p])try{s(f,p,i[p])}catch(t){f[p]=i[p]}}}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,n){"use strict";var o=n(14),r=n(78),i=n(22),s=n(25),a=n(81),c=s.set,l=s.getterFor("Array Iterator");t.exports=a(Array,"Array",(function(t,e){c(this,{type:"Array Iterator",target:o(t),index:0,kind:e})}),(function(){var t=l(this),e=t.target,n=t.kind,o=t.index++;return!e||o>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:o,done:!1}:"values"==n?{value:e[o],done:!1}:{value:[o,e[o]],done:!1}}),"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e,n){var o=n(4),r=n(63),i=n(9),s=o("unscopables"),a=Array.prototype;null==a[s]&&i.f(a,s,{configurable:!0,value:r(null)}),t.exports=function(t){a[s][t]=!0}},function(t,e,n){var o=n(8),r=n(9),i=n(2),s=n(80);t.exports=o?Object.defineProperties:function(t,e){i(t);for(var n,o=s(e),a=o.length,c=0;a>c;)r.f(t,n=o[c++],e[n]);return t}},function(t,e,n){var o=n(41),r=n(27);t.exports=Object.keys||function(t){return o(t,r)}},function(t,e,n){"use strict";var o=n(26),r=n(82),i=n(65),s=n(68),a=n(42),c=n(6),l=n(12),u=n(4),d=n(19),m=n(22),f=n(64),p=f.IteratorPrototype,y=f.BUGGY_SAFARI_ITERATORS,h=u("iterator"),g=function(){return this};t.exports=function(t,e,n,u,f,b,v){r(n,e,u);var x,E,w,B=function(t){if(t===f&&_)return _;if(!y&&t in S)return S[t];switch(t){case"keys":case"values":case"entries":return function(){return new n(this,t)}}return function(){return new n(this)}},O=e+" Iterator",T=!1,S=t.prototype,L=S[h]||S["@@iterator"]||f&&S[f],_=!y&&L||B(f),C="Array"==e&&S.entries||L;if(C&&(x=i(C.call(new t)),p!==Object.prototype&&x.next&&(d||i(x)===p||(s?s(x,p):"function"!=typeof x[h]&&c(x,h,g)),a(x,O,!0,!0),d&&(m[O]=g))),"values"==f&&L&&"values"!==L.name&&(T=!0,_=function(){return L.call(this)}),d&&!v||S[h]===_||c(S,h,_),m[e]=_,f)if(E={values:B("values"),keys:b?_:B("keys"),entries:B("entries")},v)for(w in E)(y||T||!(w in S))&&l(S,w,E[w]);else o({target:e,proto:!0,forced:y||T},E);return E}},function(t,e,n){"use strict";var o=n(64).IteratorPrototype,r=n(63),i=n(20),s=n(42),a=n(22),c=function(){return this};t.exports=function(t,e,n){var l=e+" Iterator";return t.prototype=r(o,{next:i(1,n)}),s(t,l,!1,!0),a[l]=c,t}},function(t,e,n){var o=n(3);t.exports=!o((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,e,n){var o=n(7);t.exports=function(t){if(!o(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,e,n){"use strict";var o="URLSearchParams"in self,r="Symbol"in self&&"iterator"in Symbol,i="FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),s="FormData"in self,a="ArrayBuffer"in self;if(a)var c=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],l=ArrayBuffer.isView||function(t){return t&&c.indexOf(Object.prototype.toString.call(t))>-1};function u(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function d(t){return"string"!=typeof t&&(t=String(t)),t}function m(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return r&&(e[Symbol.iterator]=function(){return e}),e}function f(t){this.map={},t instanceof f?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function p(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function y(t){return new Promise((function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}}))}function h(t){var e=new FileReader,n=y(e);return e.readAsArrayBuffer(t),n}function g(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function b(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:i&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:s&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:o&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():a&&i&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=g(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):a&&(ArrayBuffer.prototype.isPrototypeOf(t)||l(t))?this._bodyArrayBuffer=g(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):o&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},i&&(this.blob=function(){var t=p(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?p(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(h)}),this.text=function(){var t,e,n,o=p(this);if(o)return o;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,n=y(e),e.readAsText(t),n;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),n=new Array(e.length),o=0;o<e.length;o++)n[o]=String.fromCharCode(e[o]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},s&&(this.formData=function(){return this.text().then(E)}),this.json=function(){return this.text().then(JSON.parse)},this}f.prototype.append=function(t,e){t=u(t),e=d(e);var n=this.map[t];this.map[t]=n?n+", "+e:e},f.prototype.delete=function(t){delete this.map[u(t)]},f.prototype.get=function(t){return t=u(t),this.has(t)?this.map[t]:null},f.prototype.has=function(t){return this.map.hasOwnProperty(u(t))},f.prototype.set=function(t,e){this.map[u(t)]=d(e)},f.prototype.forEach=function(t,e){for(var n in this.map)this.map.hasOwnProperty(n)&&t.call(e,this.map[n],n,this)},f.prototype.keys=function(){var t=[];return this.forEach((function(e,n){t.push(n)})),m(t)},f.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),m(t)},f.prototype.entries=function(){var t=[];return this.forEach((function(e,n){t.push([n,e])})),m(t)},r&&(f.prototype[Symbol.iterator]=f.prototype.entries);var v=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function x(t,e){var n,o,r=(e=e||{}).body;if(t instanceof x){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new f(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new f(e.headers)),this.method=(n=e.method||this.method||"GET",o=n.toUpperCase(),v.indexOf(o)>-1?o:n),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function E(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var n=t.split("="),o=n.shift().replace(/\+/g," "),r=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(o),decodeURIComponent(r))}})),e}function w(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new f(e.headers),this.url=e.url||"",this._initBody(t)}x.prototype.clone=function(){return new x(this,{body:this._bodyInit})},b.call(x.prototype),b.call(w.prototype),w.prototype.clone=function(){return new w(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new f(this.headers),url:this.url})},w.error=function(){var t=new w(null,{status:0,statusText:""});return t.type="error",t};var B=[301,302,303,307,308];w.redirect=function(t,e){if(-1===B.indexOf(e))throw new RangeError("Invalid status code");return new w(null,{status:e,headers:{location:t}})};var O=self.DOMException;try{new O}catch(t){(O=function(t,e){this.message=t,this.name=e;var n=Error(t);this.stack=n.stack}).prototype=Object.create(Error.prototype),O.prototype.constructor=O}function T(t,e){return new Promise((function(n,o){var r=new x(t,e);if(r.signal&&r.signal.aborted)return o(new O("Aborted","AbortError"));var s=new XMLHttpRequest;function a(){s.abort()}s.onload=function(){var t,e,o={status:s.status,statusText:s.statusText,headers:(t=s.getAllResponseHeaders()||"",e=new f,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var n=t.split(":"),o=n.shift().trim();if(o){var r=n.join(":").trim();e.append(o,r)}})),e)};o.url="responseURL"in s?s.responseURL:o.headers.get("X-Request-URL");var r="response"in s?s.response:s.responseText;n(new w(r,o))},s.onerror=function(){o(new TypeError("Network request failed"))},s.ontimeout=function(){o(new TypeError("Network request failed"))},s.onabort=function(){o(new O("Aborted","AbortError"))},s.open(r.method,r.url,!0),"include"===r.credentials?s.withCredentials=!0:"omit"===r.credentials&&(s.withCredentials=!1),"responseType"in s&&i&&(s.responseType="blob"),r.headers.forEach((function(t,e){s.setRequestHeader(e,t)})),r.signal&&(r.signal.addEventListener("abort",a),s.onreadystatechange=function(){4===s.readyState&&r.signal.removeEventListener("abort",a)}),s.send(void 0===r._bodyInit?null:r._bodyInit)}))}T.polyfill=!0,self.fetch||(self.fetch=T,self.Headers=f,self.Request=x,self.Response=w)},,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);n(75),n(85);var o=n(0),r=n(43),i=(n(112),0),s=document.querySelector("meta[name='theme-color']"),a=!1,c="",l=!1;s&&(c=document.querySelector("meta[name='mdx-main-color']").getAttribute("content"),a=!0);var u,d,m=!1,f=1,p="unset",y="undefined"!=typeof offlineMode&&offlineMode;function h(){if(f){(t=document.documentElement.scrollTop||document.body.scrollTop)>u&0==i&&(document.getElementsByClassName("mdui-toolbar-self")[0].classList.toggle("mdui-color-theme"),document.getElementById("titleBar").classList.toggle("mdui-shadow-2"),document.getElementsByClassName("scrollToTop")[0].classList.toggle("mdui-fab-hide"),i=1),t<=u&1==i&&(document.getElementsByClassName("mdui-toolbar-self")[0].classList.toggle("mdui-color-theme"),document.getElementById("titleBar").classList.toggle("mdui-shadow-2"),document.getElementsByClassName("scrollToTop")[0].classList.toggle("mdui-fab-hide"),i=0);let e=0;"single"!==p&&(t<=u?(e=(u-t)/d,e>1&&(e=1)):e=t>u?0:1,document.getElementsByClassName("theFirstPage")[0].style.setProperty("opacity",e,"important"))}else if(!f){var t;(t=document.documentElement.scrollTop||document.body.scrollTop)>20&0==i&&(document.getElementsByClassName("mdui-toolbar-self")[0].classList.toggle("mdui-color-theme"),document.getElementById("titleBar").classList.toggle("mdui-shadow-2"),document.getElementsByClassName("scrollToTop")[0].classList.toggle("mdui-fab-hide"),i=1),t<=20&1==i&&(document.getElementsByClassName("mdui-toolbar-self")[0].classList.toggle("mdui-color-theme"),document.getElementById("titleBar").classList.toggle("mdui-shadow-2"),document.getElementsByClassName("scrollToTop")[0].classList.toggle("mdui-fab-hide"),i=0)}m=!1}function g(t){t.matches?("tworow"===p&&(E(),document.getElementsByClassName("theFirstPage")[0].style.setProperty("opacity",1,"important")),p="single"):("single"===p&&E(),p="tworow")}function b(t){"user"!==sessionStorage.getItem("mrm_enable")?t.matches&&document.getElementsByTagName("body")[0].classList.contains("mdx-reduce-motion")?sessionStorage.getItem("mrm_enable")||(mdui.snackbar({message:reduce_motion_i18n_1,buttonText:reduce_motion_i18n_2,timeout:7e3,onButtonClick:function(){sessionStorage.setItem("mrm_enable","user"),document.getElementsByTagName("body")[0].classList.remove("mdx-reduce-motion")},position:"top"}),sessionStorage.setItem("mrm_enable","sys"),document.getElementsByTagName("body")[0].classList.add("mdx-reduce-motion")):(sessionStorage.getItem("mrm_enable")&&mdui.snackbar({message:reduce_motion_i18n_3,timeout:5e3,position:"top"}),sessionStorage.removeItem("mrm_enable")):document.getElementsByTagName("body")[0].classList.remove("mdx-reduce-motion")}function v(){if(document.getElementsByClassName("mdx-hp-g-r").length){document.getElementsByClassName("mdx-hp-g-r")[0].style.display="block";var t=1,e=1,n=(210+parseInt(getComputedStyle(document.querySelector("a>div.mdx-li.mdui-card"),null).marginRight))*document.querySelectorAll("a>div.mdx-li.mdui-card").length+10,i=0,s=0,a=document.getElementById("mdx-sp-out-c");a.onscroll=function(){i=a.offsetWidth,(s=a.scrollLeft)>5&&t?(Object(r.a)(Object(o.a)(".mdx-hp-g-l"),"in",200),t=0):s<=5&&!t&&(Object(r.a)(Object(o.a)(".mdx-hp-g-l"),"out",200),t=1),n-i-s<=1&&e?(Object(r.a)(Object(o.a)(".mdx-hp-g-r"),"out",200),e=0):n-i-s>1&&!e&&(Object(r.a)(Object(o.a)(".mdx-hp-g-r"),"in",200),e=1)}}}function x(){var t=document.getElementsByClassName("mdx-posts-may-related");if(t.length){let e=document.getElementsByClassName("mdx-posts-may-related")[0].getElementsByClassName("mdx-li");(e[0].offsetWidth+8)*e.length-15<t[0].offsetWidth?(document.getElementsByClassName("mdx-hp-g-l")[0].style.visibility="hidden",document.getElementsByClassName("mdx-hp-g-r")[0].style.visibility="hidden"):(document.getElementsByClassName("mdx-hp-g-l")[0].style.visibility="visible",document.getElementsByClassName("mdx-hp-g-r")[0].style.visibility="visible")}}0===document.getElementsByClassName("theFirstPage").length?f=0:(u=document.getElementsByClassName("theFirstPage")[0].offsetHeight-document.getElementsByClassName("titleBarGobal")[0].offsetHeight-1,d=.37*document.getElementsByClassName("theFirstPage")[0].offsetHeight-20),window.addEventListener("load",()=>{h();let t=document.getElementsByClassName("theFirstPage");t.length>0&&setTimeout(()=>{t[0].classList.add("mdx-anmi-loaded"),t[0].style.setProperty("transition","opacity 0s","important")},500)}),window.addEventListener("scroll",()=>{m||(requestAnimationFrame(h),m=!0)}),window.addEventListener("resize",()=>{f&&(u=document.getElementsByClassName("theFirstPage")[0].offsetHeight-document.getElementsByClassName("titleBarGobal")[0].offsetHeight-1,d=.37*document.getElementsByClassName("theFirstPage")[0].offsetHeight-20),v(),x()}),document.getElementsByClassName("scrollToTop")[0].addEventListener("click",(function(){Velocity(Object(o.a)("html"),{scrollTop:"0px"},500)}),!1),document.getElementById("tgns")&&document.getElementById("tgns").addEventListener("click",(function(){document.getElementsByTagName("body")[0].classList.contains("mdui-theme-layout-dark")?(sessionStorage.setItem("ns_night-styles","false"),a&&s.setAttribute("content",c)):(sessionStorage.setItem("ns_night-styles","true"),a&&s.setAttribute("content","#212121")),document.getElementsByTagName("body")[0].classList.toggle("mdui-theme-layout-dark")}),!1),window.addEventListener("DOMContentLoaded",()=>{if(v(),document.getElementsByTagName("body")[0].classList.contains("mdx-first-tworows")){var t=window.matchMedia("screen and (orientation:landscape) and (min-width: 750px)");t.addListener(g),g(t)}if(document.getElementsByTagName("body")[0].classList.contains("mdx-reduce-motion")){var e=window.matchMedia("(prefers-reduced-motion: reduce)");e.addListener(b),b(e)}x()}),document.getElementsByClassName("seai")[0].addEventListener("click",(function(){let t=document.getElementById("SearchBar");if(t.style.display="block",Object(r.a)(Object(o.a)(".OutOfsearchBox"),"in",300),Object(r.a)(Object(o.a)(".fullScreen"),"in",300),Object(o.a)("#SearchBar > *",t=>Velocity(t,{opacity:"1"},200)),setTimeout(()=>{document.getElementsByClassName("outOfSearch")[0].style.width="75%",t.classList.add("mdui-color-theme")},0),document.getElementsByClassName("seainput")[0].focus(),document.getElementsByTagName("body")[0].classList.toggle("mdx-search-lock"),y){let t=document.getElementsByClassName("OutOfsearchBox")[0];t.innerHTML='<div class="searchBoxFill"></div><div class="underRes">'+tipMutiOff+"</div>",t.style.pointerEvents="auto",document.getElementsByClassName("seainput")[0].setAttribute("disabled","disabled")}}),!1),document.getElementsByClassName("mdx-tworow-search").length&&document.getElementsByClassName("mdx-tworow-search")[0].addEventListener("click",(function(){setTimeout(()=>{document.getElementsByTagName("body")[0].classList.toggle("mdx-search-lock")},500),mdui.JQ("#mdx-search-anim").css({width:this.offsetWidth-12+"px",top:this.getBoundingClientRect().top+"px",left:this.getBoundingClientRect().left+"px"}),document.getElementById("mdx-search-anim").classList.add("mdx-search-anim-show"),this.style.visibility="hidden";let t=document.getElementById("SearchBar");t.style.display="block";var e=document.getElementsByClassName("outOfSearch");if(document.getElementsByClassName("mdx-theme-white").length?mdui.JQ("#mdx-search-anim").css({width:.75*document.getElementById("searchform").offsetWidth-12+"px",height:e[0].offsetHeight-10+"px",top:e[0].getBoundingClientRect().top+"px",left:"7px",backgroundColor:"rgba(152, 152, 152, 0.3)",color:"rgba(255, 255, 255, .3)"}):mdui.JQ("#mdx-search-anim").css({width:.75*document.getElementById("searchform").offsetWidth-12+"px",height:e[0].offsetHeight-10+"px",top:e[0].getBoundingClientRect().top+"px",left:"7px",backgroundColor:"rgba(255, 255, 255, 0.3)",color:"rgba(255, 255, 255, .3)"}),setTimeout(()=>{document.getElementById("searchform").classList.add("mdx-searchform-show"),document.getElementById("mdx-search-anim").classList.remove("mdx-search-anim-show"),document.querySelector("a.mdui-btn.mdui-btn-icon.sea-close").style.opacity=1},500),document.getElementById("mdx-search-anim").getElementsByTagName("i")[0].style.color="#fff",Object(r.a)(Object(o.a)(".OutOfsearchBox"),"in",500),t.classList.add("mdui-color-theme"),Object(r.a)(Object(o.a)(".fullScreen"),"in",500),document.getElementsByClassName("seainput")[0].focus(),y){let t=document.getElementsByClassName("OutOfsearchBox")[0];t.innerHTML='<div class="searchBoxFill"></div><div class="underRes">'+tipMutiOff+"</div>",t.style.pointerEvents="auto",document.getElementsByClassName("seainput")[0].setAttribute("disabled","disabled")}l=!0}),!1);for(let t of document.getElementsByClassName("sea-close"))t.addEventListener("click",E,!1);function E(){if(document.getElementsByClassName("seainput")[0].blur(),l){var t=document.getElementsByClassName("mdx-tworow-search")[0],e=document.getElementById("mdx-search-anim");Object(r.a)(Object(o.a)(".fullScreen"),"out",500),document.querySelector("a.mdui-btn.mdui-btn-icon.sea-close").removeAttribute("style"),document.getElementById("searchform").classList.remove("mdx-searchform-show"),e.classList.add("mdx-search-anim-show"),mdui.JQ("#mdx-search-anim").css({width:t.offsetWidth-22+"px",height:"50px",top:t.getBoundingClientRect().top+"px",left:t.getBoundingClientRect().left+"px",backgroundColor:window.getComputedStyle(t).backgroundColor,color:window.getComputedStyle(t).color}),e.getElementsByTagName("i")[0].style.color=window.getComputedStyle(t.getElementsByTagName("i")[0]).color,Object(r.a)(Object(o.a)(".OutOfsearchBox"),"out",500),window.setTimeout(w,500),document.getElementById("SearchBar").classList.remove("mdui-color-theme"),setTimeout(()=>{let t=document.getElementsByTagName("body")[0];t.classList.contains("mdx-search-lock")&&t.classList.toggle("mdx-search-lock"),document.getElementById("mdx-search-anim").classList.remove("mdx-search-anim-show"),document.getElementsByClassName("mdx-tworow-search")[0].style.visibility="visible"},500)}else Object(o.a)("#SearchBar > *",t=>Velocity(t,{opacity:"0"},200)),Object(r.a)(Object(o.a)(".fullScreen"),"out",300),Object(r.a)(Object(o.a)(".OutOfsearchBox"),"out",300),document.getElementsByClassName("outOfSearch")[0].style.width="30%",window.setTimeout(w,300),document.getElementById("SearchBar").classList.remove("mdui-color-theme"),setTimeout(()=>{let t=document.getElementsByTagName("body")[0];t.classList.contains("mdx-search-lock")&&t.classList.toggle("mdx-search-lock"),document.getElementsByClassName("outOfSearch")[0].removeAttribute("style")},300);l=!1}function w(){document.getElementById("SearchBar").style.display="none"}document.getElementsByClassName("mdui-typo-headline")[0].addEventListener("click",(function(){1==mdx_tapToTop&&Velocity(Object(o.a)("html"),{scrollTop:"0px"},500)})),window.addEventListener("DOMContentLoaded",()=>{var t=0,e=0;for(let n of document.querySelectorAll("#mdx_menu > li")){if(n.classList.contains("menu-item-has-children")){n.classList.add("mdui-collapse-item"),n.classList.remove("mdui-list-item"),n.innerHTML='<div class="mdui-collapse-item-header mdui-list-item mdui-ripple"><div class="mdui-list-item-content"><a class="mdx-sub-menu-a" href="'.concat(n.getElementsByTagName("a")[0].getAttribute("href"),'">').concat(n.getElementsByTagName("a")[0].innerHTML,'</a></div><i class="mdui-collapse-item-arrow mdui-icon material-icons">keyboard_arrow_down</i></div><ul class="mdui-collapse-item-body mdui-list mdui-list-dense">').concat(n.getElementsByTagName("ul")[0].innerHTML,"</ul>"),t=1;for(let t of n.getElementsByTagName("ul"))for(let n of t.getElementsByTagName("li"))n.classList.contains("current-menu-item")&&(e=1);e&&(n.classList.remove("current-menu-item","current_page_item"),n.classList.add("mdui-collapse-item-open")),e=0}if(t){let t=document.getElementById("mdx_menu");t.classList.add("mdui-collapse"),t.setAttribute("mdui-collapse","")}}new mdui.Collapse("#mdx_menu");var n="undefined"==typeof displayCookie||displayCookie,o="undefined"==typeof cookieFlagName?"mdx_cookie":cookieFlagName,r=document.getElementById("mdx-cookie-notice");n&&r&&!localStorage.getItem(o)&&(r.classList.add("mdx-cookie-notice-show"),r.getElementsByTagName("button")[0].addEventListener("click",(function(){localStorage.setItem(o,"true"),document.getElementById("mdx-cookie-notice").style.bottom="-400px",setTimeout(()=>{document.getElementById("mdx-cookie-notice").classList.remove("mdx-cookie-notice-show")},400)}),!1))})},function(t,e,n){}]);
//# sourceMappingURL=js.js.map