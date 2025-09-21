import { ComponentType } from 'react';
import { action } from 'mobx';
import { modelUtils } from '../model-utils';
import { useModel } from '../context/modelContext';
import { useFormEnv } from '../context/formEnvContext';

type FormSubmitProps<T extends object = {}> = {
  /** 必须传入的按钮组件 */
  ButtonComponent: ComponentType<T>;
  /** 按钮内容 */
  children: React.ReactNode;
} & T;

export function FormReset<T extends object = {}>({
  ButtonComponent,
  children = '提交',
  ...props
}: FormSubmitProps<T>) {
  const model = useModel();
  const formEnv = useFormEnv();

  return (
    <ButtonComponent
      {...(props as T)}
      onClick={action(() => modelUtils.reset(model, formEnv))}
      children={children}
      {...props}
    ></ButtonComponent>
  );
}
