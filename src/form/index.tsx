import React, { useState } from 'react';
import { FormProps } from './type';
import { FormModel } from './model';
import { FormItemView } from './form-item';
import { ModelProvider } from './context/modelContext';
import { FormEnvProvider } from './context/formEnvContext';
import { composeValue, useHtmlIdPrefix } from './common-utils';
import { FormArray } from './extend/form-array';
import { FormCheck } from './extend/form-check';
import { FormReset } from './extend/form-reset';
import { FormLayout } from './extend/form-layout';
import { FormSubmit } from './extend/form-submit';
import { FormEffect } from './extend/form-effect';
import { FormObject } from './extend/form-object';
import { FormModelConsumer } from './extend/form-model-consumer';

export function Form({
  model: modelProp,
  defaultValue,
  children,
  className,
  style,
  layout,
  containerProps,
  htmlIdPrefix: htmlIdPrefixProp,
  ...restEnvProps
}: FormProps) {
  const [_model] = useState(() => new FormModel(defaultValue));
  const model = composeValue(modelProp, _model);
  const htmlIdPrefix = useHtmlIdPrefix(htmlIdPrefixProp);

  return (
    <FormEnvProvider htmlIdPrefix={htmlIdPrefix} {...restEnvProps}>
      <ModelProvider value={model}>
        <FormLayout style={style} className={className} containerProps={containerProps} {...layout}>
          {children}
        </FormLayout>
      </ModelProvider>
    </FormEnvProvider>
  );
}

Form.Array = FormArray;
Form.Check = FormCheck;
Form.Effect = FormEffect;
Form.Object = FormObject;
Form.Submit = FormSubmit;
Form.Layout = FormLayout;
Form.ItemView = FormItemView;
Form.ModelProvider = ModelProvider;
Form.ModelConsumer = FormModelConsumer;
Form.FormReset = FormReset;
