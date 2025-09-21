import { observer } from 'mobx-react-lite';
import { Form, FormItem, FormModel } from '../../index';
import { ValuePreview } from '../components/ValuePreview';

export default {
  title: 'XForm/基本用法',
  component: Form,
};

const ObservableFormExample = observer(() => {
  const model = new FormModel({
    name: '张三',
    introduce: '我是张三，我来自湖北',
  });
  return (
    <div style={{ maxWidth: 500 }}>
      <Form
        model={model}
        layout={{ labelPosition: 'top', inlineError: true }}
        onSubmit={(values) => console.log(values)}
      >
        <FormItem component="input" label="姓名" name="name" required />
        <FormItem component="textArea" label="介绍" name="introduce" required />
        <ValuePreview defaultShow={true}/>
      </Form>
    </div>
  );
});

export const LayoutForm = () => <ObservableFormExample />;
