(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5613c249"],{4253:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[n("el-table-column",{attrs:{prop:"auth",label:"token"}}),n("el-table-column",{attrs:{prop:"domain",label:"域名"}}),n("el-table-column",{attrs:{fixed:"right",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return t.del(e.$index,e.row.auth)}}},[t._v("删除")])]}}])})],1)},r=[],i=(n("c1b0"),{name:"Index",data:function(){return{tableData:[],search:""}},mounted:function(){setTimeout(this.start(),1e3)},methods:{start:function(){var t=this;this.$store.dispatch("userList").then((function(e){for(var n in e)t.tableData.push({domain:e[n],auth:n})}))},del:function(t,e){var n=this;this.$store.dispatch("userDel",{key:e}).then((function(e){n.tableData.splice(t,1)}))}}}),l=i,o=n("e90a"),s=Object(o["a"])(l,a,r,!1,null,"5b6c3d90",null);e["default"]=s.exports},c1b0:function(t,e,n){"use strict";var a=n("91fe"),r=n("0192"),i=n("f240"),l=n("684e"),o=n("ee6f"),s=n("3132"),c=n("01d7"),u=n("b1a1"),f=n("6885"),d=u("splice"),h=f("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,b=Math.min,m=9007199254740991,w="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!d||!h},{splice:function(t,e){var n,a,u,f,d,h,g=o(this),v=l(g.length),k=r(t,v),x=arguments.length;if(0===x?n=a=0:1===x?(n=0,a=v-k):(n=x-2,a=b(p(i(e),0),v-k)),v+n-a>m)throw TypeError(w);for(u=s(g,a),f=0;f<a;f++)d=k+f,d in g&&c(u,f,g[d]);if(u.length=a,n<a){for(f=k;f<v-a;f++)d=f+a,h=f+n,d in g?g[h]=g[d]:delete g[h];for(f=v;f>v-a+n;f--)delete g[f-1]}else if(n>a)for(f=v-a;f>k;f--)d=f+a-1,h=f+n-1,d in g?g[h]=g[d]:delete g[h];for(f=0;f<n;f++)g[f+k]=arguments[f+2];return g.length=v-a+n,u}})}}]);