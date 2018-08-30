<template>
    <div>
        <ListMenu msg="Links"/>
        <ListContent/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import ListContent from '@/components/ListContent.vue';
    import ListMenu from '@/components/ListMenu.vue';

    @Component({
        components: {
            ListMenu,
            ListContent
        }
    })
    export default class ShipmentList extends Vue {

    }
</script>

<style scoped>

</style>