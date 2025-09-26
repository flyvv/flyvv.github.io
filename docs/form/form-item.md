---
title: FormItem介绍
order: 2
nav:
  title: 使用文档
  order: 1
---

# FormItem
表单项组件，通过引入form-ui文件夹内制注册的antd组件，进而生成一个表单项，最后渲染一个 Form.ItemView，并将 「某个数据索引」与 ItemView 进行[双向绑定]

- Form.ItemView 包含 label、error、help 等部分，以及一个具体的控件实例（例如一个输入框）；
- 数据索引可以用 name 进行指定，也可以通过 field 指定。

| 字段 | 默认值 | 类型 | 介绍 |
| --- | --- | --- | --- |
| `use` | `false` | `boolean` | 为 `false` 时，该 FormItem 将渲染为 `null` |
| `component` | `true` | `string` | 组件类型（如 `Input`, `Select` 等） |
| `label` | - | `ReactNode` | 字段的显示名称 |
| `name` | `true` | `string` | 字段数据索引，用于绑定 model 中的数据路径 |
| `field` | `false` | `Field` | 字段绑定的 Field 对象，提供后将覆盖 `name` 属性 |
| `tip` | - | `ReactNode` | 提示信息，通常以问号图标展示 |
| `asterisk` | - | `boolean` | 是否展示红色星号 `*` 标记必填 |
| `help` | - | `ReactNode` | 帮助文本，显示在控件下方 |
| `defaultValue` | - | `any` | 字段默认值（非受控用法） |
| `isPreview` | - | `boolean` | 是否为预览态，控制是否展示只读内容 |
| `componentProps` | - | `object` | 传递给实际组件的额外 props |
| `config` | - | `object` | 其他自定义配置；`props.config` 中的值会合并到 `field.config` 中 |
| `writeDefaultValueToModel` | `false` | `boolean \| 'force'` | 是否将 `FormItem` 上的 `defaultValue` 回写到 model 中。注意：只有「不为 `undefined`」且「通过 `FormItem` props 设置的」的默认值才会被回写。`FormEnvProvider` 可设置默认值。 |
| `required` | - | `boolean` | 字段是否必填 |
| `requiredMessage` | `"该字段为必填项"` | `string` | 必填校验失败时的错误提示信息 |
| `validate` | - | `(value: any, field: Field, trigger: FieldValidateTrigger) => string \| Promise<string>` | 自定义校验方法，返回字符串表示错误信息，支持异步校验 |
| `validateOnMount` | `false` | `boolean` | 组件加载时是否触发校验。`FormEnvProvider` 可设置默认值 |
| `validateOnChange` | `true` | `boolean` | 值修改时是否触发校验。`FormEnvProvider` 可设置默认值 |
| `validateOnBlur` | `true` | `boolean` | 组件失去焦点时是否触发校验。`FormEnvProvider` 可设置默认值 |
| `dataSource` | - | - | 同 `componentProps.dataSource`，快捷设置选项列表 |
| `disabled` | - | - | 同 `componentProps.disabled`，快捷禁用控件 |
| `readOnly` | - | - | 同 `componentProps.readOnly`，设置只读状态 |
| `state` | - | - | 同 `componentProps.state`，控制控件状态（如 success / error） |
| `labelWidth` | - | `string \| number` | 标签宽度，支持像素或百分比 |
| `labelStyle` | - | `CSSProperties` | 标签区域的内联样式 |
| `controlWidth` | - | `string \| number` | 控件区域宽度 |
| `controlStyle` | - | `CSSProperties` | 控件区域的内联样式 |
| `rightNode` | - | `ReactNode` | 在控件右侧添加自定义内容（如单位、按钮等） |
| `value` | - | - | 覆盖表单项默认的 `value`。注意：不同组件可能使用不同 prop 名称（如 `checked`） |
| `onChange` | - | - | 覆盖表单项默认的 `onChange` 回调 |
| `onBlur` | - | - | 覆盖表单项默认的 `onBlur` 回调 |
| `renderPreview` | - | - | 自定义预览态下的渲染方式 |
| `isEmpty` | `(value: any) => boolean` | `(value: any) => boolean` | 自定义判断字段值是否为空的逻辑 |
| `afterChange` | - | `(...args: any[]) => void` | 表单项值修改之后的回调函数（无论是否触发校验） |
