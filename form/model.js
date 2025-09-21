function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import invariant from 'invariant';
import { action, computed, makeObservable, observable, toJS } from 'mobx';
import { ModelType, FieldType } from "./enum";
import { splitToPath, composeValue, observableGetIn, observableSetIn, keyToValueShape } from "./common-utils";
var EMPTY_PATH = [];
var ROOT_MODEL_CREATE_OPTIONS = {
  modelType: ModelType.rootModel
};
var IdGenerator = /*#__PURE__*/function () {
  function IdGenerator(prefix) {
    _classCallCheck(this, IdGenerator);
    _defineProperty(this, "_nextId", 1);
    _defineProperty(this, "prefix", void 0);
    this.prefix = prefix;
  }
  _createClass(IdGenerator, [{
    key: "getNextId",
    value: function getNextId() {
      return "".concat(this.prefix, "_").concat(this._nextId++);
    }
  }]);
  return IdGenerator;
}();
export var FormModel = /*#__PURE__*/function () {
  function FormModel(initValues) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ROOT_MODEL_CREATE_OPTIONS;
    _classCallCheck(this, FormModel);
    _defineProperty(this, "_modelIdGenerator", void 0);
    _defineProperty(this, "_fieldIdGenerator", void 0);
    _defineProperty(this, "id", void 0);
    _defineProperty(this, "state", {});
    _defineProperty(this, "root", void 0);
    _defineProperty(this, "parent", void 0);
    _defineProperty(this, "name", void 0);
    /** 当前 Model 的类型，目前只有两种类型： rootModel 和 subModel */
    _defineProperty(this, "_modelType", void 0);
    _defineProperty(this, "_values", void 0);
    _defineProperty(this, "_fieldMap", new Map());
    _defineProperty(this, "_valueShape", 'auto');
    _defineProperty(this, "_subModels", void 0);
    _defineProperty(this, "_checkMap", new Map());
    /**
     * 标记当前 model 是否已经删除.
     * 当某个对象从数组中移除时，该对象对应的 model 就被会标记为 _selfDeleted=true
     * */
    _defineProperty(this, "_selfDeleted", false);
    if ((options === null || options === void 0 ? void 0 : options.modelType) === ModelType.subModel) {
      this._modelType = ModelType.subModel;
      this.parent = options.parent;
      this.root = this.parent.root;
      this.name = options.name;
      this.id = this.root._modelIdGenerator.getNextId();
    } else {
      this._modelType = ModelType.rootModel;
      this.parent = this;
      this.root = this;
      this.name = '';
      this._modelIdGenerator = new IdGenerator('Model');
      this._fieldIdGenerator = new IdGenerator('Field');
      this.id = this._modelIdGenerator.getNextId();

      // root model 才会使用 this._values
      this._values = composeValue(initValues, {});
      if (this._values == null) {
        console.warn('[xform] FormModel 根节点的初始 values 不能为 null');
      }
    }
    makeObservable(this, {
      // root model 才会使用 this._values
      _values: this._modelType === ModelType.rootModel ? observable : false,
      values: computed,
      state: observable,
      setValue: action,
      // 注意 name 是可以变化的；在数组元素调换位置的情况下 name 会进行变更
      name: observable.ref,
      path: computed,
      _selfDeleted: observable.ref,
      isDeleted: computed,
      _markDeleted: action
    }, {
      name: "".concat(this.id, "(").concat(this.name, ")")
    });
  }
  _createClass(FormModel, [{
    key: "values",
    get: function get() {
      if (this._modelType === ModelType.rootModel) {
        return this._values;
      } else {
        return this.parent.getValue(this.name);
      }
    },
    set: function set(nextValues) {
      if (this.isDeleted) {
        console.warn('[xform] 对已删除的 Model 进行赋值将被忽略。请不要对已删除的 Model/Field 进行操作。');
        return;
      }
      if (this._modelType === ModelType.rootModel) {
        if (nextValues == null) {
          console.warn('[xform] FormModel 根节点的 values 不能设置为 null/undefined');
        }
        this._values = nextValues;
      } else {
        this.parent.setValue(this.name, nextValues);
      }
    }
  }, {
    key: "path",
    get: function get() {
      if (this._modelType == ModelType.rootModel) {
        return EMPTY_PATH;
      } else {
        return [].concat(_toConsumableArray(this.parent.path), [this.name]);
      }
    }
  }, {
    key: "getValue",
    value: function getValue(name, defaultValue) {
      return observableGetIn(this.values, String(name), defaultValue);
    }
  }, {
    key: "setValue",
    value: function setValue(name, value) {
      if (this.isDeleted) {
        console.warn('[xform] 对已删除的 Model 进行赋值将被忽略。请不要对已删除的 Model/Field 进行操作。');
        return;
      }
      if (this._modelType === ModelType.subModel && this.values == null) {
        this._updateValueShape(keyToValueShape(splitToPath(String(name))[0]));
        this.values = this._valueShape === 'array' ? [] : {};
      }
      observableSetIn(this.values, name, value);
    }
  }, {
    key: "getSubModel",
    value: function getSubModel(name) {
      var path = Array.isArray(name) ? name : splitToPath(name);
      var mod = this;
      for (var i = 0; i < path.length - 1; i++) {
        mod = mod._getSubModelByShortName(path[i]);
      }
      return mod._getSubModelByShortName(path[path.length - 1]);
    }
  }, {
    key: "getField",
    value: function getField(name) {
      var path = Array.isArray(name) ? name : splitToPath(name);
      if (path.length > 1) {
        var lastName = path[path.length - 1];
        var subModel = this.getSubModel(path.slice(0, -1));
        return subModel.getField([lastName]);
      }
      var shortName = path[0];
      this._updateValueShape(keyToValueShape(shortName));
      var field = this._fieldMap.get(shortName);
      if (field == null) {
        field = new Field({
          fieldType: FieldType.normal,
          parent: this,
          name: shortName
        });
        this._fieldMap.set(shortName, field);
      }
      return field;
    }
  }, {
    key: "getTupleField",
    value: function getTupleField() {
      // 只有 valueShape 是 object 的 FormModel 才能获取 tupleField
      this._updateValueShape('object');
      for (var _len = arguments.length, tupleParts = new Array(_len), _key = 0; _key < _len; _key++) {
        tupleParts[_key] = arguments[_key];
      }
      var name = "tuple(".concat(tupleParts.join(','), ")");
      var field = this._fieldMap.get(name);
      if (field == null) {
        field = new Field({
          fieldType: FieldType.tuple,
          parent: this,
          name: name,
          tupleParts: tupleParts
        });
        this._fieldMap.set(name, field);
      }
      return field;
    }
  }, {
    key: "_asField",
    value: function _asField() {
      if (this._modelType === ModelType.rootModel) {
        throw new Error('[xform] 根节点下不支持使用 name=&。根节点的数据结构只能为普通对象。');
      }
      return this.parent.getField(this.name);
    }
  }, {
    key: "_updateValueShape",
    value: function _updateValueShape(valueShape) {
      if (this._valueShape === 'auto') {
        this._valueShape = valueShape;
        this._subModels = valueShape === 'object' ? {} : [];
      } else {
        invariant(this._valueShape === valueShape, '[xform] FormModel 的结构需要在使用过程中保持一致，一个数据索引对应的结构不能从数组变为对象，也不能从对象变为数组');
      }
    }

    /** 递归前序遍历该 model 下所有的 model 对象（包含 model 本身） */
  }, {
    key: "iterateModels",
    value: function iterateModels(iteratee) {
      iteratee(this);
      if (this._subModels != null) {
        for (var _i = 0, _Object$values = Object.values(this._subModels); _i < _Object$values.length; _i++) {
          var subModel = _Object$values[_i];
          subModel.iterateModels(iteratee);
        }
      }
    }

    /** 递归遍历该 model 下（包括 model 本身）所有存在的 field 对象（包括 normal field 和 tuple field，也包括所有 fork） */
  }, {
    key: "iterateFields",
    value: function iterateFields(iteratee) {
      this.iterateModels(function (model) {
        model._fieldMap.forEach(function (field) {
          field._forkMap.forEach(iteratee);
        });
      });
    }

    /** 递归遍历该 model 下（包括 model 本身）所有存在的 check 对象） */
  }, {
    key: "iterateChecks",
    value: function iterateChecks(iteratee) {
      this.iterateModels(function (model) {
        model._checkMap.forEach(iteratee);
      });
    }
  }, {
    key: "_getSubModelByShortName",
    value: function _getSubModelByShortName(name) {
      this._updateValueShape(keyToValueShape(name));
      var subModel = this._subModels[name];
      if (subModel == null) {
        subModel = new FormModel(null, {
          modelType: ModelType.subModel,
          parent: this,
          name: name
        });
        this._subModels[name] = subModel;
      }
      return subModel;
    }
  }, {
    key: "getCheck",
    value: function getCheck(name) {
      var check = this._checkMap.get(name);
      if (check == null) {
        check = new Check(this, name);
        this._checkMap.set(name, check);
      }
      return check;
    }

    /** 判断当前 model 是否已经删除 */
  }, {
    key: "isDeleted",
    get: function get() {
      if (this._selfDeleted) {
        return true;
      }
      // deleted 具有继承性，删除父节点会自动删除子节点
      return this._modelType === ModelType.subModel && this.parent.isDeleted;
    }
  }, {
    key: "_markDeleted",
    value: function _markDeleted() {
      invariant(this._modelType === ModelType.subModel, '只有 subModels 才允许被删除.');
      this.name = '(deleted)';
      this._selfDeleted = true;
    }
  }]);
  return FormModel;
}();
export var Check = /*#__PURE__*/function () {
  function Check(parent, name) {
    _classCallCheck(this, Check);
    /** Check 是否在视图中被渲染 */
    _defineProperty(this, "isMounted", false);
    /** Check 配置的最新缓存（注意不要修改该值）*/
    _defineProperty(this, "config", null);
    _defineProperty(this, "parent", void 0);
    _defineProperty(this, "name", void 0);
    _defineProperty(this, "error", undefined);
    _defineProperty(this, "cancelValidation", null);
    _defineProperty(this, "validating", false);
    this.parent = parent;
    this.name = name;
    makeObservable(this, {
      path: computed,
      validate: action,
      error: observable,
      cancelValidation: observable.ref,
      validating: observable.ref
    });
  }
  _createClass(Check, [{
    key: "path",
    get: function get() {
      return this.parent.path.concat([this.name]);
    }
  }, {
    key: "_track",
    value: function _track(config) {
      var _this = this;
      if (this.isMounted) {
        console.warn("[xform] check `".concat(this.path.join('.'), "` \u5DF2\u5728\u89C6\u56FE\u4E2D\u88AB\u52A0\u8F7D\u3002"));
        return;
      }
      this.config = config;
      this.isMounted = true;
      return function () {
        _this.config = null;
        _this.isMounted = false;
      };
    }
  }, {
    key: "validate",
    value: function () {
      var _validate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this$cancelValidatio,
          _this2 = this;
        var validate, cancelled, handleValidateResult, model, result;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (this.isMounted) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");
            case 2:
              validate = this.config.validate;
              cancelled = false;
              (_this$cancelValidatio = this.cancelValidation) === null || _this$cancelValidatio === void 0 || _this$cancelValidatio.call(this);
              this.validating = true;
              this.cancelValidation = action(function () {
                cancelled = true;
                _this2.cancelValidation = null;
                _this2.validating = false;
              });
              handleValidateResult = action(function (error) {
                if (cancelled) {
                  return;
                }
                _this2.cancelValidation = null;
                _this2.validating = false;
                _this2.error = error;
                return error;
              });
              model = this.parent;
              result = validate(toJS(model.values), model);
              if (!(typeof (result === null || result === void 0 ? void 0 : result.then) === 'function')) {
                _context.next = 14;
                break;
              }
              return _context.abrupt("return", Promise.resolve(result).then(handleValidateResult));
            case 14:
              return _context.abrupt("return", handleValidateResult(result));
            case 15:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function validate() {
        return _validate.apply(this, arguments);
      }
      return validate;
    }()
  }]);
  return Check;
}();
export var Field = /*#__PURE__*/function () {
  function Field(opts) {
    var _this3 = this,
      _opts$forkName;
    _classCallCheck(this, Field);
    /** 字段配置的最新缓存（注意不要修改该值）*/
    _defineProperty(this, "config", null);
    /** 字段是否在视图中被渲染 */
    _defineProperty(this, "isMounted", false);
    _defineProperty(this, "parent", void 0);
    _defineProperty(this, "name", void 0);
    _defineProperty(this, "_forkName", void 0);
    _defineProperty(this, "_tupleParts", void 0);
    _defineProperty(this, "id", void 0);
    _defineProperty(this, "_forkMap", void 0);
    _defineProperty(this, "fieldType", void 0);
    _defineProperty(this, "_readonlyValue", void 0);
    _defineProperty(this, "state", {});
    _defineProperty(this, "handleFocus", function () {
      // noop 留着为后续进行功能拓展
    });
    _defineProperty(this, "handleBlur", function () {
      return _this3.validate('blur');
    });
    _defineProperty(this, "handleChange", function (nextValue) {
      var _this3$config, _this3$config2, _this3$config2$afterC;
      if (nextValue === undefined && ((_this3$config = _this3.config) === null || _this3$config === void 0 ? void 0 : _this3$config.defaultValue) !== undefined) {
        console.warn('[xform] xform 中所有组件均为受控用法，不支持 onChange(undefined)，该调用将自动变为 onChange(null)');
        nextValue = null;
      }
      _this3.value = nextValue;
      for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        rest[_key2 - 1] = arguments[_key2];
      }
      (_this3$config2 = _this3.config) === null || _this3$config2 === void 0 || (_this3$config2$afterC = _this3$config2.afterChange) === null || _this3$config2$afterC === void 0 || _this3$config2$afterC.call.apply(_this3$config2$afterC, [_this3$config2, nextValue].concat(rest));
      return _this3.validate('change');
    });
    /** 清理字段，将清空字段的错误与值 */
    _defineProperty(this, "clear", function () {
      var _this3$state$cancelVa, _this3$state;
      if (_this3.isDeleted) {
        return;
      }
      var parent = _this3.parent;
      // 清空错误
      (_this3$state$cancelVa = (_this3$state = _this3.state).cancelValidation) === null || _this3$state$cancelVa === void 0 || _this3$state$cancelVa.call(_this3$state);
      _this3.state.error = null;
      // 清空值
      if (parent.values == null) {
        return;
      }
      if (_this3.fieldType === FieldType.normal) {
        delete parent.values[_this3.name];
      } else if (_this3.fieldType === FieldType.tuple) {
        var _iterator = _createForOfIteratorHelper(_this3._tupleParts),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var part = _step.value;
            delete parent.values[part];
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    });
    this.fieldType = opts.fieldType;
    this.parent = opts.parent;
    this.name = opts.name;
    this.id = this.parent.root._fieldIdGenerator.getNextId();
    this._forkName = (_opts$forkName = opts.forkName) !== null && _opts$forkName !== void 0 ? _opts$forkName : Field.ORIGINAL;
    if (opts.fieldType === FieldType.tuple) {
      this._tupleParts = opts.tupleParts;
    } else if (opts.fieldType === FieldType.readonly) {
      this._readonlyValue = opts.value;
    }
    var name = this.name;
    var forkName = this._forkName;
    makeObservable(this, {
      state: observable,
      value: computed,
      path: computed,
      validate: action,
      handleBlur: action,
      handleChange: action,
      clear: action,
      isDeleted: computed
    }, {
      name: "".concat(this.id, "(").concat(name).concat(forkName === Field.ORIGINAL ? '' : '#' + forkName, ")")
    });
    if (forkName === Field.ORIGINAL) {
      this._forkMap = new Map();
    } else {
      var original = this.parent.getField(name);
      this._forkMap = original._forkMap;
    }
    this._forkMap.set(forkName, this);
  }
  _createClass(Field, [{
    key: "value",
    get: function get() {
      var _this4 = this;
      if (this.fieldType === FieldType.normal) {
        return this.parent.getValue(this.name);
      } else if (this.fieldType === FieldType.tuple) {
        return this._tupleParts.map(function (part) {
          return _this4.parent.getValue(part);
        });
      } else if (this.fieldType === FieldType.readonly) {
        return this._readonlyValue;
      }
    },
    set: function set(value) {
      var _this5 = this;
      if (this.isDeleted) {
        console.warn('[xform] 对已删除的 Field 进行赋值将被忽略。请不要对已删除的 Model/Field 进行操作。');
        return;
      }
      if (this.fieldType === FieldType.normal) {
        this.parent.setValue(this.name, value);
      } else if (this.fieldType === FieldType.tuple) {
        this._tupleParts.forEach(function (part, index) {
          _this5.parent.setValue(part, value == null ? value : value[index]);
        });
      } else if (this.fieldType === FieldType.readonly) {
        console.warn('[xform] 对只读 Field 进行赋值将被忽略，请检查是否为 FormItem 设置了 props.name 或 props.field.');
      }
    }
  }, {
    key: "path",
    get: function get() {
      return this.parent.path.concat([this.name]);
    }
  }, {
    key: "_track",
    value: function _track(config) {
      var _this6 = this;
      if (this.isMounted) {
        console.warn("[xform] field `".concat(this.path.join('.'), "` \u5DF2\u5728\u89C6\u56FE\u4E2D\u88AB\u52A0\u8F7D\uFF0C\u4F60\u9700\u8981 fork \u8BE5\u5B57\u6BB5\u6765\u8FDB\u884C\u591A\u6B21\u52A0\u8F7D."));
        return;
      }
      this.config = config;
      this.isMounted = true;
      return function () {
        _this6.config = null;
        _this6.isMounted = false;
      };
    }
  }, {
    key: "getFork",
    value: function getFork(forkName) {
      if (this._forkMap.has(forkName)) {
        return this._forkMap.get(forkName);
      } else {
        var common = {
          parent: this.parent,
          name: this.name,
          forkName: forkName
        };
        if (this.fieldType === FieldType.normal) {
          return new Field(_objectSpread({
            fieldType: FieldType.normal
          }, common));
        } else if (this.fieldType === FieldType.tuple) {
          return new Field(_objectSpread({
            fieldType: FieldType.tuple,
            tupleParts: this._tupleParts
          }, common));
        } else if (this.fieldType === FieldType.readonly) {
          return new Field(_objectSpread({
            fieldType: FieldType.readonly,
            value: this._readonlyValue
          }, common));
        }
      }
    }
  }, {
    key: "validate",
    value: function () {
      var _validate2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this$state$cancelVal,
          _this$state,
          _this7 = this;
        var trigger,
          _this$config,
          validate,
          defaultValue,
          isEmpty,
          required,
          _this$config$required,
          requiredMessage,
          validateOnMount,
          validateOnBlur,
          validateOnChange,
          needValidate,
          cancelled,
          handleValidateResult,
          value,
          result,
          _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              trigger = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : '*';
              if (this.isMounted) {
                _context2.next = 3;
                break;
              }
              return _context2.abrupt("return");
            case 3:
              _this$config = this.config, validate = _this$config.validate, defaultValue = _this$config.defaultValue, isEmpty = _this$config.isEmpty, required = _this$config.required, _this$config$required = _this$config.requiredMessage, requiredMessage = _this$config$required === void 0 ? '该字段为必填项' : _this$config$required, validateOnMount = _this$config.validateOnMount, validateOnBlur = _this$config.validateOnBlur, validateOnChange = _this$config.validateOnChange;
              needValidate = trigger === '*' || validateOnBlur && trigger === 'blur' || validateOnMount && trigger === 'mount' || validateOnChange && trigger === 'change';
              if (needValidate) {
                _context2.next = 7;
                break;
              }
              return _context2.abrupt("return");
            case 7:
              cancelled = false;
              (_this$state$cancelVal = (_this$state = this.state).cancelValidation) === null || _this$state$cancelVal === void 0 || _this$state$cancelVal.call(_this$state);
              this.state.validating = true;
              this.state.cancelValidation = action(function () {
                cancelled = true;
                _this7.state.cancelValidation = null;
                _this7.state.validating = false;
              });
              handleValidateResult = action(function (error) {
                if (cancelled) {
                  return;
                }
                _this7.state.cancelValidation = null;
                _this7.state.validating = false;
                _this7.state.error = error;
                return error;
              });
              value = toJS(composeValue(this.value, defaultValue));
              if (!(required && isEmpty(value))) {
                _context2.next = 15;
                break;
              }
              return _context2.abrupt("return", handleValidateResult(requiredMessage));
            case 15:
              if (!validate) {
                _context2.next = 24;
                break;
              }
              result = validate(value, this, trigger);
              if (!(typeof (result === null || result === void 0 ? void 0 : result.then) === 'function')) {
                _context2.next = 21;
                break;
              }
              return _context2.abrupt("return", Promise.resolve(result).then(handleValidateResult));
            case 21:
              return _context2.abrupt("return", handleValidateResult(result));
            case 22:
              _context2.next = 25;
              break;
            case 24:
              return _context2.abrupt("return", handleValidateResult(null));
            case 25:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function validate() {
        return _validate2.apply(this, arguments);
      }
      return validate;
    }()
  }, {
    key: "isDeleted",
    get: function get() {
      return this.parent.isDeleted;
    }
  }], [{
    key: "getHtmlId",
    value: function getHtmlId(prefix, field) {
      if (prefix == null || typeof prefix !== 'string') {
        // null 表示不生成 id 属性
        return undefined;
      }
      var path = field.path.join('.');
      var fork = field._forkName !== Field.ORIGINAL ? "#".concat(field._forkName) : '';
      return "".concat(prefix).concat(path).concat(fork);
    }
  }]);
  return Field;
}();
_defineProperty(Field, "ORIGINAL", 'original');