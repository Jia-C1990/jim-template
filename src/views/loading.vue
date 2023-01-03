<template>
    <pixi-Container>
        <pixi-Sprite :texture="bg"></pixi-Sprite>
        <pixi-Sprite :texture="bm0" :x="75" :y="resourcePosition"  :interactive="true"></pixi-Sprite>
        <pixi-Container ref="reelContainer" :y="1146">
            <pixi-Sprite :texture="bm1" v-for="(item,index) in patternPosition" :key="index" :x="item.x" ></pixi-Sprite>
        </pixi-Container>
        <pixi-Sprite v-if="store.loadScreenAssets" :assets="store.loadScreenAssets.intro" :x="214" :y="711" :alpha="resourceOpacity"></pixi-Sprite>
        <pixi-Sprite v-if="store.loadScreenAssets" :assets="store.loadScreenAssets.startBtn" :x="191" :y="1238" :interactive="true" :alpha="resourceOpacity" :on="{ tap: startGame }"></pixi-Sprite>
    </pixi-Container>
</template>

<script>
import { ref, watchEffect } from 'vue'
import { useStore } from '@/stores/index'
import bg from '@/assets/images/loading.png'
import bm0 from '@/assets/images/resource-0.png'
import bm1 from '@/assets/images/reel.png'
import { patternPosition } from '@/utils/index'
import { useLoadingMotion } from '@/hooks/useLoadingMotion'

export default {
    setup() {
        const store = useStore()
        const resourceOpacity = ref(0)
        const resourcePosition = ref(362)
        const { reelContainer, running, motionSetFrame } = useLoadingMotion()
        
        const stopRunning = () => {
            running.value = !running.value
            motionSetFrame([5, 3, 0, 12])
            setTimeout(()=>{
                reelContainer.value.alpha = 0;
                resourcePosition.value = 286
                resourceOpacity.value = 1
            },2000)
        }

        const startGame = () => {
            store.changePageIndex(1)
        }

        watchEffect(()=>{
            if(store.loadScreenAssets){
                // stopRunning()
            }
        })

        return {
            store,
            bg,
            bm0,
            bm1,
            reelContainer,
            patternPosition,
            resourceOpacity,
            resourcePosition,
            startGame
        }
    }
}



</script>
