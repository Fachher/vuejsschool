<template>
    <div>
        <h1>Shipment list content</h1>

        <table border="1" align="center">
            <thead>
                <tr>
                    <td>Album Id</td>
                    <td>Id</td>
                    <td>Title</td>
                    <td>Url</td>
                    <td>Thumbnail</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="album in shipmentListModel.album">
                    <td>{{album.albumId}}</td>
                    <td>{{album.id}}</td>
                    <td>{{album.title}}</td>
                    <td><a v-bind:href="album.url">Download</a> </td>
                    <td><img v-bind:src="album.thumbnailUrl" height="20px"/></td>
                </tr>
            </tbody>
        </table>
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