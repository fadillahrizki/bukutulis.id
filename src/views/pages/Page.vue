<script setup>
import { useRoute } from 'vue-router';
import { onMounted, onUpdated, ref, shallowRef, watch } from 'vue';
import pages from '@/config/pages.js';
import { usePageStore } from '@/stores/page.js';

const route = useRoute()
const pageStore = usePageStore()
var comp = shallowRef(null)

watch(
  () => route.fullPath,
  () => {
    loadPage()
  },
  { immediate: true }
)

function loadPage(){
    const pageKey = route.params.pathMatch.join('/')
    const getPage = pages.find(p => p.path == pageKey)
    pageStore.setPage(getPage)

    comp.value = getPage ? getPage.component : false

    document.title = getPage ? (getPage.title ? getPage.title : getPage.config.list.title) : 'Error 404! Not Found';
    feather.replace()
}

onUpdated( () => {
    loadPage()
})

onMounted(() => {
    loadPage()
})

</script>
<template>
    <component v-if="pageStore.getCurrentPage()" :is="comp" :key="route.fullPath"></component>
    <div v-else>
        <h1>Not Found!</h1>
    </div>
</template>