import { Texture , TextStyle, filters, Graphics } from "pixi.js"

const propKeys = [
  "on",
  "texture",
  "style",
  "filters",
  "mask",
  "anchor",
  "assets",
];

export default(
  el,
  key,
  prevValue,
  nextValue,
  isSVG = false,
  prevChildren,
  parentComponent,
  parentSuspense,
  unmountChildren
) => {
  if (propKeys.includes(key)) {
    switch (key) {
      case "on":
        Object.keys(nextValue).forEach((eventName) => {
          const callback = nextValue[eventName];
          el.on(eventName, callback);
        });
        break;
      case "filters":
        nextValue ? (el.filters = [new filters.BlurFilter()]) : "";
        break;
      case "mask":
        el.mask = new Graphics()
          .beginFill(0xffffff)
          .drawRect(155 + 8, 1146 + 6, 89, 93)
          .endFill();
        break;
      case "texture":
        let texture = Texture.from(nextValue);
        el.texture = texture;
        break;
      case "assets":
        if (nextValue) el.texture = nextValue;
        break;
      case "style":
        let style = new TextStyle(nextValue);
        el.style = style;
        break;
      case "anchor":
        el.anchor.set(...nextValue);
        break;
    }
  } else {
    el[key] = nextValue;
  }
};
