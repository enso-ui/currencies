<template>
    <enso-table class="box p-0"
        id="currencies">
        <template #symbol="{ row }">
            <span class="tag is-warning is-bold">
                {{ row.symbol }}
            </span>
        </template>
    </enso-table>
</template>

<script>
import { EnsoTable } from '@enso-ui/tables/bulma';

export default {
    name: 'Index',

    components: { EnsoTable },
};
</script>
