import Component from "vue-class-component";

// Register event hooks for router
// all classes annotated with @Component are able to handle this event afterwards
Component.registerHooks([
    'beforeRouteEnter',
    'beforeRouteLeave',
    'beforeRouteUpdate'
]);