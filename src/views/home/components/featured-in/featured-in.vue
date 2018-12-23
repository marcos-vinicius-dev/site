<template>
    <div>
        <div class="columns is-centered featured-in">
            <div class="column">
                <a href="https://techcrunch.com/2018/08/11/openbook-is-the-latest-dream-of-a-digital-life-beyond-facebook/"
                   class="featured-in__logo-wrapper"
                   target="_blank" rel="noopener noreferrer">
                    <figure class="image">
                        <img class="is-grayscale" src="./assets/tc-logo.png">
                    </figure>
                </a>
            </div>
            <div class="column">
                <a href="https://www.telegraph.co.uk/technology/2018/07/16/privacy-activists-launch-tracking-free-rival-facebook/"
                   class="featured-in__logo-wrapper"
                   target="_blank" rel="noopener noreferrer">
                    <figure class="image">
                        <img class="is-grayscale" src="./assets/telegraph-logo.png">
                    </figure>
                </a>
            </div>
            <div class="column">
                <a href="https://www.sueddeutsche.de/digital/openbook-1.4060625"
                   class="featured-in__logo-wrapper"
                   target="_blank" rel="noopener noreferrer">
                    <figure class="image">
                        <img class="is-grayscale" src="./assets/sd-logo.png">
                    </figure>
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .featured-in {

        .column {
            display: flex;
            justify-content: center;
            min-width: 17%;

            @media screen and (max-width: 769px) {
                min-height: 6em;
            }
        }

        .is-grayscale {

            &:hover {
                filter: none;
            }
        }

        &__small {
            .image {
                max-width: 10em;
            }
        }
    }

    .featured-in__logo-wrapper {
        display: flex;
        align-items: center;
    }

    .featured-in-img {
        max-width: 128px;
        height: auto;

        &.position-top {
            top: -1em;
        }
    }

    .featured-in-img-2 {
        max-width: 200px;
        height: auto;

        &.position-top {
            top: -1em;
        }
    }

    .featured-in-img-3 {
        max-width: 110px;
        height: auto;

        &.position-top {
            top: -1em;
        }
    }
</style>


<script>
    export default {
        name: 'ob-featured-on'
    }
</script>
