<template>
    <div class="animated fadeIn">
        <ob-splash-hero></ob-splash-hero>
        <ob-honesty></ob-honesty>
        <ob-privacy></ob-privacy>
        <ob-easy></ob-easy>
        <section class="section">
            <div class="container">
                   <ob-personal></ob-personal>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="content has-text-centered padding-bottom-2x">
                    <h3 class="has-text-shadow">
                        {{ $t('home.featured_in') }}
                    </h3>
                    <p>
                        {{ $t('home.featured_in_description') }}
                    </p>
                </div>
                <ob-featured-on></ob-featured-on>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
    .home-team{
        display: flex;
        position: relative;
        &-figure{
            margin-right: -20px;
        }
    }
</style>

<script>

    import ObSplashHero from "./components/splash-hero/splash-hero";
    import ObFeaturedOn from "./components/featured-in/featured-in";
    import ObHonesty from "./components/honesty/honesty.vue";
    import ObPersonal from "./components/personal/personal.vue";
    import ObPrivacy from "./components/privacy/privacy.vue";
    import ObEasy from "./components/easy/easy.vue";
    import ObFun from "./components/fun/fun";

    export default {
        components: {
            ObFun,
            ObEasy,
            ObPrivacy,
            ObPersonal,
            ObHonesty,
            ObFeaturedOn,
            ObSplashHero
        }
    }
</script>
