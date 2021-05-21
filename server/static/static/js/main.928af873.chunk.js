(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{158:function(t,e,n){},159:function(t,e,n){},160:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),i=n(29),s=n.n(i),r=(n(58),n(4)),o=n(5),j=n(7),l=n(6),b=n(15),h=n(2),u=n(30),d=n.n(u),O=new(function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,[{key:"getAllblogs",value:function(){return new Promise((function(t,e){d.a.get("".concat("http://127.0.0.1:8000/api","/blogs")).then((function(e){t(e.data)})).catch((function(t){console.log(t)})).then((function(){}))}))}},{key:"saveBlog",value:function(t){var e=t.title,n=t.description,c=t.body;return new Promise((function(t,a){d.a.post("".concat("http://127.0.0.1:8000/api","/blog"),{title:e,description:n,body:c}).then((function(e){t(e)})).catch((function(t){console.log(t)}))}))}}]),t}()),x=n(0),f=function(t){Object(j.a)(n,t);var e=Object(l.a)(n);function n(t){var c;return Object(r.a)(this,n),(c=e.call(this,t)).getAllBlogs=function(){O.getAllblogs().then((function(t){c.setState({blogsList:t})}))},c.state={blogsList:[]},c}return Object(o.a)(n,[{key:"render",value:function(){var t=this;return Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{children:"Blogs"}),Object(x.jsx)("div",{children:this.state.blogsList.map((function(t,e){return Object(x.jsxs)("div",{children:[t.title,", ",t.description]},e)}))}),Object(x.jsx)("button",{onClick:function(){return t.getAllBlogs()},children:" Reload"})]})}}]),n}(c.Component),p=n(52),v=n.n(p),g=function(t){Object(j.a)(n,t);var e=Object(l.a)(n);function n(t){var c;return Object(r.a)(this,n),(c=e.call(this,t)).getHTML=function(t){c.setState({body:t})},c.setTitle=function(t){c.setState({title:t})},c.setDescription=function(t){c.setState({description:t})},c.saveBlog=function(){O.saveBlog(c.state).then((function(t){console.log(t)}))},c.state={title:"",description:"",body:""},c}return Object(o.a)(n,[{key:"render",value:function(){var t=this;return Object(x.jsxs)("div",{children:[Object(x.jsx)("input",{type:"text",name:"title",onChange:function(e){return t.setTitle(e.target.value)}}),Object(x.jsx)("input",{type:"text",name:"description",onChange:function(e){return t.setDescription(e.target.value)}}),Object(x.jsx)(v.a,{theme:"snow",value:this.state.body,onChange:this.getHTML}),Object(x.jsx)("button",{type:"button",onClick:function(){return t.saveBlog()},children:"Guardar"})]})}}]),n}(a.a.Component),m=function(t){Object(j.a)(n,t);var e=Object(l.a)(n);function n(t){var c;return Object(r.a)(this,n),(c=e.call(this,t)).Routered=function(){var t=Object(h.f)();return Object(x.jsx)("div",{children:Object(x.jsxs)(h.c,{children:[Object(x.jsx)(h.a,{exact:!0,path:t.path,children:Object(x.jsx)(f,{})}),Object(x.jsx)(h.a,{exact:!0,path:"".concat(t.path,"/create"),children:Object(x.jsx)(g,{})})]})})},c.state={blogsList:[]},c}return Object(o.a)(n,[{key:"render",value:function(){return Object(x.jsx)(this.Routered,{})}}]),n}(a.a.Component),_=function(t){Object(j.a)(n,t);var e=Object(l.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(x.jsx)("div",{children:Object(x.jsx)("p",{children:"CV"})})}}]),n}(c.Component),y=function(t){Object(j.a)(n,t);var e=Object(l.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(x.jsx)("div",{children:Object(x.jsx)("p",{children:"Casa"})})}}]),n}(c.Component),C=(n(158),function(t){Object(j.a)(n,t);var e=Object(l.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(x.jsx)("header",{className:"header",children:Object(x.jsx)("div",{className:"header__container",children:Object(x.jsxs)("nav",{className:"header__navbar",children:[Object(x.jsx)("a",{className:"header__navbar__logo",href:"index.html",children:Object(x.jsx)("img",{src:"https://juancamejoalarcon.s3.eu-west-3.amazonaws.com/logo-v2.svg",alt:"logo"})}),Object(x.jsxs)("div",{className:"header__navbar__nav",children:[Object(x.jsxs)("ul",{className:"header__navbar__nav__menu",children:[Object(x.jsx)("li",{className:"menu_has_children",children:Object(x.jsx)(b.b,{to:"/",children:"Home"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"#about",className:"scroll-smoth",children:"About"})}),Object(x.jsx)("li",{children:Object(x.jsx)(b.b,{to:"/blog",children:"Blog"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"#intro",children:"Contact"})})]}),Object(x.jsx)("div",{className:"header__navbar__nav__social",children:Object(x.jsxs)("ul",{className:"jca-social-icons small-icons",children:[Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"https://www.instagram.com/",children:Object(x.jsx)("i",{className:"fa fa-instagram"})})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"https://twitter.com/",children:Object(x.jsx)("i",{className:"fa fa-twitter"})})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"https://www.linkedin.com/",children:Object(x.jsx)("i",{className:"fa fa-linkedin"})})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"https://github.com/",children:Object(x.jsx)("i",{className:"fa fa-github"})})})]})})]})]})})})}}]),n}(a.a.Component)),w=(n(159),function(t){Object(j.a)(n,t);var e=Object(l.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(x.jsxs)(b.a,{children:[Object(x.jsx)(C,{}),Object(x.jsx)("main",{children:Object(x.jsxs)(h.c,{children:[Object(x.jsx)(h.a,{exact:!0,path:"/",children:Object(x.jsx)(y,{})}),Object(x.jsx)(h.a,{exact:!0,path:"/cv",children:Object(x.jsx)(_,{})}),Object(x.jsx)(h.a,{path:"/blog",children:Object(x.jsx)(m,{})})]})})]})}}]),n}(a.a.Component)),k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,161)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),c(t),a(t),i(t),s(t)}))};s.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(w,{})}),document.getElementById("root")),k()},58:function(t,e,n){}},[[160,1,2]]]);
//# sourceMappingURL=main.928af873.chunk.js.map