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
    import axios from 'axios';


    interface Album {
        albumId: number,
        id: number,
        title: string,
        url: string,
        thumbnailUrl: string
    }

    @Component({
        components: {
            ShipmentListHeader,
            ShipmentListContent
        }

    })
    export default class ShipmentList extends Vue {

        shipmentListModel: ShipmentListModel = new ShipmentListModel(new Date(), []);

        updateData(albumId:string) {
            let url = `https://jsonplaceholder.typicode.com/photos?_limit=5&albumId=${albumId}`;

            axios.request<Album[]>({
                url: url,
                timeout: 2000
            })
            .then((response) => {
                const {data} = response;
                this.shipmentListModel = new ShipmentListModel(new Date(), data)
            })
            .catch(function (error) {
                console.error('An error occured while fetching data');
            });

        }


    }
</script>

<style scoped>

</style>