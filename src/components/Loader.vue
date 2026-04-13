<script setup>
import { onMounted } from 'vue';


onMounted(() => {
    setTimeout(function () {
        $('#global-loader')
        setTimeout(function () {
        $('#global-loader').fadeOut('slow')
        }, 100)
    }, 500)
})

</script>
<template>
    <div id="global-loader">
        <div class="whirly-loader"> </div>
    </div>
</template>