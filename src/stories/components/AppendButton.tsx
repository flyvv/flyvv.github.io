import { Button } from 'antd';
import { observer } from 'mobx-react-lite';
import { Form } from '../../form';
import { arrayHelpers } from '../../form/array-helper';

const AppendButton = observer(({ name, itemFactory }: { name: string; itemFactory?: any }) => (
  <Form.ModelConsumer>
    {(mod) => (
      <Button
        onClick={() => {
          arrayHelpers.append(mod.getSubModel(name), itemFactory);
        }}
      >
        新增一项
      </Button>
    )}
  </Form.ModelConsumer>
));

export default AppendButton;
