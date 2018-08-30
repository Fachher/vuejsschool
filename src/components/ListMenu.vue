<template>
    <div style="border:1px solid black;">
        <h1>{{msg}}</h1>
        <ul>
            <li><a href="http://www.google.de">Google</a></li>
            <li><a href="http://www.yahoo.de">Yahoo</a></li>
            <li><button @click="countUp">Call without parameters</button></li>
            <li><button @click="countUpWithParam(12)">Call with parameter</button></li>
        </ul>

        <h4>Todos</h4>
        <ul v-for="todo in doneTodos">
            <li>{{todo.text}}</li>
        </ul>
        <span>{{computedMsg}}</span>
    </div>
</template>

<script lang="ts">
    import {Component, Model, Prop, Vue, Watch} from 'vue-property-decorator';
    import {NoCache} from "../decorators/no-cache";

    @Component
    export default class ListMenu extends Vue {

        // ================== vue properties which can been set by directives ============

        @Prop()
        private msg!: string;

        @Prop({required: true, default: 1, type: String})
        private count!:number;

        // ================== vue watch points which are triggered "once" when a property has been changed

        @Watch("count")
        doSomethingWhenMsgChange(newVal: string, oldVal: string){
            console.log(`oldValue: ${oldVal}`);
            console.log(`newValu: ${newVal}`);
        }


        // ========== computed methods ============
        @NoCache
        get computedMsg(){
            return 'computed ' + this.msg;
        }

        get doneTodos(){
            return this.$store.getters.doneTodos;
        }

        // ========== methods ========

        countUp() {
            console.log('Count up by one');
            console.log(this.count);
            // calling mutation
            this.$store.commit('increment');
            console.log(this.$store.state.count);
        }

        countUpWithParam(offset:number){
            // calling action
            this.$store.dispatch('increment');
            console.log(`Count up by offset ${offset}`);
            console.log(this.count);
        }


        // ========================== vue lifecycle methods =======================

        beforeCreate(){
            console.log('vue component will be created!');
        }

        created(){
            console.log('vue component has been created!');
        }

        beforeMount() {
            console.log('vue component will be mounted!');
        }

        mounted(){
            console.log('vue component has been mounted!');
        }

        beforeUpdate(){
            console.log('vue component will be updated!');
        }

        updated(){
            console.log('vue component has been updated!');
        }

        beforeDestroy(){
            console.log('vue component will be destroyed!');
        }

        destroyed(){
            console.log('vue component has been destroyed')
        }


    }
</script>

<style scoped>

</style>