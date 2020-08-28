(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),c=(n(0),n(80)),i={title:"Encoding the Spec \ud83e\udd16",sidebar_label:"Encoding the Spec"},a={unversionedId:"todomvc/encoding",id:"todomvc/encoding",isDocsHomePage:!1,title:"Encoding the Spec \ud83e\udd16",description:"Our journey to organization and productivity begins with encoding",source:"@site/docs\\todomvc\\encoding.md",permalink:"/docs/todomvc/encoding",editUrl:"https://github.com/flamingo-lang/flamingo-docs/edit/master/docs/todomvc/encoding.md",sidebar_label:"Encoding the Spec",sidebar:"sidebar",previous:{title:"Architecture Overview \ud83c\udfdb\ufe0f",permalink:"/docs/todomvc/architecture"},next:{title:"Creating a Session \ud83c\udf10",permalink:"/docs/todomvc/creating_a_session"}},l=[],p={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Our journey to organization and productivity begins with encoding\nthe logic. Be sure to play with the TodoMVC app and check out the\n",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/tastejs/todomvc/blob/master/app-spec.md#functionality"}),"spec"),"\nto get a feel for the domain (after all, you can't program what you don't understand)."),Object(c.b)("p",null,"When you're ready, check out the\n",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://repl.it/@d4hines/flamingo-todomvc#src/logic.ts"}),"annotated ALM encoding in the Repl"),".\n(Forgive the lack of syntax-highlighting - we'll get there soon)."),Object(c.b)("p",null,"In the next section, we'll start bringing it all to life with\nFlamingos' hook API!"))}u.isMDXComponent=!0},80:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,m=d["".concat(i,".").concat(f)]||d[f]||s[f]||c;return n?o.a.createElement(m,a(a({ref:t},p),{},{components:n})):o.a.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var p=2;p<c;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);