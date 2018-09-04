<template>
    <div>
        <shipment-list-header shipmentListModel="${shipmentListModel}"/>
        <shipment-list-content shipmentListModel="${shipmentListModel}"/>

    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import {Model} from "vue-property-decorator";
    import ShipmentListModel from "@/model/ShipmentListModel";
    import ShipmentListContent from "@/components/ShipmentListContent.vue";
    import ShipmentListHeader from "@/components/ShipmentListHeader.vue";


    @Component({
        components: {
            ShipmentListContent,
            ShipmentListHeader
        }

    })
    export default class ShipmentList extends Vue {

        @Model()
        private shipmentListModel!: ShipmentListModel;

    }
</script>

<style scoped>

</style>