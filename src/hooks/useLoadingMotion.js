import { onMounted, ref, onUnmounted } from "vue";
import { game } from "@/game/index";
import useMotion from "@/hooks/useMotion";
import { useThrottleFn } from "@vueuse/core";
import { patternPosition } from "@/utils/index";
import { utils } from "pixi.js";

export function useLoadingMotion() {
  const reelContainer = ref(null);
  const running = ref(false);
  const motions = [];
  const randomArr = ref([]);
  const intiMotions = async (pattern, index) => {
    const { motion } = await useMotion("patterns.json", {
      x: pattern.x + 53,
      y: 55,
      anchor: 0.5,
      animationSpeed: 0.1,
    });
    motions[index] = motion.value;
    reelContainer.value.addChild(motion.value);
  };
  const RandomCreate = () => {
    const randomNumber = new Set();
    while (randomNumber.size < 4) {
      let number = Math.floor(Math.random() * 14);
      randomNumber.add(number);
    }
    return randomNumber;
  };
  const motionSetFrame = (arr) => {
    for (let i = 0; i < motions.length; i++) {
      motions[i].gotoAndStop(arr[i]);
    }
  };
  const throttledFn = useThrottleFn(() => {
    randomArr.value = [...RandomCreate()];
    motionSetFrame(randomArr.value);
  }, 100);
  const handleTicker = (deltaTime) => {
    if (!running.value) {
      throttledFn();
    }
  };
  onMounted(() => {
    for (let index = 0; index < patternPosition.length; index++) {
      intiMotions(patternPosition[index], index);
    }
    game.ticker.add(handleTicker);
  });
  onUnmounted(() => {
    utils.clearTextureCache();
    game.ticker.remove(handleTicker);
  });
  return {
    reelContainer,
    running,
    motionSetFrame,
  };
}
