<template>
    <div>
        <h1>Shipment list header</h1>

        <button v-on:click="showHelpMessage">Show help message</button>

        <p>
            <input v-model="searchInputString">
        </p>

        <p>Your are searching for: {{searchInputString}}</p>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import ShipmentListModel from '@/model/ShipmentListModel';
    import {Model, Prop} from "vue-property-decorator";

    @Component({
    })
    export default class ShipmentListHeader extends Vue {
        // private
        private name:string = "shipmentListHeader";

        // data
        searchInputString:string = "";

        // properties set from outside
        @Prop()
        shipmentListModel!: ShipmentListModel;

        // methods
        showHelpMessage(){
            alert('Search by milestone and mode of transport!')
            // TODO: show modal window with help text
        }

        // computed properties
        get searchInputStringBeautified(){
            return `[${this.searchInputString}]`;
        }

        // lifecycle hooks
        mounted(){
            console.log(`${name} has been rendered`);
            console.log(`mounted to ${this.$el}`);
        }
    }
</script>

<style scoped>

</style>