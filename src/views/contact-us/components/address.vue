<template>
    <address>
        <div class="columns is-vcentered is-multiline is-mobile">
            <div class="column is-2">
                <span class="icon">
                    <i class="fas fa-building"></i>
                </span>
            </div>
            <div class="column is-10">
                <strong>{{ $t('address.name') }}</strong><br/>
                {{ $t('address.ob_organization') }}
            </div>
            <div class="column is-2">
                <span class="icon">
                    <i class="fas fa-map-marker-alt"></i>
                </span>
            </div>
            <div class="column is-10">
                <strong>{{ $t('address.address') }}</strong><br/>
                {{ $t('address.ob_address') }}
            </div>
            <div class="column is-2">
                <span class="icon">
                    <i class="fas fa-envelope"></i>
                </span>
            </div>
            <div class="column is-10">
                <strong>{{ $t('address.email') }}</strong><br/>
                <a href="mailto:marcoddev10@gmail.com">
                    marcoddev10@gmail.com
                </a>
            </div>
            <div class="column is-2">
                <span class="icon">
                    <i class="fas fa-phone"></i>
                </span>
            </div>
            <div class="column is-10">
                <strong>{{ $t('address.telephone') }}</strong><br/>
                {{ $t('address.telephone_no') }}
            </div>
        </div>
    </address>
</template>

<script>
    export default {
        name: 'ob-address'
    }
</script>
