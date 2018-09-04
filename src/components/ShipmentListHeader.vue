<template>
    <div>
        <h1>Shipment list header</h1>

        <button v-on:click="showHelpMessage">Show help message</button>

        <p>
            <input v-model="searchInputString" v-on:keyup="inputChange">
        </p>

        <p>Your are searching for: {{searchInputString}}</p>

        <p>Current date is: {{shipmentListModel.currentDate}}</p>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import ShipmentListModel from '@/model/ShipmentListModel';
    import {Prop} from "vue-property-decorator";

    @Component({
    })
    export default class ShipmentListHeader extends Vue {
        // private
        private name:string = "shipmentListHeader";

        // data
        searchInputString:string = "";

        @Prop()
        shipmentListModel!: ShipmentListModel;

        /* ========== methods ================== */
        showHelpMessage(){
            alert('Search by milestone and mode of transport!')
            // TODO: show modal window with help text
        }

        inputChange(event: Event){
            this.$emit('searchStringChanged');
        }

        /* ============ computed properties ===============*/
        get searchInputStringBeautified(){
            return `[${this.searchInputString}]`;
        }

        /* ============== Lifecycle hooks ================= */
        mounted(){
            console.log(`${name} has been rendered`);
        }
    }
</script>

<style scoped>

</style>