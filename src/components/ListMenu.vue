<template>
    <ul>
        <li><a href="http://www.google.de">Google</a></li>
        <li><a href="http://www.yahoo.de">Yahoo</a></li>
    </ul>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class ListMenu extends Vue {
        @Prop() private msg!: string;
    }
</script>

<style scoped>

</style>