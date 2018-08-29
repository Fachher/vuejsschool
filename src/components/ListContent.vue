<template>
    <table>
        <tbody>
        <tr>
            <td>1</td>
            <td>TN123</td>
            <td>Road</td>
        </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class ListContent extends Vue {
        @Prop() private msg!: string;
    }
</script>

<style scoped>

</style>