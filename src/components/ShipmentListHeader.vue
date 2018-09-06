<template>
    <div>
        <h1>Shipment list header</h1>

        <button v-on:click="showHelpMessage">Show help message</button>

        <p>
            <input v-model="searchInputString" v-on:keyup="onInputChange">
        </p>

        <p>You are searching for: {{searchInputString}}</p>

        <p>Current date is: {{shipmentListModel.currentDate}}</p>

        <b-btn v-b-modal.modal1>Launch demo modal</b-btn>

        <b-modal id="modal1" title="Bootstrap-Vue">
            <p class="my-4">Simple modal window</p>
        </b-modal>

    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import ShipmentListModel from '@/model/ShipmentListModel';
    import {Prop} from "vue-property-decorator";
    import {debounce} from "lodash";
    import {NoCache} from "../decorators/no-cache";

    @Component({
    })
    export default class ShipmentListHeader extends Vue {

        /* ============== private fields ================ */

        private debounceInfoParent = debounce(function (this:ShipmentListHeader, event:Event){
            this.$emit('searchStringChanged', (<HTMLInputElement>event.target).value);
        }, 800);

        private searchInputString:string = ""; // vuejs data

        @Prop({required: true, type: ShipmentListModel})
        private shipmentListModel!: ShipmentListModel; // vuejs property

        /* ============== private methods ================ */

        private showHelpMessage(){
            alert('Search by milestone and mode of transport!')
            // TODO: show modal window with help text
        }

        /* =============== event handler ================= */

        onInputChange(event:Event){
            this.debounceInfoParent(event);
        }

        /* ============ computed properties ============== */

        @NoCache
        get searchInputStringBeautified(){
            return `[${this.searchInputString}]`;
        }

        /* ============== Lifecycle hooks ================ */

        mounted(){

        }
    }
</script>

<style scoped>

</style>