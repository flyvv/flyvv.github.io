function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { _getGlobalState, computed, createAtom, makeObservable, onBecomeObserved, onBecomeUnobserved, Reaction, runInAction } from 'mobx';
export var AsyncValue = /*#__PURE__*/function () {
  function AsyncValue(fetcher, initValue) {
    var _this = this;
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    _classCallCheck(this, AsyncValue);
    _defineProperty(this, "_disposers", void 0);
    _defineProperty(this, "_error", void 0);
    _defineProperty(this, "_reaction", void 0);
    _defineProperty(this, "_status", void 0);
    _defineProperty(this, "_current", void 0);
    _defineProperty(this, "_cancelLastGetter", void 0);
    _defineProperty(this, "_atom", void 0);
    _defineProperty(this, "_refreshAtom", void 0);
    _defineProperty(this, "fetcher", void 0);
    _defineProperty(this, "options", void 0);
    _defineProperty(this, "name", void 0);
    _defineProperty(this, "_start", function () {
      if (_this._reaction) {
        return;
      }
      _this._reaction = new Reaction("".concat(_this.name, "#reaction"), function () {
        if (_this._status !== 'loading') {
          _this._status = 'loading';
          _this._atom.reportChanged();
        }
        if (_this._reaction) {
          _this._reaction.track(function () {
            var _this$_mobxGlobal$inX;
            var cancelled = false;
            _this._cancelLastGetter = function () {
              cancelled = true;
            };
            var prevInXFormAsyncValueFetcher = (_this$_mobxGlobal$inX = _this._mobxGlobal.inXFormAsyncValueFetcher) !== null && _this$_mobxGlobal$inX !== void 0 ? _this$_mobxGlobal$inX : false;
            _this._mobxGlobal.inXFormAsyncValueFetcher = true;
            _this._refreshAtom.reportObserved();
            var promise;
            try {
              promise = _this.fetcher();
            } catch (err) {
              promise = Promise.reject(err);
            }
            Promise.resolve(promise).then(function (newValue) {
              if (cancelled) {
                return;
              }
              runInAction(function () {
                _this._status = 'ready';
                if (newValue !== AsyncValue.SKIP) {
                  _this._current = newValue;
                }
                _this._error = null;
                _this._atom.reportChanged();
              });
            }).catch(function (err) {
              if (!(err instanceof AsyncValue.StillLoading)) {
                runInAction(function () {
                  _this._status = 'error';
                  _this._error = err;
                  _this._atom.reportChanged();
                });
                throw err;
              }
            });
            _this._mobxGlobal.inXFormAsyncValueFetcher = prevInXFormAsyncValueFetcher;
          });
        }
      });
      _this._reaction.schedule_();
    });
    _defineProperty(this, "_stop", function () {
      _this._status = 'loading';
      if (_this._reaction) {
        _this._reaction.dispose();
        _this._reaction = null;
      }
    });
    this._disposers = [];
    this._error = null;
    this._reaction = null;
    this._status = 'loading';
    this._current = initValue;
    this._cancelLastGetter = null;
    this.fetcher = fetcher;
    this.options = options;

    // 确保 options.name 是一个字符串类型，默认值也是字符串类型
    this.name = typeof options.name === 'string' ? options.name : "AsyncValue_".concat(AsyncValue._globalCount++);
    this._atom = createAtom("".concat(this.name, "#state"));
    this._refreshAtom = createAtom("".concat(this.name, "#refresh"));
    makeObservable(this, {
      status: computed,
      error: computed,
      _inner_current: computed({
        name: "".concat(this.name, ".inner_current")
      }),
      isLoading: computed,
      isError: computed,
      isReady: computed
    }, {
      name: this.name
    });
    this._disposers.push(this._stop);
    this._disposers.push(onBecomeObserved(this._atom, this._start));
    this._disposers.push(onBecomeUnobserved(this._atom, function () {
      if (!_this.options.keepAlive) {
        _this._stop();
      }
    }));
    this._disposers.push(function () {
      _this._status = 'ready';
      _this._current = null;
      _this._error = null;
    });
  }
  _createClass(AsyncValue, [{
    key: "_mobxGlobal",
    get: function get() {
      return _getGlobalState();
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this._refreshAtom.reportChanged();
    }
  }, {
    key: "dispose",
    value: function dispose() {
      var _iterator = _createForOfIteratorHelper(this._disposers),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var fn = _step.value;
          fn();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "status",
    get: function get() {
      this._atom.reportObserved();
      return this._status;
    }
  }, {
    key: "_inner_current",
    get: function get() {
      this._atom.reportObserved();
      return this._current;
    }
  }, {
    key: "current",
    get: function get() {
      if (this._mobxGlobal.inXFormAsyncValueFetcher) {
        this._atom.reportObserved();
        if (this._status === 'loading') {
          throw new AsyncValue.StillLoading();
        } else if (this._status === 'error') {
          throw this._error;
        } else {
          return this._current;
        }
      }
      return this._inner_current;
    }
  }, {
    key: "error",
    get: function get() {
      this._atom.reportObserved();
      return this._error;
    }
  }, {
    key: "isLoading",
    get: function get() {
      return this.status === 'loading';
    }
  }, {
    key: "isReady",
    get: function get() {
      return this.status === 'ready';
    }
  }, {
    key: "isError",
    get: function get() {
      return this.status === 'error';
    }
  }]);
  return AsyncValue;
}();
_defineProperty(AsyncValue, "_globalCount", 0);
_defineProperty(AsyncValue, "SKIP", 'AsyncValue@SKIP');
_defineProperty(AsyncValue, "StillLoading", /*#__PURE__*/function (_Error) {
  _inherits(StillLoading, _Error);
  var _super = _createSuper(StillLoading);
  function StillLoading() {
    _classCallCheck(this, StillLoading);
    return _super.apply(this, arguments);
  }
  return _createClass(StillLoading);
}( /*#__PURE__*/_wrapNativeSuper(Error)));