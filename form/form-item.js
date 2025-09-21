var _excluded = ["defaultValue", "isEmpty", "renderPreview", "componentProps", "name", "field"],
  _excluded2 = ["$Component"],
  _excluded3 = ["use", "component"];
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React, { useEffect, useLayoutEffect } from 'react';
import cx from 'classnames';
import { observer } from 'mobx-react-lite';
import stringifyObject from 'stringify-object';
import { reaction, runInAction, toJS } from 'mobx';
import { FieldType } from "./enum";
import { pick } from "./common-utils";
import { Field } from "./model";
import { useModel } from "./context/modelContext";
import { useFormEnv } from "./context/formEnvContext";
import { ALL_COMPONENTS } from "../form-ui/default-component";
import { composeValue, isFalsyOrEmptyArray, asCSSLength } from "./common-utils";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
function processCreationOptions(options) {
  var _options$render, _options$isEmpty, _options$renderPrevie;
  var render = (_options$render = options.render) !== null && _options$render !== void 0 ? _options$render : function (props) {
    return /*#__PURE__*/React.createElement(options.component, props);
  };
  return {
    name: options.name,
    hidden: options.hidden,
    withField: Boolean(options.withField),
    statusPropName: composeValue(options.statusPropName, 'state'),
    valuePropName: composeValue(options.valuePropName, 'value'),
    hasIntrinsicWidth: options.hasIntrinsicWidth !== false,
    defaultValue: Object.keys(options).includes('defaultValue') ? options.defaultValue : null,
    isEmpty: (_options$isEmpty = options.isEmpty) !== null && _options$isEmpty !== void 0 ? _options$isEmpty : isFalsyOrEmptyArray,
    render: render,
    renderPreview: (_options$renderPrevie = options.renderPreview) !== null && _options$renderPrevie !== void 0 ? _options$renderPrevie : render
  };
}
function resolveField(fieldProp, model, name, valueProp) {
  var field;
  if (fieldProp != null) {
    field = fieldProp;
  } else if (name === '&') {
    field = model._asField();
  } else if (name != null) {
    field = model.getField(name);
  } else {
    // readonly field 每次都会重新生成
    field = new Field({
      fieldType: FieldType.readonly,
      value: valueProp,
      name: '(readonly)',
      forkName: Field.ORIGINAL,
      parent: model
    });
  }
  return field;
}
export function FormItemView(_ref) {
  var htmlId = _ref.htmlId,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? '' : _ref$label,
    help = _ref.help,
    tip = _ref.tip,
    asterisk = _ref.asterisk,
    error = _ref.error,
    children = _ref.children,
    className = _ref.className,
    style = _ref.style,
    labelWidth = _ref.labelWidth,
    controlWidth = _ref.controlWidth,
    rightNode = _ref.rightNode,
    labelStyle = _ref.labelStyle,
    controlStyle = _ref.controlStyle;
  return /*#__PURE__*/_jsxs("div", {
    "data-xform-id": htmlId,
    className: cx('form-item', className),
    style: _objectSpread({
      '--label-width': asCSSLength(labelWidth),
      '--control-width': asCSSLength(controlWidth)
    }, style),
    children: [label == null && tip == null ? null : /*#__PURE__*/_jsxs("label", {
      className: "form-item-label",
      htmlFor: htmlId,
      style: labelStyle,
      children: [asterisk && /*#__PURE__*/_jsx("span", {
        className: "required-indicator"
      }), label && /*#__PURE__*/_jsx("span", {
        className: "form-item-label-text",
        children: label
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: "form-item-control",
      style: controlStyle,
      children: [children, help && /*#__PURE__*/_jsx("div", {
        className: "help",
        children: help
      }), error && /*#__PURE__*/_jsx("div", {
        className: "error-message",
        children: error
      })]
    }), rightNode]
  });
}
export function createFormItem(inputOptions) {
  var options = processCreationOptions(inputOptions);
  function FormItemComponent(_ref2) {
    var _props$asterisk;
    var defaultValueProp = _ref2.defaultValue,
      _ref2$isEmpty = _ref2.isEmpty,
      isEmpty = _ref2$isEmpty === void 0 ? options.isEmpty : _ref2$isEmpty,
      _ref2$renderPreview = _ref2.renderPreview,
      renderPreview = _ref2$renderPreview === void 0 ? options.renderPreview : _ref2$renderPreview,
      componentPropsProp = _ref2.componentProps,
      name = _ref2.name,
      fieldProp = _ref2.field,
      props = _objectWithoutProperties(_ref2, _excluded);
    var formEnv = useFormEnv();
    var model = useModel();
    var field = resolveField(fieldProp, model, name, props.value);
    var isPreview = composeValue(props.isPreview, formEnv.isPreview);
    var error = composeValue(props.error, field.state.error);
    var defaultValue = composeValue(defaultValueProp, options.defaultValue);
    var value = toJS(composeValue(field.value, defaultValue));
    var htmlId = Field.getHtmlId(formEnv.htmlIdPrefix, field);
    var componentProps = _objectSpread(_objectSpread(_objectSpread(_objectSpread({
      id: htmlId
    }, isPreview ? {
      isPreview: true
    } : null), pick(props, ['dataSource', 'readOnly', 'disabled', 'options'])), componentPropsProp), {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, options.statusPropName, composeValue(componentPropsProp === null || componentPropsProp === void 0 ? void 0 : componentPropsProp[options.statusPropName], composeValue(props[options.statusPropName], error ? 'error' : undefined))), options.valuePropName, composeValue(props[options.valuePropName], value)), "onChange", composeValue(props.onChange, field.handleChange)), "onFocus", composeValue(props.onFocus, field.handleFocus)), "onBlur", composeValue(props.onBlur, field.handleBlur)));
    if (options.withField) {
      componentProps.field = field;
    }
    var fieldConfig = _objectSpread({
      htmlId: htmlId,
      valueProp: props[options.valuePropName],
      defaultValue: defaultValue,
      defaultValueProp: defaultValueProp,
      isEmpty: isEmpty,
      validateOnChange: formEnv.validateOnChange,
      validateOnBlur: formEnv.validateOnBlur,
      validateOnMount: formEnv.validateOnMount,
      writeDefaultValueToModel: formEnv.writeDefaultValueToModel,
      autoUnmount: formEnv.autoUnmount
    }, props);

    // 利用 useLayoutEffect 将 fieldConfig 设置到 field.config 上
    useLayoutEffect(function () {
      return field._track(fieldConfig);
    });

    // 处理 writeDefaultValueToModel 与 autoUnmount
    useLayoutEffect(function () {
      if (fieldConfig.writeDefaultValueToModel === 'force') {
        return reaction(function () {
          return field.value;
        }, function () {
          if (field.value === undefined && fieldConfig.defaultValueProp !== undefined) {
            field.value = fieldConfig.defaultValueProp;
          }
        }, {
          fireImmediately: true
        });
      } else if (fieldConfig.writeDefaultValueToModel) {
        if (field.value === undefined && fieldConfig.defaultValueProp !== undefined) {
          // 注意只有「不为 undefined」且「通过 FormItem props 设置的」的默认值才会被回写到 model 中
          runInAction(function () {
            field.value = fieldConfig.defaultValueProp;
          });
        }
      }
      return function () {
        if (fieldConfig.autoUnmount) {
          field.clear();
        }
      };
    }, []);
    useEffect(function () {
      if (fieldConfig.validateOnMount) {
        field.validate('mount');
        var cancel = field.state.cancelValidation;
        return function () {
          cancel === null || cancel === void 0 || cancel();
        };
      }
    }, []);
    if (options.hidden) {
      // renderHiddenFormItemView 是内部 api，仅用在 arrayTable 和 component=hidden 组合使用的情况
      if (props.renderHiddenFormItemView === false) {
        return null;
      }
    }
    return /*#__PURE__*/_jsx(FormItemView, {
      htmlId: htmlId,
      label: props.label,
      help: props.help,
      asterisk: (_props$asterisk = props.asterisk) !== null && _props$asterisk !== void 0 ? _props$asterisk : props.required,
      error: error,
      tip: props.tip,
      style: props.style,
      className: cx(props.className, {
        'form-item-hidden': options.hidden,
        'form-item-preview': isPreview,
        'auto-control-width': options.hasIntrinsicWidth
      }),
      labelWidth: props.labelWidth,
      labelStyle: props.labelStyle,
      controlWidth: props.controlWidth,
      controlStyle: props.controlStyle,
      rightNode: props.rightNode,
      children: isPreview ? renderPreview(componentProps) : options.render(componentProps)
    });
  }
  FormItemComponent.displayName = "FormItem__".concat(options.name);
  return observer(FormItemComponent);
}
var COMPONENT_DICT = {};
var _iterator = _createForOfIteratorHelper(ALL_COMPONENTS),
  _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var config = _step.value;
    var Component = createFormItem(config);
    COMPONENT_DICT[config.name] = Component;
    // if (config.aliases) {
    //   for (const alias of config.aliases) {
    //     COMPONENT_DICT[alias] = Component;
    //   }
    // }
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
export var AnonymousFormItem = createFormItem({
  name: 'anonymous',
  render: function render(_ref3) {
    var Component = _ref3.$Component,
      props = _objectWithoutProperties(_ref3, _excluded2);
    return /*#__PURE__*/_jsx(Component, _objectSpread({}, props));
  }
});
var NotFound = createFormItem({
  name: 'notFound',
  isEmpty: function isEmpty() {
    return false;
  },
  render: function render(_ref4) {
    var $Component = _ref4.$Component;
    return /*#__PURE__*/_jsxs("div", {
      style: {
        border: '1px dashed red',
        fontSize: 14,
        padding: 4,
        color: 'red'
      },
      children: [/*#__PURE__*/_jsxs("code", {
        children: ["<FormItem component='", $Component, "' />"]
      }), ' ', "\u6CA1\u6709\u627E\u5230\u5BF9\u5E94\u7EC4\u4EF6\uFF0C\u8BF7\u68C0\u67E5\u7EC4\u4EF6\u540D\u79F0\u662F\u5426\u62FC\u5199\u6B63\u786E"]
    });
  }
});
var Hidden = createFormItem({
  name: 'hidden',
  hidden: true,
  hasIntrinsicWidth: false,
  defaultValue: undefined,
  isEmpty: function isEmpty() {
    return false;
  },
  render: function render(_ref5) {
    var id = _ref5.id,
      value = _ref5.value;
    return /*#__PURE__*/_jsx("input", {
      type: "hidden",
      value: stringifyObject(value),
      id: id
    });
  }
});
export function FormItem(_ref6) {
  var use = _ref6.use,
    component = _ref6.component,
    props = _objectWithoutProperties(_ref6, _excluded3);
  if (use === false) {
    return null;
  }
  if (component == null) {
    return /*#__PURE__*/_jsx(NotFound, _objectSpread(_objectSpread({}, props), {}, {
      componentProps: {
        $Component: String(component)
      }
    }));
  } else if (typeof component === 'string') {
    if (component === 'hidden') {
      return /*#__PURE__*/_jsx(Hidden, _objectSpread({}, props));
    }
    var Comp = COMPONENT_DICT[component];
    if (Comp == null) {
      return /*#__PURE__*/_jsx(NotFound, _objectSpread(_objectSpread({}, props), {}, {
        componentProps: {
          $Component: component
        }
      }));
    }
    return /*#__PURE__*/React.createElement(Comp, props);
  } else {
    return /*#__PURE__*/_jsx(AnonymousFormItem, _objectSpread(_objectSpread({}, props), {}, {
      componentProps: _objectSpread(_objectSpread({}, props.componentProps), {}, {
        $Component: component
      })
    }));
  }
}