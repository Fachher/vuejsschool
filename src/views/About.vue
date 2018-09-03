<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
    import { Vue } from 'vue-property-decorator';
    import Component from "vue-class-component";
    import {Route} from "vue-router";

    @Component
    export default class Home extends Vue {
        beforeRouteEnter(to: Route, from: Route, next: Function) {
            console.log('About has been entered');
            next();
        }

    }
</script>
