import { createContext, useContext } from 'react';
var ModelContext = /*#__PURE__*/createContext(null);
export function useModel() {
  return useContext(ModelContext);
}
ModelContext.displayName = 'ModelContext';
export var ModelProvider = ModelContext.Provider;