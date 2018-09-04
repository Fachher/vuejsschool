<template>
    <div>
        <shipment-list-header
                v-bind:shipmentListModel="shipmentListModel"
                @searchStringChanged="updateData"/>
        <shipment-list-content
                v-bind:shipmentListModel="shipmentListModel"/>

    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import ShipmentListModel from "@/model/ShipmentListModel";
    import ShipmentListHeader from "@/components/ShipmentListHeader.vue";
    import ShipmentListContent from "@/components/ShipmentListContent.vue";


    @Component({
        components: {
            ShipmentListHeader,
            ShipmentListContent
        }

    })
    export default class ShipmentList extends Vue {

        shipmentListModel: ShipmentListModel = new ShipmentListModel(new Date());

        updateData(){
            this.shipmentListModel = new ShipmentListModel(new Date());
        }

    }
</script>

<style scoped>

</style>