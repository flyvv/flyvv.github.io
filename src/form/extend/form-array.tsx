import { observer } from 'mobx-react-lite';
import { FormModel } from '../model';
import { FormArrayLayoutInput } from '../type';
import { useModel } from '../context/modelContext';
import { ModelProvider } from '../context/modelContext';
import { range } from '../common-utils';
import { arrayHelpers } from '../array-helper';

export interface FormArrayProps<T> {
  use?: boolean;
  arrayModel?: FormModel<T[]>;
  name?: string;
  layout?(input: FormArrayLayoutInput): React.ReactElement;
  children?: React.ReactNode | ((index: number, model: FormModel<T>) => React.ReactNode);
}

/** 默认的数组布局 */
const defaultArrayLayout = ({ arrayModel, itemContent, itemCount }: FormArrayLayoutInput) => {
  return range(itemCount).map((itemIndex) =>
    arrayHelpers.renderArrayItem(arrayModel, itemIndex, itemContent)
  );
};

export const FormArray = observer(
  <T extends any>({
    name,
    children,
    layout,
    arrayModel: arrayModelProp,
    use,
  }: FormArrayProps<T>) => {
    const parent = useModel();
    if (use === false) {
      return null;
    }
    const arrayModel =
      arrayModelProp ?? ((name === '&' ? parent : parent.getSubModel(name)) as FormModel<T[]>);
    const itemCount = arrayModel.values?.length ?? 0;
    const itemContent: any = typeof children === 'function' ? children : () => children;

    return (
      <ModelProvider value={arrayModel as FormModel<unknown[]>}>
        {(layout ?? defaultArrayLayout)({ arrayModel, itemCount, itemContent })}
      </ModelProvider>
    );
  }
);
