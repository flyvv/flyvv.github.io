
# Form

This is an example component.

```jsx
import React from 'react';
import {
  Form,
  FormModel,
  FormItem,
  FormArray,
  modelUtils,
  arrayHelpers,
} from '../index.ts';
import { Button, Input } from 'antd';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';

export default observer(() => {
  const model1 = new FormModel({
    name: '张三',
    phone: '188-8888-8888',
    address: '杭州市余杭区文一西路福鼎家园',
  });

  const listModel = model1.getSubModel('list');

  return (
    <Form model={model1}>
      <FormItem component={'input'} label="姓名" name="name" required />
      <FormItem component={'input'} label="电话" name="phone" required />
      <FormItem component={'input'} label="地址" name="address" required />
      <div style={{ marginTop: 8 }}>
        <Button
          type="primary"
          onClick={async () => {
            const res = await modelUtils.validateAll(model1);
          }}
        >
          提交
        </Button>
      </div>

    </Form>
  );
});
```
