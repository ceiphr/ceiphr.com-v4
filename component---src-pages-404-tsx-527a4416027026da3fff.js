(self.webpackChunkceiphr_com=self.webpackChunkceiphr_com||[]).push([[218],{9506:function(e,t,a){var n=a(7294);function r(e){return"function"!=typeof matchMedia?null:matchMedia(e)}function c(e){return e?{media:e.media,matches:e.matches}:null}function i(e){var t=n.useState((function(){return c(r(e))})),a=t[1],i=n.useCallback((function(e){return a(c(e))}),[a]);return n.useEffect((function(){var t=r(e);return i(t),t.addListener(i),function(){return t.removeListener(i)}}),[i,e]),t[0]}e.exports={useMedia:i,useMediaPredicate:function(e){var t=i(e);return t&&t.matches||!1}}},6276:function(e,t,a){"use strict";var n=a(7294),r=a(5444),c=a(117),i=a.n(c),l=a(2117),o=a.n(l);t.Z=function(e){var t=e.location,a=e.children,c="/"===t.pathname;return n.createElement("div",{className:"container max-w-2xl mx-auto p-6 tk-roboto","data-is-root-path":c},n.createElement("header",{className:"mb-6 no-print"},n.createElement("nav",{className:"flex justify-between"},n.createElement(r.Link,{to:"/"},n.createElement("p",{className:"sr-only"},"Homepage"),n.createElement(o(),{width:"32",height:"32",className:"fill-current text-gray-900 dark:text-gray-300"})),n.createElement("ul",{className:"flex flex-row text-gray-600 dark:text-gray-400"},n.createElement("li",{className:"pr-5"},n.createElement("a",{className:"inline-block mt-1 hover:underline",href:"https://ari.gg"},"About",n.createElement("span",{className:"inline-block transform translate-y-1"},n.createElement(i(),{className:"fill-current mb-0.5 pt-0.5",width:"21",height:"16"})))),n.createElement("li",{className:"pr-5"},n.createElement("a",{className:"inline-block mt-1 hover:underline",href:"https://www.paypal.me/ceiphr"},"Donate")),n.createElement("li",null,n.createElement("a",{className:"inline-block mt-1 hover:underline",href:"https://github.com/ceiphr"},"GitHub"))))),n.createElement("main",null,a),n.createElement("footer",{className:"mt-6 dark:border-gray-700 text-gray-600 dark:text-gray-400 no-print"},n.createElement("p",null,"© 2021 Ari Birnbaum."," ",n.createElement("span",{className:"float-right"},n.createElement("a",{className:"hover:underline",href:"https://www.iubenda.com/privacy-policy/18781590/legal"},"Privacy")))))}},8301:function(e,t,a){"use strict";var n=a(7294),r=a(5186),c=a(5444),i=a(9506);t.Z=function(e){var t=e.description,a=void 0===t?"":t,l=e.lang,o=void 0===l?"en":l,s=e.meta,m=void 0===s?[]:s,u=e.title,p=(0,c.useStaticQuery)("3647344670").site,h=a||p.siteMetadata.description,d=p.siteMetadata.title,f=(0,i.useMediaPredicate)("(prefers-color-scheme: dark)")?"/favicon-white.png":"/favicon-black.png";return n.createElement(r.q,{htmlAttributes:{lang:o},title:u,titleTemplate:u!==(p.siteMetadata.author.name||"")?"%s | "+d:"%s",meta:[{name:"description",content:h},{property:"og:title",content:u},{property:"og:description",content:h},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:creator",content:p.siteMetadata.social.twitter||""},{name:"twitter:title",content:u},{name:"twitter:description",content:h}].concat(m),link:[{rel:"icon",sizes:"32x32",type:"image/png",href:f}]})}},5947:function(e,t,a){"use strict";a.r(t);var n=a(7294),r=a(6276),c=a(8301);t.default=function(e){var t=e.location;return n.createElement(r.Z,{location:t},n.createElement(c.Z,{title:"404"}),n.createElement("div",{style:{height:"calc(100vh - 114px - 38px)"}},n.createElement("div",{className:"relative text-center top-1/3 transform -translate-y-1/2"},n.createElement("h1",{className:"text-gray-900 dark:text-gray-300 font-bold text-6xl tablet:text-8xl uppercase"},"404"),n.createElement("p",{className:"text-gray-600 dark:text-gray-400"},"Nothing here. Move along."))))}},117:function(e,t,a){var n=a(7294);function r(e){return n.createElement("svg",e,n.createElement("path",{d:"M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"}))}r.defaultProps={fill:"#000000",viewBox:"0 0 24 24",width:"24px",height:"24px"},e.exports=r,r.default=r},2117:function(e,t,a){var n=a(7294);function r(e){return n.createElement("svg",e,n.createElement("g",{id:"ARI Symbol"},n.createElement("path",{d:"M0,128A128,128,0,1,0,128,0,128,128,0,0,0,0,128Zm166,37.26a12.8,12.8,0,0,1,12.8,12.8v1.14A12.8,12.8,0,0,1,166,192h-1.14a12.8,12.8,0,0,1-12.8-12.8v-1.14a12.8,12.8,0,0,1,12.8-12.8Zm-37.43,0a12.8,12.8,0,0,1,12.8,12.8v1.14a12.8,12.8,0,0,1-12.8,12.8h-1.14a12.8,12.8,0,0,1-12.8-12.8v-1.14a12.8,12.8,0,0,1,12.8-12.8Zm-37.43,0a12.8,12.8,0,0,1,12.8,12.8v1.14A12.8,12.8,0,0,1,91.14,192H90a12.8,12.8,0,0,1-12.8-12.8v-1.14A12.8,12.8,0,0,1,90,165.26ZM166,128a12.8,12.8,0,0,1,12.8,12.8v1.14a12.8,12.8,0,0,1-12.8,12.8h-1.14a12.8,12.8,0,0,1-12.8-12.8V140.8a12.8,12.8,0,0,1,12.8-12.8Zm-37.43-26.74a12.8,12.8,0,0,1,12.8,12.8v27.88a12.8,12.8,0,0,1-12.8,12.8h-1.14a12.8,12.8,0,0,1-12.8-12.8V114.06a12.8,12.8,0,0,1,12.8-12.8Zm-37.43,0a12.8,12.8,0,0,1,12.8,12.8v27.88a12.8,12.8,0,0,1-12.8,12.8H90a12.8,12.8,0,0,1-12.8-12.8V114.06A12.8,12.8,0,0,1,90,101.26ZM128.57,64a12.8,12.8,0,0,1,12.8,12.8v1.14a12.8,12.8,0,0,1-12.8,12.8h-1.14a12.8,12.8,0,0,1-12.8-12.8V76.8A12.8,12.8,0,0,1,127.43,64Z"})))}r.defaultProps={viewBox:"0 0 256 256"},e.exports=r,r.default=r}}]);
//# sourceMappingURL=component---src-pages-404-tsx-527a4416027026da3fff.js.map