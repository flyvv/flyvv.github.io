import { useEffect, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { reaction } from 'mobx';
import { useModel } from "../context/modelContext";
import { convertWatchableToExpression } from "../common-utils";
export var FormEffect = observer(function FormEffect(_ref) {
  var watch = _ref.watch,
    effect = _ref.effect,
    fireImmediately = _ref.fireImmediately,
    _ref$deps = _ref.deps,
    deps = _ref$deps === void 0 ? [] : _ref$deps,
    equals = _ref.equals;
  var model = useModel();
  var effectRef = useRef(effect);
  useEffect(function () {
    effectRef.current = effect;
  });
  useEffect(function () {
    return reaction(convertWatchableToExpression(watch, model), function (next, prev) {
      effectRef.current(next, {
        model: model,
        prev: prev,
        next: next
      });
    }, {
      fireImmediately: fireImmediately,
      equals: equals
    });
  }, deps);
  return null;
});