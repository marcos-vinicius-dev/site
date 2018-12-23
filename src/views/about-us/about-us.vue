<template>
    <div class="animated fadeIn">
        <section class="hero is-medium has-border-bottom-gray">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-centered is-vcentered">
                        <div class="column about-us-header-text">
                            <div class="columns is-centered">
                                <div class="column is-narrow">
                                    <h1 class="subtitle is-size-3 has-text-grey-light has-text-centered-mobile">
                                        {{ $t('about_us.title') }}
                                    </h1>
                                    <h2 class="title is-size-2 trust-text has-text-centered-mobile"
                                        v-html="$t('about_us.subtitle')">
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div class="column about-us-header-gif">
                            <div class="columns is-centered is-vcentered is-mobile padding-bottom-2x-mobile">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
        <div class="small-container">
            <div class="content is-medium padding-bottom-3x">
                <p>
                   {{ $t('about_us.description_founded') }}
                </p>
            </div>
            <div class="columns is-multiline is-mobile is-variable is-5">
                <div class="column is-6-mobile is-4-tablet is-4-desktop">
                    <a href="https://showcase.dropbox.com/collection/items/download?padId=pmx9lNzdy1vAJff2RfNdH&amp;collectionItemId=Vokfd4KcqegajepkUAjk" rel="noopener noreferrer" download="press-kit.zip">
                    <div class="columns is-multiline is-mobile has-text-centered">
                        <div class="column is-12">
                            <figure class="image"><img :src="spinningWorldImg" alt="press-kit.zip" class="is-shadowed is-semi-rounded"></figure>
                        </div>
                        <div class="column is-12"><strong class="is-size-6">press-kit.zip</strong></div>
                        <div class="column is-12 is-paddingless is-size-7">
                            ~ 150 MB
                        </div>
                    </div>
                    </a>
                </div>
                <div class="column is-6-mobile is-4-tablet is-4-desktop">
                    <a href="https://drive.google.com/uc?authuser=0&id=1-NYfQChY1fC0ED9Ad2-QQXv0zLQd0EYu&export=download" rel="noopener noreferrer" download="curriculo.pdf">
                    <div class="columns is-multiline is-mobile has-text-centered">
                        <div class="column is-12">
                            <figure class="image"><img :src="curriculum" alt="press-kit.zip" class="is-shadowed is-semi-rounded"></figure>
                        </div>
                        <div class="column is-12"><strong class="is-size-6">Curriculum.pdf</strong></div>
                        <div class="column is-12 is-paddingless is-size-7">
                            ~ 150 MB
                        </div>
                    </div>
                    </a>
                </div>
            </div>
        </div>
        </section>

                            

        <section class="hero is-bold">
            <div class="hero-body has-text-centered">
                <div class="container">
                    <div class="columns is-centered is-vcentered">
                        <div class="column">
                            <h3 class="title is-size-4">
                                {{ $t('about_us.become_ambassadors') }}
                            </h3>
                        </div>
                        <div class="column">
                            <router-link to="contact-us" class="button is-rainbow is-rounded is-medium">
                                {{ $t('about_us.contact_us') }}
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<style lang="scss">

    .about-us-header-text {
        @media(max-width: 768px) {
            margin-top: 1rem;
        }
    }


    .trust-text {
        @media (min-width: 768px) {
            max-width: 400px;
        }
    }

    .gif{
        height: 200px !important;
        width: auto !important;
    }

    .intro-text {
        max-width: 900px;
    }

</style>


<script>
    import spinningWorldImg from './components/assets/my.jpg';
    import curriculum from './components/assets/cur.jpg';

    export default {
        data() {
            return {
                spinningWorldImg,
                curriculum
            }
        }
    }
</script>
