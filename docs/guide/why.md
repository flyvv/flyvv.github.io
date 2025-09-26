---
title: 开始
order: 1
nav:
  title: 快速开始      
  order: 0
---


# 介绍

`react-antd-xform` 是一个基于 MobX 和 Ant Design 的动态表单解决方案，提供 JSON Schema 驱动、表单联动和复杂校验等高级功能。在开始之前，你需要知道如何使用[mobx](https://mobx.js.org/README.html)进行数据管理。

## 📦 特点

- 无缝对接 mobx,表单内核完全采用 mobx 提供的数据结构。
- 表单组件格式定制化配置，更适合低代码/零代码平台。
- 概念精简，上手轻松。
- 基于双向绑定模型，提供灵活的、符合直觉的抽象。
- 高性能。
- 借助 mobx 依赖收集机制，实现表单组件的精确更新，[大数据量场景下交互依旧流畅]。

## ✨ why react-antd-xform

### 1️⃣ 响应式状态管理驱动UI更新
`react-antd-xform` 采用响应式状态管理驱动UI更新，使得表单组件的更新更加精确。

```tsx
import React from 'react';
import { Form, FormModel, FormItem } from '../../src';
import { Button } from 'antd';

const XFormTest = () => {
  const model = new FormModel({
    name: '44444',
    introduce: '我是张三，我来自湖北',
    date: '2025-09-17',
    dateRange: ['2025-09-24', '2025-10-30'],
    rate: 5,
  });
  return (
    <Form model={model} onSubmit={(values) => console.log(values)}>
      <FormItem component="input" label="input表单" name="name" required />
      <FormItem component="textArea" label="textArea" name="introduce" required />
      <FormItem
        defaultValue="jack"
        component="select"
        label="select单选"
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
          { value: 'disabled', label: 'Disabled', disabled: true },
        ]}
        writeDefaultValueToModel={true}
        name="friend"
        required
        componentProps={{
          style: { width: '100%' },
        }}
      />
      <FormItem
        defaultValue={['book']}
        component="multiSelect"
        label="select多选"
        options={[
          { value: 'book', label: '读书' },
          { value: 'study', label: '学习' },
          { value: 'disabled', label: 'Disabled', disabled: true },
        ]}
        writeDefaultValueToModel={true}
        name="likes"
        required
        componentProps={{
          style: { width: '100%' },
          mode: 'multiple',
        }}
      />
      <FormItem
        component="radio"
        label="radio单选"
        options={[
          { value: 'male', label: '男' },
          { value: 'female', label: '女' },
        ]}
        defaultValue="male"
        writeDefaultValueToModel={true}
        name="gender"
        required
      />
      <FormItem
        component="radio"
        labelStyle={{ marginTop: -4 }}
        label="radio单选"
        options={[
          { value: 'male', label: '男' },
          { value: 'female', label: '女' },
        ]}
        defaultValue="male"
        writeDefaultValueToModel={true}
        componentProps={{
          optionType: 'button',
        }}
        name="gender"
        required
      />
      <FormItem
        component="checkbox"
        defaultValue={['apple']}
        writeDefaultValueToModel={true}
        label="checkbox多选"
        labelStyle={{ marginTop: -4 }}
        options={[
          { value: 'apple', label: '苹果' },
          { value: 'banana', label: '香蕉' },
        ]}
        name="fruits"
        required
      />
      <FormItem
        component="inputNumber"
        defaultValue={1}
        writeDefaultValueToModel={true}
        label="数字表单"
        name="numbers"
        required
        componentProps={{
          min: 0,
          max: 10,
        }}
      />
      <FormItem
        component="slider"
        defaultValue={80}
        writeDefaultValueToModel={true}
        label="slider进度条"
        name="slider"
        required
      />
      <FormItem
        component="switch"
        defaultValue={true}
        writeDefaultValueToModel={true}
        label="switch开关"
        name="switch"
        required
      />
      <FormItem
        component="datePicker"
        writeDefaultValueToModel={true}
        label="日期选择"
        name="date"
        componentProps={{
          style: { width: '100%' },
          picker: 'date',
        }}
        required
      />
      <FormItem
        component="dateRangePicker"
        writeDefaultValueToModel={true}
        label="日期区间选择"
        name="dateRange"
        componentProps={{
          style: { width: '100%' },
          picker: 'date',
        }}
        required
      />
      <FormItem
        component="timePicker"
        writeDefaultValueToModel={true}
        label="时间选择"
        name="time"
        componentProps={{
          style: { width: '100%' },
        }}
        required
      />
      <FormItem
        component="timeRangePicker"
        writeDefaultValueToModel={true}
        label="时间区间选择"
        name="timeRange"
        componentProps={{
          style: { width: '100%' },
        }}
        required
      />
      <FormItem
        component="rate"
        writeDefaultValueToModel={true}
        label="rate评分"
        name="rate"
        componentProps={{
          style: { width: '100%' },
        }}
        required
      />
      <FormItem
        component="colorPicker"
        writeDefaultValueToModel={true}
        label="colorPicker"
        name="colorPicker"
        componentProps={{
          returnType: 'hex',
        }}
        required
      />
      <Form.Submit ButtonComponent={Button} type="primary">
        提交
      </Form.Submit>
      <Form.FormReset ButtonComponent={Button}>重置</Form.FormReset>
    </Form>
  );
};

export default XFormTest;

```

### 2️⃣ 专注

相较于antd form，大大简化表单，无需过多嵌套，且支持通过传入component方式自定义表单组件。

```tsx
import React from 'react';
import { Form, FormModel, FormItem } from '../../src';
import { Button } from 'antd';

const XFormTest = () => {
  const model = new FormModel({
    name: 'test',
  });
  return (
    <Form model={model} onSubmit={(values) => console.log(values)}>
      <FormItem component="input" label="input表单" name="name" required />
    </Form>
  );
};

export default XFormTest;

```
