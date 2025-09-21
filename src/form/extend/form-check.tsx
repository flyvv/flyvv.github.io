import { useLayoutEffect, useEffect } from 'react';
import { reaction } from 'mobx';
import { observer } from 'mobx-react-lite';
import { Check } from '../model';
import { CheckConfig, Watchable } from '../type';
import { useModel } from '../context/modelContext';
import { useFormEnv } from '../context/formEnvContext';
import { composeValue, convertWatchableToExpression } from '../common-utils';

export interface FormCheckProps<T = any> extends CheckConfig<T> {
  name?: string;
  check?: Check<T>;
  watch?: Watchable;
  renderError?: boolean | ((error: any) => React.ReactNode);
  deps?: unknown[];
}

export const FormCheck = observer(function FormCheck<T = any>({
  name,
  check: checkProp,
  validate,
  watch = [],
  validateOnMount,
  renderError,
  deps = [],
}: FormCheckProps<T>) {
  const formEnv = useFormEnv();
  const model = useModel();
  const check = composeValue(checkProp, model.getCheck(name));
  const checkConfig: CheckConfig<unknown> = {
    validateOnMount: validateOnMount ?? formEnv.validateOnMount,
    validate,
  };
  useLayoutEffect(() => check._track(checkConfig));
  useEffect(() => {
    return reaction(
      convertWatchableToExpression(watch, model),
      () => {
        check.validate();
      },
      { fireImmediately: checkConfig.validateOnMount }
    );
  }, [check, model, ...deps]);

  if (renderError === true) {
    return check.error;
  } else if (typeof renderError === 'function') {
    return renderError(check.error);
  } else {
    return null;
  }
});
