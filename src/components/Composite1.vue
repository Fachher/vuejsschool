<template>
    <table border="1">
        <thead>
            <tr>
                <td>ShipmentId</td>
                <td>TrackingNumber</td>
                <td>ModeOfTransport</td>
            </tr>
        </thead>
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
    export default class Composite1 extends Vue {
        @Prop() private msg!: string;
    }
</script>

<style scoped>

</style>