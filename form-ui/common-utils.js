var _excluded = ["value", "onChange", "picker"],
  _excluded2 = ["value", "onChange", "format", "picker"],
  _excluded3 = ["value", "onChange", "format"],
  _excluded4 = ["value", "onChange", "format"];
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React, { useMemo, useCallback } from 'react';
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import weekYear from 'dayjs/plugin/weekYear';
import isoweek from 'dayjs/plugin/isoweek';
import { jsx as _jsx } from "react/jsx-runtime";
dayjs.extend(weekOfYear);
dayjs.extend(weekYear);
dayjs.extend(isoweek);
export function isEmptyValue(value) {
  return !value && value !== 0 || Array.isArray(value) && value.length === 0;
}

// 默认时间格式
var DEFAULT_FORMAT_TIME = 'HH:mm:ss';
// 默认日期格式
var DEFAULT_FORMATS = {
  date: 'YYYY-MM-DD',
  week: 'gggg-[W]W',
  // 输出: 2025-W37
  month: 'YYYY-MM',
  quarter: 'YYYY-[Q]Q',
  // 输出: 2025-Q3
  year: 'YYYY'
};

// 判断是否为空值
var isEmptyDateValue = function isEmptyDateValue(val) {
  return val == null || val === '' || Array.isArray(val) && val.length === 2 && !val[0] && !val[1];
};

/**
 * antd中某些组件的onChange并不是直接返回value,而是e.target.value
 */
export var withValueChangeHandler = function withValueChangeHandler(Component) {
  return function (props) {
    var handleChange = function handleChange(e) {
      var _props$onChange;
      (_props$onChange = props.onChange) === null || _props$onChange === void 0 || _props$onChange.call(props, e.target.value);
    };
    // 使用类型断言处理组件props类型
    return /*#__PURE__*/_jsx(Component, _objectSpread(_objectSpread({}, props), {}, {
      onChange: handleChange
    }));
  };
};

/**
 * date日期选择器兼容
 */
export var withDayjsTransformAntdDate = function withDayjsTransformAntdDate(Component) {
  return function (props) {
    var value = props.value,
      onChange = props.onChange,
      picker = props.picker,
      restProps = _objectWithoutProperties(props, _excluded);
    // 根据 picker 类型决定如何解析 value
    var parsedValue = useMemo(function () {
      if (!value) return undefined;
      if (picker === 'week') {
        var _value$split = value.split('-'),
          _value$split2 = _slicedToArray(_value$split, 2),
          year = _value$split2[0],
          weekStr = _value$split2[1];
        var weekNumber = parseInt(weekStr, 10);
        if (year && !isNaN(weekNumber)) {
          return dayjs().year(parseInt(year, 10)).week(weekNumber).startOf('week');
        }
      } else if (picker === 'month') {
        return dayjs(value, 'YYYY-MM'); // 支持 "2025-03"
      } else if (picker === 'quarter') {
        return dayjs(value, 'YYYY-[Q]Q'); // 支持 "2025-Q2"
      } else if (picker === 'year') {
        return dayjs(value, 'YYYY');
      } else {
        // 默认按日期处理
        return dayjs(value);
      }
      return undefined;
    }, [value, picker]);
    var handleChange = useCallback(function (dayjsDate, dateString) {
      if (!dayjsDate || !dayjsDate.isValid()) {
        onChange === null || onChange === void 0 || onChange(null);
        return;
      }
      var formattedValue;
      if (picker === 'week') {
        // 提取年份和周数，格式化为 "2025-32"
        var year = dayjsDate.year();
        var week = dayjsDate.week(); // 注意：week() 返回的是第几周
        formattedValue = "".concat(year, "-").concat(week);
      } else if (picker === 'month') {
        formattedValue = dayjsDate.format('YYYY-MM');
      } else if (picker === 'quarter') {
        formattedValue = dayjsDate.format('YYYY-Q');
      } else if (picker === 'year') {
        formattedValue = dayjsDate.format('YYYY');
      } else {
        formattedValue = dayjsDate.format('YYYY-MM-DD');
      }
      onChange === null || onChange === void 0 || onChange(formattedValue);
    }, [onChange, picker]);
    return /*#__PURE__*/_jsx(Component, _objectSpread(_objectSpread({}, restProps), {}, {
      picker: picker,
      value: parsedValue,
      onChange: handleChange
    }));
  };
};

/**
 * dateRangePicker兼容
 */
export var withDayjsTransformAntdDateRangePicker = function withDayjsTransformAntdDateRangePicker(Component) {
  return function (props) {
    var _restProps$allowClear;
    var value = props.value,
      onChange = props.onChange,
      format = props.format,
      _props$picker = props.picker,
      picker = _props$picker === void 0 ? 'date' : _props$picker,
      restProps = _objectWithoutProperties(props, _excluded2);
    // 确定 format：优先使用传入的 format，否则根据 picker 使用默认
    var resolvedFormat = format || DEFAULT_FORMATS[picker] || DEFAULT_FORMATS.date;
    // 解析 value: [string, string] → [Dayjs | null, Dayjs | null] 或 null
    var parsedValue = useMemo(function () {
      if (isEmptyDateValue(value)) {
        return null;
      }
      if (!Array.isArray(value)) {
        return null;
      }
      var _value = _slicedToArray(value, 2),
        startStr = _value[0],
        endStr = _value[1];
      if (isEmptyDateValue([startStr, endStr])) {
        return null;
      }
      // 根据 picker 类型解析字符串为 Dayjs 对象
      var parseValue = function parseValue(str, type) {
        if (!str) return null;
        switch (type) {
          case 'week':
            {
              // 匹配: 2025-W37, 2025-37, 2025W37
              var match = str.match(/^(\d{4})-?W?(\d+)$/i);
              if (!match) return null;
              var year = parseInt(match[1], 10);
              var week = parseInt(match[2], 10);
              return dayjs().year(year).week(week).startOf('week');
            }
          case 'month':
            return dayjs(str, 'YYYY-MM', true);
          case 'quarter':
            {
              // 匹配: 2025-Q3, 2025Q3, 2025-3, 20253
              var _match = str.match(/^(\d{4})-?Q?([1-4])$/i);
              if (!_match) return null;
              var _year = parseInt(_match[1], 10);
              var quarter = parseInt(_match[2], 10);
              var month = (quarter - 1) * 3; // Q1 → 0月, Q2 → 3月, ...
              return dayjs("".concat(_year, "-").concat(String(month + 1).padStart(2, '0'), "-01"), 'YYYY-MM-DD', true);
            }
          case 'year':
            return dayjs(str, 'YYYY', true);
          case 'date':
          default:
            return dayjs(str, resolvedFormat, true);
        }
      };
      var start = parseValue(startStr, picker);
      var end = parseValue(endStr, picker);
      var isValidStart = start && start.isValid();
      var isValidEnd = end && end.isValid();
      if (!isValidStart && !isValidEnd) {
        return null;
      }
      return [isValidStart ? start : null, isValidEnd ? end : null];
    }, [value, picker, resolvedFormat]);
    // 处理 onChange: [Dayjs, Dayjs] | null → [string, string] 或 null
    var handleChange = useCallback(function (dates, dateStrings) {
      if (!dates || !dates[0] && !dates[1]) {
        onChange === null || onChange === void 0 || onChange(null);
        return;
      }
      var _dates = _slicedToArray(dates, 2),
        start = _dates[0],
        end = _dates[1];
      var formatValue = function formatValue(dayjsObj, type) {
        if (!dayjsObj || !dayjsObj.isValid()) return '';
        switch (type) {
          case 'week':
            return "".concat(dayjsObj.year(), "-W").concat(dayjsObj.week());
          // → 2025-W37
          case 'month':
            return dayjsObj.format('YYYY-MM');
          // → 2025-06
          case 'quarter':
            {
              var year = dayjsObj.year();
              var quarter = Math.floor(dayjsObj.month() / 3) + 1; // 1-4
              return "".concat(year, "-Q").concat(quarter); // → 2025-Q3
            }
          case 'year':
            return dayjsObj.format('YYYY');
          // → 2025
          case 'date':
          default:
            return dayjsObj.format(resolvedFormat);
        }
      };
      var formatted = [formatValue(start, picker), formatValue(end, picker)];
      if (!formatted[0] && !formatted[1]) {
        onChange === null || onChange === void 0 || onChange(null);
      } else {
        onChange === null || onChange === void 0 || onChange(formatted);
      }
    }, [onChange, picker, resolvedFormat]);
    return /*#__PURE__*/_jsx(Component, _objectSpread(_objectSpread({}, restProps), {}, {
      picker: picker,
      format: resolvedFormat,
      value: parsedValue,
      onChange: handleChange,
      allowClear: (_restProps$allowClear = restProps.allowClear) !== null && _restProps$allowClear !== void 0 ? _restProps$allowClear : true
    }));
  };
};

/**
 * timer选择器兼容
 */
export var withDayjsTransformAntdTime = function withDayjsTransformAntdTime(Component) {
  return function (props) {
    var value = props.value,
      onChange = props.onChange,
      _props$format = props.format,
      format = _props$format === void 0 ? DEFAULT_FORMAT_TIME : _props$format,
      restProps = _objectWithoutProperties(props, _excluded3);
    // 解析 value：字符串 → dayjs
    var parsedValue = useMemo(function () {
      if (!value) return undefined;
      var stringValue = String(value).trim();
      if (!stringValue) return undefined;
      // 使用指定 format 解析，开启严格模式避免模糊解析
      var parsed = dayjs(stringValue, format, true);
      // 只有在格式匹配且有效时才返回
      return parsed.isValid() ? parsed : undefined;
    }, [value, format]);
    // 处理 onChange：dayjs → 字符串
    var handleChange = useCallback(function (time, timeString) {
      if (!time || !time.isValid()) {
        onChange === null || onChange === void 0 || onChange(null);
        return;
      }
      // 根据format输出字符串
      var formatted = time.format(format);
      onChange === null || onChange === void 0 || onChange(formatted);
    }, [onChange, format]);
    return /*#__PURE__*/_jsx(Component, _objectSpread(_objectSpread({}, restProps), {}, {
      format: format,
      value: parsedValue,
      onChange: handleChange
    }));
  };
};

/**
 * timerPicker选择器兼容
 */
export var withDayjsTransformAntdTimeRange = function withDayjsTransformAntdTimeRange(Component) {
  return function (props) {
    var value = props.value,
      onChange = props.onChange,
      _props$format2 = props.format,
      format = _props$format2 === void 0 ? DEFAULT_FORMAT_TIME : _props$format2,
      restProps = _objectWithoutProperties(props, _excluded4);
    // 解析 value: [string, string] → [Dayjs, Dayjs]
    var parsedValue = useMemo(function () {
      if (!value || !Array.isArray(value)) return undefined;
      var _value2 = _slicedToArray(value, 2),
        startStr = _value2[0],
        endStr = _value2[1];
      if (!startStr && !endStr) return undefined;
      var start = startStr ? dayjs(startStr, format, true) : null;
      var end = endStr ? dayjs(endStr, format, true) : null;
      var isValidStart = start && start.isValid();
      var isValidEnd = end && end.isValid();
      if (!isValidStart && !isValidEnd) return undefined;
      return [isValidStart ? start : null, isValidEnd ? end : null];
    }, [value, format]);
    // 处理 onChange: [Dayjs, Dayjs] → [string, string]
    var handleChange = useCallback(function (times, timeStrings) {
      if (!times) {
        onChange === null || onChange === void 0 || onChange(null);
        return;
      }
      var _times = _slicedToArray(times, 2),
        start = _times[0],
        end = _times[1];
      var formatted = [start !== null && start !== void 0 && start.isValid() ? start.format(format) : '', end !== null && end !== void 0 && end.isValid() ? end.format(format) : ''];
      // 可选：如果都为空，返回 null
      if (!formatted[0] && !formatted[1]) {
        onChange === null || onChange === void 0 || onChange(null);
      } else {
        onChange === null || onChange === void 0 || onChange(formatted);
      }
    }, [onChange, format]);
    return /*#__PURE__*/_jsx(Component, _objectSpread(_objectSpread({}, restProps), {}, {
      format: format,
      value: parsedValue,
      onChange: handleChange
    }));
  };
};

/**
 * 向组件中注入props
 */
export var withInjectedProps = function withInjectedProps(injectedProps) {
  return function (Component) {
    var WrappedComponent = /*#__PURE__*/React.forwardRef(function (props, ref) {
      var mergedProps = _objectSpread(_objectSpread({}, injectedProps), props);
      return /*#__PURE__*/_jsx(Component, _objectSpread({
        ref: ref
      }, mergedProps));
    });
    WrappedComponent.displayName = "WithInjectedProps(".concat(Component.displayName || Component.name, ")");
    return WrappedComponent;
  };
};