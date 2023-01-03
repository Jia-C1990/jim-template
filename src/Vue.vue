<template>
    <LoadComp v-if="!store.pageIndex"/>
</template>
<script>
import { useStore } from '@/stores/index'
import LoadComp from '@/components/LoadComp.vue'
export default {
    components:{
        LoadComp
    },  
    setup() {
        const store = useStore()
        return {
            store
        }
    }
}
</script>
<style lang="scss" scoped>
</style>