"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[6366],{8936:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"selfmade-vagrant-box","metadata":{"permalink":"/Andrew-Horbach.github.io-Public/blog/selfmade-vagrant-box","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-01-28-self-vagrant-box.md","source":"@site/blog/2022-01-28-self-vagrant-box.md","title":"Selfmade Vagrant box","description":"VagrantBox \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u0442\u0441\u044f \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043a\u043e \u0436\u0435 \u043f\u0440\u043e\u0441\u0442\u043e \u043a\u0430\u043a \u0438 DockerImage!","date":"2022-01-28T00:00:00.000Z","formattedDate":"January 28, 2022","tags":[{"label":"vagrant","permalink":"/Andrew-Horbach.github.io-Public/blog/tags/vagrant"},{"label":"packer","permalink":"/Andrew-Horbach.github.io-Public/blog/tags/packer"},{"label":"ansible","permalink":"/Andrew-Horbach.github.io-Public/blog/tags/ansible"}],"readingTime":1.75,"truncated":true,"authors":[{"name":"Andrew Horbach","url":"https://github.com/karma-git","imageURL":"https://github.com/karma-git.png","key":"a.horbach"}],"nextItem":{"title":"GoodNotes - Prometheus","permalink":"/Andrew-Horbach.github.io-Public/blog/goodnotes-prometheus"}},"content":"\x3c!-- import tabs --\x3e\\nimport Tabs from \'@theme/Tabs\';\\nimport TabItem from \'@theme/TabItem\';\\n\\n\u041d\u0430 VagrantCloud \u043d\u0435 \u043d\u0430\u0448\u0435\u043b \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u044b\u0445 box-\u043e\u0432 \u0441 GUI.\\n\\n## \u041f\u0440\u043e\u0446\u0435\u0441\u0441\\n\\n:::info\\n\u0411\u0443\u0434\u0443 \u0434\u0435\u043b\u0430\u0442\u044c \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0438 \u0441 _docker_\\n:::\\n\\n### config file\\n\\n\u041e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u043c \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e \u043d\u0430\u0448\u0435\u0433\u043e VagrantBox (_DockerImage_) \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 `.hcl` (_terraform_)\\n\\n```hcl\\nsource \\"vagrant\\" \\"ubuntu\\" {\\n  add_force    = true\\n  communicator = \\"ssh\\"\\n  provider     = \\"virtualbox\\"\\n  source_path  = \\"ubuntu/focal64\\"\\n}\\n\\nbuild {\\n  name    = \\"learn-packer\\"\\n  sources = [\\n    \\"source.vagrant.ubuntu\\"\\n  ]\\n}\\n```\\n\\n:::tip\\n\u041f\u043e\u043b\u0435\u0437\u043d\u044b\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b:\\n```shell\\npacker validate packer.hcl  # \u0432\u0430\u043b\u0438\u0434\u0438\u0440\u0443\u0435\u0442 \u0444\u0430\u0439\u043b\\npacker fmt .                # \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u0443\u0435\u0442 \u0444\u0430\u0439\u043b\u044b, \u0438 \u043a\u0430\u0436\u0435\u0442\u0441\u044f, \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044e\\n```\\n:::\\n\\n### build\\n\\n\u0421 \u043f\u043e\u043c\u043e\u0449\u044c\u044e [`packer`](https://www.packer.io/) (_docker engine_) \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u043c \u043e\u0431\u0440\u0430\u0437.\\n\\n```shell\\npacker build packer.hcl\\n```\\n\\n\u0427\u0435\u0440\u0435\u0437 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0432 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 `learn-packer` \u043f\u043e\u044f\u0432\u0438\u0442\u0441\u044f \u0444\u0430\u0439\u043b `.box` (_docker_image_)\\n\\n### push\\n\\n\u0417\u0430\u043b\u0438\u0432\u0430\u0435\u043c \u043f\u043e\u043b\u0443\u0447\u0438\u0432\u0448\u0438\u0439\u0441\u044f \u0444\u0430\u0439\u043b \u043d\u0430 [VagrantCloud](https://app.vagrantup.com/boxes/search). \u041f\u043e\u043d\u0430\u0434\u043e\u0431\u0438\u0442\u044c\u0441\u044f \u0441\u043e\u0431\u0440\u0430\u0442\u044c \u0445\u044d\u0448-\u0441\u0443\u043c\u043c\u0443 \u0444\u0430\u0439\u043b\u0430, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0447\u0435\u0440\u0435\u0437 `md5`\\n\\n### provisioner\\n\\n:::note\\n\u041b\u044e\u0431\u0438\u043c\u044b\u0439 \u043f\u0440\u043e\u0432\u0438\u0436\u0435\u043d\u0435\u0440 - ansible, \u043d\u043e \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c `shell`\\n:::\\n\\n<Tabs defaultValue=\\"hcl\\">\\n<TabItem value=\\"hcl\\" label=\\"packer.hcl\\">\\n\\n```hcl\\nsource \\"vagrant\\" \\"ubuntu\\" {\\n  add_force    = true\\n  communicator = \\"ssh\\"\\n  provider     = \\"virtualbox\\"\\n  source_path  = \\"ubuntu/focal64\\"\\n}\\n\\nbuild {\\n  name    = \\"learn-packer\\"\\n  sources = [\\n    \\"source.vagrant.ubuntu\\"\\n  ]\\n  provisioner \\"ansible\\" {\\n    playbook_file = \\"./ansible/packer-playbook.yml\\"\\n  }\\n}\\n```\\n\\n</TabItem>\\n<TabItem value=\\"yml\\" label=\\"packer-playbook.yml\\">\\n\\n``` yml\\n---\\n\\n- name: install docker engine ubuntu\\n  hosts: all\\n\\n  become: true\\n  become_method: sudo\\n\\n  tasks:\\n    - name: 1. Update the apt package index and install packages to allow apt to use a repository over HTTPS\\n      apt:\\n        name: \\n          - apt-transport-https\\n          - ca-certificates\\n          - curl\\n          - gnupg\\n          - lsb-release\\n          - python3-pip\\n          - awscli\\n        state: latest\\n        update_cache: true\\n\\n    - name: 2. Add Docker\u2019s official GPG key\\n      apt_key:\\n        url: https://download.docker.com/linux/ubuntu/gpg\\n        state: present\\n\\n    - name: 3. Add Docker Repository\\n      apt_repository:\\n        repo: deb https://download.docker.com/linux/ubuntu focal stable  # FIXME move to var\\n        state: present\\n\\n    - name: 4. Install docker engine\\n      apt:\\n        name: docker-ce\\n        state: latest\\n        update_cache: true\\n\\n    # Docker post-install steps for ubuntu\\n\\n    - name: 1. Make sure that group \\"docker\\" exists\\n      group:\\n        name: docker\\n        state: present\\n\\n    - name: 2. Add aws user to docker docker group\\n      user:\\n        name: ubuntu\\n        groups: docker\\n        append: true\\n```\\n\\n</TabItem>\\n</Tabs>\\n\\n### post-processors\\n\\n:::caution\\n\u041d\u0435 \u043f\u0440\u043e\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043b\\n:::\\n\\n\u0428\u0442\u0443\u043a\u0438 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u043f\u043e\u0441\u043b\u0435 \u0441\u0431\u043e\u0440\u043a\u0438, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u044f \u0432 *VagrantCloud* (_docker push_)\\n\\n[GitHub repo](https://github.com/karma-git/playground/tree/master/environment/vagrant/ubuntu-gui)\\n\\n\x3c!--truncate--\x3e"},{"id":"goodnotes-prometheus","metadata":{"permalink":"/Andrew-Horbach.github.io-Public/blog/goodnotes-prometheus","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-03-06-goodnotes-prom.md","source":"@site/blog/2021-03-06-goodnotes-prom.md","title":"GoodNotes - Prometheus","description":"\u0437\u0430\u043c\u0435\u0442\u043a\u0438 \u043d\u0430 iPad, Prometheus","date":"2021-03-06T00:00:00.000Z","formattedDate":"March 6, 2021","tags":[{"label":"docops","permalink":"/Andrew-Horbach.github.io-Public/blog/tags/docops"},{"label":"ipad","permalink":"/Andrew-Horbach.github.io-Public/blog/tags/ipad"},{"label":"observability","permalink":"/Andrew-Horbach.github.io-Public/blog/tags/observability"},{"label":"monitoring","permalink":"/Andrew-Horbach.github.io-Public/blog/tags/monitoring"},{"label":"prometheus","permalink":"/Andrew-Horbach.github.io-Public/blog/tags/prometheus"}],"readingTime":1.005,"truncated":false,"authors":[{"name":"Andrew Horbach","url":"https://github.com/karma-git","imageURL":"https://github.com/karma-git.png","key":"a.horbach"}],"prevItem":{"title":"Selfmade Vagrant box","permalink":"/Andrew-Horbach.github.io-Public/blog/selfmade-vagrant-box"},"nextItem":{"title":"CKA","permalink":"/Andrew-Horbach.github.io-Public/blog/cka-commitment"}},"content":"## iPad. Long Story Short\\n\\n\u041e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043d\u0435\u0434\u0430\u0432\u043d\u043e \u0437\u0430\u0438\u043c\u0435\u043b iPad + Pencil + [Logitech Combo Touch](https://www.logitech.com/ru-ru/products/ipad-keyboards/combo-touch.html) \u0434\u043b\u044f \u0440\u0438\u0441\u043e\u0432\u0430\u043d\u0438\u044f \u0440\u0438\u0441\u0443\u043d\u043a\u043e\u0432, \u0437\u0430\u043c\u0435\u0442\u043e\u043a \u0438 \u043a\u043e\u043d\u0441\u043f\u0435\u043a\u0442\u043e\u0432, \u043b\u0435\u0433\u043a\u043e\u0432\u0435\u0441\u043d\u043e\u0439 \u0437\u0430\u043c\u0435\u043d\u0435 \u043d\u043e\u0443\u0442\u0430 \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u0438\u043d\u0446\u0438\u0434\u0435\u043d\u0442\u043e\u0432.\\n- \u0440\u0438\u0441\u043e\u0432\u0430\u043d\u0438\u0435 -> \u043a\u0443\u043b \u0441 [procreate](https://apps.apple.com/us/app/procreate/id425073498)\\n- \u0437\u0430\u043c\u0435\u0442\u043a\u0438 / \u043a\u043e\u043d\u0441\u043f\u0435\u043a\u0442 -> \u043d\u0440\u0430\u0432\u0438\u0442\u044c\u0441\u044f \u0441 [goodnotes](https://www.goodnotes.com/)\\n- \u0437\u0430\u043c\u0435\u043d\u0430 \u043d\u043e\u0443\u0442\u0430 -> \u0432 Logitech \u043e\u0442\u0432\u0440\u0430\u0442\u043d\u044b\u0439 \u043a\u043b\u0438\u043a \u043d\u0430 \u0442\u0430\u0447 \u0438 \u043a\u0443\u0447\u0430 \u043f\u0440\u043e\u0431\u043b\u0435\u043c \u0441\u0430\u043c\u043e\u0433\u043e iPad. \u041d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043f\u0440\u043e\u0435\u043a\u0442 [code-server](https://github.com/coder/code-server) - \u044f \u043c\u043e\u0433\u0443 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0437\u0430 iPad. \u041e\u0434\u043d\u0430\u043a\u043e \u0441\u0447\u0438\u0442\u0430\u044e, \u0447\u0442\u043e \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043f\u0443\u043d\u043a\u0442\u0443 \u0441\u043a\u043e\u0440\u0435\u0435 \u043d\u0435\u0443\u0434.\\n\\n## GoodNotes\\n\\n\u0421\u043e\u0444\u0442\u0438\u043d\u0430 \u043a\u0430\u043a \u0431\u044b \u043f\u0440\u0438\u043c\u0438\u0442\u0438\u0432\u043d\u0430\u044f, \u043d\u043e \u043c\u043e\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0432\u043e\u0442 \u0442\u0430\u043a\u0438\u0435 \u043a\u043e\u043d\u0441\u043f\u0435\u043a\u0442\u044b *from scratch*\\n\\n![img](https://ah-public-pictures.hb.bizmrg.com/sre/goodnotes-prom.jpg)\\n\\n\u041b\u0438\u0431\u043e \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044c \u0432 \u044d\u0442\u0443 \u0441\u043e\u0444\u0442\u0438\u043d\u0443 `PDF`-\u044b \u0438 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0443\u0436\u0435 \u0438\u0445:\\n\\n![img](https://ah-public-pictures.hb.bizmrg.com/sre/goodnotes-gounited.jpg)\\n\\n:::note\\n\\n:pencil2: \u041c\u043d\u0435 \u0441\u043b\u043e\u0436\u043d\u043e \u044d\u0442\u043e \u043e\u0431\u044a\u044f\u0441\u043d\u0438\u0442\u044c, \u043d\u043e \u0435\u0441\u0442\u044c \u0447\u0442\u043e-\u0442\u043e \u0442\u0430\u043a\u0442\u0438\u043b\u044c\u043d\u043e \u043f\u0440\u0438\u044f\u0442\u043d\u043e\u0435 \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e\u0431\u044b \u043f\u0438\u0441\u0430\u0442\u044c \u0447\u0442\u043e-\u0442\u043e \u043e\u0442 \u0440\u0443\u043a\u0438, \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u043a\u043e\u043d\u0441\u043f\u0435\u043a\u0442 \u043d\u0435 \u043f\u0440\u0435\u0432\u0440\u0430\u0442\u0438\u0442\u044c\u0441\u044f \u0432 \u043c\u0443\u0441\u043e\u0440.\\n\\n\u0425\u043e\u0447\u0435\u0442\u0441\u044f \u0441\u043d\u043e\u0432\u0430 \u043f\u043e\u0439\u0442\u0438 \u0432 \u0443\u043d\u0438\u0432\u0435\u0440 :books:\\n:::\\n\\n## Links\\n\\n- [How to create good-looking notes on the iPad](https://medium.goodnotes.com/how-to-create-good-looking-notes-on-the-ipad-50289cb37d90)\\n- [How to Mark Up a PDF on the iPad](https://medium.goodnotes.com/how-to-markup-pdf-ipad-dc6b25c144bb)\\n\\n**TechWorld with Nana** about prometheus:\\n- [How Prometheus Monitoring works | Prometheus Architecture explained](https://www.youtube.com/watch?v=h4Sl21AKiDg)\\n- [Setup Prometheus Monitoring on Kubernetes using Helm and Prometheus Operator | Part 1](https://www.youtube.com/watch?v=QoDqxm7ybLc)\\n- [Prometheus Monitoring - Steps to monitor third-party apps using Prometheus Exporter | Part 2](https://www.youtube.com/watch?v=mLPg49b33sA)\\n\\n**Go United**\\n- [Article](https://karma-git.github.io/Andrew-Horbach.github.io-Public/docs/ProgrammingLanguages/go/go-init)\\n- [Repo](https://github.com/karma-git/epam-golang-united)"},{"id":"cka-commitment","metadata":{"permalink":"/Andrew-Horbach.github.io-Public/blog/cka-commitment","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-02-15-cka-commitment.md","source":"@site/blog/2021-02-15-cka-commitment.md","title":"CKA","description":"\u043d\u0430\u0447\u0430\u043b \u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c\u0441\u044f \u043a \u044d\u043a\u0437\u0430\u043c\u0435\u043d\u0443","date":"2021-02-15T00:00:00.000Z","formattedDate":"February 15, 2021","tags":[{"label":"vagrant","permalink":"/Andrew-Horbach.github.io-Public/blog/tags/vagrant"},{"label":"linux","permalink":"/Andrew-Horbach.github.io-Public/blog/tags/linux"},{"label":"docker","permalink":"/Andrew-Horbach.github.io-Public/blog/tags/docker"},{"label":"devops","permalink":"/Andrew-Horbach.github.io-Public/blog/tags/devops"},{"label":"k8s","permalink":"/Andrew-Horbach.github.io-Public/blog/tags/k-8-s"},{"label":"kubernetes","permalink":"/Andrew-Horbach.github.io-Public/blog/tags/kubernetes"}],"readingTime":1.78,"truncated":true,"authors":[{"name":"Andrew Horbach","url":"https://github.com/karma-git","imageURL":"https://github.com/karma-git.png","key":"a.horbach"}],"prevItem":{"title":"GoodNotes - Prometheus","permalink":"/Andrew-Horbach.github.io-Public/blog/goodnotes-prometheus"},"nextItem":{"title":"Vagrant - DevOps Environment","permalink":"/Andrew-Horbach.github.io-Public/blog/vagrant-karma-linux"}},"content":"\u0411\u0443\u0434\u0443 \u043a\u0440\u0430\u0442\u043e\u043a, \u0443 \u0432\u0430\u0441 \u043c\u0430\u043b\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438: Certified Kubernetes Administrator [(CKA)](https://www.cncf.io/certification/cka/) \u043e\u0434\u0438\u043d \u0438\u0437 \u043a\u0440\u0443\u0442\u0435\u0439\u0448\u0438\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432.\\n\\n## Articles\\n\\n\u041d\u0430\u0448\u0435\u043b \u043f\u0430\u0440\u0443 \u0445\u043e\u0440\u043e\u0448\u0438\u0445 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432, \u0447\u0442\u043e\u0431\u044b \u0441 \u0447\u0435\u0433\u043e \u043d\u0430\u0447\u0430\u0442\u044c:\\n- [devopscube about CKA](https://devopscube.com/cka-exam-study-guide/) - \u043e\u0447\u0435\u043d\u044c \u043c\u043d\u043e\u0433\u043e \u0445\u043e\u0440\u043e\u0448\u0438\u0445 \u0441\u043e\u0432\u0435\u0442\u043e\u0432 \u0438 \u043a\u0440\u043e\u0441\u0441-\u0441\u0441\u044b\u043b\u043e\u043a, \u0434\u043e\u0431\u0430\u0432\u0438\u043b \u0441\u0430\u0439\u0442 \u0432 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438\\n- [medium](https://medium.com/4th-coffee/passing-the-cka-certified-kubernetes-administrator-exam-in-70-minutes-a-detailed-guide-dc945ba4065d) - \u043d\u0430 \u043a\u043e\u043d\u0442\u0440\u0430\u0441\u0442\u0435 \u0441 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0439 \u0441\u0442\u0430\u0442\u044c\u0435\u0439 \u043a\u0430\u043a-\u0442\u043e \u0431\u043b\u0435\u043a\u043b\u043e\\n- [udemy](https://www.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/?ranMID=39197&ranEAID=AfpokvaRFDA&ranSiteID=AfpokvaRFDA-sXs.MeTftBrEzGs26ywPuw&utm_source=aff-campaign&LSNPUBID=AfpokvaRFDA&utm_medium=udemyads) - \u0434\u043b\u044f \u0432\u0438\u0437\u0443\u0430\u043b\u043e\u0432, \u0443\u0447\u0438\u0442\u0435\u043b\u044c \u0438\u0437 \ud83c\uddee\ud83c\uddf3 , \u043a\u0443\u0440\u0441 \u043a\u0430\u043a \u0432\u0441\u0435\u0433\u0434\u0430 \u043b\u0443\u0447\u0448\u0435 \u0431\u0440\u0430\u0442\u044c \u0437\u0430 999\u0440, \u043d\u043e \u043c\u043e\u0436\u043d\u043e \u043d\u0430\u0439\u0442\u0438 \u0438 \u043d\u0430 \u043f\u0438\u0440\u0430\u0442\u0441\u043a\u0438\u0445 \u0440\u0435\u0441\u0443\u0440\u0441\u0430\u0445\\n\\n## About Exam\\n\\n\u041c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c:\\n- \u0412\u0442\u043e\u0440\u043e\u0439 \u043c\u043e\u043d\u0438\u0442\u043e\u0440\\n- https://kubernetes.io/*  (\u0434\u0430, \u044d\u0442\u043e \u0432\u0430\u0439\u043b\u0434\u043a\u0430\u0440\u0434, \u043c\u043e\u0436\u043d\u043e \u0447\u0438\u0442\u0430\u0442\u044c \u0434\u043e\u043a\u0443 \u0438 \u0431\u043b\u043e\u0433)\\n- https://github.com/kubernetes/\\n\\n\u0413\u043e\u0432\u043e\u0440\u044f\u0442 \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442\u044c [`the hard way`](https://github.com/kelseyhightower/kubernetes-the-hard-way) \u043d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e.\\n\\n| Theme | percentage | comment |\\n| ----- | ---------- | ------- |\\n| Cluster Architecture, Installation & Configuration | 25 % | `kubeadm`, Container Runtime Interface (CRI) |\\n| Workloads & Scheduling | 15 % | `workloads` (configure po,deploy,sts,job,cj,ds and etc.); `nodes` - (drain,cordon,nodeselector,affinity,taint) |\\n| Services & Networking | 20 % | Container Network Interface (CNI) (networking, connectivity between pods - policy, CoreDNS, etc.) |\\n| Storage | 10 % | Container Storage Interface (CSI) - sc,pvc,pv - extend pv and etc (?ceph) |\\n| RBAC | X % | role based access |\\n| Troubleshooting | 30 % | see spoiler |\\n\\n<details>\\n  <summary>Toggle me!</summary>\\n\\n  - What if a node is not ready?\\n  - What if a pod is frequently restarting, and you need to figure out why?\\n  - What if all CPU resource is used up and you need to find out which pod consumes the most and why?\\n  - How to monitor certain resources?\\n  - How to troubleshoot a failed component?\\n  \\n  :::info\\n  For example, if you want to monitor the CPU resource each pod uses or each node uses, do you know what keyword to search in the official documentation?\\n  :::\\n\\n</details>\\n\\n## Cluster Architecture, Installation & Configuration\\n\\n\u0417\u0430\u0432\u0435\u043b \u0443 \u0441\u0435\u0431\u044f \u0434\u043e\u043c\u0430 \u043a\u043b\u0430\u0441\u0442\u0435\u0440, \u043c\u0430\u0441\u0442\u0435\u0440 \u0441 \u043e\u0434\u043d\u0438\u043c \u0432\u043e\u0440\u043a\u0435\u0440\u043e\u043c \u0431\u0435\u0433\u0443\u0442 \u043f\u043e\u0432\u0435\u0440\u0445 `ubuntu-desktop` \u043c\u043e\u0435\u0433\u043e \u0441\u0442\u0430\u0440\u043e\u0433\u043e \u043d\u043e\u0443\u0442\u0431\u0443\u043a\u0430 (4vcpu, 8gb ram), \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e `vagrant+virtualbox`, `containerd` \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0440\u0430\u043d\u0442\u0430\u0439\u043c\u0430 (CRI).\\n\\n\u041c\u044b\u0441\u043b\u044c \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e \u0432 \u043b\u044e\u0431\u043e\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u043c\u043e\u0433\u0443 \u0441 \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u0442\u0435\u043b\u043e\u0434\u0432\u0438\u0436\u0435\u043d\u0438\u044f\u043c\u0438 \u0434\u043e\u043a\u0438\u043d\u0443\u0442\u044c \u0432\u043e\u0440\u043a\u0435\u0440\u043e\u0432 \u0441 \u0434\u0440\u0443\u0433\u0438\u0445 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u043e\u0432 \u0432 \u0434\u043e\u043c\u0430\u0448\u043d\u0435\u0439 \u0441\u0435\u0442\u0438.\\n\\n\u0412\u043e\u0442 [\u0441\u0441\u044b\u043b\u043a\u0430](https://github.com/karma-git/playground/tree/master/environment/vagrant/k8s-cluster) \u043d\u0430 \u043a\u043e\u0434 \u0438 \u0441\u0445\u0435\u043c\u043a\u0430.\\n\\n![img](./static/kubeadm.jpeg)\\n\\n\x3c!--truncate--\x3e"},{"id":"vagrant-karma-linux","metadata":{"permalink":"/Andrew-Horbach.github.io-Public/blog/vagrant-karma-linux","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-02-01-karma-linux.md","source":"@site/blog/2021-02-01-karma-linux.md","title":"Vagrant - DevOps Environment","description":"\u0421\u043e\u0431\u0440\u0430\u043b Linux \u0434\u043b\u044f \u043b\u044e\u0434\u0435\u0439","date":"2021-02-01T00:00:00.000Z","formattedDate":"February 1, 2021","tags":[{"label":"vagrant","permalink":"/Andrew-Horbach.github.io-Public/blog/tags/vagrant"},{"label":"packer","permalink":"/Andrew-Horbach.github.io-Public/blog/tags/packer"},{"label":"ansible","permalink":"/Andrew-Horbach.github.io-Public/blog/tags/ansible"},{"label":"linux","permalink":"/Andrew-Horbach.github.io-Public/blog/tags/linux"},{"label":"devops","permalink":"/Andrew-Horbach.github.io-Public/blog/tags/devops"}],"readingTime":1.99,"truncated":true,"authors":[{"name":"Andrew Horbach","url":"https://github.com/karma-git","imageURL":"https://github.com/karma-git.png","key":"a.horbach"}],"prevItem":{"title":"CKA","permalink":"/Andrew-Horbach.github.io-Public/blog/cka-commitment"},"nextItem":{"title":"AWS Free Tier \u0438 Packer Tutorial","permalink":"/Andrew-Horbach.github.io-Public/blog/aws-ebs-snapshot"}},"content":"## Inspiration\\n\\n\u0411\u0443\u043a\u0432\u0430\u043b\u044c\u043d\u043e \u043d\u0435\u0434\u0430\u0432\u043d\u043e [\u043f\u0438\u0441\u0430\u043b](blog/selfmade-vagrant-box) \u043f\u0440\u043e \u0441\u0431\u043e\u0440\u043a\u0443 `Vagrant`-\u0430, **\u0434\u043e\u0434\u0435\u043b\u0430\u043b\u044a** :tada:, \u0432 \u0434\u0432\u0443\u0445 \u0432\u0435\u0440\u0441\u0438\u044f\u0445:\\n\\n- \u0432 \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u043c \u0447\u0435\u0440\u0435\u0437 ssh \\n- \u0438 gui, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u044b \u0440\u0430\u0437\u043d\u044b\u0435 desktop \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f :computer:\\n\\n\x3c!-- TODO: codeserver? --\x3e\\n[![asciicast](https://asciinema.org/a/58jLHlUsCZA63uGjIClQcX5r0.svg)](https://asciinema.org/a/58jLHlUsCZA63uGjIClQcX5r0)\\n\\n:::info \\"\u042d\u0442\u0430\u043f\u044b\\"\\n\\n- [\u0421\u0431\u043e\u0440\u043a\u0430 Packer-\u043e\u043c](https://github.com/karma-git/playground/tree/master/environment/vagrant/build)\\n- [Ansible](https://github.com/karma-git/playground/tree/master/ansible)\\n- [Vagrant Cloud](https://app.vagrantup.com/karma-kit)\\n- [Vagrantfile examples](https://github.com/karma-git/playground/tree/master/environment/vagrant/examples)\\n\\n:::\\n\\n\u0418\u043b\u0438 \u0441\u0445\u0435\u043c\u0430\u0442\u0438\u0447\u043d\u043e:\\n\\nimport Mermaid from \'@theme/Mermaid\';\\n\\n<Mermaid chart={`\\n  sequenceDiagram\\n    participant Packer\\n    participant Vagrant\\n    participant Ansible\\n    Packer->>Vagrant: Launch tmp VM\\n    Note right of Vagrant: !NOTE: at low level Vagrant uses Virtualbox API\\n    Vagrant->>Ansible: Configure tmp VM\\n    Ansible--\x3e>Vagrant: Done!\\n    Vagrant--\x3e>Packer: Done!\\n    %% loop Artifact\\n    %%     Ansible->>Packer: Create Vagrant box from current VM state.\\n    %% end\\n    note over Packer: Creates Vagrant box from current VM state.\\n    note over Packer: Releases the Vagrant box on Vagrant Cloud.\\n`}/>\\n\\n## \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043d\u0430 Windows \\n\\n\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044b \u0432\u0430\u0448\u0435\u0439 host OS:\\n\\nCPU\\n```powershell\\nWMIC CPU Get DeviceID,NumberOfCores,NumberOfLogicalProcessors\\n```\\n\u0412\u0435\u0440\u0441\u0438\u044e OS \u0438 \u043e\u0431\u0449\u0438\u0439 \u043e\u0431\u044a\u0435\u043c RAM:\\n```powershell\\nsysteminfo |findstr /c:\\"OS Name\\" /c:\\"Total Physical Memory\\"\\n```\\n![img](static/vagrant-windows.png)\\n\\n:::tip \\"\u0420\u0435\u043a\u043e\u043c\u0435\u0434\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044b\\"\\n- 2 vpcu\\n- 4Gi RAM\\n:::\\n\\n\u0412\u0430\u043c \u043f\u043e\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f:\\n- [VirtualBox](https://www.virtualbox.org/wiki/Downloads)\\n- [Vagrant](https://www.vagrantup.com/docs/installation)\\n\\n## VirtualBox Guest Additions\\n\\n> [6.4. Installing the VirtualBox Guest Additions](https://docs.oracle.com/cd/E36500_01/E36502/html/qs-guest-additions.html)\\n\\n:::info\\n\\n\u042d\u0442\u043e, \u043f\u043e\u0436\u0430\u043b\u0443\u0439, \u0441\u0430\u043c\u043e\u0435 \u0431\u043e\u043b\u044c\u043d\u043e\u0435 \u0432 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 virtualbox - \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u0433\u0443\u044e \u043d\u0430 \u0432\u0435\u0441\u044c \u044d\u043a\u0440\u0430\u043d. \u0422\u0443\u0442 \u044f \u043d\u0435 \u0431\u0443\u0434\u0443 \u0432\u0430\u043c \u0434\u0430\u0432\u0430\u0442\u044c \u043d\u0438\u043a\u0430\u043a\u0438\u0445 \u043e\u0431\u0435\u0449\u0430\u043d\u0438\u0439, \u043c\u043e\u0433\u0443 \u043b\u0438\u0448\u044c \u043d\u0430\u043a\u0438\u043d\u0443\u0442\u044c \u0438\u0434\u0435\u0438 \u043a\u0430\u043a \u0432\u0430\u043c \u0441 \u044d\u0442\u0438\u043c \u0441\u043f\u0440\u0430\u0432\u0438\u0442\u044c\u0441\u044f:\\n\\n:::\\n\\n### vbguest vagrant plugin\\n\\n:::danger\\n\u0423 \u043c\u0435\u043d\u044f \u0441\u0440\u0430\u0431\u043e\u0442\u0430\u043b\u043e \u043b\u0438\u0448\u044c \u043e\u0434\u0438\u043d \u0440\u0430\u0437 :skull:\\n:::\\n\\n```shell\\nvagrant plugin uninstall vagrant-vbguest\\nvagrant destroy -f\\nvagrant up\\nvagrant plugin install vagrant-vbguest\\nvagrant vbguest --do install\\n```\\n\\n### ansible galaxy\\n\\n\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043c\u043e\u0439 [\u043f\u0440\u0438\u043c\u0435\u0440](https://github.com/karma-git/playground/tree/master/environment/vagrant/examples/karma-kit-devops-gui) - Guest Additions \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442 ansible \u0440\u043e\u043b\u044c. \\n\\n:::caution\\n\\n\u0413\u0430\u0440\u0430\u043d\u0442\u0438\u044e, \u0447\u0442\u043e \u0443 \u0432\u0430\u0441 \u0432\u0441\u0435 \u0441\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0434\u0430\u0442\u044c \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u043d\u043e \u0441\u043a\u043e\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043e \u043f\u043e\u043d\u0430\u0434\u043e\u0431\u044f\u0442\u0441\u044f \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0435 \u0442\u0435\u043b\u043e\u0434\u0432\u0438\u0436\u0435\u043d\u0438\u044f.\\n\\n:::\\n\\n### \u0421\u0435\u043a\u0440\u0435\u0442\u043d\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\\n\\n\u0412\u0441\u0435\u0433\u0434\u0430 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0433\u0443\u0433\u043b\u0438\u0442\u044c / \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u044e\u0442\u0443\u0431 \u043d\u0430 \u0442\u0435\u043c\u0443 \u043a\u0430\u043a \u0441\u0434\u0435\u043b\u0430\u0442\u044c `Virtualbox` \u043d\u0430 \u0432\u0435\u0441\u044c \u044d\u043a\u0440\u0430\u043d :wink:\\n\\n\u0423\u0434\u0430\u0447\u0438 \u0438 \u0434\u0430 \u043f\u0440\u0438\u0431\u0443\u0434\u0435\u0442 \u0441 \u0432\u0430\u043c\u0438 \u0441\u0438\u043b\u0430!\\n\\n:::tip\\n\\n\u0415\u0441\u043b\u0438 \u043d\u0435 \u0441\u043c\u043e\u0442\u0440\u0435\u043b\u0438, \u0438\u0441\u043f\u0440\u0430\u0432\u044c\u0442\u0435\u0441\u044c:\\n\\n<div class=\\"video-wrapper\\">\\n  <iframe  height=\\"540\\" frameborder=\\"0\\" allowfullscreen width=\\"50%\\" src=\\"https://www.youtube.com/embed/n1F_MfLRlX0\\" frameborder=\\"0\\" allowfullscreen></iframe>\\n</div>\\n\\n:::\\n\\n<details>\\n  <summary>Toggle me!</summary>\\n\\n    \ud83e\udd96 \ud83e\udd95\\n\\n</details>\\n\\n## Links\\n\\n:::info Links\\n\\n\u0421\u0441\u044b\u043b\u043a\u0438 / \u0421\u0442\u0430\u0442\u044c\u0438 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u043e\u043c\u043e\u0433\u043b\u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0438\u0434\u0435\u044e:\\n\\n<details>\\n<summary>Links</summary>\\n\\n- [Vagrant - Boxes](https://www.vagrantup.com/docs/boxes)\\n- [Packer - Vagrant](https://www.packer.io/plugins/post-processors/vagrant/vagrant-cloud)\\n- [Manage your workstation with Ansible: Configure desktop settings](https://opensource.com/article/18/5/manage-your-workstation-ansible-part-3)\\n- [Ubuntu 20.04 GUI installation](https://linuxconfig.org/ubuntu-20-04-gui-installation)\\n- [A custom Vagrant box with Packer](https://dev.to/mattdark/a-custom-vagrant-box-with-packer-13ke)\\n- [Packer: \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u0441\u0432\u043e\u0438 vagrant box \u0438 docker image \u0438\u0437 \u043e\u0434\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0430](https://blog.popstas.ru/blog/2017/03/26/packer-create-vagrant-box-from-ansible-playbook/)\\n- [Enabling VirtualBox Guest Additions in Vagrant](https://subscription.packtpub.com/book/virtualization-and-cloud/9781786464910/1/ch01lvl1sec12/enabling-virtualbox-guest-additions-in-vagrant)\\n- [VBoxManage](https://www.virtualbox.org/manual/ch08.html#vboxmanage-cmd-overview)\\n\\n**github**:\\n- [sys0dm1n/ansible-ubuntu-desktop](https://github.com/sys0dm1n/ansible-ubuntu-desktop)\\n- [pantarei/ansible-playbook-ubuntu-desktop](https://github.com/pantarei/ansible-playbook-ubuntu-desktop)\\n- [PeterMosmans/ansible-role-virtualbox-guest](https://github.com/PeterMosmans/ansible-role-virtualbox-guest)\\n- [dotless-de/vagrant-vbguest/issues/316](https://github.com/dotless-de/vagrant-vbguest/issues/316)\\n- [mesaguy/ansible-hashicorp](https://github.com/mesaguy/ansible-hashicorp)\\n- [andrewrothstein/ansible-starship](https://github.com/andrewrothstein/ansible-starship)\\n\\n</details>\\n\\n:::\\n\\n\x3c!--truncate--\x3e"},{"id":"aws-ebs-snapshot","metadata":{"permalink":"/Andrew-Horbach.github.io-Public/blog/aws-ebs-snapshot","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-01-30-aws-ebs-snapshots.md","source":"@site/blog/2021-01-30-aws-ebs-snapshots.md","title":"AWS Free Tier \u0438 Packer Tutorial","description":"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 AWS Free Tier? \u041d\u0430\u0441\u0442\u0440\u043e\u0438\u043b\u0438 Billing Alarms?","date":"2021-01-30T00:00:00.000Z","formattedDate":"January 30, 2021","tags":[{"label":"aws","permalink":"/Andrew-Horbach.github.io-Public/blog/tags/aws"},{"label":"cloud","permalink":"/Andrew-Horbach.github.io-Public/blog/tags/cloud"},{"label":"packer","permalink":"/Andrew-Horbach.github.io-Public/blog/tags/packer"},{"label":"billing","permalink":"/Andrew-Horbach.github.io-Public/blog/tags/billing"}],"readingTime":1.09,"truncated":true,"authors":[{"name":"Andrew Horbach","url":"https://github.com/karma-git","imageURL":"https://github.com/karma-git.png","key":"a.horbach"}],"prevItem":{"title":"Vagrant - DevOps Environment","permalink":"/Andrew-Horbach.github.io-Public/blog/vagrant-karma-linux"}},"content":"# \u041f\u0440\u0435\u0434\u044b\u0441\u0442\u043e\u0440\u0438\u044f\\n\\n\u041a\u043e\u0433\u0434\u0430 \u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0437\u043d\u0430\u043a\u043e\u043c\u0438\u043b\u0441\u044f \u0441 AWS \u043f\u043e youtube \u043f\u043b\u0435\u0439\u043b\u0438\u0441\u0442\u0443, \u044f \u0441\u043c\u0430\u0441\u0442\u0435\u0440\u0438\u043b `VPC` \u0432 \u0434\u0432\u0443\u0445 `AZ` \u0441 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c\u0438 \u043f\u043e\u0434\u0441\u0435\u0442\u044f\u043c\u0438. \u041e\u0434\u0438\u043d \u0438\u0437 \u0442\u0438\u043f\u043e\u0432 \u043f\u043e\u0434\u0441\u0435\u0442\u0435\u0439 \u0431\u044b\u043b private - \u0441 `nat-gateway`, \u0432 \u043a\u0443\u0440\u0441\u0430\u0445 \u0437\u0430\u0431\u044b\u043b\u0438 \u0441\u043a\u0430\u0437\u0430\u0442\u044c, \u0447\u0442\u043e \u043e\u043d\u0438 \u043d\u0435 \u0432\u0445\u043e\u0434\u044f\u0442 \u0432\u043e \u0444\u0440\u0438\u0442\u0438\u0440. \u0417\u0430 \u043f\u0430\u0440\u0443 \u0434\u043d\u0435\u0439 \u0437\u0430 2 \u0433\u0435\u0439\u0442\u0430 \u043d\u0430\u043a\u0430\u043f\u0430\u043b\u043e \u043e\u043a\u043e\u043b\u043e **$6**. \u0411\u044b\u043b\u043e \u043e\u0431\u0438\u0434\u043d\u043e, \u044f \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u043b \u0431\u0438\u043b\u043b\u0438\u043d\u0433 \u0430\u043b\u0430\u0440\u043c.\\n\\n:::info #!NOTE\\n\u0422\u043e\u0442 \u0441\u0430\u043c\u044b\u0439 \u043a\u0443\u0440\u0441 \u043e\u0442 [\u041a\u0443\u0440\u0441 ADV-IT](https://www.youtube.com/watch?v=8jbx8O3wuLg&list=PLg5SS_4L6LYsxrZ_4xE_U95AtGsIB96k9)\\n:::\\n\\n# \u0418\u0441\u0442\u043e\u0440\u0438\u044f\\n\\n\u0421\u043e\u0432\u0441\u0435\u043c \u043d\u0435\u0434\u0430\u0432\u043d\u043e \u044f \u0443\u0447\u0438\u043b\u0441\u044f (\u043d\u0430 \u043a\u043e\u0442\u0438\u043a\u0430\u0445) \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044e \u0430\u0440\u0442\u0435\u0444\u0430\u043a\u0442\u043e\u0432 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e [packer](./blog/selfmade-vagrant-box). \u041f\u043e\u0441\u043b\u0435 \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0438 \u0432 AWS \u044f \u0441\u043e \u0441\u043f\u043e\u043a\u043e\u0439\u043d\u043e\u0439 \u0434\u0443\u0448\u043e\u0439 \u0432 console \u043d\u0443\u0436\u043d\u043e\u0433\u043e \u0440\u0435\u0433\u0438\u043e\u043d\u0430 \u0443\u0431\u0438\u043b \u0432\u0441\u0435 `AMI` \u0438 \u043f\u043e\u0448\u0435\u043b \u0434\u0430\u043b\u044c\u0448\u0435.\\n\\n\u041d\u0435\u0434\u0435\u043b\u044e \u0441\u043f\u0443\u0441\u0442\u044f \u0432 \u043f\u043e\u0447\u0442\u0435 \u0437\u0430\u043c\u0435\u0442\u0438\u043b \u043e\u0447\u0435\u0440\u0435\u0434\u043d\u043e\u0435 \u043f\u0438\u0441\u044c\u043c\u043e \u043e\u0442 AWS (\u043c\u043d\u0435 \u0438\u043d\u043e\u0433\u0434\u0430 \u043d\u0430 \u043b\u0438\u0447\u043d\u044b\u0439 gmail \u0430\u043a\u043a\u0430\u0443\u043d\u0442 \u043f\u0440\u0438\u0445\u043e\u0434\u044f\u0442 \u043e\u0442 \u043d\u0438\u0445 billing \u0440\u0435\u043f\u043e\u0440\u0442\u044b, \u0432\u0441\u0435\u0433\u0434\u0430 \u043f\u0443\u0441\u0442\u044b\u0435, \u0438 \u043f\u0440\u0438\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u044f \u043d\u0435 [re:invent](https://reinvent.awsevents.com/)).\\n\\n![alert](./static/aws-ebs-snapshot-warn.png)\\n\\n\u0423\u0432\u0438\u0434\u0435\u043b \u0447\u0442\u043e \u044f \u043f\u043e\u0442\u0440\u0430\u0442\u0438\u043b 85% _\\"\u0444\u0440\u0438-\u0442\u0438\u0440\u043d\u043e\u0433\u043e\\"_ \u043c\u0435\u0441\u0442\u0430 \u043f\u043e\u0434 \u0441\u043d\u044d\u043f\u0448\u043e\u0442\u044b ebs \u0434\u0438\u0441\u043a\u043e\u0432.\\n\\n:::info\\n[AWS Free Tier](https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all) - \u0442\u0443\u0442 \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u0430\u043c \u0432 \u043c\u0435\u0441\u044f\u0446 \u0432\u044b\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u0442\u043e\u0433\u043e \u0438\u043b\u0438 \u0438\u043d\u043e\u0433\u043e \u0440\u0435\u0441\u0443\u0440\u0441\u0430 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u0444\u0440\u0438-\u0442\u0438\u0440\u0430.\\n:::\\n\\n\u0410\u0433\u0430 - \u0438\u0437-\u0437\u0430 \u043d\u0435\u0433\u043e\u0434\u044f\u044f `packer`-\u0430 \u043f\u043e\u043c\u0438\u043c\u043e `AMI`-\u0448\u0435\u043a \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0435\u0449\u0435 \u0438 \u0442\u0430\u043a\u0438\u0435 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0438.\\n\\n![snapshots](./static/aws-console.png)\\n\\n:::tip \u041c\u043e\u0440\u0430\u043b\u044c\\n- \u043f\u0435\u0440\u043c\u044b\u043c \u0434\u0435\u043b\u043e\u043c \u0432\u043e \u0444\u0440\u0438-\u0442\u0438\u0440\u0435 \u0441\u0434\u0435\u043b\u0430\u0439\u0442\u0435 \u043d\u0435 \u0440\u0443\u0442\u043e\u0432\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, \u0432\u0442\u043e\u0440\u044b\u043c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u0442\u0435 [\u0431\u0438\u043b\u043b\u0438\u043d\u0433 \u0430\u043b\u0435\u0440\u0442\u044b](https://www.youtube.com/watch?v=XNeAH4dch0g) (\u044f \u0431\u044b \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u043b \u0442\u0440\u0435\u0448\u0445\u043e\u043b\u0434 \u043d\u0430 50% - \u0432 \u043c\u043e\u0435\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0431\u044e\u0434\u0436\u0435\u0442 \u0442\u0430\u044f\u043b \u0431\u044b\u0441\u0442\u0440\u043e). \\n- \u0410\u0432\u0442\u043e\u0440\u0430\u043c \u0432\u0438\u0434\u0435\u043e / \u0433\u0430\u0439\u0434\u043b\u0430\u0439\u043d\u043e\u0432, \u043a\u043e\u043d\u0435\u0447\u043d\u043e, \u0441\u0442\u043e\u0438\u043b\u043e \u0431\u044b \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c, \u0447\u0442\u043e \u044d\u0442\u043e \u043d\u0435 \u0432\u0445\u043e\u0434\u0438\u0442 \u0432\u043e \u0444\u0440\u0438-\u0442\u0438\u0440 - \u0438\u043b\u0438 \u0432\u0445\u043e\u0434\u0438\u0442, \u043d\u043e \u0441\u043b\u0430\u0431\u044b\u0435 \u043b\u0438\u043c\u0438\u0442\u044b.\\n:::\\n\x3c!--truncate--\x3e"}]}')}}]);