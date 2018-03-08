<template>
    <div id="test">
      <span v-bind:title="msg">{{msg}}</span>
    </div>
</template>

<script>
    export default {
        msg: "test"
    }
</script>

<style scoped>

</style>
