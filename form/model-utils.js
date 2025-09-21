function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
import { action, observable, runInAction, toJS } from 'mobx';
import { observableSetIn } from "./common-utils";
import { FieldType } from "./enum";
export var modelUtils = {
  clearError: action(function (model) {
    model.iterateFields(function (field) {
      field.state.error = null;
    });
    model.iterateChecks(function (check) {
      check.error = null;
    });
  }),
  scrollToFirstError: function scrollToFirstError(errorFields) {
    var _iterator = _createForOfIteratorHelper(errorFields),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _field$config;
        var field = _step.value;
        if (!((_field$config = field.config) !== null && _field$config !== void 0 && _field$config.htmlId)) {
          continue;
        }
        var div = document.querySelector("*[data-xform-id=\"".concat(field.config.htmlId, "\"]"));
        if (!div) {
          continue;
        }
        if (typeof div.scrollIntoViewIfNeeded === 'function') {
          div.scrollIntoViewIfNeeded();
        } else {
          div.scrollIntoView({
            block: 'nearest'
          });
        }
        return;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  },
  animateErrorFields: function animateErrorFields(errorFields) {
    var _iterator2 = _createForOfIteratorHelper(errorFields),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _field$config2;
        var field = _step2.value;
        if (!((_field$config2 = field.config) !== null && _field$config2 !== void 0 && _field$config2.htmlId)) {
          continue;
        }
        var div = document.querySelector("*[data-xform-id=\"".concat(field.config.htmlId, "\"]"));
        if (!div) {
          continue;
        }
        div.animate([{
          offset: 0,
          transform: 'translateX(0)'
        }, {
          offset: 0.065,
          transform: 'translateX(-6px) rotateY(-9deg)'
        }, {
          offset: 0.185,
          transform: 'translateX(5px) rotateY(7deg)'
        }, {
          offset: 0.315,
          transform: 'translateX(-3px) rotateY(-5deg)'
        }, {
          offset: 0.435,
          transform: 'translateX(2px) rotateY(3deg)'
        }, {
          offset: 0.5,
          transform: 'translateX(0)'
        }], {
          duration: 750
        });
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  },
  validateAll: action(function (model) {
    var trigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '*';
    var hasError = false;
    var errors = observable(model._valueShape === 'array' ? [] : {});
    var errorFields = [];
    var promises = [];
    model.iterateFields(function (field) {
      if (!field.isMounted) {
        return;
      }
      promises.push(field.validate(trigger).then(action(function (error) {
        if (error) {
          hasError = true;
          observableSetIn(errors, field.path, error);
          errorFields.push(field);
        }
      })));
    });
    model.iterateChecks(function (check) {
      promises.push(check.validate().then(action(function (error) {
        if (error) {
          hasError = true;
          observableSetIn(errors, check.path, error);
        }
      })));
    });
    return Promise.all(promises).then(function () {
      return {
        hasError: hasError,
        errors: toJS(errors),
        errorFields: errorFields
      };
    });
  }),
  submit: action( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(model) {
      var options,
        onError,
        onSubmit,
        _options$valueFilter,
        valueFilter,
        _options$mergeDefault,
        mergeDefaultValue,
        _options$animateError,
        animateErrorFields,
        _options$scrollToFirs,
        scrollToFirstError,
        _yield$modelUtils$val,
        hasError,
        errors,
        errorFields,
        _args = arguments;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            onError = options.onError, onSubmit = options.onSubmit, _options$valueFilter = options.valueFilter, valueFilter = _options$valueFilter === void 0 ? 'mounted' : _options$valueFilter, _options$mergeDefault = options.mergeDefaultValue, mergeDefaultValue = _options$mergeDefault === void 0 ? true : _options$mergeDefault, _options$animateError = options.animateErrorFields, animateErrorFields = _options$animateError === void 0 ? false : _options$animateError, _options$scrollToFirs = options.scrollToFirstError, scrollToFirstError = _options$scrollToFirs === void 0 ? true : _options$scrollToFirs;
            _context.next = 4;
            return modelUtils.validateAll(model);
          case 4:
            _yield$modelUtils$val = _context.sent;
            hasError = _yield$modelUtils$val.hasError;
            errors = _yield$modelUtils$val.errors;
            errorFields = _yield$modelUtils$val.errorFields;
            if (hasError) {
              if (scrollToFirstError) {
                modelUtils.scrollToFirstError(errorFields);
              }
              if (animateErrorFields) {
                modelUtils.animateErrorFields(errorFields);
              }
              onError === null || onError === void 0 || onError(errors, model);
            } else if (typeof onSubmit === 'function') {
              runInAction(function () {
                var result = observable(valueFilter === 'all' ? toJS(model.values) : model._valueShape === 'array' ? [] : {});
                _mergeValuesFromViewToTarget(result, model, {
                  mergeDefaultValue: mergeDefaultValue
                });
                onSubmit(toJS(result), model);
              });
            }
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }()),
  reset: action(function (model) {
    var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      onReset = _ref2.onReset;
    model.values = {};
    modelUtils.clearError(model);
    onReset === null || onReset === void 0 || onReset(model);
  }),
  acceptValuesFormView: action(function (model) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _mergeValuesFromViewToTarget(model.values, model, opts);
  }),
  mergeValuesFromViewToView: _mergeValuesFromViewToTarget
};

/** 遍历 model 下当前挂载的 field 对象，将字段值或字段默认值写入到 target 中 */
function _mergeValuesFromViewToTarget(target, model) {
  var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref3$mergeDefaultVal = _ref3.mergeDefaultValue,
    mergeDefaultValue = _ref3$mergeDefaultVal === void 0 ? true : _ref3$mergeDefaultVal;
  model.iterateFields(function (field) {
    if (!field.isMounted) {
      return;
    }
    if (field.fieldType === FieldType.normal) {
      if (field.config.valueProp !== undefined) {
        // 如果对应的 FormItem 上已经指定了 value，则将其合并到结果中
        observableSetIn(target, field.path, field.config.valueProp);
      } else if (field.value !== undefined) {
        // 如果该字段有值，则将其合并到结果中
        observableSetIn(target, field.path, field.value);
      } else {
        // 否则尝试将 FormItem 上的 defaultValue 合并到结果中
        var defaultValueProp = field.config.defaultValueProp;
        if (mergeDefaultValue && defaultValueProp !== undefined) {
          observableSetIn(target, field.path, defaultValueProp);
        }
      }
    } else if (field.fieldType === FieldType.tuple) {
      var _model = field.parent;
      // hasValue 表示元祖字段是否有值
      var hasValue = field.value.some(function (v) {
        return v !== undefined;
      });
      if (hasValue) {
        // 如果该字段有值，则将其合并到结果中
        field._tupleParts.map(function (part, index) {
          observableSetIn(target, [].concat(_toConsumableArray(_model.path), [part]), field.value[index]);
        });
      } else {
        var _defaultValueProp = field.config.defaultValueProp;
        // 否则尝试将 FormItem 上的 defaultValue 合并到结果中
        if (mergeDefaultValue && _defaultValueProp !== undefined) {
          field._tupleParts.map(function (part, index) {
            observableSetIn(target, [].concat(_toConsumableArray(_model.path), [part]), _defaultValueProp === null || _defaultValueProp === void 0 ? void 0 : _defaultValueProp[index]);
          });
        }
      }
    }
    // 其他类型的 field 会被忽略
  });
}