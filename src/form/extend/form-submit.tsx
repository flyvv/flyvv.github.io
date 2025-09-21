import { ComponentType } from 'react';
import { modelUtils } from '../model-utils';
import { useModel } from '../context/modelContext';
import { useFormEnv } from '../context/formEnvContext';

type FormSubmitProps<T extends object = {}> = {
  /** 必须传入的按钮组件 */
  ButtonComponent: ComponentType<T>;
  /** 按钮内容 */
  children: React.ReactNode;
} & T;

export function FormSubmit<T extends object = {}>({
  ButtonComponent,
  children = '提交',
  ...props
}: FormSubmitProps<T>) {
  const model = useModel();
  const { onSubmit, onError } = useFormEnv();
  const submitOptions = {
    onSubmit,
    onError,
  };
  return (
    <ButtonComponent
      {...(props as T)}
      onClick={() => modelUtils.submit(model, submitOptions)}
      children={children}
      {...props}
    ></ButtonComponent>
  );
}
