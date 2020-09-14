(function(t){function e(e){for(var n,a,i=e[0],c=e[1],u=e[2],p=0,d=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],n=!0,i=1;i<o.length;i++){var c=o[i];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},s={app:0},r=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"1b13":function(t,e,o){"use strict";var n=o("dc0c"),s=o.n(n);s.a},"518c":function(t,e,o){"use strict";var n=o("e120"),s=o.n(n);s.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("post-app")],1)},r=[],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._l(t.posts,(function(e){return o("post",{key:e.id,attrs:{post:e,comments:t.postComments(e.id)}})})),1)},i=[],c=o("b85c"),u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"post card border-primary"},[o("div",{staticClass:"card-body"},[o("post-content",{attrs:{post:t.post,editMode:t.editMode}}),o("div",{staticClass:"post__buttons__container"},[t.showComments?o("button",{staticClass:"btn btn-primary btn-md",attrs:{type:"button"},on:{click:t.toggleShowComments}},[t._v(" Hide comments ")]):o("button",{staticClass:"btn btn-primary btn-md",attrs:{type:"button"},on:{click:t.toggleShowComments}},[t._v(" Show comments ")]),o("button",{staticClass:"btn btn-primary btn-md",attrs:{type:"button"},on:{click:function(e){return t.deletePost()}}},[t._v(" Delete post ")]),t.editMode?o("button",{staticClass:"btn btn-primary btn-md",attrs:{type:"button"},on:{click:function(e){return t.savePost()}}},[t._v(" Save post ")]):o("button",{staticClass:"btn btn-primary btn-md",attrs:{type:"button"},on:{click:function(e){return t.editPost()}}},[t._v(" Edit post ")])]),t._l(t.comments,(function(e){return o("post-comment",{directives:[{name:"show",rawName:"v-show",value:t.showComments,expression:"showComments"}],key:e.id,attrs:{comment:e}})}))],2)])},l=[],p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.editMode?[o("div",{staticClass:"form-group"},[o("textarea",{directives:[{name:"model",rawName:"v-model.lazy",value:t.post.title,expression:"post.title",modifiers:{lazy:!0}}],staticClass:"form-control form-title",attrs:{type:"text"},domProps:{value:t.post.title},on:{change:function(e){return t.$set(t.post,"title",e.target.value)}}})])]:[o("h2",{staticClass:"card-header"},[t._v(" "+t._s(t.post.title)+" ")])],t.editMode?[o("div",{staticClass:"form-group"},[o("textarea",{directives:[{name:"model",rawName:"v-model.lazy",value:t.post.body,expression:"post.body",modifiers:{lazy:!0}}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.post.body},on:{change:function(e){return t.$set(t.post,"body",e.target.value)}}})])]:[o("p",{staticClass:"card-body"},[t._v(" "+t._s(t.post.body)+" ")])]],2)},d=[],m={props:["post","editMode"],name:"PostContent"},f=m,b=(o("b3dc"),o("2877")),v=Object(b["a"])(f,p,d,!1,null,null,null),h=v.exports,y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"card border-dark"},[o("div",{staticClass:"card-body"},[o("h5",{staticClass:"card-header"},[t._v("Name: "+t._s(t.comment.name))]),o("div",{staticClass:"card-body"},[o("p",[t._v(t._s(t.comment.body))]),o("p",{staticClass:"m-0"},[t._v(t._s(t.comment.email))])])])])},_=[],C={props:["comment"],name:"PostComment"},w=C,P=(o("1b13"),Object(b["a"])(w,y,_,!1,null,null,null)),g=P.exports,x={name:"Post",props:["post","comments"],data:function(){return{showComments:!1,editMode:!1,updateInfo:!1}},methods:{toggleShowComments:function(){this.showComments=!this.showComments},deletePost:function(){this.$store.commit("deletePost",this.post)},editPost:function(){this.editMode=!this.editMode},savePost:function(){this.editMode=!this.editMode,this.$store.commit("updatePost",[this.post.id,this.post.title,this.post.body])}},components:{PostContent:h,PostComment:g}},j=x,O=(o("bef4"),Object(b["a"])(j,u,l,!1,null,null,null)),M=O.exports,$={name:"PostApp",components:{Post:M},computed:{posts:function(){return this.$store.state.posts},comments:function(){return this.$store.state.comments}},methods:{postComments:function(t){var e,o=[],n=Object(c["a"])(this.comments);try{for(n.s();!(e=n.n()).done;){var s=e.value;s.postId===t&&o.push(s)}}catch(r){n.e(r)}finally{n.f()}return o}}},k=$,S=(o("518c"),Object(b["a"])(k,a,i,!1,null,null,null)),E=S.exports,z=o("bc3a"),N=o.n(z),A={name:"App",components:{PostApp:E},created:function(){var t=this;N.a.get("https://jsonplaceholder.typicode.com/posts").then((function(e){var o=e.data;return t.$store.state.posts=o})),N.a.get("https://jsonplaceholder.typicode.com/comments").then((function(e){var o=e.data;return t.$store.state.comments=o}))}},T=A,I=(o("5c0b"),Object(b["a"])(T,s,r,!1,null,null,null)),J=I.exports,D=(o("4de4"),o("2f62"));n["a"].use(D["a"]);var H=new D["a"].Store({state:{posts:[],comments:[]},mutations:{deletePost:function(t,e){t.posts=t.posts.filter((function(t){return t!==e}))},updatePost:function(t,e){var o=e.id,s=e.title,r=e.body;n["a"].set(t.posts,o,s),n["a"].set(t.posts,o,r)}},actions:{}});n["a"].config.productionTip=!1,new n["a"]({store:H,render:function(t){return t(J)}}).$mount("#app")},"5b63":function(t,e,o){},"5c0b":function(t,e,o){"use strict";var n=o("9c0c"),s=o.n(n);s.a},6357:function(t,e,o){},"9c0c":function(t,e,o){},b3dc:function(t,e,o){"use strict";var n=o("6357"),s=o.n(n);s.a},bef4:function(t,e,o){"use strict";var n=o("5b63"),s=o.n(n);s.a},dc0c:function(t,e,o){},e120:function(t,e,o){}});
//# sourceMappingURL=app.e00db45c.js.map