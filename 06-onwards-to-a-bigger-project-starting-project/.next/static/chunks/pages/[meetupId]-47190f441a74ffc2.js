(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[549],{8267:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[meetupId]",function(){return n(8899)}])},3843:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(5893),o=n(4568),i=n.n(o),a=n(1664);var u=function(){return(0,r.jsxs)("header",{className:i().header,children:[(0,r.jsx)("div",{className:i().logo,children:"React Meetups"}),(0,r.jsx)("nav",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(a.default,{href:"/",children:"All Meetups"})}),(0,r.jsx)("li",{children:(0,r.jsx)(a.default,{href:"/new-meetup",children:"Add New Meetup"})})]})})]})},l=n(8239),c=n.n(l);var s=function(e){return(0,r.jsxs)("div",{children:[(0,r.jsx)(u,{}),(0,r.jsx)("main",{className:c().main,children:e.children})]})}},8418:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(l){u=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var i,a=(i=n(7294))&&i.__esModule?i:{default:i},u=n(6273),l=n(387),c=n(7190);var s={};function f(e,t,n,r){if(e&&u.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=l.useRouter(),i=a.default.useMemo((function(){var t=o(u.resolveHref(r,e.href,!0),2),n=t[0],i=t[1];return{href:n,as:e.as?u.resolveHref(r,e.as):i||n}}),[r,e.href,e.as]),d=i.href,p=i.as,h=e.children,v=e.replace,m=e.shallow,y=e.scroll,g=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var _=(t=a.default.Children.only(h))&&"object"===typeof t&&t.ref,b=o(c.useIntersection({rootMargin:"200px"}),2),j=b[0],x=b[1],w=a.default.useCallback((function(e){j(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,j]);a.default.useEffect((function(){var e=x&&n&&u.isLocalURL(d),t="undefined"!==typeof g?g:r&&r.locale,o=s[d+"%"+p+(t?"%"+t:"")];e&&!o&&f(r,d,p,{locale:t})}),[p,d,x,g,n,r]);var M={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,a,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:i,locale:l,scroll:a}))}(e,r,d,p,v,m,y,g)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u.isLocalURL(d)&&f(r,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof g?g:r&&r.locale,N=r&&r.isLocaleDomain&&u.getDomainLocale(p,E,r&&r.locales,r&&r.domainLocales);M.href=N||u.addBasePath(u.addLocale(p,E,r&&r.defaultLocale))}return a.default.cloneElement(t,M)};t.default=d},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(l){u=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!u,s=i.useRef(),f=o(i.useState(!1),2),d=f[0],p=f[1],h=o(i.useState(t?t.current:null),2),v=h[0],m=h[1],y=i.useCallback((function(e){s.current&&(s.current(),s.current=void 0),r||d||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=l.get(r):(t=l.get(n),c.push(n));if(t)return t;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(n,t={id:n,observer:i,elements:o}),t}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){if(a.delete(e),i.unobserve(e),0===a.size){i.disconnect(),l.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:v,rootMargin:n}))}),[r,v,n,d]);return i.useEffect((function(){if(!u&&!d){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),i.useEffect((function(){t&&m(t.current)}),[t]),[y,d]};var i=n(7294),a=n(9311),u="undefined"!==typeof IntersectionObserver;var l=new Map,c=[]},8899:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return s},default:function(){return f}});var r=n(5893),o=n(7294),i=n(2913),a=n.n(i),u=n(9008),l=function(e){return(0,r.jsxs)(o.Fragment,{children:[(0,r.jsxs)(u.default,{children:[(0,r.jsx)("title",{children:e.title}),(0,r.jsx)("meta",{name:"description",content:e.description})]}),(0,r.jsxs)("section",{className:a().detail,children:[(0,r.jsx)("img",{src:e.image,alt:e.title}),(0,r.jsx)("h1",{children:e.title}),(0,r.jsx)("address",{children:e.address}),(0,r.jsx)("p",{children:e.description})]})]})},c=n(3843),s=!0,f=function(e){return(0,r.jsx)(c.Z,{children:(0,r.jsx)(l,{image:e.image,title:e.title,address:e.address,description:e.description})})}},8239:function(e){e.exports={main:"Layout_main__NgJgX"}},4568:function(e){e.exports={header:"MainNavigation_header__WuiTa",logo:"MainNavigation_logo__oTonQ",active:"MainNavigation_active__eKPZi"}},2913:function(e){e.exports={detail:"MeetUpDetail_detail__tECv5"}},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=8267,e(e.s=t);var t}));var t=e.O();_N_E=t}]);