<template>
    <div>
        <ListMenu msg="empty" count="0" @clicked="inform"/>
        <ListContent/>
        <span>Total count: {{ doneTodosCount }}</span>
        <br>
        <span>Computed method from class: {{ anotherComputedMethod }}</span>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import ListContent from '@/components/ListContent.vue';
    import ListMenu from '@/components/ListMenu.vue';
    import {mapGetters} from "vuex";
    import {Route} from "vue-router";

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
        beforeRouteEnter(to: Route, from: Route, next: Function) {
            console.log('shipment list route has been entered');
        }

        inform(){
            console.log('child has informed parent')
        }

        get anotherComputedMethod(): number{
            return 10 + 1;
        }

        mounted(){
            this.$store.dispatch('asyncAction').then(() => {
                console.log('async operation completed')
            });
            this.$store.dispatch('asyncAction2');
        }


    }
</script>

<style scoped>

</style>