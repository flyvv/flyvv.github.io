function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
import { useLayoutEffect, useEffect } from 'react';
import { reaction } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useModel } from "../context/modelContext";
import { useFormEnv } from "../context/formEnvContext";
import { composeValue, convertWatchableToExpression } from "../common-utils";
export var FormCheck = observer(function FormCheck(_ref) {
  var name = _ref.name,
    checkProp = _ref.check,
    validate = _ref.validate,
    _ref$watch = _ref.watch,
    watch = _ref$watch === void 0 ? [] : _ref$watch,
    validateOnMount = _ref.validateOnMount,
    renderError = _ref.renderError,
    _ref$deps = _ref.deps,
    deps = _ref$deps === void 0 ? [] : _ref$deps;
  var formEnv = useFormEnv();
  var model = useModel();
  var check = composeValue(checkProp, model.getCheck(name));
  var checkConfig = {
    validateOnMount: validateOnMount !== null && validateOnMount !== void 0 ? validateOnMount : formEnv.validateOnMount,
    validate: validate
  };
  useLayoutEffect(function () {
    return check._track(checkConfig);
  });
  useEffect(function () {
    return reaction(convertWatchableToExpression(watch, model), function () {
      check.validate();
    }, {
      fireImmediately: checkConfig.validateOnMount
    });
  }, [check, model].concat(_toConsumableArray(deps)));
  if (renderError === true) {
    return check.error;
  } else if (typeof renderError === 'function') {
    return renderError(check.error);
  } else {
    return null;
  }
});