<template>
    <div>
        <ListMenu msg="Links" count="0"/>
        <ListContent/>
        <span>Total count: {{ doneTodosCount }}</span>
        <br>
        <span>Computed method from class: {{ anotherComputedMethod }}</span>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import ListContent from '@/components/ListContent.vue';
    import ListMenu from '@/components/ListMenu.vue';
    import {mapGetters} from "vuex";

    @Component({
        components: {
            ListMenu,
            ListContent
        },
        computed: mapGetters(['doneTodosCount', 'anotherGetter'])
    })
    export default class ShipmentList extends Vue {

        printHello(){
            console.log('Hello child')
        }

        // route event handler
        beforeRouteEnter() {
            console.log('shipment list route has been entered');
        }

        get anotherComputedMethod(): number{
            return 10 + 1;
        }


    }
</script>

<style scoped>

</style>