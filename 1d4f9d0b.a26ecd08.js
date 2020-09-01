(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{61:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),i=(a(0),a(80)),o={title:"Flamingo and the Tarpit \ud83d\udc80",sidebar_label:"Flamingo and the Tarpit"},s={unversionedId:"start_here/flamingo_and_the_tarpit",id:"start_here/flamingo_and_the_tarpit",isDocsHomePage:!1,title:"Flamingo and the Tarpit \ud83d\udc80",description:"Before we go over details of using Flamingo, we should discuss the problem",source:"@site/docs\\start_here\\flamingo_and_the_tarpit.md",permalink:"/docs/start_here/flamingo_and_the_tarpit",editUrl:"https://github.com/flamingo-lang/flamingo-docs/edit/master/docs/start_here/flamingo_and_the_tarpit.md",sidebar_label:"Flamingo and the Tarpit",sidebar:"sidebar",previous:{title:"Intro \ud83d\udee3\ufe0f",permalink:"/docs/"},next:{title:"Installing Flamingo \ud83d\udce6",permalink:"/docs/start_here/install"}},l=[{value:"The Software Crisis",id:"the-software-crisis",children:[]},{value:"The Promise and Failure of Functional Programming",id:"the-promise-and-failure-of-functional-programming",children:[]},{value:"FRP, the Missing Paradigm",id:"frp-the-missing-paradigm",children:[]},{value:"Flamingo, FRP Incarnate",id:"flamingo-frp-incarnate",children:[]}],c={rightToc:l};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Before we go over details of using Flamingo, we should discuss the problem\nit aims to solve."),Object(i.b)("h2",{id:"the-software-crisis"},"The Software Crisis"),Object(i.b)("p",null,"In the late 60's, folks already knew that software was in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Software_crisis"}),"a crisis"),".\nHardware is (or at least was) constantly getting faster by Moore's law, but software never seems\nto get substantially easier. Thus, the major bottleneck to software today is the work of writing\nit. And writing it is ",Object(i.b)("em",{parentName:"p"},"hard"),". More so than in perhaps any other profession, software projects\nseem to go south as soon as they start, quickly becoming tarpits - so full of bugs you can't\nstay where you are, but so hard to change you can't move forward."),Object(i.b)("p",null,"In 2006, Ben Mosley and Peter Marks published a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://curtclifton.net/papers/MoseleyMarks06a.pdf"}),"paper"),"\ngiving their analysis of why we're in the software crisis. Flamingo is largely based\non the ideas in this paper."),Object(i.b)("h2",{id:"the-promise-and-failure-of-functional-programming"},"The Promise and Failure of Functional Programming"),Object(i.b)("p",null,"In the view of Mosley and Marks, the root of the problem is accidental complexity introduced\nthrough conventional programming methods. Our programs are full of details that users don't\ncare about, and we consequently spend far too much energy chasing rabbit trails that never add value\nto a human life. The biggest driver of complexity by far is statefulness - every bit of state\nin your program doubles the possible space you need to consider and test."),Object(i.b)("p",null,"Functional programming is a method of programming without the use of mutable state. Languages\nlike Elm and Haskell eschew state altogether, instead relying on monads. But ultimately\nFP suffers from serious issues:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"FP is still algorithmic - business problems are not represented directly, but\nare encoded as algebraic data structures. This is a difficult process, and one quickly\ngets lost in a sea of category theory that users don't care about."),Object(i.b)("li",{parentName:"ul"},"Most FP languages are  still Turing-complete, and can easily simulate state in ways\nthat are just as bad as imperative programs.")),Object(i.b)("p",null,"Don't get me wrong - I love FP, and my goal is implement Flamingo in a dependently-typed,\ntotal, functional language (the FP of FP, if you will). But FP comes from math, logic,\nand linguistics - if you're solving down-to-earth problems and not manipulating languages\nand metalanguages, FP is too powerful."),Object(i.b)("h2",{id:"frp-the-missing-paradigm"},"FRP, the Missing Paradigm"),Object(i.b)("p",null,"In the same paper, Mosley and Marks outline a new paradigm they call Functional Relational\nProgramming (not to be confused with functional reactive programming, an FP paradigm).\nThe idea is this: pretend performance doesn't matter at all. How would you\nmodel your problem if the only things mattered were clarity and maintainability?\nYou'd want a declarative language to represent logical relationships\n(if/then and given/when/then). This language would have to be carefully limited to\npreserve simplicity - for example, they advise against abstract data types entirely,\nusing simple predicates instead. Such a language might ",Object(i.b)("em",{parentName:"p"},"finally")," produce tractable\nsystems."),Object(i.b)("p",null,"Now of course, performance does matter. But, that's what compilers are for. Through\nautomated analysis or handwritten annotations, declarative programs can often be\noptimized to produce programs that are just as fast if not faster than imperative\nprograms. Not to mention, PC's and mobile devices are so fast these days that\nperformance often ",Object(i.b)("em",{parentName:"p"},"doesn't")," matter, at least not for most of the app."),Object(i.b)("p",null,"The FRP system they described was purely hypothetical, and to my knowledge their\nhasn't been a real implementation... until Flamingo that is!"),Object(i.b)("h2",{id:"flamingo-frp-incarnate"},"Flamingo, FRP Incarnate"),Object(i.b)("p",null,'For the last few decades at least, researchers in the field of knowledge representation have\nbeen studying how to represent commonsense knowledge in a precise way. One powerful\ntool they\'ve developed are action languages - "controlled natural languages" that describe\ncause-effect relationships. ALM is one such language. Like in other action languages, in\nALM you can write if/then and given/when/then statements directly as state constraints\nand causal laws. Unlike other action langauges, ALM is highly modular, designed to support\ncomplex reasoning libraries that can be easily and incrementally extended.'),Object(i.b)("p",null,"My hypothesis is that ALM ",Object(i.b)("em",{parentName:"p"},"is"),' the language Mosley and Marks describe. Flamingo is an experiment\nin applying the FRP paradigm and ALM to web apps. Additionally, Flamingo borrows heavily\nfrom ideas in modeling and "lightweight formal methods" a la Alloy. In 2020, we shouldn\'t have to\nrely on unit tests - have the machine do it for you.'),Object(i.b)("p",null,"Flamingo is predicated on the idea that buggy software is doomed for extinction, and that\nday might be sooner than we think. Software should be simultaneously delightful, correct,\nand cheap, and Flamingo is my attempt at making it so."))}d.isMDXComponent=!0},80:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=n,h=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return a?r.a.createElement(h,s(s({ref:t},c),{},{components:a})):r.a.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);