<template>
    <figure class="image">
        <img class="dancing-gif" :src="dancingGif">
    </figure>
</template>

<style lang="scss" scoped>
    .dancing-gif{
        height: 200px !important;
        width: auto !important;
    }
</style>


<script>
    import dancingGif from './app1.gif';
    export default {
        name: 'ob-dancing-cactus',
        data(){
            return {
                dancingGif
            }
        }
    }
</script>
