function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import cx from 'classnames';
import styled from 'styled-components';
import { asCSSLength } from "../common-utils";
import { useFormEnv } from "../context/formEnvContext";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var FormLayoutContainer = styled.div.withConfig({
  displayName: "FormLayoutContainer",
  componentId: "react-xform__sc-1hghos2-0"
})(["--label-width:auto;--control-width:auto;--form-item-gap:0;--form-item-label-top-position:0;.form-item{margin-bottom:var(--form-item-gap);line-height:1.5;&.auto-control-width{--control-width:auto;}}.form-item-label{display:block;}.form-item-label-text{color:#666;}.form-item.minimal{margin-bottom:0;> .error-message,> .form-item-label{display:none;}}&.horizontal{.form-item{display:flex;align-items:flex-start;}.form-item-label{flex:0 0 var(--label-width);padding-top:var(--form-item-label-top-position);padding-right:12px;text-align:right;}}.form-item.form-item-hidden{display:none;}&.vertical{.form-item-label{font-size:12px;margin-bottom:4px;}}&.inline-error .error-message{position:absolute;right:0;top:-24px;}.form-item-preview{> .form-item-label{padding-top:0;}}.required-indicator{margin-right:4px;color:#eb4141;}.required-indicator::before{content:'*';}.error-message{margin-top:2px;color:#eb4141;}.tip{margin-left:4px;color:#999;}.help{color:#999999;margin-top:4px;}.form-item-control{position:relative;width:var(--control-width);> .next-input,> .next-select{width:100%;}> .next-range{margin:8px 0;}> .next-rating{margin-top:4px;margin-bottom:2px;}> .next-checkbox-group,> .next-radio-group,> .next-checkbox-wrapper{display:inline-block;line-height:18px;}}&.horizontal .form-item-control{> .next-checkbox-group,> .next-radio-group,> .next-checkbox-wrapper{padding-top:8px;}}"]);
export function FormLayout(_ref) {
  var children = _ref.children,
    className = _ref.className,
    style = _ref.style,
    _ref$labelPosition = _ref.labelPosition,
    labelPosition = _ref$labelPosition === void 0 ? 'left' : _ref$labelPosition,
    _ref$labelWidth = _ref.labelWidth,
    labelWidth = _ref$labelWidth === void 0 ? labelPosition === 'left' ? 120 : 'auto' : _ref$labelWidth,
    _ref$formItemGap = _ref.formItemGap,
    formItemGap = _ref$formItemGap === void 0 ? labelPosition === 'left' ? 12 : 16 : _ref$formItemGap,
    _ref$controlWidth = _ref.controlWidth,
    controlWidth = _ref$controlWidth === void 0 ? 320 : _ref$controlWidth,
    _ref$defaultLabelTopP = _ref.defaultLabelTopPosition,
    defaultLabelTopPosition = _ref$defaultLabelTopP === void 0 ? 4 : _ref$defaultLabelTopP,
    inlineError = _ref.inlineError,
    containerProps = _ref.containerProps;
  return /*#__PURE__*/_jsx(FormLayoutContainer, _objectSpread(_objectSpread({
    style: _objectSpread({
      '--label-width': asCSSLength(labelWidth),
      '--control-width': asCSSLength(controlWidth),
      '--form-item-gap': asCSSLength(formItemGap),
      '--form-item-label-top-position': asCSSLength(defaultLabelTopPosition)
    }, style),
    className: cx('xform-container', {
      horizontal: labelPosition === 'left',
      vertical: labelPosition === 'top',
      'inline-error': labelPosition === 'top' && inlineError
    }, className)
  }, containerProps), {}, {
    children: children
  }));
}
var FormItemGroupDiv = styled.div.withConfig({
  displayName: "FormItemGroupDiv",
  componentId: "react-xform__sc-1hghos2-1"
})(["", ".horizontal &{display:flex;}&.inline{.form-item-group-content{display:flex;}}"], FormLayoutContainer);

/** @deprecated 请使用 Form.ItemView 代替 ItemGroup */
export var FormItemGroup = function FormItemGroup(_ref2) {
  var label = _ref2.label,
    asterisk = _ref2.asterisk,
    tip = _ref2.tip,
    children = _ref2.children,
    labelWidth = _ref2.labelWidth,
    controlWidth = _ref2.controlWidth,
    className = _ref2.className,
    style = _ref2.style,
    inline = _ref2.inline;
  var _useFormEnv = useFormEnv(),
    isPreview = _useFormEnv.isPreview;
  return /*#__PURE__*/_jsxs(FormItemGroupDiv, {
    className: cx('form-item-group', {
      inline: inline,
      'form-item-preview': isPreview
    }, className),
    style: style,
    children: [label == null && tip == null ? null : /*#__PURE__*/_jsxs("div", {
      className: "form-item-label",
      children: [asterisk && /*#__PURE__*/_jsx("span", {
        className: "required-indicator"
      }), label && /*#__PURE__*/_jsx("span", {
        className: "form-item-label-text",
        children: label
      })]
    }), /*#__PURE__*/_jsx("div", {
      className: "form-item-group-content",
      style: {
        '--label-width': asCSSLength(labelWidth),
        '--control-width': asCSSLength(controlWidth)
      },
      children: children
    })]
  });
};