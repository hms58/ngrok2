(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{"034f":function(e,t,n){"use strict";var i=n("ee93"),o=n.n(i);o.a},"0cb8":function(e,t,n){},"13d0":function(e,t,n){"use strict";var i=n("730c"),o=n.n(i);o.a},"56d7":function(e,t,n){"use strict";n.r(t);var i={};n.r(i),n.d(i,"login",(function(){return le})),n.d(i,"userList",(function(){return de})),n.d(i,"userDel",(function(){return fe})),n.d(i,"addDomain",(function(){return me})),n.d(i,"userIndex",(function(){return pe})),n.d(i,"online",(function(){return he})),n.d(i,"test",(function(){return ge}));var o={};n.r(o),n.d(o,"UPDATE_USER",(function(){return be})),n.d(o,"COUNT",(function(){return xe}));n("d9a3"),n("c9db"),n("de3e"),n("618d");var r=n("0261"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},c=[],u={name:"App"},s=u,l=(n("034f"),n("e90a")),d=Object(l["a"])(s,a,c,!1,null,null,null),f=d.exports,m=(n("a677"),n("3a20"),n("3547"),n("1bee")),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",{attrs:{direction:"horizontal"}},[n("sample-aside"),n("el-container",{attrs:{direction:"vertical"}},[n("sample-header"),n("el-main",[n("sample-main"),n("sample-log")],1)],1)],1)},h=[],g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-aside",{attrs:{width:"auto"}},[n("div",{staticStyle:{height:"60px"}},[n("el-button",{staticClass:"aside-btn",attrs:{icon:"el-icon-s-fold",circle:""},on:{click:e.switchType}})],1),n("el-menu",{staticClass:"el-menu-aside",attrs:{"default-active":"/user/index",collapse:e.isCollapse,router:!0},on:{open:e.handleOpen,close:e.handleClose}},[n("el-submenu",{attrs:{index:"/user"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-set-up"}),n("span",[e._v("用户中心")])]),n("el-menu-item",{attrs:{index:"/user/index"}},[e._v("基本信息")]),n("el-menu-item",{attrs:{index:"/user/setting"}},[e._v("域名设置")]),n("el-menu-item",{attrs:{index:"/user/domain"}},[e._v("域名列表")])],2),n("el-menu-item",{attrs:{index:"/online"}},[n("i",{staticClass:"el-icon-data-line"}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v("在线统计")])]),n("el-menu-item",{attrs:{index:"/msg"}},[n("i",{staticClass:"el-icon-chat-dot-square"}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v("留言信息")])])],1)],1)},v=[],b={name:"Aside",data:function(){return{isCollapse:!1}},methods:{handleOpen:function(e,t){},handleClose:function(e,t){},switchType:function(){this.isCollapse=!this.isCollapse}}},x=b,C=(n("d99d"),Object(l["a"])(x,g,v,!1,null,"71cf206a",null)),w=C.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",{attrs:{gutter:20}},[n("router-view",{key:e.key})],1)},_=[],O={name:"Main",computed:{key:function(){return this.$route.path}}},y=O,j=(n("d286"),Object(l["a"])(y,k,_,!1,null,"3025e794",null)),E=j.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",{attrs:{gutter:20}},[n("el-card",{staticClass:"log",attrs:{shadow:"always"}},[n("div",{attrs:{id:"log"}})])],1)},S=[],T={name:"Log",data:function(){return{}},methods:{}},D=T,$=(n("e6ec"),Object(l["a"])(D,U,S,!1,null,"b2955016",null)),A=$.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-header",[n("el-menu",{staticStyle:{float:"right"},attrs:{mode:"horizontal","text-color":"#000","active-text-color":"#ffd04b"}},[n("el-menu-item",{on:{click:function(t){e.drawer=!0}}},[n("i",{staticClass:"el-icon-setting"})]),n("el-menu-item",[n("i",{staticClass:"el-icon-user"}),e._v(e._s(this.$store.state.user.username))])],1),n("el-drawer",{attrs:{visible:e.drawer,direction:e.direction},on:{"update:visible":function(t){e.drawer=t}}},[n("span",[e._v("我来啦!")])])],1)},R=[],I={name:"Index",data:function(){return{drawer:!1,direction:"rtl"}},methods:{}},J=I,L=(n("13d0"),Object(l["a"])(J,N,R,!1,null,"0cd69bf8",null)),P=L.exports,M={name:"Layout",components:{"sample-aside":w,"sample-header":P,"sample-main":E,"sample-log":A},methods:{}},B=M,q=(n("6713"),Object(l["a"])(B,p,h,!1,null,"1bf366b1",null)),z=q.exports,H=(n("7ae7"),n("b3f9"),n("3e5e"),n("94ec"),function(e,t,n){if(!e||!t)return!1;t=JSON.stringify(t);var i="".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(t),";");n="number"===typeof n?n:7;var o=new Date;o.setDate(o.getDate()+n),i+="expires=".concat(o.toUTCString(),";");var r=document.cookie=i;return r}),W=function(e){for(var t=decodeURIComponent(document.cookie),n=t.split(";"),i=0;i<n.length;i++){var o=n[i].split("=");if(o[0].trim()===e)try{return JSON.parse(o[1])}catch(r){return o[1]}}},X=function(e){H(e,1,-1)},F={setCookie:H,getCookie:W,delCookie:X};r["default"].use(m["a"]);var G=[{path:"/",redirect:"/user/index"},{path:"/index",redirect:"/user/index"},{path:"/user",component:z,redirect:"/user/index",children:[{path:"index",component:function(){return n.e("chunk-499b17b3").then(n.bind(null,"e382"))},name:"index",meta:{title:"基本信息",icon:"user",affix:!0}},{path:"setting",component:function(){return n.e("chunk-2d0c1d17").then(n.bind(null,"4852"))},name:"setting",meta:{title:"域名设置",icon:"user",affix:!0}},{path:"domain",component:function(){return n.e("chunk-5613c249").then(n.bind(null,"4253"))},name:"domain",meta:{title:"域名列表",icon:"user",affix:!0}}]},{path:"/online",component:z,redirect:"/online/index",children:[{path:"index",component:function(){return n.e("chunk-2d0d0bb7").then(n.bind(null,"68dc"))},name:"online",meta:{title:"在线统计",icon:"user",affix:!0}}]},{path:"/msg",component:z,redirect:"/msg/index",children:[{path:"index",component:function(){return n.e("chunk-2d21da27").then(n.bind(null,"d1ae"))},name:"msg",meta:{title:"留言信息",icon:"user",affix:!0}}]},{path:"/login",component:function(){return n.e("chunk-8ebd7888").then(n.bind(null,"9ed6"))},name:"login",meta:{title:"登录",icon:"user",affix:!0}}],K=function(){return new m["a"]({scrollBehavior:function(){return{y:0}},routes:G})},Q=K();Q.beforeEach((function(e,t,n){F.getCookie("x-with-auth")||e.fullPath.includes("login")?(e.meta.title&&(document.title=e.meta.title),n()):n({path:"/login"},(function(e){}),(function(e){}))}));var V=Q,Y=n("c451"),Z=n("8876"),ee=(n("4045"),n("82ae")),te=n.n(ee),ne=n("2ca7"),ie=n.n(ne),oe=function(){return F.getCookie("x-with-auth")},re=function(e){return F.setCookie("x-with-auth",e,1)},ae=function(){return F.delCookie("x-with-auth")},ce={200:"服务器成功返回请求的数据。",201:"新建或修改数据成功。",202:"一个请求已经进入后台排队（异步任务）。",204:"删除数据成功。",400:"发出的请求有错误，服务器没有进行新建或修改数据的操作。",401:"用户没有权限（令牌、用户名、密码错误）。",403:"用户得到授权，但是访问是被禁止的。",404:"发出的请求针对的是不存在的记录，服务器没有进行操作。",406:"请求的格式不可得。",410:"请求的资源被永久删除，且不会再得到的。",417:"用户没有权限（令牌失效）。",422:"当创建一个对象时，发生一个验证错误。",500:"服务器发生错误，请检查服务器。",502:"网关错误。",503:"服务不可用，服务器暂时过载或维护。",504:"网关超时。"},ue=te.a.create({baseURL:"",timeout:5e3});ue.interceptors.request.use((function(e){return oe()&&(e.headers["X-With-Auth"]=oe()),e}),(function(e){return Promise.reject(e)})),ue.interceptors.response.use((function(e){return e.config.url.indexOf("login")>-1&&e.headers["x-with-auth"]&&re(e.headers["x-with-auth"]),e.data}),(function(e){if(console.log(e),void 0===e||"ECONNABORTED"===e.code)Object(ne["Message"])({message:e.message,type:"error",duration:5e3});else{var t=e.response.status;Object(ne["Message"])({message:ce[t]||"未知错误！",type:"error",duration:5e3}),417===t&&(ae(),V.push("/login"))}return Promise.resolve(e)}));var se=ue,le=function(e,t){var n=e.commit;se.post("/admin/login",t).then((function(e){t&&n("UPDATE_USER",t),V.push("/user/index")}))},de=function(e){return se.get("/admin/user/list")},fe=function(e,t){e.commit;return se.post("/admin/user/del",t)},me=function(e,t){e.commit;return se.post("/admin/user/setting",t)},pe=function(e,t){e.commit;return se.post("/admin/user/index")},he=function(e,t){e.commit;return se.post("/admin/online")},ge=function(e,t){var n=e.commit;n("COUNT",10)},ve=n("94d5"),be=function(e,t){e.user=t,F.setCookie("user",t)},xe=function(e,t){e.count+=t,F.setCookie("count",e.count)};r["default"].use(Z["a"]);var Ce={user:F.getCookie("user")||"",auth:F.getCookie("x-with-auth")||"",count:F.getCookie("count")||0},we=Object(Y["a"])({},o),ke=Object(Y["a"])({},i),_e=Object(Y["a"])({},ve),Oe=new Z["a"].Store({state:Ce,getters:_e,mutations:we,actions:ke}),ye=Oe;n("c1ba");r["default"].use(ie.a);n("6dec");r["default"].config.productionTip=!1,new r["default"]({el:"#app",router:V,store:ye,render:function(e){return e(f)}}).$mount("#app")},6713:function(e,t,n){"use strict";var i=n("7600"),o=n.n(i);o.a},"6dec":function(e,t,n){"use strict";n("7ae7"),n("c1f4"),n("3a20"),n("7267"),console.log=function(e){return function(){var t=(new Date).toString();try{e.call.apply(e,[console,t].concat(Array.prototype.slice.call(arguments)))}catch(r){console.error("console.log error",r)}for(var n=t,i=0;i<=arguments.length;i++)arguments[i]&&(n+="&emsp;"+(arguments[i]instanceof Object?JSON.stringify(arguments[i]):arguments[i]));var o=document.getElementById("log");o&&o.insertAdjacentHTML("afterbegin","<span>"+n+"</span><br/>")}}(console.log)},"730c":function(e,t,n){},7600:function(e,t,n){},"94d5":function(e,t){},a898:function(e,t,n){},a91e:function(e,t,n){},c1ba:function(e,t,n){},d286:function(e,t,n){"use strict";var i=n("a898"),o=n.n(i);o.a},d99d:function(e,t,n){"use strict";var i=n("0cb8"),o=n.n(i);o.a},e6ec:function(e,t,n){"use strict";var i=n("a91e"),o=n.n(i);o.a},ee93:function(e,t,n){}},[["56d7","runtime","chunk-element","chunk-libs"]]]);