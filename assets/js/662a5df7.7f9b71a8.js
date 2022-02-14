"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[6715],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),c=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,v=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return t?a.createElement(v,l(l({ref:n},s),{},{components:t})):a.createElement(v,l({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8215:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(7462),r=t(7294),o=t(2389),l=t(9443);var i=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=t(3616),c=t(6010),s="tabItem_vU9c";function p(e){var n,t,o,l=e.lazy,p=e.block,m=e.defaultValue,d=e.values,v=e.groupId,h=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:k.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),g=(0,u.lx)(b,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===m?m:null!=(n=null!=m?m:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=k[0])?void 0:o.props.value;if(null!==f&&!b.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=i(),y=N.tabGroupChoices,w=N.setTabGroupChoices,x=(0,r.useState)(f),O=x[0],T=x[1],C=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var P=y[v];null!=P&&P!==O&&b.some((function(e){return e.value===P}))&&T(P)}var D=function(e){var n=e.currentTarget,t=C.indexOf(n),a=b[t].value;a!==O&&(E(n),T(a),null!=v&&w(v,a))},_=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;t=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.currentTarget)-1;t=C[r]||C[C.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":p},h)},b.map((function(e){var n=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:function(e){return C.push(e)},onKeyDown:_,onFocus:D,onClick:D},o,{className:(0,c.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":O===n})}),null!=t?t:n)}))),l?(0,r.cloneElement)(k.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}function m(e){var n=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(n)},e))}},7623:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return m},toc:function(){return d},default:function(){return h}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),l=t(6396),i=t(8215),u=["components"],c={title:"Selfmade Vagrant box",description:"VagrantBox \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u0442\u0441\u044f \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043a\u043e \u0436\u0435 \u043f\u0440\u043e\u0441\u0442\u043e \u043a\u0430\u043a \u0438 DockerImage!",slug:"selfmade-vagrant-box",authors:["a.horbach"],tags:["vagrant","packer","ansible"],image:"https://i.imgur.com/mErPwqL.png",hide_table_of_contents:!1},s="Inspiration",p={permalink:"/Andrew-Horbach.github.io-Public/blog/selfmade-vagrant-box",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-01-28-self-vagrant-box.md",source:"@site/blog/2022-01-28-self-vagrant-box.md",title:"Selfmade Vagrant box",description:"VagrantBox \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u0442\u0441\u044f \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043a\u043e \u0436\u0435 \u043f\u0440\u043e\u0441\u0442\u043e \u043a\u0430\u043a \u0438 DockerImage!",date:"2022-01-28T00:00:00.000Z",formattedDate:"January 28, 2022",tags:[{label:"vagrant",permalink:"/Andrew-Horbach.github.io-Public/blog/tags/vagrant"},{label:"packer",permalink:"/Andrew-Horbach.github.io-Public/blog/tags/packer"},{label:"ansible",permalink:"/Andrew-Horbach.github.io-Public/blog/tags/ansible"}],readingTime:1.75,truncated:!0,authors:[{name:"Andrew Horbach",url:"https://github.com/karma-git",imageURL:"https://github.com/karma-git.png",key:"a.horbach"}],nextItem:{title:"CKA",permalink:"/Andrew-Horbach.github.io-Public/blog/cka-commitment"}},m={authorsImageUrls:[void 0]},d=[{value:"\u041f\u0440\u043e\u0446\u0435\u0441\u0441",id:"\u043f\u0440\u043e\u0446\u0435\u0441\u0441",children:[{value:"config file",id:"config-file",children:[],level:3},{value:"build",id:"build",children:[],level:3},{value:"push",id:"push",children:[],level:3},{value:"provisioner",id:"provisioner",children:[],level:3},{value:"post-processors",id:"post-processors",children:[],level:3}],level:2}],v={toc:d};function h(e){var n=e.components,t=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u041d\u0430 VagrantCloud \u043d\u0435 \u043d\u0430\u0448\u0435\u043b \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u044b\u0445 box-\u043e\u0432 \u0441 GUI."),(0,o.kt)("h2",{id:"\u043f\u0440\u043e\u0446\u0435\u0441\u0441"},"\u041f\u0440\u043e\u0446\u0435\u0441\u0441"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u0411\u0443\u0434\u0443 \u0434\u0435\u043b\u0430\u0442\u044c \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0438 \u0441 ",(0,o.kt)("em",{parentName:"p"},"docker")))),(0,o.kt)("h3",{id:"config-file"},"config file"),(0,o.kt)("p",null,"\u041e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u043c \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e \u043d\u0430\u0448\u0435\u0433\u043e VagrantBox (",(0,o.kt)("em",{parentName:"p"},"DockerImage"),") \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},".hcl")," (",(0,o.kt)("em",{parentName:"p"},"terraform"),")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hcl"},'source "vagrant" "ubuntu" {\n  add_force    = true\n  communicator = "ssh"\n  provider     = "virtualbox"\n  source_path  = "ubuntu/focal64"\n}\n\nbuild {\n  name    = "learn-packer"\n  sources = [\n    "source.vagrant.ubuntu"\n  ]\n}\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u041f\u043e\u043b\u0435\u0437\u043d\u044b\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"packer validate packer.hcl  # \u0432\u0430\u043b\u0438\u0434\u0438\u0440\u0443\u0435\u0442 \u0444\u0430\u0439\u043b\npacker fmt .                # \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u0443\u0435\u0442 \u0444\u0430\u0439\u043b\u044b, \u0438 \u043a\u0430\u0436\u0435\u0442\u0441\u044f, \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044e\n")))),(0,o.kt)("h3",{id:"build"},"build"),(0,o.kt)("p",null,"\u0421 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,o.kt)("a",{parentName:"p",href:"https://www.packer.io/"},(0,o.kt)("inlineCode",{parentName:"a"},"packer"))," (",(0,o.kt)("em",{parentName:"p"},"docker engine"),") \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u043c \u043e\u0431\u0440\u0430\u0437."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"packer build packer.hcl\n")),(0,o.kt)("p",null,"\u0427\u0435\u0440\u0435\u0437 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0432 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 ",(0,o.kt)("inlineCode",{parentName:"p"},"learn-packer")," \u043f\u043e\u044f\u0432\u0438\u0442\u0441\u044f \u0444\u0430\u0439\u043b ",(0,o.kt)("inlineCode",{parentName:"p"},".box")," (",(0,o.kt)("em",{parentName:"p"},"docker_image"),")"),(0,o.kt)("h3",{id:"push"},"push"),(0,o.kt)("p",null,"\u0417\u0430\u043b\u0438\u0432\u0430\u0435\u043c \u043f\u043e\u043b\u0443\u0447\u0438\u0432\u0448\u0438\u0439\u0441\u044f \u0444\u0430\u0439\u043b \u043d\u0430 ",(0,o.kt)("a",{parentName:"p",href:"https://app.vagrantup.com/boxes/search"},"VagrantCloud"),". \u041f\u043e\u043d\u0430\u0434\u043e\u0431\u0438\u0442\u044c\u0441\u044f \u0441\u043e\u0431\u0440\u0430\u0442\u044c \u0445\u044d\u0448-\u0441\u0443\u043c\u043c\u0443 \u0444\u0430\u0439\u043b\u0430, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0447\u0435\u0440\u0435\u0437 ",(0,o.kt)("inlineCode",{parentName:"p"},"md5")),(0,o.kt)("h3",{id:"provisioner"},"provisioner"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u041b\u044e\u0431\u0438\u043c\u044b\u0439 \u043f\u0440\u043e\u0432\u0438\u0436\u0435\u043d\u0435\u0440 - ansible, \u043d\u043e \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,o.kt)("inlineCode",{parentName:"p"},"shell")))),(0,o.kt)(l.Z,{defaultValue:"hcl",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"hcl",label:"packer.hcl",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hcl"},'source "vagrant" "ubuntu" {\n  add_force    = true\n  communicator = "ssh"\n  provider     = "virtualbox"\n  source_path  = "ubuntu/focal64"\n}\n\nbuild {\n  name    = "learn-packer"\n  sources = [\n    "source.vagrant.ubuntu"\n  ]\n  provisioner "ansible" {\n    playbook_file = "./ansible/packer-playbook.yml"\n  }\n}\n'))),(0,o.kt)(i.Z,{value:"yml",label:"packer-playbook.yml",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'---\n\n- name: install docker engine ubuntu\n  hosts: all\n\n  become: true\n  become_method: sudo\n\n  tasks:\n    - name: 1. Update the apt package index and install packages to allow apt to use a repository over HTTPS\n      apt:\n        name: \n          - apt-transport-https\n          - ca-certificates\n          - curl\n          - gnupg\n          - lsb-release\n          - python3-pip\n          - awscli\n        state: latest\n        update_cache: true\n\n    - name: 2. Add Docker\u2019s official GPG key\n      apt_key:\n        url: https://download.docker.com/linux/ubuntu/gpg\n        state: present\n\n    - name: 3. Add Docker Repository\n      apt_repository:\n        repo: deb https://download.docker.com/linux/ubuntu focal stable  # FIXME move to var\n        state: present\n\n    - name: 4. Install docker engine\n      apt:\n        name: docker-ce\n        state: latest\n        update_cache: true\n\n    # Docker post-install steps for ubuntu\n\n    - name: 1. Make sure that group "docker" exists\n      group:\n        name: docker\n        state: present\n\n    - name: 2. Add aws user to docker docker group\n      user:\n        name: ubuntu\n        groups: docker\n        append: true\n')))),(0,o.kt)("h3",{id:"post-processors"},"post-processors"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u041d\u0435 \u043f\u0440\u043e\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043b"))),(0,o.kt)("p",null,"\u0428\u0442\u0443\u043a\u0438 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u043f\u043e\u0441\u043b\u0435 \u0441\u0431\u043e\u0440\u043a\u0438, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u044f \u0432 ",(0,o.kt)("em",{parentName:"p"},"VagrantCloud")," (",(0,o.kt)("em",{parentName:"p"},"docker push"),")"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/karma-git/playground/tree/master/environment/vagrant/ubuntu-gui"},"GitHub repo")))}h.isMDXComponent=!0}}]);