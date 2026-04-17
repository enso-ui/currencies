<template>
    <div class="columns is-centered is-mobile">
        <div class="column is-half-desktop is-two-thirds-touch">
            <enso-form class="box form-box"/>
        </div>
    </div>
</template>

<script>
import { EnsoForm } from '@enso-ui/forms/bulma';

export default {
    name: 'Edit',

    components: { EnsoForm },
};
</script>
