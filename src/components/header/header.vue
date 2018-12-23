<template>
    <header>
        <nav class="navbar is-fixed-top is-transparent has-border-bottom-gray-light animated fadeInDown"
             role="navigation" aria-label="main navigation">
            <div class="container">
                <div class="navbar-brand">
                    <router-link to="home" class="navbar-item is-size-4 has-text-primary">
                        <a href="#" class="header-logo"></a>
                        <span class="header-logo-separator"></span><span v-html="$t('global.logo')" class="has-text-circular"></span>
                    </router-link>
                    <ob-hamburger></ob-hamburger>
                </div>
                <div class="navbar-menu">
                    <div class="navbar-end header-links">
                        <router-link :to="'home'" class="navbar-item" active-class="is-active is-active--home">{{ $t('header.home') }}</router-link>
                        <router-link :to="'about-us'" class="navbar-item" active-class="is-active is-active--about-us">{{ $t('header.about_us') }}</router-link>
                        <router-link :to="'contact-us'" class="navbar-item" active-class="is-active is-active--contact-us">{{ $t('header.contact_us') }}</router-link>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>
<script>
    import obHamburger from './components/hamburger.vue';

    export default {
        components: {
            obHamburger
        },
        methods: {
        }
    }
</script>

<style lang="scss">
    .header-logo {
        background-image: url('../assets/logo.svg');
        background-size: 30px 30px;
        background-repeat: no-repeat;
        background-position: center center;
        width: 40px;
        height: 40px;
    }

    .header-logo-separator{
        width: 1px;
        height: 25px;
        background: #fafafa;
        margin-right: 8px;
    }

    .header-links {
        .is-active {
            font-weight: bold;
            color: #f6006f !important;

            &--home {
                color: #f6006f !important;
            }

            &--about-us {
                color: #f6006f!important;
            }

            &--manifesto {
                color: #f6006f !important;
            }

            &--contact-us {
                color: #f6006f !important;
            }

            &--jobs {
                color: #f6006f !important;
            }

            &--faq {
                color: #f6006f !important;
            }

            &--press {
                color: #f6006f !important;
            }
        }
    }

    .select-language {
        margin-left: 0.75em;

        .current-language {
            cursor: pointer;
        }

        .fa-angle-down {
            margin-left: 0.5em;
        }

        .fa-check {
            margin-left: 1em;
            display: none;
        }

        .active {
            .fa-check {
                display: inline-block;
            }
        }
    }

</style>

