<template>
    <div class="loading"></div>
</template>

<script>
import { useStore } from '@/stores/index'
import { ref, onMounted, onUnmounted } from 'vue'
export default {
    setup() {

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