import { observer } from 'mobx-react-lite';
import { useModel } from "../context/modelContext";
import { ModelProvider } from "../context/modelContext";
import { range } from "../common-utils";
import { arrayHelpers } from "../array-helper";
import { jsx as _jsx } from "react/jsx-runtime";
/** 默认的数组布局 */
var defaultArrayLayout = function defaultArrayLayout(_ref) {
  var arrayModel = _ref.arrayModel,
    itemContent = _ref.itemContent,
    itemCount = _ref.itemCount;
  return range(itemCount).map(function (itemIndex) {
    return arrayHelpers.renderArrayItem(arrayModel, itemIndex, itemContent);
  });
};
export var FormArray = observer(function (_ref2) {
  var _arrayModel$values$le, _arrayModel$values;
  var name = _ref2.name,
    children = _ref2.children,
    layout = _ref2.layout,
    arrayModelProp = _ref2.arrayModel,
    use = _ref2.use;
  var parent = useModel();
  if (use === false) {
    return null;
  }
  var arrayModel = arrayModelProp !== null && arrayModelProp !== void 0 ? arrayModelProp : name === '&' ? parent : parent.getSubModel(name);
  var itemCount = (_arrayModel$values$le = (_arrayModel$values = arrayModel.values) === null || _arrayModel$values === void 0 ? void 0 : _arrayModel$values.length) !== null && _arrayModel$values$le !== void 0 ? _arrayModel$values$le : 0;
  var itemContent = typeof children === 'function' ? children : function () {
    return children;
  };
  return /*#__PURE__*/_jsx(ModelProvider, {
    value: arrayModel,
    children: (layout !== null && layout !== void 0 ? layout : defaultArrayLayout)({
      arrayModel: arrayModel,
      itemCount: itemCount,
      itemContent: itemContent
    })
  });
});