import { observer } from 'mobx-react-lite';
import { FormModel } from '../model';
import { useModel } from '../context/modelContext';

export const FormModelConsumer = observer(({ children }: React.ConsumerProps<FormModel<any>>) => {
  const model = useModel();
  return children(model) as React.ReactElement;
});
