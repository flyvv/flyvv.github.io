function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import invariant from 'invariant';
import { action } from 'mobx';
import { composeValue } from "./common-utils";
import { Form } from "./index";
import { jsx as _jsx } from "react/jsx-runtime";
function invariantArrayShapeIsAutoOrArray(arrayModel) {
  invariant(arrayModel._valueShape === 'auto' || arrayModel._valueShape === 'array', 'arrayModel._valueShape should be "auto" or "array"');
}
function updateSubModelsNames(arrayModel) {
  arrayModel._subModels.forEach(function (mod, index) {
    mod.name = String(index);
  });
}
function reorderInPlace(list, fromIndex, toIndex) {
  if (list == null) {
    return;
  }
  var _list$splice = list.splice(fromIndex, 1),
    _list$splice2 = _slicedToArray(_list$splice, 1),
    movingItem = _list$splice2[0];
  list.splice(toIndex, 0, movingItem);
}
function swapInPlace(values, a, b) {
  if (values == null) {
    return;
  }
  var temp = values[a];
  values[a] = values[b];
  values[b] = temp;
}
export var arrayHelpers = {
  append: action(function (arrayModel, itemFactory) {
    if (arrayModel.values == null) {
      arrayModel.values = [];
    }
    var value = composeValue(typeof itemFactory === 'function' ? itemFactory(arrayModel) : itemFactory, {});
    arrayModel.values.push(value);
  }),
  delete: action(function (arrayModel, itemIndex) {
    invariantArrayShapeIsAutoOrArray(arrayModel);
    if (Array.isArray(arrayModel.values)) {
      arrayModel.values.splice(itemIndex, 1);
    }
    if (Array.isArray(arrayModel._subModels)) {
      var _arrayModel$_subModel = arrayModel._subModels.splice(itemIndex, 1),
        _arrayModel$_subModel2 = _slicedToArray(_arrayModel$_subModel, 1),
        subModel = _arrayModel$_subModel2[0];
      subModel._markDeleted();
      updateSubModelsNames(arrayModel);
    }
  }),
  moveUp: action(function (arrayModel, itemIndex) {
    invariantArrayShapeIsAutoOrArray(arrayModel);
    if (itemIndex === 0) {
      return;
    }
    if (Array.isArray(arrayModel.values)) {
      swapInPlace(arrayModel.values, itemIndex, itemIndex - 1);
    }
    if (Array.isArray(arrayModel._subModels)) {
      swapInPlace(arrayModel._subModels, itemIndex, itemIndex - 1);
      updateSubModelsNames(arrayModel);
    }
  }),
  moveDown: action(function (arrayModel, itemIndex) {
    invariantArrayShapeIsAutoOrArray(arrayModel);
    if (Array.isArray(arrayModel.values)) {
      if (itemIndex === arrayModel.values.length - 1) {
        return;
      }
      swapInPlace(arrayModel.values, itemIndex, itemIndex + 1);
    }
    if (Array.isArray(arrayModel._subModels)) {
      swapInPlace(arrayModel._subModels, itemIndex, itemIndex + 1);
      updateSubModelsNames(arrayModel);
    }
  }),
  clear: action(function (arrayModel) {
    invariantArrayShapeIsAutoOrArray(arrayModel);
    if (arrayModel.values == null || arrayModel.values.length === 0) {
      return;
    }
    arrayModel.values = [];
    if (Array.isArray(arrayModel)) {
      arrayModel._subModels.forEach(function (subModel) {
        subModel._markDeleted();
      });
      arrayModel._subModels.length = 0;
    }
  }),
  move: action(function (arrayModel, fromIndex, toIndex) {
    invariantArrayShapeIsAutoOrArray(arrayModel);
    if (Array.isArray(arrayModel.values)) {
      reorderInPlace(arrayModel.values, fromIndex, toIndex);
    }
    if (Array.isArray(arrayModel._subModels)) {
      reorderInPlace(arrayModel._subModels, fromIndex, toIndex);
      updateSubModelsNames(arrayModel);
    }
  }),
  renderArrayItem: function renderArrayItem(arrayModel, itemIndex, itemContent) {
    var itemModel = arrayModel.getSubModel(itemIndex);
    return /*#__PURE__*/_jsx(Form.ModelProvider, {
      value: itemModel,
      children: itemContent(itemIndex, itemModel)
    }, itemModel.id);
  },
  getKey: function getKey(arrayModel, itemIndex) {
    return arrayModel.getSubModel(itemIndex).id;
  }
};