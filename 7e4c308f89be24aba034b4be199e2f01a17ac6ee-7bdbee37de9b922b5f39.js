/*! For license information please see 7e4c308f89be24aba034b4be199e2f01a17ac6ee-7bdbee37de9b922b5f39.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"/RsY":function(e,i,n){"use strict";var r=n("vOnD"),o=n("y83D"),t=r.b.p.withConfig({displayName:"SubTitle",componentId:"c3aon1-0"})(["",";line-height:49px;word-break:keep-all;"],Object(o.a)("heading1"));i.a=t},"/cfg":function(e,i,n){"use strict";var r=n("vOnD").b.div.withConfig({displayName:"Column",componentId:"sc-1cxe0ob-0"})(["display:flex;flex-direction:column;margin:auto 0;"]);i.a=r},"1bFN":function(e,i){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAARBAMAAAAmgTH3AAAAFVBMVEUAAAD///////////////////////9Iz20EAAAABnRSTlMAIF+AoBBujIBsAAAAK0lEQVQI12PAD5gUoAzmJJiQGapQoKCgoBtISC0NCBLhImjazOACCJPxAgDsvgZ4rRPq3AAAAABJRU5ErkJggg=="},TBFr:function(e,i,n){"use strict";var r=n("vOnD").b.div.withConfig({displayName:"Container",componentId:"s2endx-0"})(["display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;width:100%;flex-wrap:wrap;padding:80px calc((100% - 320px) / 2);@media only screen and (min-width:768px){flex-direction:row;padding:80px calc((100% - 704px) / 2);}@media only screen and (min-width:1040px){flex-direction:row;padding:120px calc((100% - 1040px) / 2);}"]);i.a=r},ZG78:function(e,i,n){"use strict";n.d(i,"a",(function(){return A}));var r=n("q1tI"),o=n.n(r),t=n("vOnD"),s=n("WlC/"),a=n("rid2"),l=n("kH6G"),d=n("y83D"),c=n("n57c"),u=n("f5eI"),w=n.n(u),m=t.b.div.withConfig({displayName:"Footer__Container",componentId:"yhsvql-0"})(["display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;padding:60px calc((100% - 320px) / 2);background-color:",";width:100%;@media only screen and (min-width:1040px){flex-direction:row;padding:60px calc((100% - 1040px) / 2);}"],l.a.black),p=t.b.div.withConfig({displayName:"Footer__ContactInfoContainer",componentId:"yhsvql-1"})(["",";margin:0 0 48px 0;height:169px;"],Object(d.a)("body",1.4)),g=t.b.img.withConfig({displayName:"Footer__Logo",componentId:"yhsvql-2"})(["width:80px;height:16px;"]),b=t.b.p.withConfig({displayName:"Footer__ContactInfo",componentId:"yhsvql-3"})(["",";color:",";margin:32px 0;"],Object(d.a)("body",1.4,400),l.a.gray4),f=t.b.div.withConfig({displayName:"Footer__ButtonsWrapper",componentId:"yhsvql-4"})(["display:flex;flex-direction:column;justify-content:space-between;@media only screen and (max-width:1040px){margin-top:40px;}"]),h=t.b.div.withConfig({displayName:"Footer__SwitchLanguageButtonWrapper",componentId:"yhsvql-5"})(["display:flex;gap:8px;justify-content:flex-start;margin-top:0;@media only screen and (min-width:1040px){justify-content:flex-end;margin-top:79px;}"]),v=t.b.button.withConfig({displayName:"Footer__SwitchLanguageButton",componentId:"yhsvql-6"})(["padding:8px 16px;width:52px;height:37px;background-color:",";border-radius:8px;border:none;outline:0;cursor:pointer;",";"],l.a.gray5,Object(d.a)("body",1.4,700));function A(){var e=Object(s.useI18next)(),i=e.language,n=e.changeLanguage,t=Object(r.useState)(i),d=t[0],u=t[1];Object(r.useEffect)((function(){n(d)}),[d]);var A=function(e){u(e)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.Helmet,{htmlAttributes:{lang:d}}),o.a.createElement(m,null,o.a.createElement(p,null,o.a.createElement(g,{src:w.a}),o.a.createElement(b,null,"대표자 : 김성윤 | 사업자등록번호 : 114-86-85559 ",o.a.createElement("br",null),"서울특별시 중구 남대문로 9길 24 11층 ",o.a.createElement("br",null),"11F, 24 Namdaemun-ro 9-gil, Jung-gu, Seoul, Korea ",o.a.createElement("br",null),"contact@iportfolio.co.kr | +82-505-333-8288"),o.a.createElement(b,null,"© iPortfolio Inc. All rights reserved.")),o.a.createElement(f,null,o.a.createElement(c.a,{icon:"download",style:{marginBottom:"40px"}},"회사소개자료"),o.a.createElement(h,null,o.a.createElement(v,{onClick:function(){return A("ko")},style:{backgroundColor:""+("ko"===i?"white":l.a.gray5),color:""+("ko"===i?l.a.black:l.a.gray4)}},"KO"),o.a.createElement(v,{onClick:function(){return A("en")},style:{backgroundColor:""+("en"===i?"white":l.a.gray5),color:""+("en"===i?l.a.black:l.a.gray4)}},"EN")))))}},b6Qr:function(e,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r,o=n("q1tI"),t=(r=o)&&"object"==typeof r&&"default"in r?r.default:r,s=new(n("peHP")),a=s.getBrowser(),l=(s.getCPU(),s.getDevice()),d=s.getEngine(),c=s.getOS(),u=s.getUA(),w=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return e||i},m=function(){return!("undefined"==typeof window||!window.navigator&&!navigator)&&(window.navigator||navigator)},p=function(e){var i=m();return i&&i.platform&&(-1!==i.platform.indexOf(e)||"MacIntel"===i.platform&&i.maxTouchPoints>1&&!window.MSStream)};function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,i){for(var n=0;n<i.length;n++){var r=i[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function h(){return(h=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);i&&(r=r.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,r)}return n}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,i){return(y=Object.setPrototypeOf||function(e,i){return e.__proto__=i,e})(e,i)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var E="mobile",C="tablet",k="smarttv",O="console",N="wearable",S=void 0,T="Chrome",B="Firefox",I="Opera",V="Yandex",F="Safari",M="Internet Explorer",P="Edge",j="Chromium",L="IE",_="Mobile Safari",D="MIUI Browser",R="iOS",z="Android",W="Windows Phone",G="Windows",q="Mac OS",U={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1},Q=function(e,i,n,r){return function(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?v(n,!0).forEach((function(i){f(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}({},e,{vendor:w(i.vendor),model:w(i.model),os:w(n.name),osVersion:w(n.version),ua:w(r)})},H=function(e){switch(e){case E:return{isMobile:!0};case C:return{isTablet:!0};case k:return{isSmartTV:!0};case O:return{isConsole:!0};case N:return{isWearable:!0};case S:return{isBrowser:!0};default:return U}}(l.type);var K,Y=function(){return"string"==typeof u&&-1!==u.indexOf("Edg/")},J=function(){return a.name===P},X=function(){return p("iPad")},Z=l.type===k,$=l.type===O,ee=l.type===N,ie=a.name===_||X(),ne=a.name===j,re=function(){switch(l.type){case E:case C:return!0;default:return!1}}()||X(),oe=l.type===E,te=l.type===C||X(),se=l.type===S,ae=c.name===z,le=c.name===W,de=c.name===R||X(),ce=a.name===T,ue=a.name===B,we=a.name===F||a.name===_,me=a.name===I,pe=a.name===M||a.name===L,ge=w(c.version),be=w(c.name),fe=w(a.version),he=w(a.major),ve=w(a.name),Ae=w(l.vendor),ye=w(l.model),xe=w(d.name),Ee=w(d.version),Ce=w(u),ke=J()||Y(),Oe=a.name===V,Ne=w(l.type,"browser"),Se=(K=m())&&(/iPad|iPhone|iPod/.test(K.platform)||"MacIntel"===K.platform&&K.maxTouchPoints>1)&&!window.MSStream,Te=X(),Be=p("iPhone"),Ie=p("iPod"),Ve=function(){var e=m(),i=e&&e.userAgent.toLowerCase();return"string"==typeof i&&/electron/.test(i)}(),Fe=Y(),Me=J()&&!Y(),Pe=c.name===G,je=c.name===q,Le=a.name===D;i.AndroidView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,s=e.style;return ae?i?t.createElement(o.Fragment,null,n):t.createElement("div",{className:r,style:s},n):null},i.BrowserView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,s=e.style;return se?i?t.createElement(o.Fragment,null,n):t.createElement("div",{className:r,style:s},n):null},i.ConsoleView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,s=e.style;return $?i?t.createElement(o.Fragment,null,n):t.createElement("div",{className:r,style:s},n):null},i.CustomView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,s=e.style;return e.condition?i?t.createElement(o.Fragment,null,n):t.createElement("div",{className:r,style:s},n):null},i.IEView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,s=e.style;return pe?i?t.createElement(o.Fragment,null,n):t.createElement("div",{className:r,style:s},n):null},i.IOSView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,s=e.style;return de?i?t.createElement(o.Fragment,null,n):t.createElement("div",{className:r,style:s},n):null},i.MobileOnlyView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,s=e.style;return oe?i?t.createElement(o.Fragment,null,n):t.createElement("div",{className:r,style:s},n):null},i.MobileView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,s=e.style;return re?i?t.createElement(o.Fragment,null,n):t.createElement("div",{className:r,style:s},n):null},i.SmartTVView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,s=e.style;return Z?i?t.createElement(o.Fragment,null,n):t.createElement("div",{className:r,style:s},n):null},i.TabletView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,s=e.style;return te?i?t.createElement(o.Fragment,null,n):t.createElement("div",{className:r,style:s},n):null},i.WearableView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,s=e.style;return ee?i?t.createElement(o.Fragment,null,n):t.createElement("div",{className:r,style:s},n):null},i.WinPhoneView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,s=e.style;return le?i?t.createElement(o.Fragment,null,n):t.createElement("div",{className:r,style:s},n):null},i.browserName=ve,i.browserVersion=he,i.deviceDetect=function(){var e=H.isBrowser,i=H.isMobile,n=H.isTablet,r=H.isSmartTV,o=H.isConsole,t=H.isWearable;return e?function(e,i,n,r,o){return{isBrowser:e,browserMajorVersion:w(i.major),browserFullVersion:w(i.version),browserName:w(i.name),engineName:w(n.name),engineVersion:w(n.version),osName:w(r.name),osVersion:w(r.version),userAgent:w(o)}}(e,a,d,c,u):r?function(e,i,n,r){return{isSmartTV:e,engineName:w(i.name),engineVersion:w(i.version),osName:w(n.name),osVersion:w(n.version),userAgent:w(r)}}(r,d,c,u):o?function(e,i,n,r){return{isConsole:e,engineName:w(i.name),engineVersion:w(i.version),osName:w(n.name),osVersion:w(n.version),userAgent:w(r)}}(o,d,c,u):i||n?Q(H,l,c,u):t?function(e,i,n,r){return{isWearable:e,engineName:w(i.name),engineVersion:w(i.version),osName:w(n.name),osVersion:w(n.version),userAgent:w(r)}}(t,d,c,u):void 0},i.deviceType=Ne,i.engineName=xe,i.engineVersion=Ee,i.fullBrowserVersion=fe,i.getUA=Ce,i.isAndroid=ae,i.isBrowser=se,i.isChrome=ce,i.isChromium=ne,i.isConsole=$,i.isEdge=ke,i.isEdgeChromium=Fe,i.isElectron=Ve,i.isFirefox=ue,i.isIE=pe,i.isIOS=de,i.isIOS13=Se,i.isIPad13=Te,i.isIPhone13=Be,i.isIPod13=Ie,i.isLegacyEdge=Me,i.isMIUI=Le,i.isMacOs=je,i.isMobile=re,i.isMobileOnly=oe,i.isMobileSafari=ie,i.isOpera=me,i.isSafari=we,i.isSmartTV=Z,i.isTablet=te,i.isWearable=ee,i.isWinPhone=le,i.isWindows=Pe,i.isYandex=Oe,i.mobileModel=ye,i.mobileVendor=Ae,i.osName=be,i.osVersion=ge,i.withOrientationChange=function(e){return function(i){function n(e){var i,r,o;return function(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(this,n),r=this,(i=!(o=A(n).call(this,e))||"object"!=typeof o&&"function"!=typeof o?x(r):o).isEventListenerAdded=!1,i.handleOrientationChange=i.handleOrientationChange.bind(x(i)),i.onOrientationChange=i.onOrientationChange.bind(x(i)),i.onPageLoad=i.onPageLoad.bind(x(i)),i.state={isLandscape:!1,isPortrait:!1},i}var r,o,s;return function(e,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(i&&i.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),i&&y(e,i)}(n,i),r=n,(o=[{key:"handleOrientationChange",value:function(){this.isEventListenerAdded||(this.isEventListenerAdded=!0);var e=window.innerWidth>window.innerHeight?90:0;this.setState({isPortrait:0===e,isLandscape:90===e})}},{key:"onOrientationChange",value:function(){this.handleOrientationChange()}},{key:"onPageLoad",value:function(){this.handleOrientationChange()}},{key:"componentDidMount",value:function(){void 0!==("undefined"==typeof window?"undefined":g(window))&&re&&(this.isEventListenerAdded?window.removeEventListener("load",this.onPageLoad,!1):(this.handleOrientationChange(),window.addEventListener("load",this.onPageLoad,!1)),window.addEventListener("resize",this.onOrientationChange,!1))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onOrientationChange,!1)}},{key:"render",value:function(){return t.createElement(e,h({},this.props,{isLandscape:this.state.isLandscape,isPortrait:this.state.isPortrait}))}}])&&b(r.prototype,o),s&&b(r,s),n}(t.Component)}},f5eI:function(e,i){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAQCAMAAAC2lwjzAAAAS1BMVEUAAACwtb2ttb2rs7uttb2ttb2qs7urs7ustLyutr6ttr2mr7+ttb2ttb2stb2stbuttr2ttb2stbystL2ttLuut7+fr6+ut7+ttb0KkvOEAAAAGHRSTlMAH9+Av+9gQKC/cBCfYM8wr5BQv3B/EF9i+ZVvAAABiUlEQVQ4y4WT27aDIAxEIRgVQRCtPfP/X3oiwvLWrvLASMSdwET11kqGiOivMVpwvKzn5yZCp5TBNmz8wQOnyZ0CBq1Sa4g3oGTp4QfTA8MX1F59QNYbkGCue4UvwE7myOw+8rjJgqA+AOf0uKwKFPl8aGSgFnkCHyNZXYBF9MSAzVmt0RZ6sGBrzRA2idka0FqB1ZmVgDDKQ4MD2CAqTZzaHrwF4IkXN3qQ9+M4bRJVwjIMBF+ApUxbohfgH6i4rjqQEyCTux95xLTnHs7ANUc1oavAyRgL0kLyav9AuJDpAiynyBnDGUh7A7SwFchgMlLOCy+1v0oC4qcpNcZwBzAWvxz4OHI1ritAqRT0ALoaI+gD2NUGAO7AF9qi5gD+rFAjfKuwg806YT4Bw/kOuw93WH4JcewGrC4PwqrAur26HGTxJoxnoIEvLj+AkeHbBI4nYAPyXQGqBNo6rr/0oQsSXRlGWCTARBUoaXoGTzpX25TQAp4l/5RXYwCW3AsDzWWSSw/gRZ7+AccwG3gWx9e0AAAAAElFTkSuQmCC"},lvxi:function(e,i){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAARBAMAAAAmgTH3AAAAIVBMVEUAAAD////////////////////////////////////////PIev5AAAACnRSTlMAgL8w3+8gYFDPoilh4QAAAE9JREFUCNdjAAL2BgYIYFIgxGgGMcyBDFcDJgXmECAjxY1JIcUNyGAOSVJzTQApMvV0CQarZo5aagDRbhoMNYcDLIAAhYJAIA5krAIDhAgAMcYOb3v3pzsAAAAASUVORK5CYII="},mSgL:function(e,i,n){"use strict";var r=n("vOnD"),o=n("y83D"),t=n("kH6G"),s=r.b.h3.withConfig({displayName:"Label",componentId:"sc-1y8w5ey-0"})(["",";color:",';margin:0 0 8px 0;font-family:"Roboto",sans-serif;'],Object(o.a)("heading2"),t.a.primary);i.a=s},n57c:function(e,i,n){"use strict";var r=n("q1tI"),o=n.n(r),t=n("vOnD"),s=n("1bFN"),a=n.n(s),l=n("lvxi"),d=n.n(l),c=n("kH6G"),u=t.b.div.withConfig({displayName:"Button__Wrapper",componentId:"sc-123mzee-0"})(["position:relative;display:flex;flex-direction:row;flex-wrap:nowrap;width:fit-content;height:53px;white-space:nowrap;"]),w=t.b.button.withConfig({displayName:"Button__ButtonComponent",componentId:"sc-123mzee-1"})(["background-color:",";padding:16px 80px 16px 24px;width:100%;height:100%;color:white;border:none;border-radius:8px;text-align:left;cursor:pointer;:hover{background-color:#f16a4f;}:focus{background-color:#d7482b;}"],c.a.primary),m=t.b.img.withConfig({displayName:"Button__Icon",componentId:"sc-123mzee-2"})(["position:absolute;width:16px;height:16px;top:17px;right:26px;"]);i.a=function(e){var i=e.icon,n=void 0===i?"arrow":i,r=e.onClick,t=e.children,s=e.style;return o.a.createElement(u,{style:s},o.a.createElement(w,{onClick:r},t),o.a.createElement(m,{src:"arrow"===n?a.a:d.a}))}},peHP:function(e,i,n){var r;!function(o,t){"use strict";var s="model",a="name",l="type",d="vendor",c="version",u="mobile",w="tablet",m="smarttv",p={extend:function(e,i){var n={};for(var r in e)i[r]&&i[r].length%2==0?n[r]=i[r].concat(e[r]):n[r]=e[r];return n},has:function(e,i){return"string"==typeof e&&-1!==i.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()},major:function(e){return"string"==typeof e?e.replace(/[^\d\.]/g,"").split(".")[0]:void 0},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},g={rgx:function(e,i){for(var n,r,o,t,s,a,l=0;l<i.length&&!s;){var d=i[l],c=i[l+1];for(n=r=0;n<d.length&&!s;)if(s=d[n++].exec(e))for(o=0;o<c.length;o++)a=s[++r],"object"==typeof(t=c[o])&&t.length>0?2==t.length?"function"==typeof t[1]?this[t[0]]=t[1].call(this,a):this[t[0]]=t[1]:3==t.length?"function"!=typeof t[1]||t[1].exec&&t[1].test?this[t[0]]=a?a.replace(t[1],t[2]):void 0:this[t[0]]=a?t[1].call(this,a,t[2]):void 0:4==t.length&&(this[t[0]]=a?t[3].call(this,a.replace(t[1],t[2])):void 0):this[t]=a||void 0;l+=2}},str:function(e,i){for(var n in i)if("object"==typeof i[n]&&i[n].length>0){for(var r=0;r<i[n].length;r++)if(p.has(i[n][r],e))return"?"===n?void 0:n}else if(p.has(i[n],e))return"?"===n?void 0:n;return e}},b={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},f={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[a,c],[/(opios)[\/\s]+([\w\.]+)/i],[[a,"Opera Mini"],c],[/\s(opr)\/([\w\.]+)/i],[[a,"Opera"],c],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],[a,c],[/(konqueror)\/([\w\.]+)/i],[[a,"Konqueror"],c],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[a,"IE"],c],[/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],[[a,"Edge"],c],[/(yabrowser)\/([\w\.]+)/i],[[a,"Yandex"],c],[/(Avast)\/([\w\.]+)/i],[[a,"Avast Secure Browser"],c],[/(AVG)\/([\w\.]+)/i],[[a,"AVG Secure Browser"],c],[/(puffin)\/([\w\.]+)/i],[[a,"Puffin"],c],[/(focus)\/([\w\.]+)/i],[[a,"Firefox Focus"],c],[/(opt)\/([\w\.]+)/i],[[a,"Opera Touch"],c],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[a,"UCBrowser"],c],[/(comodo_dragon)\/([\w\.]+)/i],[[a,/_/g," "],c],[/(windowswechat qbcore)\/([\w\.]+)/i],[[a,"WeChat(Win) Desktop"],c],[/(micromessenger)\/([\w\.]+)/i],[[a,"WeChat"],c],[/(brave)\/([\w\.]+)/i],[[a,"Brave"],c],[/(qqbrowserlite)\/([\w\.]+)/i],[a,c],[/(QQ)\/([\d\.]+)/i],[a,c],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[a,c],[/(baiduboxapp)[\/\s]?([\w\.]+)/i],[a,c],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[a,c],[/(MetaSr)[\/\s]?([\w\.]+)/i],[a],[/(LBBROWSER)/i],[a],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[c,[a,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[c,[a,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/android.+(line)\/([\w\.]+)\/iab/i],[a,c],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[c,[a,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[a,/(.+)/,"$1 WebView"],c],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[a,/(.+(?:g|us))(.+)/,"$1 $2"],c],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[c,[a,"Android Browser"]],[/(sailfishbrowser)\/([\w\.]+)/i],[[a,"Sailfish Browser"],c],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[a,c],[/(dolfin)\/([\w\.]+)/i],[[a,"Dolphin"],c],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[a,"360 Browser"]],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[a,"Chrome"],c],[/(coast)\/([\w\.]+)/i],[[a,"Opera Coast"],c],[/fxios\/([\w\.-]+)/i],[c,[a,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[c,[a,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[c,a],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[a,"GSA"],c],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[a,[c,g.str,b.browser.oldsafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[a,c],[/(navigator|netscape)\/([\w\.-]+)/i],[[a,"Netscape"],c],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[a,c]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",p.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[["architecture","ia32"]],[/windows\s(ce|mobile);\sppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[["architecture",/ower/,"",p.lowerize]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[["architecture",p.lowerize]]],device:[[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],[s,d,[l,w]],[/applecoremedia\/[\w\.]+ \((ipad)/],[s,[d,"Apple"],[l,w]],[/(apple\s{0,1}tv)/i],[[s,"Apple TV"],[d,"Apple"],[l,m]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[d,s,[l,w]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[s,[d,"Amazon"],[l,w]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[s,g.str,b.device.amazon.model],[d,"Amazon"],[l,u]],[/android.+aft([bms])\sbuild/i],[s,[d,"Amazon"],[l,m]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[s,d,[l,u]],[/\((ip[honed|\s\w*]+);/i],[s,[d,"Apple"],[l,u]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[d,s,[l,u]],[/\(bb10;\s(\w+)/i],[s,[d,"BlackBerry"],[l,u]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],[s,[d,"Asus"],[l,w]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[d,"Sony"],[s,"Xperia Tablet"],[l,w]],[/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[s,[d,"Sony"],[l,u]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[d,s,[l,"console"]],[/android.+;\s(shield)\sbuild/i],[s,[d,"Nvidia"],[l,"console"]],[/(playstation\s[34portablevi]+)/i],[s,[d,"Sony"],[l,"console"]],[/(sprint\s(\w+))/i],[[d,g.str,b.device.sprint.vendor],[s,g.str,b.device.sprint.model],[l,u]],[/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[d,[s,/_/g," "],[l,u]],[/(nexus\s9)/i],[s,[d,"HTC"],[l,w]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p|vog-l29|ane-lx1|eml-l29|ele-l29)/i],[s,[d,"Huawei"],[l,u]],[/android.+(bah2?-a?[lw]\d{2})/i],[s,[d,"Huawei"],[l,w]],[/(microsoft);\s(lumia[\s\w]+)/i],[d,s,[l,u]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[s,[d,"Microsoft"],[l,"console"]],[/(kin\.[onetw]{3})/i],[[s,/\./g," "],[d,"Microsoft"],[l,u]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[s,[d,"Motorola"],[l,u]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[s,[d,"Motorola"],[l,w]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[d,p.trim],[s,p.trim],[l,m]],[/hbbtv.+maple;(\d+)/i],[[s,/^/,"SmartTV"],[d,"Samsung"],[l,m]],[/\(dtv[\);].+(aquos)/i],[s,[d,"Sharp"],[l,m]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[d,"Samsung"],s,[l,w]],[/smart-tv.+(samsung)/i],[d,[l,m],s],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[d,"Samsung"],s,[l,u]],[/sie-(\w*)/i],[s,[d,"Siemens"],[l,u]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[d,"Nokia"],s,[l,u]],[/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[s,[d,"Acer"],[l,w]],[/android.+([vl]k\-?\d{3})\s+build/i],[s,[d,"LG"],[l,w]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[d,"LG"],s,[l,w]],[/(lg) netcast\.tv/i],[d,s,[l,m]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[s,[d,"LG"],[l,u]],[/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],[d,s,[l,w]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[s,[d,"Lenovo"],[l,w]],[/(lenovo)[_\s-]?([\w-]+)/i],[d,s,[l,u]],[/linux;.+((jolla));/i],[d,s,[l,u]],[/((pebble))app\/[\d\.]+\s/i],[d,s,[l,"wearable"]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[d,s,[l,u]],[/crkey/i],[[s,"Chromecast"],[d,"Google"],[l,m]],[/android.+;\s(glass)\s\d/i],[s,[d,"Google"],[l,"wearable"]],[/android.+;\s(pixel c)[\s)]/i],[s,[d,"Google"],[l,w]],[/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],[s,[d,"Google"],[l,u]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]?[\w\s]+))\s+build/i],[[s,/_/g," "],[d,"Xiaomi"],[l,u]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]?[\w\s]+))\s+build/i],[[s,/_/g," "],[d,"Xiaomi"],[l,w]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[s,[d,"Meizu"],[l,u]],[/(mz)-([\w-]{2,})/i],[[d,"Meizu"],s,[l,u]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})[\s)]/i],[s,[d,"OnePlus"],[l,u]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[s,[d,"RCA"],[l,w]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[s,[d,"Dell"],[l,w]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[s,[d,"Verizon"],[l,w]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[d,"Barnes & Noble"],s,[l,w]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[s,[d,"NuVision"],[l,w]],[/android.+;\s(k88)\sbuild/i],[s,[d,"ZTE"],[l,w]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[s,[d,"Swiss"],[l,u]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[s,[d,"Swiss"],[l,w]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[s,[d,"Zeki"],[l,w]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[d,"Dragon Touch"],s,[l,w]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[s,[d,"Insignia"],[l,w]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[s,[d,"NextBook"],[l,w]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[d,"Voice"],s,[l,u]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[d,"LvTel"],s,[l,u]],[/android.+;\s(PH-1)\s/i],[s,[d,"Essential"],[l,u]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[s,[d,"Envizen"],[l,w]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[d,s,[l,w]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[s,[d,"MachSpeed"],[l,w]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[d,s,[l,w]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[s,[d,"Rotor"],[l,w]],[/android.+(KS(.+))\s+build/i],[s,[d,"Amazon"],[l,w]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[d,s,[l,w]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[l,p.lowerize],d,s],[/[\s\/\(](smart-?tv)[;\)]/i],[[l,m]],[/(android[\w\.\s\-]{0,9});.+build/i],[s,[d,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[c,[a,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[c,[a,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[a,c],[/rv\:([\w\.]{1,9}).+(gecko)/i],[c,a]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[a,c],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[a,[c,g.str,b.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[a,"Windows"],[c,g.str,b.os.windows.version]],[/\((bb)(10);/i],[[a,"BlackBerry"],c],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],[a,c],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[a,"Symbian"],c],[/\((series40);/i],[a],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[a,"Firefox OS"],c],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[a,c],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[a,"Chromium OS"],c],[/(sunos)\s?([\w\.\d]*)/i],[[a,"Solaris"],c],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[a,c],[/(haiku)\s(\w+)/i],[a,c],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[c,/_/g,"."],[a,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[a,"Mac OS"],[c,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[a,c]]},h=function e(i,n){if("object"==typeof i&&(n=i,i=void 0),!(this instanceof e))return new e(i,n).getResult();var r=i||(o&&o.navigator&&o.navigator.userAgent?o.navigator.userAgent:""),t=n?p.extend(f,n):f;return this.getBrowser=function(){var e={name:void 0,version:void 0};return g.rgx.call(e,r,t.browser),e.major=p.major(e.version),e},this.getCPU=function(){var e={architecture:void 0};return g.rgx.call(e,r,t.cpu),e},this.getDevice=function(){var e={vendor:void 0,model:void 0,type:void 0};return g.rgx.call(e,r,t.device),e},this.getEngine=function(){var e={name:void 0,version:void 0};return g.rgx.call(e,r,t.engine),e},this.getOS=function(){var e={name:void 0,version:void 0};return g.rgx.call(e,r,t.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return r},this.setUA=function(e){return r=e,this},this};h.VERSION="0.7.22",h.BROWSER={NAME:a,MAJOR:"major",VERSION:c},h.CPU={ARCHITECTURE:"architecture"},h.DEVICE={MODEL:s,VENDOR:d,TYPE:l,CONSOLE:"console",MOBILE:u,SMARTTV:m,TABLET:w,WEARABLE:"wearable",EMBEDDED:"embedded"},h.ENGINE={NAME:a,VERSION:c},h.OS={NAME:a,VERSION:c},void 0!==i?(void 0!==e&&e.exports&&(i=e.exports=h),i.UAParser=h):void 0===(r=function(){return h}.call(i,n,i,e))||(e.exports=r);var v=o&&(o.jQuery||o.Zepto);if(v&&!v.ua){var A=new h;v.ua=A.getResult(),v.ua.get=function(){return A.getUA()},v.ua.set=function(e){A.setUA(e);var i=A.getResult();for(var n in i)v.ua[n]=i[n]}}}("object"==typeof window?window:this)},"w+5K":function(e,i,n){"use strict";var r=n("vOnD"),o=n("y83D"),t=n("kH6G"),s=r.b.p.withConfig({displayName:"Description",componentId:"sc-1b21ret-0"})(["",";color:",";margin:24px 0 40px 0;width:100%;white-space:pre-wrap;word-break:keep-all;"],Object(o.a)("body",1.4),t.a.black);i.a=s}}]);
//# sourceMappingURL=7e4c308f89be24aba034b4be199e2f01a17ac6ee-7bdbee37de9b922b5f39.js.map