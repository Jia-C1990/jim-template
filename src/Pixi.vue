<template>
    <pixi-Container :id="111">
        <LoadingPage v-if="!store.pageIndex"></LoadingPage>
        <!-- <MainPage v-if="store.pageIndex===1"></MainPage> -->
    </pixi-Container>
</template>
<script>
import { ref } from 'vue'
import { useStore } from '@/stores/index'
import LoadingPage from '@/views/loading.vue'

export default {
    components: {
        LoadingPage,
        MainPage
    },
    setup() {
        const store = useStore()

        return {
            store,
        }
    }
}
</script>
