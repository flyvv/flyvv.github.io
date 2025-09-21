import { observer } from 'mobx-react-lite';
import { useModel } from "../context/modelContext";
import { ModelProvider } from "../context/modelContext";
import { jsx as _jsx } from "react/jsx-runtime";
export var FormObject = observer(function (_ref) {
  var name = _ref.name,
    children = _ref.children,
    use = _ref.use;
  var parent = useModel();
  if (use === false) {
    return null;
  }
  var model = name === '&' ? parent : parent.getSubModel(name);
  return /*#__PURE__*/_jsx(ModelProvider, {
    value: model,
    children: children
  });
});