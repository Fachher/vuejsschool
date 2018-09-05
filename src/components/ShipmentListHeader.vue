<template>
    <div>
        <h1>Shipment list header</h1>

        <button v-on:click="showHelpMessage">Show help message</button>

        <p>
            <input v-model="searchInputString" v-on:keyup="onInputChange">
        </p>

        <p>You are searching for: {{searchInputString}}</p>

        <p>Current date is: {{shipmentListModel.currentDate}}</p>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import ShipmentListModel from '@/model/ShipmentListModel';
    import {Prop} from "vue-property-decorator";
    import {debounce} from "lodash";

    @Component({
    })
    export default class ShipmentListHeader extends Vue {

        /* ============== private fields ================ */

        private debounceInfoParent = debounce(function (this:ShipmentListHeader, event:Event){
            this.$emit('searchStringChanged', (<HTMLInputElement>event.target).value);
        }, 800);

        private searchInputString:string = ""; // vuejs data

        @Prop()
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

        get searchInputStringBeautified(){
            return `[${this.searchInputString}]`;
        }

        /* ============== Lifecycle hooks ================ */

        mounted(){
            console.log(`${name} has been rendered`);
        }
    }
</script>

<style scoped>

</style>