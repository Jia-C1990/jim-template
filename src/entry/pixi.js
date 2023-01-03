import { game } from "../game";
import { initRuntimeCanvas } from "../core";
import App from "@/Pixi.vue";
import { basePinia } from '../stores'
const { renderer } = initRuntimeCanvas();
renderer.createApp(App).use(basePinia).mount(game.stage);