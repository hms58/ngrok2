(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c1d17"],{4852:function(e,n,t){"use strict";t.r(n);var l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("el-card",{staticClass:"box-card"},[t("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[t("el-form-item",{attrs:{label:"token"}},[t("el-input",{attrs:{placeholder:"token"},model:{value:e.formInline.key,callback:function(n){e.$set(e.formInline,"key",n)},expression:"formInline.key"}})],1),t("el-form-item",{attrs:{label:"domain"}},[t("el-input",{attrs:{placeholder:"domain"},model:{value:e.formInline.value,callback:function(n){e.$set(e.formInline,"value",n)},expression:"formInline.value"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("Add domain")])],1)],1)],1)},o=[],a={name:"Index",data:function(){return{formInline:{key:"",value:""}}},methods:{onSubmit:function(){this.$store.dispatch("addDomain",this.formInline).then((function(e){console.log(e)}))}}},i=a,r=t("e90a"),s=Object(r["a"])(i,l,o,!1,null,"be53b702",null);n["default"]=s.exports}}]);