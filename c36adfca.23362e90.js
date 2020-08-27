(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(78)),i={title:"Installing Flamingo \ud83d\udce6",sidebar_label:"Installing Flamingo"},l={unversionedId:"start_here/install",id:"start_here/install",isDocsHomePage:!1,title:"Installing Flamingo \ud83d\udce6",description:"Installing Flamingo is easy! Just grab it from NPM:",source:"@site/docs\\start_here\\install.md",permalink:"/docs/start_here/install",editUrl:"https://github.com/flamingo-lang/flamingo-docs/edit/master/docs/start_here/install.md",sidebar_label:"Installing Flamingo",sidebar:"sidebar",previous:{title:"Intro \ud83d\udee3\ufe0f",permalink:"/docs/"},next:{title:"Intro \ud83e\udd13",permalink:"/docs/basics/basics"}},c=[],s={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Installing Flamingo is easy! Just grab it from NPM:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"npm i -g flamingo-lang\n")),Object(o.b)("p",null,"Additionally, if you want to do automatic verification,\nyou'll need the Clingo ASP solver somewhere on your\npath."),Object(o.b)("p",null,"On Mac, you can install with homebrew:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"brew install clingo\n")),Object(o.b)("p",null,"For Debian/Ubuntu Linux, you can install from the Debian\nPackage Registry. For historical reasons it's called Gringo there."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"sudo apt install gringo\n")),Object(o.b)("p",null,"On Windows, you'll have to download the latest executable\nfrom the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/potassco/clingo/releases"}),"Clingo Releases"),"\npage and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://helpdeskgeek.com/windows-10/add-windows-path-environment-variable/"}),"add it to the path yourself")))}p.isMDXComponent=!0},78:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);