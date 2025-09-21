"use strict";(self.webpackChunkreact_xform=self.webpackChunkreact_xform||[]).push([[143],{49266:function(_,m,e){var s;e.r(m),e.d(m,{demos:function(){return U}});var b=e(90228),l=e.n(b),D=e(87999),u=e.n(D),p=e(75271),x=e(39319),g=e(86344),O=e(28123),E=e(97216),U={"form-demo-0":{component:p.memo(p.lazy(u()(l()().mark(function f(){var i,o,t,d,v,n,A,h,C,c,M,B,F,P,I,T;return l()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return i=r.sent,o=i.default,r.next=6,Promise.resolve().then(e.bind(e,97216));case 6:return t=r.sent,d=t.Form,v=t.FormModel,n=t.FormItem,A=t.FormArray,h=t.modelUtils,C=t.arrayHelpers,r.next=15,Promise.resolve().then(e.bind(e,39319));case 15:return c=r.sent,M=c.Button,B=c.Input,r.next=20,Promise.resolve().then(e.bind(e,86344));case 20:return F=r.sent,P=F.observer,r.next=24,Promise.resolve().then(e.bind(e,28123));case 24:return I=r.sent,T=I.toJS,r.abrupt("return",{default:P(function(){var y=new v({name:"\u5F20\u4E09",phone:"188-8888-8888",address:"\u676D\u5DDE\u5E02\u4F59\u676D\u533A\u6587\u4E00\u897F\u8DEF\u798F\u9F0E\u5BB6\u56ED"}),j=y.getSubModel("list");return o.createElement(d,{model:y},o.createElement(n,{component:"input",label:"\u59D3\u540D",name:"name",required:!0}),o.createElement(n,{component:"input",label:"\u7535\u8BDD",name:"phone",required:!0}),o.createElement(n,{component:"input",label:"\u5730\u5740",name:"address",required:!0}),o.createElement("div",{style:{marginTop:8}},o.createElement(M,{type:"primary",onClick:function(){var R=u()(l()().mark(function K(){var W;return l()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h.validateAll(y);case 2:W=a.sent;case 3:case"end":return a.stop()}},K)}));function L(){return R.apply(this,arguments)}return L}()},"\u63D0\u4EA4")))})});case 27:case"end":return r.stop()}},f)})))),asset:{type:"BLOCK",id:"form-demo-0",refAtomIds:["form"],dependencies:{"index.jsx":{type:"FILE",value:`import React from 'react';\r
import {\r
  Form,\r
  FormModel,\r
  FormItem,\r
  FormArray,\r
  modelUtils,\r
  arrayHelpers,\r
} from '../index.ts';\r
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
});`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.27.4"},"mobx-react-lite":{type:"NPM",value:"4.1.0"},mobx:{type:"NPM",value:"6.13.7"},"../index.ts":{type:"FILE",value:e(8324).Z}},entry:"index.jsx"},context:{"../index.ts":E,react:s||(s=e.t(p,2)),antd:x,"mobx-react-lite":g,mobx:O,"/Users/yanghui/Desktop/react-xform/flyvv.github.io/src/index.ts":E},renderOpts:{compile:function(){var f=u()(l()().mark(function o(){var t,d=arguments;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(278).then(e.bind(e,16278));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,d));case 3:case"end":return n.stop()}},o)}));function i(){return f.apply(this,arguments)}return i}()}}}},69308:function(_,m,e){e.r(m),e.d(m,{texts:function(){return s}});const s=[{value:"This is an example component.",paraId:0,tocIndex:0}]},8324:function(_,m){m.Z=`export { default as Foo } from './Foo';
import { Form } from './form';
import { arrayHelpers } from './form/array-helper';
import { FormEnvProvider, useFormEnv } from './form/context/formEnvContext';
import { useModel } from './form/context/modelContext';
import { FormItem, createFormItem } from './form/form-item';
import { AsyncValue } from './form/helpers/AsyncValue';
import { FormModel } from './form/model';
import { modelUtils } from './form/model-utils';

export {
  AsyncValue,
  Form,
  FormEnvProvider,
  FormItem,
  FormModel,
  arrayHelpers,
  createFormItem,
  modelUtils,
  useFormEnv,
  useModel,
};
`}}]);
