import { Graphics, Sprite, Container, Text } from "pixi.js"
const doc = typeof document !== 'undefined' ? document : null;

export default {
  insert: (child, parent, anchor) => {
    child&&parent.addChild(child);
  },
  remove: (child) => {
    if (child && child.parent) {
      child.parent.removeChild(child);
    }
  },
  createElement: (tag, isSVG, is) => {
    let element;
    tag = tag.split('-');
    if (tag[1] === "Rectangle") {
      // 创建一个矩形
      element = new Graphics();
      element.lineStyle(4, 0xff3300, 1);
      element.beginFill(0x66ccff);
      element.drawRect(0, 0, 64, 64);
      element.endFill();
      element.x = 0;
      element.y = 0;
      // Opt-in to interactivity
      element.interactive = true;
      // Shows hand cursor
      element.buttonMode = true;
    } else if (tag[1] === "Sprite") {
      element = new Sprite();
      element.x = 0;
      element.y = 0;
    } else if (tag[1] === "Container") {
      element = new Container();
      element.x = 0;
      element.y = 0;
    }else if(tag[1] === "Text"){
      element = new Text()
      element.x = 0;
      element.y = 0;
    }
    return element;
  },
  createText: (text) => {},
  createComment: (text) => {},
  setText: (node, text) => {
    node.nodeValue = text;
  },
  setElementText: (el, text) => {
    el.textContent = text;
  },
  parentNode: (node) => node.parent,
  nextSibling: (node) => {},
  querySelector: (selector) => doc.querySelector(selector),
  setScopeId(el, id) {},
  cloneNode(el) {
    return el.cloneNode(true);
  },
};
