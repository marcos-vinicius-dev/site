<template>
    <figure class="image">
        <img class="dancing-gif" :src="dancingGif">
    </figure>
</template>

<style lang="scss">
    .dancing-gif{
        height: 200px !important;
        width: auto !important;
    }
</style>


<script>
    import dancingGif from './code.png';
    export default {
        name: 'ob-heart',
        data(){
            return {
                dancingGif
            }
        }
    }
</script>
