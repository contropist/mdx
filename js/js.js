!function(e){function t(t){for(var a,l,i=t[0],d=t[1],m=t[2],c=0,u=[];c<i.length;c++)l=i[c],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&u.push(o[l][0]),o[l]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);for(r&&r(t);u.length;)u.shift()();return n.push.apply(n,m||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],a=!0,i=1;i<s.length;i++){var d=s[i];0!==o[d]&&(a=!1)}a&&(n.splice(t--,1),e=l(l.s=s[0]))}return e}var a={},o={2:0},n=[];function l(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=e,l.c=a,l.d=function(e,t,s){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(s,a,function(t){return e[t]}.bind(null,a));return s},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var i=window.webpackJsonp=window.webpackJsonp||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var m=0;m<i.length;m++)t(i[m]);var r=d;n.push([137,0]),s()}({137:function(e,t,s){"use strict";s.r(t);s(18);var a=s(0),o=s(3),n=(s(64),s(10));i=1,window.addEventListener("DOMContentLoaded",()=>{var e=Object(a.a)("div.nextpage a").innerText;if(""===e?Object(a.a)("div.nextpage",e=>{e.parentNode.removeChild(e)}):(l=Object(a.a)("div.nextpage a").getAttribute("href"),Object(a.a)("#postlist").insertAdjacentHTML("afterend",'<div class="mdui-hoverable nextpage2">'.concat(e,"</div>")),Object(a.a)("div.nextpage",e=>{e.parentNode.removeChild(e)}),Object(a.a)("div.main").addEventListener("click",e=>{var t;e.target.classList.contains("nextpage2")&&"div"===e.target.tagName.toLowerCase()&&(Object(a.a)("div.nextpage2").style.display="none",Object(a.a)("div.nextpage2").insertAdjacentHTML("afterend",'<div class="mdui-spinner mdx-ajax-loading mdui-center"></div>'),mdui.updateSpinners(),t=l,Object(n.a)(t,{credentials:"same-origin"}).then(e=>{i++;let t=(new DOMParser).parseFromString(e,"text/html");l=t.querySelector("div.nextpage a"),enhanced_ajax&&parseInt(sessionStorage.getItem("mdx_index_loaded_page"))<=30&&(sessionStorage.setItem("mdx_index_page_"+i,window.btoa(encodeURIComponent(e))),sessionStorage.setItem("mdx_index_loaded_page",i));let s="";if(null===l)s=e.replace('<div class="nextpage mdui-center"></div>',""),Object(a.a)("div.nextpage2",e=>{e.parentNode.removeChild(e)});else{s=e;let t=(new DOMParser).parseFromString(s,"text/html").querySelector("div.nextpage");t.parentNode.removeChild(t),Object(a.a)("div.nextpage2").style.display=""}Object(a.a)("div.mdx-ajax-loading",e=>{e.parentNode.removeChild(e)});let o=("undefined"!=typeof data2Parsed?data2Parsed:(new DOMParser).parseFromString(s,"text/html")).getElementById("postlist").innerHTML;if(Object(a.a)("#postlist").insertAdjacentHTML("beforeend",o),window.mdxMasonry){const e=[];for(const t of document.getElementById("postlist").children)if("absolute"!==t.style.position){e.push(t);for(const e of t.querySelectorAll("img"))e.addEventListener("load",e=>{window.mdxMasonry.layout()}),e.addEventListener("error",e=>{window.mdxMasonry.layout()})}window.mdxMasonry.appended(e)}}).catch(()=>{mdui.snackbar({message:ajax_error,timeout:5e3,position:"top"})}))})),enhanced_ajax&&document.getElementById("postlist").getElementsByTagName("a").length>0)if(sessionStorage.getItem("mdx_index_page_1")){if(sessionStorage.getItem("mdx_index_page_1")!==window.btoa(encodeURIComponent(document.getElementById("postlist").getElementsByTagName("a")[0].href))){for(let e=1;e<=parseInt(sessionStorage.getItem("mdx_index_loaded_page"));e++)sessionStorage.removeItem("mdx_index_page_"+e);sessionStorage.setItem("mdx_index_page_1",window.btoa(encodeURIComponent(document.getElementById("postlist").getElementsByTagName("a")[0].href))),sessionStorage.setItem("mdx_index_loaded_page",1)}else if(parseInt(sessionStorage.getItem("mdx_index_loaded_page"))>1)for(let e=2;e<=parseInt(sessionStorage.getItem("mdx_index_loaded_page"));e++){var t=decodeURIComponent(window.atob(sessionStorage.getItem("mdx_index_page_"+e)));let s=(new DOMParser).parseFromString(t,"text/html"),o="";if(null===(l=s.querySelector("div.nextpage a")))o=t.replace('<div class="nextpage mdui-center"></div>',""),Object(a.a)("div.nextpage2",e=>{e.parentNode.removeChild(e)});else{o=t;let e=(new DOMParser).parseFromString(o,"text/html").querySelector("div.nextpage");e.parentNode.removeChild(e),Object(a.a)("div.nextpage2").style.display=""}let n=("undefined"!=typeof data2Parsed?data2Parsed:(new DOMParser).parseFromString(o,"text/html")).getElementById("postlist").innerHTML;Object(a.a)("#postlist").insertAdjacentHTML("beforeend",n),i=e}}else sessionStorage.setItem("mdx_index_page_1",window.btoa(encodeURIComponent(document.getElementById("postlist").getElementsByTagName("a")[0].href))),sessionStorage.setItem("mdx_index_loaded_page",1)});var l,i,d=s(17),m=s(19);s.p=window.mdxPublicPath;const r=new m.a("document");var c=0,u=document.querySelector("meta[name='theme-color']"),g=!1,y="",p=!1;u&&(y=document.querySelector("meta[name='mdx-main-color']").getAttribute("content"),g=!0);var h,f,x=!1,b=1,B="unset",E="undefined"!=typeof offlineMode&&offlineMode;function v(){if(b){(e=document.documentElement.scrollTop||document.body.scrollTop)>h&0==c&&(document.getElementsByClassName("mdui-toolbar-self")[0].classList.toggle("mdui-color-theme"),document.getElementById("titleBar").classList.toggle("mdui-shadow-2"),document.getElementsByClassName("scrollToTop")[0].classList.toggle("mdui-fab-hide"),c=1),e<=h&1==c&&(document.getElementsByClassName("mdui-toolbar-self")[0].classList.toggle("mdui-color-theme"),document.getElementById("titleBar").classList.toggle("mdui-shadow-2"),document.getElementsByClassName("scrollToTop")[0].classList.toggle("mdui-fab-hide"),c=0);let t=0;if("single"!==B){e<=h?(t=(h-e)/f,t>1&&(t=1)):t=e>h?0:1,document.getElementsByClassName("theFirstPage")[0].style.setProperty("opacity",t,"important");const s=document.querySelectorAll(".slide-style-1 .mdx-slide-content");if(s.length>0){for(const e of[...s])e.style.setProperty("background-color",`rgba(var(--mdx-theme-color-with-white-head), ${.4*(1-t)+.6})`,"important");Object(a.a)(".swiper-pagination",e=>{e.style.setProperty("opacity",t,"important")})}else{const e=document.querySelectorAll(".slide-style-2 .mdx-slide-content");if(e.length>0){for(const s of[...e])s.style.setProperty("background-image",`linear-gradient(65deg, rgba(var(--mdx-theme-color-with-white-head), 1) 30%, rgba(var(--mdx-theme-color-with-white-head), ${1-.9*t+.1}) 80%)`,"important");Object(a.a)(".flickity-page-dots",e=>{e.style.setProperty("opacity",t,"important")})}}}}else if(!b){var e;(e=document.documentElement.scrollTop||document.body.scrollTop)>20&0==c&&(document.getElementsByClassName("mdui-toolbar-self")[0].classList.toggle("mdui-color-theme"),document.getElementById("titleBar").classList.toggle("mdui-shadow-2"),document.getElementsByClassName("scrollToTop")[0].classList.toggle("mdui-fab-hide"),c=1),e<=20&1==c&&(document.getElementsByClassName("mdui-toolbar-self")[0].classList.toggle("mdui-color-theme"),document.getElementById("titleBar").classList.toggle("mdui-shadow-2"),document.getElementsByClassName("scrollToTop")[0].classList.toggle("mdui-fab-hide"),c=0)}x=!1}function w(e){e.matches?("tworow"===B&&(C(),document.getElementsByClassName("theFirstPage")[0].style.setProperty("opacity",1,"important")),B="single"):("single"===B&&C(),B="tworow")}function O(e){"user"!==sessionStorage.getItem("mrm_enable")?e.matches&&document.getElementsByTagName("body")[0].classList.contains("mdx-reduce-motion")?sessionStorage.getItem("mrm_enable")||(mdui.snackbar({message:reduce_motion_i18n_1,buttonText:reduce_motion_i18n_2,timeout:7e3,onButtonClick:function(){sessionStorage.setItem("mrm_enable","user"),document.getElementsByTagName("body")[0].classList.remove("mdx-reduce-motion")},position:"top"}),sessionStorage.setItem("mrm_enable","sys"),document.getElementsByTagName("body")[0].classList.add("mdx-reduce-motion")):(sessionStorage.getItem("mrm_enable")&&mdui.snackbar({message:reduce_motion_i18n_3,timeout:5e3,position:"top"}),sessionStorage.removeItem("mrm_enable")):document.getElementsByTagName("body")[0].classList.remove("mdx-reduce-motion")}function L(){if(document.getElementsByClassName("mdx-hp-g-r").length){document.getElementsByClassName("mdx-hp-g-r")[0].style.display="block";var e=1,t=1,s=(210+parseInt(getComputedStyle(document.querySelector("a>div.mdx-li.mdui-card"),null).marginRight))*document.querySelectorAll("a>div.mdx-li.mdui-card").length+10,n=0,l=0,i=document.getElementById("mdx-sp-out-c");i.onscroll=function(){n=i.offsetWidth,(l=i.scrollLeft)>5&&e?(Object(o.a)(Object(a.a)(".mdx-hp-g-l",null,"array"),"in",200),e=0):l<=5&&!e&&(Object(o.a)(Object(a.a)(".mdx-hp-g-l",null,"array"),"out",200),e=1),s-n-l<=1&&t?(Object(o.a)(Object(a.a)(".mdx-hp-g-r",null,"array"),"out",200),t=0):s-n-l>1&&!t&&(Object(o.a)(Object(a.a)(".mdx-hp-g-r",null,"array"),"in",200),t=1)}}}function N(){var e=document.getElementsByClassName("mdx-posts-may-related");if(e.length){let t=document.getElementsByClassName("mdx-posts-may-related")[0].getElementsByClassName("mdx-li");(t[0].offsetWidth+8)*t.length-15<e[0].offsetWidth?(document.getElementsByClassName("mdx-hp-g-l")[0].style.visibility="hidden",document.getElementsByClassName("mdx-hp-g-r")[0].style.visibility="hidden"):(document.getElementsByClassName("mdx-hp-g-l")[0].style.visibility="visible",document.getElementsByClassName("mdx-hp-g-r")[0].style.visibility="visible")}}0===document.getElementsByClassName("theFirstPage").length?b=0:(h=document.getElementsByClassName("theFirstPage")[0].offsetHeight-document.getElementsByClassName("titleBarGobal")[0].offsetHeight-1,f=.37*document.getElementsByClassName("theFirstPage")[0].offsetHeight-20),window.addEventListener("load",()=>{v();let e=document.getElementsByClassName("theFirstPage");e.length>0&&setTimeout(()=>{e[0].classList.add("mdx-anmi-loaded"),e[0].style.setProperty("transition","opacity 0s","important")},500)}),window.addEventListener("scroll",()=>{x||(requestAnimationFrame(v),x=!0)}),window.addEventListener("resize",()=>{b&&(h=document.getElementsByClassName("theFirstPage")[0].offsetHeight-document.getElementsByClassName("titleBarGobal")[0].offsetHeight-1,f=.37*document.getElementsByClassName("theFirstPage")[0].offsetHeight-20),L(),N()}),document.getElementsByClassName("scrollToTop")[0].addEventListener("click",(function(){r.to(0,500)}),!1),document.getElementById("tgns")&&document.getElementById("tgns").addEventListener("click",(function(){document.getElementsByTagName("body")[0].classList.contains("mdui-theme-layout-dark")?(sessionStorage.setItem("ns_night-styles","false"),g&&u.setAttribute("content",y)):(sessionStorage.setItem("ns_night-styles","true"),g&&u.setAttribute("content","#212121")),document.getElementsByTagName("body")[0].classList.toggle("mdui-theme-layout-dark")}),!1),window.addEventListener("DOMContentLoaded",()=>{if(L(),document.getElementsByTagName("body")[0].classList.contains("mdx-first-tworows")){var e=window.matchMedia("screen and (orientation:landscape) and (min-width: 750px)");e.addEventListener("change",w),w(e)}if(document.getElementsByTagName("body")[0].classList.contains("mdx-reduce-motion")){var t=window.matchMedia("(prefers-reduced-motion: reduce)");t.addEventListener("change",O),O(t)}N();if(document.getElementsByClassName("mdx-swiper").length>0&&new Flickity(".swiper-wrapper",{accessibility:!0,autoPlay:1e3*slideInterval||5e3,cellAlign:"center",cellSelector:".swiper-item",draggable:">1",dragThreshold:3,lazyLoad:!1,percentPosition:!0,prevNextButtons:!1,pageDots:!0,resize:!0,setGallerySize:!1,watchCSS:!1,wrapAround:!0}),document.body.classList.contains("mdx-wide-post-list")){const e=document.getElementById("postlist");if(e.getElementsByClassName("post-item").length>0){let t=30;e.getElementsByClassName("indexgaid").length>0&&(t=20),window.mdxMasonry=new Masonry(e,{itemSelector:".post-item",columnWidth:".post-item",gutter:t,stagger:10,percentPosition:!0}),document.getElementById("postlist").addEventListener("lazyloaded",e=>{e.target.matches("#postlist > .post-item img")&&window.mdxMasonry.layout()}),Object(a.a)("#postlist img:not([data-src])",e=>{e.addEventListener("load",()=>{window.mdxMasonry.layout()}),e.addEventListener("error",()=>{window.mdxMasonry.layout()})})}}}),document.getElementsByClassName("seai")[0].addEventListener("click",(function(){let e=document.getElementById("SearchBar");if(e.style.display="block",Object(o.a)(Object(a.a)(".OutOfsearchBox",null,"array"),"in",300),Object(o.a)(Object(a.a)(".fullScreen",null,"array"),"in",300),Object(a.a)("#SearchBar > *",e=>new d.a(e,1,200)),setTimeout(()=>{document.getElementsByClassName("outOfSearch")[0].style.width="75%",e.classList.add("mdui-color-theme")},0),document.getElementsByClassName("seainput")[0].focus(),document.getElementsByTagName("body")[0].classList.toggle("mdx-search-lock"),E){let e=document.getElementsByClassName("OutOfsearchBox")[0];e.innerHTML='<div class="searchBoxFill"></div><div class="underRes">'+tipMutiOff+"</div>",e.style.pointerEvents="auto",document.getElementsByClassName("seainput")[0].setAttribute("disabled","disabled")}}),!1),document.getElementsByClassName("mdx-tworow-search").length&&document.getElementsByClassName("mdx-tworow-search")[0].addEventListener("click",(function(){setTimeout(()=>{document.getElementsByTagName("body")[0].classList.toggle("mdx-search-lock")},500),Object(a.a)("#mdx-search-anim",e=>{e.style.width=this.offsetWidth-12+"px",e.style.top=this.getBoundingClientRect().top+"px",e.style.left=this.getBoundingClientRect().left+"px"}),document.getElementById("mdx-search-anim").classList.add("mdx-search-anim-show"),this.style.visibility="hidden";let e=document.getElementById("SearchBar");e.style.display="block";var t=document.getElementsByClassName("outOfSearch");if(document.getElementsByClassName("mdx-theme-white").length?Object(a.a)("#mdx-search-anim",e=>{e.style.width=.75*document.getElementById("searchform").offsetWidth-12+"px",e.style.height=t[0].offsetHeight-10+"px",e.style.top=t[0].getBoundingClientRect().top+"px",e.style.left="7px",e.style.backgroundColor="rgba(152, 152, 152, 0.3)",e.style.color="rgba(255, 255, 255, .3)"}):Object(a.a)("#mdx-search-anim",e=>{e.style.width=.75*document.getElementById("searchform").offsetWidth-12+"px",e.style.height=t[0].offsetHeight-10+"px",e.style.top=t[0].getBoundingClientRect().top+"px",e.style.left="7px",e.style.backgroundColor="rgba(255, 255, 255, 0.3)",e.style.color="rgba(255, 255, 255, .3)"}),setTimeout(()=>{document.getElementById("searchform").classList.add("mdx-searchform-show"),document.getElementById("mdx-search-anim").classList.remove("mdx-search-anim-show"),document.querySelector("a.mdui-btn.mdui-btn-icon.sea-close").style.opacity=1},500),document.getElementById("mdx-search-anim").getElementsByTagName("i")[0].style.color="#fff",Object(o.a)(Object(a.a)(".OutOfsearchBox",null,"array"),"in",500),e.classList.add("mdui-color-theme"),Object(o.a)(Object(a.a)(".fullScreen",null,"array"),"in",500),document.getElementsByClassName("seainput")[0].focus(),E){let e=document.getElementsByClassName("OutOfsearchBox")[0];e.innerHTML='<div class="searchBoxFill"></div><div class="underRes">'+tipMutiOff+"</div>",e.style.pointerEvents="auto",document.getElementsByClassName("seainput")[0].setAttribute("disabled","disabled")}p=!0}),!1);for(let e of document.getElementsByClassName("sea-close"))e.addEventListener("click",C,!1);function C(){if(document.getElementsByClassName("seainput")[0].blur(),p){var e=document.getElementsByClassName("mdx-tworow-search")[0],t=document.getElementById("mdx-search-anim");Object(o.a)(Object(a.a)(".fullScreen",null,"array"),"out",500),document.querySelector("a.mdui-btn.mdui-btn-icon.sea-close").removeAttribute("style"),document.getElementById("searchform").classList.remove("mdx-searchform-show"),t.classList.add("mdx-search-anim-show"),Object(a.a)("#mdx-search-anim",t=>{t.style.width=e.offsetWidth-22+"px",t.style.height="50px",t.style.top=e.getBoundingClientRect().top+"px",t.style.left=e.getBoundingClientRect().left+"px",t.style.backgroundColor=window.getComputedStyle(e).backgroundColor,t.style.color=window.getComputedStyle(e).color}),t.getElementsByTagName("i")[0].style.color=window.getComputedStyle(e.getElementsByTagName("i")[0]).color,Object(o.a)(Object(a.a)(".OutOfsearchBox",null,"array"),"out",500),window.setTimeout(_,500),document.getElementById("SearchBar").classList.remove("mdui-color-theme"),setTimeout(()=>{let e=document.getElementsByTagName("body")[0];e.classList.contains("mdx-search-lock")&&e.classList.toggle("mdx-search-lock"),document.getElementById("mdx-search-anim").classList.remove("mdx-search-anim-show"),document.getElementsByClassName("mdx-tworow-search")[0].style.visibility="visible"},500)}else Object(a.a)("#SearchBar > *",e=>new d.a(e,0,200)),Object(o.a)(Object(a.a)(".fullScreen",null,"array"),"out",300),Object(o.a)(Object(a.a)(".OutOfsearchBox",null,"array"),"out",300),document.getElementsByClassName("outOfSearch")[0].style.width="30%",window.setTimeout(_,300),document.getElementById("SearchBar").classList.remove("mdui-color-theme"),setTimeout(()=>{let e=document.getElementsByTagName("body")[0];e.classList.contains("mdx-search-lock")&&e.classList.toggle("mdx-search-lock"),document.getElementsByClassName("outOfSearch")[0].removeAttribute("style")},300);p=!1}function _(){document.getElementById("SearchBar").style.display="none"}document.getElementsByClassName("mdui-typo-headline")[0].addEventListener("click",(function(){1==mdx_tapToTop&&r.to(0,500)})),window.addEventListener("DOMContentLoaded",()=>{var e=0,t=0;for(let s of document.querySelectorAll("#mdx_menu > li")){if(s.classList.contains("menu-item-has-children")){s.classList.add("mdui-collapse-item"),s.classList.remove("mdui-list-item"),s.innerHTML=`<div class="mdui-collapse-item-header mdui-list-item mdui-ripple"><div class="mdui-list-item-content"><a class="mdx-sub-menu-a" href="${s.getElementsByTagName("a")[0].getAttribute("href")}">${s.getElementsByTagName("a")[0].innerHTML}</a></div><i class="mdui-collapse-item-arrow mdui-icon material-icons">keyboard_arrow_down</i></div><ul class="mdui-collapse-item-body mdui-list mdui-list-dense">${s.getElementsByTagName("ul")[0].innerHTML}</ul>`,e=1;for(let e of s.getElementsByTagName("ul"))for(let s of e.getElementsByTagName("li"))s.classList.contains("current-menu-item")&&(t=1);t&&(s.classList.remove("current-menu-item","current_page_item"),s.classList.add("mdui-collapse-item-open")),t=0}if(e){let e=document.getElementById("mdx_menu");e.classList.add("mdui-collapse"),e.setAttribute("mdui-collapse","")}}new mdui.Collapse("#mdx_menu");var s="undefined"==typeof displayCookie||displayCookie,a="undefined"==typeof cookieFlagName?"mdx_cookie":cookieFlagName,o=document.getElementById("mdx-cookie-notice");s&&o&&!localStorage.getItem(a)&&(o.classList.add("mdx-cookie-notice-show"),o.getElementsByTagName("button")[0].addEventListener("click",(function(){localStorage.setItem(a,"true"),document.getElementById("mdx-cookie-notice").style.bottom="-400px",setTimeout(()=>{document.getElementById("mdx-cookie-notice").classList.remove("mdx-cookie-notice-show")},400)}),!1))})}});