<template>
    <div>
        <h1>Shipment list content</h1>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import ShipmentListModel from "../model/ShipmentListModel";
    import {Prop} from "vue-property-decorator";

    @Component({})
    export default class ShipmentListContent extends Vue {

        private name:string = "shipmentListHeader";

        @Prop()
        shipmentListModel!: ShipmentListModel;

        mounted(){
            console.log(`${name} has been rendered`)
        }
    }
</script>

<style scoped>

</style>