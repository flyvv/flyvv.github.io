import { observer } from 'mobx-react-lite';
import { useModel } from "../context/modelContext";
export var FormModelConsumer = observer(function (_ref) {
  var children = _ref.children;
  var model = useModel();
  return children(model);
});