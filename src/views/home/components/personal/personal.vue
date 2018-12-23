<template>
    <section class="section">
        <div class="container">
            <div class="content is-medium has-text-centered padding-bottom-2x">  
                <h3 class="has-text-shadow">
                    {{ $t('personal.title') }}
                </h3>
                <p>
                    {{ $t('personal.description') }}
                </p>
            </div>
            <ob-customization-screenshots></ob-customization-screenshots>
        </div>
    </section>
</template>

<style lang="scss">
    .personal-section {
        //padding: 5rem;
    }

    .personal-text {
        @media (min-width: 768px) {
            max-width: 400px;
        }
    }

    .personal-heart {

    }
</style>

<script>

    import ObCustomizationScreenshots from "./components/customization-screenshots/customization-screenshots.vue";

    export default {
        components: {ObCustomizationScreenshots},
        name: 'ob-personal'
    }
</script>

