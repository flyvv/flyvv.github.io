import { Button,ConfigProvider } from 'antd';
import { observer } from 'mobx-react-lite';
import { Form, FormItem, FormModel } from '../../index';
import { SyntaxCodeBlock } from '../components/SyntaxCodeBlock';
import { ValuePreview } from '../components/ValuePreview';
import code from '../code/baseForm/index.jsx?raw';
import zhCN from 'antd/es/locale/zh_CN'; 
import '../index.css';

export default {
  title: 'XForm/基本用法',
  component: Form,
};

const ObservableFormExample = observer(() => {
  const model = new FormModel({
    name: '',
    introduce: '我是张三，我来自湖北',
    date: '2025-09-17',
  });
  return (
    <ConfigProvider locale={zhCN}>
      <div className="title">基本用法</div>
      <div className="container">
        <Form model={model} writeDefaultValueToModel='force' onSubmit={(values) => console.log(values)}>
          <FormItem component="input" label="姓名" name="name" required />
          <FormItem
            component="textArea"
            label="介绍"
            labelStyle={{ marginTop: -4 }}
            name="introduce"
            required
          />
          <FormItem
            defaultValue="jack"
            component="select"
            label="朋友"
            options={[
              { value: 'jack', label: 'Jack' },
              { value: 'lucy', label: 'Lucy' },
              { value: 'Yiminghe', label: 'yiminghe' },
              { value: 'disabled', label: 'Disabled', disabled: true },
            ]}
            name="friend"
            required
            componentProps={{
              style: { width: '100%' },
            }}
          />
          <FormItem
            defaultValue={['book']}
            component="multiSelect"
            label="爱好"
            options={[
              { value: 'book', label: '读书' },
              { value: 'study', label: '学习' },
              { value: 'disabled', label: 'Disabled', disabled: true },
            ]}
            name="likes"
            required
            componentProps={{
              style: { width: '100%' },
              mode: 'multiple',
            }}
          />
          <FormItem
            component="radio"
            labelStyle={{ marginTop: -4 }}
            label="性别"
            options={[
              { value: 'male', label: '男' },
              { value: 'female', label: '女' },
            ]}
            defaultValue="male"
            name="gender"
            required
          />
          <FormItem
            component="checkbox"
            defaultValue={['apple']}
            label="喜欢的水果"
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
            label="折扣"
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
            label="进度条"
            name="slider"
            required
          />
          <FormItem
            component="switch"
            defaultValue={true}
            label="开关"
            name="switch"
            required
          />
          <FormItem
            component="datePicker"
            label="日期"
            name="date"
            componentProps={{
              style: { width: '100%' },
              picker: 'date',
            }}
            required
          />
          <FormItem
            component="dateRangePicker"
            label="日期区间"
            name="dateRange"
            componentProps={{
              style: { width: '100%' },
               picker: 'date',
            }}
            required
          />
          <FormItem
            component="timePicker"
            label="时间"
            name="time"
            componentProps={{
              style: { width: '100%' },
            }}
            required
          />
          <FormItem
            component="timeRangePickerPicker"
            label="时间区间"
            name="timeRange"
            componentProps={{
              style: { width: '100%' },
            }}
            required
          />
          <Form.Submit ButtonComponent={Button} type="primary">
            提交
          </Form.Submit>
          <Form.FormReset ButtonComponent={Button}>重置</Form.FormReset>
          <ValuePreview defaultShow={true} />
        </Form>
      </div>
      <div className="title">源码内容</div>
      <SyntaxCodeBlock code={code} language="jsx" />
    </ConfigProvider>
  );
});

export const BaseForm = () => <ObservableFormExample />;
