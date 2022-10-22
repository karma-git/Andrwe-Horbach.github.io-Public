"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[4382],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),s=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=s(t.components);return n.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),d=s(r),m=a,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(h,i(i({ref:e},u),{},{components:r})):n.createElement(h,i({ref:e},u))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7744:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],p={id:"rust-tools",title:"Rust tools",sidebar_position:4},l=void 0,s={unversionedId:"DevOps/rust-tools",id:"DevOps/rust-tools",title:"Rust tools",description:"Rust tools",source:"@site/docs/DevOps/4-rust-tools.md",sourceDirName:"DevOps",slug:"/DevOps/rust-tools",permalink:"/Andrew-Horbach.github.io-Public/docs/DevOps/rust-tools",editUrl:"https://github.com/karma-git/Andrew-Horbach.github.io-Public/blob/master/docs/DevOps/4-rust-tools.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"rust-tools",title:"Rust tools",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Argo CD: Let's Get Stuff Deployed",permalink:"/Andrew-Horbach.github.io-Public/docs/DevOps/gitops-argocd"},next:{title:"OpenShift QuickLook",permalink:"/Andrew-Horbach.github.io-Public/docs/DevOps/open-shift-quick-look"}},u=[{value:"Rust tools",id:"rust-tools",children:[{value:"cat -&gt; bat",id:"cat---bat",children:[],level:3},{value:"du -&gt; dust",id:"du---dust",children:[],level:3},{value:"find -&gt; fd",id:"find---fd",children:[],level:3},{value:"ls -&gt; exa",id:"ls---exa",children:[],level:3},{value:"grep -&gt; ripgrep",id:"grep---ripgrep",children:[],level:3}],level:2},{value:"Hacks",id:"hacks",children:[],level:2}],c={toc:u};function d(t){var e=t.components,r=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"rust-tools"},"Rust tools"),(0,o.kt)("h3",{id:"cat---bat"},"cat -> bat"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/sharkdp/bat"},"https://github.com/sharkdp/bat")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A cat(1) clone with wings.")),(0,o.kt)("p",null,"\u0427\u0438\u0442\u0430\u0435\u043c \u0444\u0430\u0439\u043b, \u0441\u043c\u043e\u0442\u0440\u0438\u043c ",(0,o.kt)("strong",{parentName:"p"},"git diff")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://ah-public-pictures.hb.bizmrg.com/it-happens/bat-git.png",alt:"img"})),(0,o.kt)("p",null,"\u041f\u0435\u0447\u0430\u0442\u0430\u0435\u043c \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442 ",(0,o.kt)("strong",{parentName:"p"},"pod"),"-\u0430 \u0438\u0437 ",(0,o.kt)("strong",{parentName:"p"},"etcd"),"; \u043f\u043e\u0434\u0441\u0432\u0435\u0447\u0438\u0432\u0430\u0435\u043c \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://ah-public-pictures.hb.bizmrg.com/it-happens/bat-2.png",alt:"img"})),(0,o.kt)("h3",{id:"du---dust"},"du -> dust"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/bootandy/dust"},"https://github.com/bootandy/dust")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A more intuitive version of du in rust")),(0,o.kt)("p",null,"\u0421\u043c\u043e\u0442\u0440\u0438\u043c ",(0,o.kt)("strong",{parentName:"p"},"disk usage")," \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u044f\u044f \u0433\u043b\u0443\u0431\u0438\u043d\u0443 \u0438 \u0438\u0441\u043a\u043b\u044e\u0447\u0430\u044f \u043d\u0435\u0436\u0435\u043b\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://ah-public-pictures.hb.bizmrg.com/it-happens/dust-depth.png",alt:"img"})),(0,o.kt)("p",null,"\u0421\u043c\u043e\u0442\u0440\u0438\u043c \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043c\u0435\u0441\u0442\u0430 \u0441\u044a\u0435\u0434\u0430\u044e\u0442 \u0444\u0430\u0439\u043b\u044b \u0442\u043e\u0433\u043e \u0438\u043b\u0438 \u0438\u043d\u043e\u0433\u043e \u0444\u043e\u0440\u043c\u0430\u0442\u0430"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://ah-public-pictures.hb.bizmrg.com/it-happens/dust-regex.png",alt:"img"})),(0,o.kt)("h3",{id:"find---fd"},"find -> fd"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/sharkdp/fd"},"https://github.com/sharkdp/fd")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A simple, fast and user-friendly alternative to 'find'")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/sharkdp/fd/master/doc/screencast.svg",alt:"img"})),(0,o.kt)("h3",{id:"ls---exa"},"ls -> exa"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ogham/exa"},"https://github.com/ogham/exa")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A modern replacement for \u2018ls\u2019.")),(0,o.kt)("h3",{id:"grep---ripgrep"},"grep -> ripgrep"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/BurntSushi/ripgrep"},"https://github.com/BurntSushi/ripgrep")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"ripgrep recursively searches directories for a regex pattern while respecting your gitignore")),(0,o.kt)("p",null,"\u041f\u043e\u0438\u0449\u0435\u043c \u0432 \u043a\u0430\u043a\u0438\u0445 \u0444\u0430\u0439\u043b\u0430\u0445 \u043e\u0441\u0442\u0430\u043b\u0438\u0441\u044c ",(0,o.kt)("strong",{parentName:"p"},"TODO"),"-\u0448\u043a\u0438"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://ah-public-pictures.hb.bizmrg.com/it-happens/rg-2.png",alt:"img"})),(0,o.kt)("h2",{id:"hacks"},"Hacks"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"alias cat=bat\nalias du=dust\nalias find=fd\nalias ls=exa\nalias grep=rg\n\nfd . -X bat  # open all files inside the current dirctory via bat\nk get po -n kube-system aws-node-4dvzk -o yaml | bat --language=yaml  # print k8s object manifest with syntax highlights\n")),(0,o.kt)("p",null,"... to be continued"))}d.isMDXComponent=!0}}]);