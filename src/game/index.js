import { Application } from "pixi.js"

const appNode = document.querySelector('#app')
const width = window.innerWidth
const designWidth = 750
const designHeight = 1624
const rendererHeight = Math.round(width/designWidth * designHeight)
let ratio = width * .5 / 750

function initPixi() {
  let app = new Application({
    width: width,
    height: rendererHeight,
    antialias: true,
    backgroundAlpha: 0,
    autoDensity: true,
  });
  app.stage.scale.set(ratio * 2)
  appNode.append(app.view)
  return app
}

export const game = initPixi();