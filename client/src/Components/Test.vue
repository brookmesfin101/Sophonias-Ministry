<template>
    <h2 v-text='hello'></h2>
</template>

<script lang='ts'>
    import Vue from "vue";

    export default Vue.extend({
        data() {
            return {
                hello: 'Hello World!'
            }
        }
    });
</script>

<style>

</style>