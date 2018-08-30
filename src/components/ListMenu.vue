<template>
    <div style="border:1px solid black;">
        <h1>{{msg}}</h1>
        <ul>
            <li><a href="http://www.google.de">Google</a></li>
            <li><a href="http://www.yahoo.de">Yahoo</a></li>
        </ul>
    </div>
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