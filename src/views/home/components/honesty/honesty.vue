<template>
    <section class="section">
        <div class="container">
            <div class="columns has-reverse-row-order-mobile is-height-100">
                <div class="column padding-top-2x-mobile">
                    <div class="columns is-centered is-vcentered is-height-100 is-mobile">
                        <div class="column is-narrow">
                            <ob-heart></ob-heart>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="columns is-vcentered is-centered is-height-100">
                        <div class="column is-narrow content is-medium easy-text">
                            <h3>{{ $t('honesty.title') }} </h3>
                            <p>
                                {{ $t('honesty.description') }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">

    .honesty-text {
        @media (min-width: 768px) {
            max-width: 400px;
        }
    }

    .honesty-heart {

    }
</style>

<script>
    import ObHeart from "./components/heart";

    export default {
        components: {ObHeart},
        name: 'ob-honesty'
    }
</script>

