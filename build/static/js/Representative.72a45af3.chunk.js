(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1162:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAQAAABvygHQAAAClUlEQVR4AcWXRXLkMBSGJ7uhdV8gN8pR+gKhU6gxzMzMzMzMKAX2+cbVdqlJ7nTANf43gqq/nt7/yD/+w/eUq/yyUg2rXfkqX9WuGrZ2/qfcT9K9+lSRXJe4YF0Vvfo+RMhflW9Zxjt4Vfn8zZJS5akbSXZQNyrvfRtzVL56k2QP9abyyclE+UvVST4OVccvdys15cdpXay1xOHzUPlmeRxfttHCCCsc8/Ax3+alB5FWfAHhIEgtPcyww3VWkcBf16ffEUYQYZ4VRmmlFGGhjDZrt8IJj9m54NWXHOr9lNNJgAVnf8020/RQQxBBiDr6ODGmQ0KWqeLky0MEe0wgGEyx64Fj5gkhiHJosrVIk6bneB09SNYJ08xt0s0ldUTZoo0Ie4aaoCtR2hULhGJkx5RTmfDUA0qp4Txmcychi1ymwKlgyp96YYs16/izkQibSAsrhGjTlt/RSJC1VAf47cdXmpTsp0b7sQ/BNKMIRrhgkym6qSaAsNCOTEalbemwvTWIpXezMYogkRhRhUU1xjJlFvVtqqXDNumuvTWKpdFGOQPMs6dpuolylq7/boxUx6iLWDZqGU26nSTAjjFWbdIXM+mtI5aNKPNIjQ2E3qfgxfB8s1h3CDb1+TFhBtxSddcglFmsYwTHOmnLaXKtAGrYPaS0J22xNhHcOQHWSAU3SDdUGoLfLNY8Ueekj4i22QTlT0lTs1hzSEapteNV+9YNT7mGgmIWqzuWOdsEmEJmwnq89BVJMovVwBCnRGwPZ4AqMhZps1iljFNFvblrmYt05k5qF+UI5Vx9rKPqxuciliDE4Ucbn27RLmIJVj/eojO74JCxjw8THo49ngxoHo2SHg29no3n+kei+OM/Ep7+8njw/QOnF3WHklwUswAAAABJRU5ErkJggg=="},3316:function(e,t,a){"use strict";a.r(t);var n=a(34),r=a.n(n),c=a(86),s=a(2),i=a.n(s),o=a(5),l=a(8),m=a(15),d=a(16),u=a(25),p=a(24),g=a(26),h=a(0),b=a.n(h),v=a(83),f=a(19),E=a(31),y=a(18),N=a(3),x=a(3184),A=a.n(x),k=a(21),O=a.n(k),w=a(3262),j=a.n(w),S=a(1566),T=a(50),U=a(14),P=a(3266),R=a.n(P),G=a(75),V=a.n(G),q=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).scrollTo=function(e){e.preventDefault(),e.stopPropagation(),V()("html, body").animate({scrollTop:V()(V()(e.target).closest("a").attr("href")).offset().top-15},500)},e.renderSidebar=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.state,r=n.address,c=n.files,s=n.sections,i=a(1162);return b.a.createElement("div",{style:Object(l.a)({},t)},b.a.createElement("div",{className:"card font-weight-bold mb-2"},b.a.createElement("img",{className:"card-img-top",src:c.logo,onError:function(e){e.target.onerror=null,e.target.src=i}}),b.a.createElement(j.a,{items:s.map(function(e){return e.id}),className:"list-group list-group-flush",currentClassName:"is-current"},s.map(function(t){return b.a.createElement("a",{key:t.id,className:"list-group-item",href:"#"+t.id,onClick:e.scrollTo},t.name)}),b.a.createElement(f.d,{className:" list-group-item",url:r.representative.url},"Website"))),b.a.createElement(T.a,{className:"btn btn-secondary btn-block mb-2",to:"/sr/votes"},b.a.createElement("i",{className:"fa fa-arrow-left mr-2"}),Object(N.c)("go_to_votelist")))},e.state={loading:!0,body:null,address:null,files:null,sections:[]},e}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match;this.loadAddress(e.params.id)}},{key:"componentDidUpdate",value:function(e){var t=this.props.match;t.params.id!==e.match.params.id&&this.loadAddress(t.params.id),e.activeLanguage!==this.props.activeLanguage&&this.reloadPages()}},{key:"getAddress",value:function(){return this.props.match.params.id}},{key:"loadPage",value:function(){var e=Object(o.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get(t);case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",{});case 9:case"end":return e.stop()}},e,null,[[0,6]])}));return function(t){return e.apply(this,arguments)}}()},{key:"loadPages",value:function(){var e=Object(o.a)(i.a.mark(function e(t){var a,n,r,s,o,l,m,d,u,p=arguments;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=p.length>1&&void 0!==p[1]?p[1]:"en",n="https://raw.githubusercontent.com/".concat(t,"/master"),"en"!==a&&(n+="/pages/".concat(a)),e.next=5,Promise.all([this.loadPage("".concat(n,"/INTRO.md")),this.loadPage("".concat(n,"/COMMUNITY_PLAN.md")),this.loadPage("".concat(n,"/TEAM.md")),this.loadPage("".concat(n,"/BUDGET_EXPENSES.md")),this.loadPage("".concat(n,"/SERVER_CONFIGURATION.md"))]);case 5:return r=e.sent,s=Object(c.a)(r,5),o=s[0].data,l=s[1].data,m=s[2].data,d=s[3].data,u=s[4].data,e.abrupt("return",{intro:o,communityPlan:l,team:m,budgetExpenses:d,serverConfiguration:u});case 13:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"loadGithubData",value:function(){var e=Object(o.a)(i.a.mark(function e(t){var a,n,s,o,l,m,d,u,p,g,h,v,f,E,y;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.activeLanguage,n="https://raw.githubusercontent.com/".concat(t,"/master"),e.next=4,this.loadPages(t);case 4:if(s=e.sent,"en"===a){e.next=10;break}return e.next=8,this.loadPages(t,a);case 8:for(o=e.sent,l=0,m=Object.entries(o);l<m.length;l++)d=m[l],u=Object(c.a)(d,2),p=u[0],g=u[1],""!==r()(g)&&(s[p]=g);case 10:h=s.intro,v=s.communityPlan,f=s.team,E=s.budgetExpenses,y=s.serverConfiguration,this.setState({url:n,files:{logo:n+"/logo.png",banner:n+"/banner.png"},sections:[{name:Object(N.c)("intro"),id:"intro",content:b.a.createElement(A.a,{source:h})},{name:Object(N.c)("team"),id:"team",content:b.a.createElement(A.a,{source:f})},{name:Object(N.c)("community_plan"),id:"community-plan",content:b.a.createElement(A.a,{source:v})},{name:Object(N.c)("server_configuration"),id:"server-configuration",content:b.a.createElement(A.a,{source:y})},{name:Object(N.c)("budget_expenses"),id:"budget-expenses",content:b.a.createElement(A.a,{source:E})}]});case 12:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"reloadPages",value:function(){var e=Object(o.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.getSuperRepresentative(this.getAddress());case 2:return t=e.sent,e.next=5,this.loadGithubData(t.data.githubLink);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"loadAddress",value:function(){var e=Object(o.a)(i.a.mark(function e(t){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0,body:null,address:null,files:null}),e.prev=1,e.next=4,y.a.getAddress(t);case 4:return a=e.sent,e.next=7,this.reloadPages();case 7:this.setState({loading:!1,address:a}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),this.setState({body:b.a.createElement("main",{className:"container header-overlap"},b.a.createElement("div",{className:"card text-center"},b.a.createElement("div",{className:"card-body"},b.a.createElement(U.a,{color:"warning"},Object(N.c)("unable_load_representatives_page_message"))),b.a.createElement("p",null,b.a.createElement(T.a,{to:"/sr/votes",className:"btn btn-primary"},"Go Back"))))});case 13:case"end":return e.stop()}},e,this,[[1,10]])}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.address,n=t.loading,r=t.files,c=t.sections,s=t.body;return s||(a?a.representative.enabled?b.a.createElement("main",{className:"container header-overlap representative-landing-page"},b.a.createElement(S.StickyContainer,{className:"row"},b.a.createElement("div",{className:"col-md-3"},b.a.createElement(R.a,{minWidth:768},b.a.createElement(S.Sticky,null,function(t){var a=t.style,n=t.isSticky;return e.renderSidebar(Object(l.a)({},a,n?{top:15}:{}))})),b.a.createElement(R.a,{maxWidth:768},this.renderSidebar())),b.a.createElement("div",{className:"col-md-9 representative-content"},n?b.a.createElement("div",{className:"card"},b.a.createElement(v.b,null,Object(N.c)("loading_representative")," ",a.address)):b.a.createElement(h.Fragment,null,b.a.createElement("div",{className:"card"},a.representative.enabled&&b.a.createElement("div",{className:"card-header text-center bg-info font-weight-bold text-white"},a.name||"Representative"),b.a.createElement("div",{className:"card-body text-center"},b.a.createElement("img",{src:r.banner,style:C.image}))),c.map(function(e){return b.a.createElement("div",{className:"card mt-3"},b.a.createElement("a",{id:e.id}),b.a.createElement("div",{className:"card-header bg-info text-center text-white font-weight-bold"},e.name),b.a.createElement("div",{className:"card-body"},e.content))}))))):b.a.createElement("main",{className:"container header-overlap"},b.a.createElement("div",{className:"card text-center"},b.a.createElement("div",{className:"card-body"},b.a.createElement(U.a,{color:"warning"},Object(N.c)("address_not_super_representative"))),b.a.createElement("p",null,b.a.createElement(T.a,{to:"/votes",className:"btn btn-primary"},"Go Back")))):b.a.createElement("main",{className:"container header-overlap"},b.a.createElement("div",{className:"card text-center"},b.a.createElement(v.b,null,Object(N.c)("loading_representatives")))))}}]),t}(b.a.Component),C={image:{maxWidth:"100%",maxHeight:400}};t.default=Object(E.connect)(function(e){return{activeLanguage:e.app.activeLanguage}},{})(q)}}]);