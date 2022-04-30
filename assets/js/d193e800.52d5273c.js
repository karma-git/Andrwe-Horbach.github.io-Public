"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[4970],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return g}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),l=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},p=function(e){var a=l(e.components);return n.createElement(o.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),u=l(t),g=r,k=u["".concat(o,".").concat(g)]||u[g]||c[g]||i;return t?n.createElement(k,s(s({ref:a},p),{},{components:t})):n.createElement(k,s({ref:a},p))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=u;var m={};for(var o in a)hasOwnProperty.call(a,o)&&(m[o]=a[o]);m.originalType=e,m.mdxType="string"==typeof e?e:r,s[1]=m;for(var l=2;l<i;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},753:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return m},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var n=t(7462),r=t(3366),i=(t(7294),t(3905)),s=["components"],m={id:"1-introduction.md",title:"Chapter 1.  Introduction",sidebar_position:1},o="Chapter 1.  Introduction",l={unversionedId:"SRE/sre-book-1/1-introduction.md",id:"SRE/sre-book-1/1-introduction.md",title:"Chapter 1.  Introduction",description:"Hope is not  a strategy (Traditional SRE saying).",source:"@site/docs/SRE/sre-book-1/1-introduction.md",sourceDirName:"SRE/sre-book-1",slug:"/SRE/sre-book-1/1-introduction.md",permalink:"/Andrew-Horbach.github.io-Public/docs/SRE/sre-book-1/1-introduction.md",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/SRE/sre-book-1/1-introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"1-introduction.md",title:"Chapter 1.  Introduction",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Abbreviations & Part 0.  Foreword",permalink:"/Andrew-Horbach.github.io-Public/docs/SRE/sre-book-1/0-abbreviations-foreword.md"},next:{title:"Chapter 4.  Service Level Objectives",permalink:"/Andrew-Horbach.github.io-Public/docs/SRE/sre-book-1/2-sre-book"}},p=[{value:"Google\u2019s Approach to Service Management: Site Reliability Engineering",id:"googles-approach-to-service-management-site-reliability-engineering",children:[],level:2},{value:"Tenets of SRE",id:"tenets-of-sre",children:[{value:"Ensuring a Durable Focus on Engineering",id:"ensuring-a-durable-focus-on-engineering",children:[{value:"Pursuing Maximum Change Velocity Without Violating a Service\u2019s SLO",id:"pursuing-maximum-change-velocity-without-violating-a-services-slo",children:[],level:4}],level:3},{value:"Monitoring",id:"monitoring",children:[],level:3},{value:"Emergency Response",id:"emergency-response",children:[],level:3},{value:"Change Management",id:"change-management",children:[],level:3},{value:"Demand Forecasting and Capacity Planning",id:"demand-forecasting-and-capacity-planning",children:[],level:3},{value:"Provisioning",id:"provisioning",children:[],level:3},{value:"Efficiency and Performance",id:"efficiency-and-performance",children:[],level:3}],level:2},{value:"The End of the Beginning",id:"the-end-of-the-beginning",children:[],level:2}],c={toc:p};function u(e){var a=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"chapter-1--introduction"},"Chapter 1.  Introduction"),(0,i.kt)("p",null,"Hope is not  a strategy (Traditional SRE saying)."),(0,i.kt)("h2",{id:"googles-approach-to-service-management-site-reliability-engineering"},"Google\u2019s Approach to Service Management: Site Reliability Engineering"),(0,i.kt)("p",null,"What is SRE -> my explanation is simple: SRE is what happens when you ask a software engineer to design an operations team."),(0,i.kt)("p",null,"\u0412 google SRE \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u044d\u0442\u043e \u043f\u0440\u043e \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0443, \u0443 \u043d\u0438\u0445 \u0435\u0441\u0442\u044c \u0442\u0440\u0435\u0448\u0445\u043e\u043b\u0434 50% \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0434\u043e\u043b\u0436\u043d\u043e \u0443\u0445\u043e\u0434\u0438\u0442\u044c \u043d\u0430 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0443, 50% \u043d\u0430 \u0440\u0443\u0447\u043d\u044b\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u043f\u043e \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u044e \u0441\u0435\u0440\u0432\u0438\u0441\u0430."),(0,i.kt)("h2",{id:"tenets-of-sre"},"Tenets of SRE"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"availability"),(0,i.kt)("li",{parentName:"ul"},"latency "),(0,i.kt)("li",{parentName:"ul"},"performance "),(0,i.kt)("li",{parentName:"ul"},"efficiency "),(0,i.kt)("li",{parentName:"ul"},"change management"),(0,i.kt)("li",{parentName:"ul"},"monitoring "),(0,i.kt)("li",{parentName:"ul"},"emergency response"),(0,i.kt)("li",{parentName:"ul"},"capacity planning")),(0,i.kt)("h3",{id:"ensuring-a-durable-focus-on-engineering"},"Ensuring a Durable Focus on Engineering"),(0,i.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0442\u0440\u0435\u0448\u0445\u043e\u043b\u0434 \u043d\u0430 50% \u043f\u0435\u0440\u0435\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f, \u0437\u0430\u0434\u0430\u0447\u0438 \u0440\u0435\u0434\u0438\u0440\u0435\u043a\u0442\u044f\u0442\u0441\u044f \u043e\u0431\u0440\u0430\u0442\u043d\u043e \u043d\u0430 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432, \u0438\u0445 \u043f\u0440\u0438\u0432\u043b\u0435\u043a\u0430\u044e\u0442 \u043a \u0434\u0435\u0436\u0443\u0440\u0441\u0442\u0432\u0430\u043c \u0438 \u0442.\u0434. \u0412\u0441\u0435 (dev,ops teams) \u0434\u043e\u043b\u0436\u043d\u044b \u043f\u043e\u043d\u0438\u043c\u0430\u0442\u044c \u0437\u0430\u0447\u0435\u043c \u044d\u0442\u043e - \u0441\u043d\u0438\u0436\u0435\u043d\u0438\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Postmortem"),"-\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u044b \u043d\u0430 \u0432\u0441\u0435 \u0438\u043d\u0446\u0438\u0434\u0435\u043d\u0442\u044b: \u0434\u043b\u044f \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u043f\u043e\u0432\u0442\u043e\u0440\u0435\u043d\u0438\u044f \u0438 \u043f\u043b\u0430\u043d\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u043f\u043e \u0443\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u044e. \u0414\u043b\u044f \u0442\u0430\u043a\u043e\u0433\u043e \u0447\u0430\u0441\u0442\u043e\u0433\u043e \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c ",(0,i.kt)("em",{parentName:"p"},"blameless"),"-\u043a\u0443\u043b\u044c\u0442\u0443\u0440\u0430."),(0,i.kt)("h4",{id:"pursuing-maximum-change-velocity-without-violating-a-services-slo"},"Pursuing Maximum Change Velocity Without Violating a Service\u2019s SLO"),(0,i.kt)("p",null,"\u041a\u043e\u043d\u0444\u043b\u0438\u043a\u0442 Dev \u0438 Ops: \u043f\u0435\u0440\u0432\u044b\u0435 \u0445\u043e\u0442\u044f\u0442 \u0434\u0435\u043b\u0430\u0442\u044c \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430 \u0438 \u0447\u0430\u0441\u0442\u043e \u0432\u044b\u043f\u0443\u0441\u043a\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0435 \u0444\u0438\u0447\u0438. \u0418\u0437-\u0437\u0430 \u044d\u0442\u043e\u0433\u043e \u043c\u043e\u0436\u0435\u0442 \u0441\u0442\u0440\u0430\u0434\u0430\u0442\u044c \u043d\u0430\u0434\u0435\u0436\u043d\u043e\u0441\u0442\u044c \u0437\u0430 \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043e\u0442\u0432\u0435\u0447\u0430\u044e\u0442 Ops \u0438 \u043e\u043d\u0438 \u0432 \u0441\u0432\u043e\u044e \u043e\u0447\u0435\u0440\u0435\u0434\u044c \u043d\u0435 \u0445\u043e\u0442\u044f\u0442 \u0444\u0438\u0447\u0438. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0432\u0432\u0435\u0434\u0435\u043d ",(0,i.kt)("em",{parentName:"p"},"error budget")," (100% is the wrong reliability target). ",(0,i.kt)("em",{parentName:"p"},"error budget")," - \u0434\u043e\u043b\u0436\u0435\u043d \u0432\u044b\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u043e\u0434\u0443\u043a\u0442, \u0442\u0430\u043a \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430 \u0431\u044b\u043b\u0438 \u0443\u0434\u043e\u0432\u043b\u0435\u0442\u0432\u043e\u0440\u0435\u043d\u044b. \u0412 \u0438\u0434\u0435\u0430\u043b\u044c\u043d\u043e\u043c \u043c\u0438\u0440\u0435 ",(0,i.kt)("em",{parentName:"p"},"error budget")," \u043c\u043e\u0436\u043d\u043e ",(0,i.kt)("strong",{parentName:"p"},"\u0442\u0440\u0430\u0442\u0438\u0442\u044c"),' \u043d\u0430 \u0440\u0438\u0441\u043a\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0434\u0435\u043f\u043b\u043e\u0439\u043c\u0435\u043d\u0442\u044b. \u041d\u0435\u0434\u043e\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u044c - \u044d\u0442\u043e \u0442\u0435\u043f\u0435\u0440\u044c \u043d\u0435 "\u043f\u043b\u043e\u0445\u0430\u044f" \u0448\u0442\u0443\u043a\u0430 - \u0430 \u0442\u043e \u0447\u0435\u043c dev \u0438 ops \u043c\u043e\u0433\u0443\u0442 ',(0,i.kt)("strong",{parentName:"p"},"\u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c"),"."),(0,i.kt)("h3",{id:"monitoring"},"Monitoring"),(0,i.kt)("p",null,"\u041c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433 \u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u0442\u044c \u043e\u0442 \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430 \u043d\u0438\u043a\u0430\u043a\u0438\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 - \u0438\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0430\u0446\u0438\u044e \u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0439 \u0434\u043e\u043b\u0436\u043d\u043e \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0442\u044c \u041f\u041e, \u043b\u044e\u0434\u0438 \u043d\u0443\u0436\u043d\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0435\u0441\u043b\u0438 \u043e\u0442 \u043d\u0438\u0445 \u0442\u0440\u0435\u0431\u0443\u044e\u0442\u0441\u044f \u043a\u0430\u043a\u0438\u0435 \u043b\u0438\u0431\u043e \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Alerts - \u043d\u0443\u0436\u043d\u043e \u043d\u0435\u043c\u0435\u0434\u043b\u0435\u043d\u043d\u043e \u043e\u0442\u0440\u0435\u0430\u0433\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),(0,i.kt)("li",{parentName:"ul"},"Tickets - \u043d\u0443\u0436\u0435\u043d \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c, \u043d\u043e \u043d\u0435 \u0441\u0440\u043e\u0447\u043d\u043e"),(0,i.kt)("li",{parentName:"ul"},"Logging - \u0434\u0438\u0430\u0433\u043d\u043e\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0438\u043d\u0444\u0430, \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0441\u044e\u0434\u0430 \u043d\u0435 \u043d\u0443\u0436\u043d\u043e \u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c")),(0,i.kt)("h3",{id:"emergency-response"},"Emergency Response"),(0,i.kt)("p",null,"\u041d\u0430\u0434\u0435\u0436\u043d\u043e\u0441\u0442\u044c - \u044d\u0442\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043e\u0442 \u0441\u0440\u0435\u0434\u043d\u0435\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0431\u0435\u0437\u043e\u0442\u043a\u0430\u0437\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b (meantime to failure, MTTF) \u0438 \u0441\u0440\u0435\u0434\u043d\u0435\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f (mean time of repair, MTTR):"),(0,i.kt)("div",{className:"math math-display"},(0,i.kt)("span",{parentName:"div",className:"katex-display"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"o"),(0,i.kt)("mi",{parentName:"mrow"},"b"),(0,i.kt)("mi",{parentName:"mrow"},"s"),(0,i.kt)("mi",{parentName:"mrow"},"e"),(0,i.kt)("mi",{parentName:"mrow"},"r"),(0,i.kt)("mi",{parentName:"mrow"},"v"),(0,i.kt)("mi",{parentName:"mrow"},"a"),(0,i.kt)("mi",{parentName:"mrow"},"b"),(0,i.kt)("mi",{parentName:"mrow"},"i"),(0,i.kt)("mi",{parentName:"mrow"},"l"),(0,i.kt)("mi",{parentName:"mrow"},"i"),(0,i.kt)("mi",{parentName:"mrow"},"t"),(0,i.kt)("mi",{parentName:"mrow"},"y"),(0,i.kt)("mo",{parentName:"mrow"},"="),(0,i.kt)("mfrac",{parentName:"mrow"},(0,i.kt)("mrow",{parentName:"mfrac"},(0,i.kt)("mi",{parentName:"mrow"},"M"),(0,i.kt)("mi",{parentName:"mrow"},"T"),(0,i.kt)("mi",{parentName:"mrow"},"T"),(0,i.kt)("mi",{parentName:"mrow"},"F")),(0,i.kt)("mrow",{parentName:"mfrac"},(0,i.kt)("mi",{parentName:"mrow"},"M"),(0,i.kt)("mi",{parentName:"mrow"},"T"),(0,i.kt)("mi",{parentName:"mrow"},"T"),(0,i.kt)("mi",{parentName:"mrow"},"R")))),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"observability = \\frac {MTTF} {MTTR}")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"ser"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"abi"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.kt)("span",{parentName:"span",className:"mrel"},"="),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"2.0463em",verticalAlign:"-0.686em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,i.kt)("span",{parentName:"span",className:"mfrac"},(0,i.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.3603em"}},(0,i.kt)("span",{parentName:"span",style:{top:"-2.314em"}},(0,i.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.00773em"}},"MTTR"))),(0,i.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,i.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,i.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,i.kt)("span",{parentName:"span",style:{top:"-3.677em"}},(0,i.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"MTTF")))),(0,i.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.686em"}},(0,i.kt)("span",{parentName:"span"}))))),(0,i.kt)("span",{parentName:"span",className:"mclose nulldelimiter"}))))))),(0,i.kt)("p",null,"\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u043f\u043b\u0430\u043d\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f: runbook | playbook \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u0434\u0435\u0436\u0443\u0440\u043d\u043e\u043c\u0443 \u0438\u043d\u0436\u0435\u043d\u0435\u0440\u0443 \u0431\u044b\u0441\u0442\u0440\u0435\u0435 \u0440\u0435\u0448\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0443, \u043d\u043e \u0442\u0435\u043c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 \u0438\u043d\u0436\u0435\u043d\u0435\u0440 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0433\u043e\u0442\u043e\u0432 \u043a \u043d\u0435\u043e\u0436\u0438\u0434\u0430\u043d\u043d\u043e\u0441\u0442\u044f\u043c. \u0412 google \u0435\u0441\u0442\u044c \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u044f \u043d\u0430 \u0443\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0430\u0432\u0430\u0440\u0438\u0439: ",(0,i.kt)("strong",{parentName:"p"},"\u201cWheel of Misfortune\u201d")),(0,i.kt)("h3",{id:"change-management"},"Change Management"),(0,i.kt)("p",null,"SRE has found that roughly ",(0,i.kt)("strong",{parentName:"p"},"70%")," of outages are due to changes in a live system."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Implementing progressive rollouts"),(0,i.kt)("li",{parentName:"ul"},"Quickly and accurately detecting problems"),(0,i.kt)("li",{parentName:"ul"},"Rolling back changes safely when problems arise")),(0,i.kt)("p",null,"\u0423\u0441\u0442\u0430\u043b\u043e\u0441\u0442\u044c, \u0440\u0430\u0441\u0441\u043b\u0430\u0431\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u044c, \u043f\u0440\u0435\u043d\u0435\u0431\u0440\u0435\u0436\u0435\u043d\u0438\u0435 \u0438 \u043d\u0435\u0432\u043d\u0438\u043c\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c - \u044d\u0442\u0438 \u0447\u0435\u043b\u043e\u0432\u0435\u0447\u0435\u0441\u043a\u0438\u0435 \u0444\u0430\u043a\u0442\u043e\u0440\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043f\u043e\u0431\u0435\u0436\u0434\u0435\u043d\u044b \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0435\u0439."),(0,i.kt)("h3",{id:"demand-forecasting-and-capacity-planning"},"Demand Forecasting and Capacity Planning"),(0,i.kt)("p",null,"\u0421\u0438\u0441\u0442\u0435\u043c\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0438\u043c\u0435\u0442\u044c \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u0443\u044e \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0447\u0442\u043e\u0431\u044b \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0442\u044c \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0439 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u044c \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u0438. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043d\u0443\u0436\u043d\u043e \u043f\u0440\u0435\u0434\u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0448\u0430\u0433\u0438:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0440\u043e\u0441\u0442\u0430"),(0,i.kt)("li",{parentName:"ul"},"push-\u0438"),(0,i.kt)("li",{parentName:"ul"},"\u043d\u0430\u0433\u0440\u0443\u0437\u043e\u0447\u043d\u043e\u0435 \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435")),(0,i.kt)("h3",{id:"provisioning"},"Provisioning"),(0,i.kt)("p",null,"\u041f\u0440\u043e\u0432\u0438\u0436\u0435\u043d\u0438\u043d\u0433 \u0438 \u0431\u0443\u0441\u0442\u0440\u0430\u043f\u0438\u043d\u0433 \u043d\u043e\u0432\u044b\u0445 \u0438\u043d\u0441\u0442\u0430\u043d\u0441\u043e\u0432 \u0432 \u0426\u041e\u0414-\u0435 \u0438\u043b\u0438 \u043e\u0431\u043b\u0430\u043a\u0435 \u0442\u043e\u0436\u0435 \u0441\u043e\u043f\u0440\u044f\u0436\u0435\u043d\u043e \u0441 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u043c\u0438 \u0440\u0438\u0441\u043a\u0430\u043c\u0438."),(0,i.kt)("h3",{id:"efficiency-and-performance"},"Efficiency and Performance"),(0,i.kt)("p",null,"SRE \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u043b\u0435\u0434\u0438\u0442\u044c \u0437\u0430 \u0443\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u0435\u0439 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432 \u0438 \u0442\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c \u0434\u0443\u043c\u0430\u0442\u044c \u043e \u043a\u043e\u0441\u0442\u0430\u0445."),(0,i.kt)("h2",{id:"the-end-of-the-beginning"},"The End of the Beginning"),(0,i.kt)("p",null,"\u201cas a software engineer, this is how I would want to invest my time to accomplish a set of repetitive tasks\u201d"))}u.isMDXComponent=!0}}]);