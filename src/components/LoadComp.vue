<template>
    <div class="loading">{{ loading ? 'loading...' : 'complete' }}</div>
</template>

<script>
import { useStore } from '@/stores/index'
import { ref, onMounted, onUnmounted } from 'vue'
import { manifest } from '@/utils/index'
import { Assets, utils } from 'pixi.js'
export default{
  setup(){
    const store = useStore()
    const loading = ref(true)

    const init = async () => {
        await Assets.init({ manifest });
        Assets.backgroundLoadBundle(['load-screen']);
        const loadScreenAssets = await Assets.loadBundle('load-screen')
        loading.value = false
        store.loadScreenAssets = loadScreenAssets
    }

    onMounted(() => {
        init()
    })

    onUnmounted(() => {
        utils.clearTextureCache();
    });

    return {
        loading
    }
  }
}
</script>
<style lang="scss" scoped>
.loading {
    opacity: 0;
}
</style>