"use strict";(self.webpackChunkreact_xform=self.webpackChunkreact_xform||[]).push([[904],{67070:function(r,e,n){n.r(e),n.d(e,{demos:function(){return o}});var t=n(75271),o={}},17384:function(r,e,n){var t;n.r(e),n.d(e,{demos:function(){return R}});var o=n(90228),l=n.n(o),U=n(87999),f=n.n(U),v=n(75271),C=n(97216),A=n(39319),B=n(86344),T=n(28123),R={"docs-form-demo-0":{component:v.memo(v.lazy(f()(l()().mark(function E(){var i,u,d,c,M,s,F,D,L,P,O,g,h,p,I,K;return l()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(n.t.bind(n,75271,19));case 2:return i=m.sent,u=i.default,m.next=6,Promise.resolve().then(n.bind(n,97216));case 6:return d=m.sent,c=d.Form,M=d.FormModel,s=d.FormItem,F=d.FormArray,D=d.modelUtils,L=d.arrayHelpers,m.next=15,Promise.resolve().then(n.bind(n,39319));case 15:return P=m.sent,O=P.Button,g=P.Input,m.next=20,Promise.resolve().then(n.bind(n,86344));case 20:return h=m.sent,p=h.observer,m.next=24,Promise.resolve().then(n.bind(n,28123));case 24:return I=m.sent,K=I.toJS,m.abrupt("return",{default:p(function(){var y=new M({name:"\u5F20\u4E09",phone:"188-8888-8888",address:"\u676D\u5DDE\u5E02\u4F59\u676D\u533A\u6587\u4E00\u897F\u8DEF\u798F\u9F0E\u5BB6\u56ED"}),S=y.getSubModel("list");return u.createElement(c,{model:y},u.createElement(s,{component:"input",label:"\u59D3\u540D",name:"name",required:!0}),u.createElement(s,{component:"input",label:"\u7535\u8BDD",name:"phone",required:!0}),u.createElement(s,{component:"input",label:"\u5730\u5740",name:"address",required:!0}),u.createElement("div",{style:{marginTop:8}},u.createElement(O,{type:"primary",onClick:function(){var W=f()(l()().mark(function $(){var j;return l()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,D.validateAll(y);case 2:j=a.sent;case 3:case"end":return a.stop()}},$)}));function x(){return W.apply(this,arguments)}return x}()},"\u63D0\u4EA4")))})});case 27:case"end":return m.stop()}},E)})))),asset:{type:"BLOCK",id:"docs-form-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import React from 'react';\r
import {\r
  Form,\r
  FormModel,\r
  FormItem,\r
  FormArray,\r
  modelUtils,\r
  arrayHelpers,\r
} from '@/index';\r
import { Button, Input } from 'antd';\r
import { observer } from 'mobx-react-lite';\r
import { toJS } from 'mobx';\r
\r
export default observer(() => {\r
  const model1 = new FormModel({\r
    name: '\u5F20\u4E09',\r
    phone: '188-8888-8888',\r
    address: '\u676D\u5DDE\u5E02\u4F59\u676D\u533A\u6587\u4E00\u897F\u8DEF\u798F\u9F0E\u5BB6\u56ED',\r
  });\r
\r
  const listModel = model1.getSubModel('list');\r
\r
  return (\r
    <Form model={model1}>\r
      <FormItem component={'input'} label="\u59D3\u540D" name="name" required />\r
      <FormItem component={'input'} label="\u7535\u8BDD" name="phone" required />\r
      <FormItem component={'input'} label="\u5730\u5740" name="address" required />\r
      <div style={{ marginTop: 8 }}>\r
        <Button\r
          type="primary"\r
          onClick={async () => {\r
            const res = await modelUtils.validateAll(model1);\r
          }}\r
        >\r
          \u63D0\u4EA4\r
        </Button>\r
      </div>\r
\r
    </Form>\r
  );\r
});`},react:{type:"NPM",value:"18.3.1"},"react-xform":{type:"NPM",value:"0.0.1"},antd:{type:"NPM",value:"5.27.4"},"mobx-react-lite":{type:"NPM",value:"4.1.0"},mobx:{type:"NPM",value:"6.13.7"}},entry:"index.jsx"},context:{react:t||(t=n.t(v,2)),"@/index":C,antd:A,"mobx-react-lite":B,mobx:T},renderOpts:{compile:function(){var E=f()(l()().mark(function u(){var d,c=arguments;return l()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,n.e(278).then(n.bind(n,16278));case 2:return s.abrupt("return",(d=s.sent).default.apply(d,c));case 3:case"end":return s.stop()}},u)}));function i(){return E.apply(this,arguments)}return i}()}}}},48513:function(r,e,n){n.r(e),n.d(e,{demos:function(){return o}});var t=n(75271),o={}},91199:function(r,e,n){n.r(e),n.d(e,{demos:function(){return o}});var t=n(75271),o={}},40373:function(r,e,n){n.r(e),n.d(e,{demos:function(){return o}});var t=n(75271),o={}},95873:function(r,e,n){n.r(e),n.d(e,{demos:function(){return o}});var t=n(75271),o={}},18439:function(r,e,n){n.r(e),n.d(e,{demos:function(){return o}});var t=n(75271),o={}},93452:function(r,e,n){n.r(e),n.d(e,{demos:function(){return o}});var t=n(75271),o={}},36983:function(r,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[{value:"\u652F\u6301\u7684\u7EC4\u4EF6",paraId:0,tocIndex:0}]},48984:function(r,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[{value:"This is an example component.",paraId:0,tocIndex:0}]},43035:function(r,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[]},79721:function(r,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[]},73486:function(r,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[]},4941:function(r,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[]},40865:function(r,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[]},84658:function(r,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[]}}]);
