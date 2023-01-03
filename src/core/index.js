import { createRenderer } from 'vue'
import nodeOps from "./nodeOps"
import patchProp from "./patchProp"

export const initRuntimeCanvas = () => {
  const renderer = createRenderer({
    ...nodeOps,
    patchProp,
  });

  return {
    renderer,
  };
};