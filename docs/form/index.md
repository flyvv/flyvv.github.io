---
title: Form介绍
order: 1
nav:
  title: 使用文档
  order: 1
---

# Form

表单组件，创建所需的上下文，并通过 FormLayout 渲染一个 div：

- FormEnvProvider：表单的环境变量，子组件可以通过 useFormEnv 获取这些环境变量。
- ModelProvider：模型对象，子组件可以通过 useModel 获取模型对象。
- FormLayout： 表单布局。

## 基本使用

基本的表单数据域控制展示，包含布局、初始化、验证、提交。

## model

`FormModel` 受控用法。xform 模型对象，一般由上层通过 `new FormModel(...)` 创建而成。用于表单数据域控制。

```tsx
import React from 'react';
import { Form, FormModel, FormItem } from '../../src';
import { Button } from 'antd';
import ValuePreview from '../modules/ValuePreview.tsx'

const XFormTest = () => {
  const model = new FormModel({
    name: '44444',
  });
  return (
    <Form model={model} onSubmit={(values) => console.log(values)}>
      <FormItem component="input" label="input表单" name="name" required />
      <FormItem component="select" label="select表单" name="test" required />
      <Form.Submit ButtonComponent={Button} type="primary">
        提交
      </Form.Submit>
      {/* 只用来实时预览表单中的内容 */}
       <ValuePreview defaultShow={true} />
    </Form>
  );
};

export default XFormTest;

```

## API

| 字段                       | 描述                                                                                                                                                                                                                                                                                                    |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `model`                    | `FormModel` 受控用法。xform 模型对象，一般由上层通过 `new FormModel(...)` 创建而成                                                                                                                                                                                                                      |
| `defaultValue`             | `unknown`<br>非受控用法。表单的默认值                                                                                                                                                                                                                                                                   |
| `onSubmit`                 | `(submitValues: any, model: FormModel<any>) => void`<br>提交表单时的回调函数，需配合 `<Form.Submit />` 使用                                                                                                                                                                                             |
| `onError`                  | `(errors: any, model: FormModel<any>) => void`<br>提交表单时的出错回调函数，需配合 `<Form.Submit />` 使用                                                                                                                                                                                               |
| `onReset`                  | `(model: FormModel<any>) => void`<br>清空表单时的回调函数，需配合 `<Form.Reset />` 使用                                                                                                                                                                                                                 |
| `isPreview`                | `boolean = false`<br>是否为预览态                                                                                                                                                                                                                                                                       |
| `validateOnMount`          | `boolean = false`<br>组件加载时是否触发校验                                                                                                                                                                                                                                                             |
| `validateOnChange`         | `boolean = true`<br>值修改时是否触发校验                                                                                                                                                                                                                                                                |
| `validateOnBlur`           | `boolean = true`<br>组件失去焦点时是否触发校验                                                                                                                                                                                                                                                          |
| `writeDefaultValueToModel` | `boolean \| 'force' = false`<br>是否将 `FormItem` 上的 `defaultValue` 回写到 model 中。注意：只有「不为 undefined」且「通过 `FormItem` props 设置的」的默认值才会被回写到 model 中。                                                                                                                    |
| `autoUnmount`              | `boolean = false`<br>`FormItem` 卸载时，是否自动将对应数据清除                                                                                                                                                                                                                                          |
| `htmlIdPrefix`             | `string`<br>表单内控件的 html id 前缀。表单会以该属性为前缀为各个控件分配 `id` 属性，使控件与 HTML `label` 标签产生对应关系，点击 `label` 可以聚焦到相应控件上。默认情况下，表单内部会自动生成一个随机字符串作为前缀。将该属性设置为 `null` 可以关闭 label 关联行为；设置为指定字符串则可使用指定前缀。 |
| `variant`                  | antd 表单内控件变体，可选值为 `outlined` \| `borderless` \| `filled` \| `underlined`，默认值为 outlined                                                                                                                                                                                                 |
