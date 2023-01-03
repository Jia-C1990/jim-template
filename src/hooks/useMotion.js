import { AnimatedSprite, Assets } from "pixi.js";
import { ref } from "vue";
import { getUrlPathName } from "@/utils/index";


export default async (url, option) => {
    const loading = ref(true);
    const frames = ref(null);
    const motion = ref(null);
    try {
        frames.value = await Assets.load(getUrlPathName(url));
        motion.value = new AnimatedSprite(Object.values(frames.value.textures));
        motion.value.x = option.x || 0;
        motion.value.y = option.y || 0;
        motion.value.anchor.set(option.anchor);
        motion.value.animationSpeed = option.animationSpeed || 0.8;
        motion.value.loop = option.loop || true;
        motion.value.onComplete = option.complete || function () {};
        motion.value.onFrameChange = option.frameChange || function () {};
        motion.value.onLoop = option.onLoop || function () {};
    } catch (error) {
        console.log(error);
    } finally {
        loading.value = false;
    }
    return { loading, motion };
};
