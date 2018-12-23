<template>
    <div class="scroll-to-top">
        <button class="button animated fadeInUp is-rounded" v-scroll-to="'#app'">
        <span class="icon">
            <i class="fas fa-arrow-up "></i>
        </span>
        </button>
    </div>
</template>

<style lang="scss">

    $button-size: 45px;

    .scroll-to-top {
        position: absolute !important;
        bottom: 0;
        right: 0;

        margin: 1rem;

        button{
            background-color: #f6006f ;
            border: none;
            //border: solid 1px white !important;
            height: $button-size !important;
            width: $button-size !important;
        }
        button .icon{
            color: white;
        }
    }
</style>

<script>
    export default {
        name: 'ob-scroll-to-top'
    }
</script>
