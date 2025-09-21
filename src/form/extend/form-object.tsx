import { observer } from 'mobx-react-lite';
import { FormModel } from '../model';
import { useModel } from '../context/modelContext';
import { ModelProvider } from '../context/modelContext';

export const FormObject = observer(
  ({ name, children, use }: { children: React.ReactNode; name: string; use?: boolean }) => {
    const parent = useModel();
    if (use === false) {
      return null;
    }

    const model = (name === '&' ? parent : parent.getSubModel(name)) as FormModel;
    return <ModelProvider value={model} children={children} />;
  }
);
