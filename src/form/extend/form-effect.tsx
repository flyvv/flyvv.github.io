import { useEffect, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { IEqualsComparer, reaction } from 'mobx';
import { Watchable } from '../type';
import { FormModel } from '../model';
import { useModel } from '../context/modelContext';
import { convertWatchableToExpression } from '../common-utils';

export interface FormEffectProps<T = any> {
  watch: Watchable<T>;
  effect(value: T, detail: { prev: T; next: T; model: FormModel<any> }): void;
  fireImmediately?: boolean;
  deps?: unknown[];
  equals?: IEqualsComparer<T>;
}

export const FormEffect = observer(function FormEffect<T = any>({
  watch,
  effect,
  fireImmediately,
  deps = [],
  equals,
}: FormEffectProps<T>) {
  const model = useModel();

  const effectRef = useRef(effect);
  useEffect(() => {
    effectRef.current = effect;
  });

  useEffect(() => {
    return reaction(
      convertWatchableToExpression(watch, model),
      (next: T, prev: T) => {
        effectRef.current(next, { model, prev, next });
      },
      { fireImmediately, equals }
    );
  }, deps);

  return null as React.ReactElement;
});
