"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[141],{1504:function(a,t,e){var n=e(7294),i=e(7273);i.Z.initialize({startOnLoad:!0});t.Z=function(a){var t=a.chart;return(0,n.useEffect)((function(){i.Z.contentLoaded()}),[]),n.createElement("div",{className:"mermaid"},t)}},8045:function(a,t,e){e.r(t),e.d(t,{frontMatter:function(){return o},contentTitle:function(){return m},metadata:function(){return p},assets:function(){return u},toc:function(){return d},default:function(){return g}});var n=e(7462),i=e(3366),r=(e(7294),e(3905)),l=e(1504),s=["components"],o={title:"Vagrant - DevOps Environment",description:"\u0421\u043e\u0431\u0440\u0430\u043b Linux \u0434\u043b\u044f \u043b\u044e\u0434\u0435\u0439",slug:"vagrant-karma-linux",authors:["a.horbach"],tags:["vagrant","packer","ansible","linux","devops"],image:"https://i.imgur.com/mErPwqL.png",hide_table_of_contents:!1},m="Vagrant - DevOps Environment",p={permalink:"/Andrew-Horbach.github.io-Public/blog/vagrant-karma-linux",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-02-01-karma-linux.md",source:"@site/blog/2021-02-01-karma-linux.md",title:"Vagrant - DevOps Environment",description:"\u0421\u043e\u0431\u0440\u0430\u043b Linux \u0434\u043b\u044f \u043b\u044e\u0434\u0435\u0439",date:"2021-02-01T00:00:00.000Z",formattedDate:"February 1, 2021",tags:[{label:"vagrant",permalink:"/Andrew-Horbach.github.io-Public/blog/tags/vagrant"},{label:"packer",permalink:"/Andrew-Horbach.github.io-Public/blog/tags/packer"},{label:"ansible",permalink:"/Andrew-Horbach.github.io-Public/blog/tags/ansible"},{label:"linux",permalink:"/Andrew-Horbach.github.io-Public/blog/tags/linux"},{label:"devops",permalink:"/Andrew-Horbach.github.io-Public/blog/tags/devops"}],readingTime:1.99,truncated:!0,authors:[{name:"Andrew Horbach",url:"https://github.com/karma-git",imageURL:"https://github.com/karma-git.png",key:"a.horbach"}],prevItem:{title:"Selfmade Vagrant box",permalink:"/Andrew-Horbach.github.io-Public/blog/selfmade-vagrant-box"},nextItem:{title:"AWS Free Tier \u0438 Packer Tutorial",permalink:"/Andrew-Horbach.github.io-Public/blog/aws-ebs-snapshot"}},u={authorsImageUrls:[void 0]},d=[{value:"Inspiration",id:"inspiration",children:[],level:2},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043d\u0430 Windows",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u043d\u0430-windows",children:[],level:2},{value:"VirtualBox Guest Additions",id:"virtualbox-guest-additions",children:[{value:"vbguest vagrant plugin",id:"vbguest-vagrant-plugin",children:[],level:3},{value:"ansible galaxy",id:"ansible-galaxy",children:[],level:3},{value:"\u0421\u0435\u043a\u0440\u0435\u0442\u043d\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442",id:"\u0441\u0435\u043a\u0440\u0435\u0442\u043d\u044b\u0439-\u0432\u0430\u0440\u0438\u0430\u043d\u0442",children:[],level:3}],level:2},{value:"Links",id:"links",children:[],level:2}],c={toc:d};function g(a){var t,o=a.components,m=(0,i.Z)(a,s);return(0,r.kt)("wrapper",(0,n.Z)({},c,m,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"inspiration"},"Inspiration"),(0,r.kt)("p",null,"\u0411\u0443\u043a\u0432\u0430\u043b\u044c\u043d\u043e \u043d\u0435\u0434\u0430\u0432\u043d\u043e ",(0,r.kt)("a",{parentName:"p",href:"blog/selfmade-vagrant-box"},"\u043f\u0438\u0441\u0430\u043b")," \u043f\u0440\u043e \u0441\u0431\u043e\u0440\u043a\u0443 ",(0,r.kt)("inlineCode",{parentName:"p"},"Vagrant"),"-\u0430, ",(0,r.kt)("strong",{parentName:"p"},"\u0434\u043e\u0434\u0435\u043b\u0430\u043b\u044a")," \ud83c\udf89, \u0432 \u0434\u0432\u0443\u0445 \u0432\u0435\u0440\u0441\u0438\u044f\u0445:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0432 \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u043c \u0447\u0435\u0440\u0435\u0437 ssh "),(0,r.kt)("li",{parentName:"ul"},"\u0438 gui, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u044b \u0440\u0430\u0437\u043d\u044b\u0435 desktop \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \ud83d\udcbb")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://asciinema.org/a/58jLHlUsCZA63uGjIClQcX5r0"},(0,r.kt)("img",{parentName:"a",src:"https://asciinema.org/a/58jLHlUsCZA63uGjIClQcX5r0.svg",alt:"asciicast"}))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),'"\u042d\u0442\u0430\u043f\u044b"')),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/karma-git/playground/tree/master/environment/vagrant/build"},"\u0421\u0431\u043e\u0440\u043a\u0430 Packer-\u043e\u043c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/karma-git/playground/tree/master/ansible"},"Ansible")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://app.vagrantup.com/karma-kit"},"Vagrant Cloud")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/karma-git/playground/tree/master/environment/vagrant/examples"},"Vagrantfile examples"))))),(0,r.kt)("p",null,"\u0418\u043b\u0438 \u0441\u0445\u0435\u043c\u0430\u0442\u0438\u0447\u043d\u043e:"),(0,r.kt)(l.Z,{chart:"\n  sequenceDiagram\n    participant Packer\n    participant Vagrant\n    participant Ansible\n    Packer->>Vagrant: Launch tmp VM\n    Note right of Vagrant: !NOTE: at low level Vagrant uses Virtualbox API\n    Vagrant->>Ansible: Configure tmp VM\n    Ansible--\x3e>Vagrant: Done!\n    Vagrant--\x3e>Packer: Done!\n    %% loop Artifact\n    %%     Ansible->>Packer: Create Vagrant box from current VM state.\n    %% end\n    note over Packer: Creates Vagrant box from current VM state.\n    note over Packer: Releases the Vagrant box on Vagrant Cloud.\n",mdxType:"Mermaid"}),(0,r.kt)("h2",{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u043d\u0430-windows"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043d\u0430 Windows"),(0,r.kt)("p",null,"\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044b \u0432\u0430\u0448\u0435\u0439 host OS:"),(0,r.kt)("p",null,"CPU"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"WMIC CPU Get DeviceID,NumberOfCores,NumberOfLogicalProcessors\n")),(0,r.kt)("p",null,"\u0412\u0435\u0440\u0441\u0438\u044e OS \u0438 \u043e\u0431\u0449\u0438\u0439 \u043e\u0431\u044a\u0435\u043c RAM:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'systeminfo |findstr /c:"OS Name" /c:"Total Physical Memory"\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:e(7629).Z})),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),'"\u0420\u0435\u043a\u043e\u043c\u0435\u0434\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044b"')),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"2 vpcu"),(0,r.kt)("li",{parentName:"ul"},"4Gi RAM")))),(0,r.kt)("p",null,"\u0412\u0430\u043c \u043f\u043e\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.virtualbox.org/wiki/Downloads"},"VirtualBox")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.vagrantup.com/docs/installation"},"Vagrant"))),(0,r.kt)("h2",{id:"virtualbox-guest-additions"},"VirtualBox Guest Additions"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/cd/E36500_01/E36502/html/qs-guest-additions.html"},"6.4. Installing the VirtualBox Guest Additions"))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u042d\u0442\u043e, \u043f\u043e\u0436\u0430\u043b\u0443\u0439, \u0441\u0430\u043c\u043e\u0435 \u0431\u043e\u043b\u044c\u043d\u043e\u0435 \u0432 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 virtualbox - \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u0433\u0443\u044e \u043d\u0430 \u0432\u0435\u0441\u044c \u044d\u043a\u0440\u0430\u043d. \u0422\u0443\u0442 \u044f \u043d\u0435 \u0431\u0443\u0434\u0443 \u0432\u0430\u043c \u0434\u0430\u0432\u0430\u0442\u044c \u043d\u0438\u043a\u0430\u043a\u0438\u0445 \u043e\u0431\u0435\u0449\u0430\u043d\u0438\u0439, \u043c\u043e\u0433\u0443 \u043b\u0438\u0448\u044c \u043d\u0430\u043a\u0438\u043d\u0443\u0442\u044c \u0438\u0434\u0435\u0438 \u043a\u0430\u043a \u0432\u0430\u043c \u0441 \u044d\u0442\u0438\u043c \u0441\u043f\u0440\u0430\u0432\u0438\u0442\u044c\u0441\u044f:"))),(0,r.kt)("h3",{id:"vbguest-vagrant-plugin"},"vbguest vagrant plugin"),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u0423 \u043c\u0435\u043d\u044f \u0441\u0440\u0430\u0431\u043e\u0442\u0430\u043b\u043e \u043b\u0438\u0448\u044c \u043e\u0434\u0438\u043d \u0440\u0430\u0437 \ud83d\udc80"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"vagrant plugin uninstall vagrant-vbguest\nvagrant destroy -f\nvagrant up\nvagrant plugin install vagrant-vbguest\nvagrant vbguest --do install\n")),(0,r.kt)("h3",{id:"ansible-galaxy"},"ansible galaxy"),(0,r.kt)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043c\u043e\u0439 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/karma-git/playground/tree/master/environment/vagrant/examples/karma-kit-devops-gui"},"\u043f\u0440\u0438\u043c\u0435\u0440")," - Guest Additions \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442 ansible \u0440\u043e\u043b\u044c. "),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u0413\u0430\u0440\u0430\u043d\u0442\u0438\u044e, \u0447\u0442\u043e \u0443 \u0432\u0430\u0441 \u0432\u0441\u0435 \u0441\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0434\u0430\u0442\u044c \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u043d\u043e \u0441\u043a\u043e\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043e \u043f\u043e\u043d\u0430\u0434\u043e\u0431\u044f\u0442\u0441\u044f \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0435 \u0442\u0435\u043b\u043e\u0434\u0432\u0438\u0436\u0435\u043d\u0438\u044f."))),(0,r.kt)("h3",{id:"\u0441\u0435\u043a\u0440\u0435\u0442\u043d\u044b\u0439-\u0432\u0430\u0440\u0438\u0430\u043d\u0442"},"\u0421\u0435\u043a\u0440\u0435\u0442\u043d\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442"),(0,r.kt)("p",null,"\u0412\u0441\u0435\u0433\u0434\u0430 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0433\u0443\u0433\u043b\u0438\u0442\u044c / \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u044e\u0442\u0443\u0431 \u043d\u0430 \u0442\u0435\u043c\u0443 \u043a\u0430\u043a \u0441\u0434\u0435\u043b\u0430\u0442\u044c ",(0,r.kt)("inlineCode",{parentName:"p"},"Virtualbox")," \u043d\u0430 \u0432\u0435\u0441\u044c \u044d\u043a\u0440\u0430\u043d \ud83d\ude09"),(0,r.kt)("p",null,"\u0423\u0434\u0430\u0447\u0438 \u0438 \u0434\u0430 \u043f\u0440\u0438\u0431\u0443\u0434\u0435\u0442 \u0441 \u0432\u0430\u043c\u0438 \u0441\u0438\u043b\u0430!"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u0415\u0441\u043b\u0438 \u043d\u0435 \u0441\u043c\u043e\u0442\u0440\u0435\u043b\u0438, \u0438\u0441\u043f\u0440\u0430\u0432\u044c\u0442\u0435\u0441\u044c:"),(0,r.kt)("div",{class:"video-wrapper"},(0,r.kt)("iframe",((t={height:"540",frameborder:"0",allowfullscreen:!0,width:"50%",src:"https://www.youtube.com/embed/n1F_MfLRlX0"}).frameborder="0",t.allowfullscreen=!0,t))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Toggle me!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\ud83e\udd96 \ud83e\udd95\n"))),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Links")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u0421\u0441\u044b\u043b\u043a\u0438 / \u0421\u0442\u0430\u0442\u044c\u0438 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u043e\u043c\u043e\u0433\u043b\u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0438\u0434\u0435\u044e:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Links"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.vagrantup.com/docs/boxes"},"Vagrant - Boxes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.packer.io/plugins/post-processors/vagrant/vagrant-cloud"},"Packer - Vagrant")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://opensource.com/article/18/5/manage-your-workstation-ansible-part-3"},"Manage your workstation with Ansible: Configure desktop settings")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://linuxconfig.org/ubuntu-20-04-gui-installation"},"Ubuntu 20.04 GUI installation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dev.to/mattdark/a-custom-vagrant-box-with-packer-13ke"},"A custom Vagrant box with Packer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.popstas.ru/blog/2017/03/26/packer-create-vagrant-box-from-ansible-playbook/"},"Packer: \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u0441\u0432\u043e\u0438 vagrant box \u0438 docker image \u0438\u0437 \u043e\u0434\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0430")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://subscription.packtpub.com/book/virtualization-and-cloud/9781786464910/1/ch01lvl1sec12/enabling-virtualbox-guest-additions-in-vagrant"},"Enabling VirtualBox Guest Additions in Vagrant")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.virtualbox.org/manual/ch08.html#vboxmanage-cmd-overview"},"VBoxManage"))),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"github"),":"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/sys0dm1n/ansible-ubuntu-desktop"},"sys0dm1n/ansible-ubuntu-desktop")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/pantarei/ansible-playbook-ubuntu-desktop"},"pantarei/ansible-playbook-ubuntu-desktop")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/PeterMosmans/ansible-role-virtualbox-guest"},"PeterMosmans/ansible-role-virtualbox-guest")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/dotless-de/vagrant-vbguest/issues/316"},"dotless-de/vagrant-vbguest/issues/316")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/mesaguy/ansible-hashicorp"},"mesaguy/ansible-hashicorp")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/andrewrothstein/ansible-starship"},"andrewrothstein/ansible-starship")))))))}g.isMDXComponent=!0},7629:function(a,t,e){t.Z=e.p+"assets/images/vagrant-windows-61cd85f8a506ff1c3ebe4191a5bc4363.png"}}]);