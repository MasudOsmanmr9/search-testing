<template>
  <div class="hello">
    <b-container class="bv-example-row">
        <b-row class='center'>
            <h1>go to search page</h1>
        </b-row>
        <b-row>
            <b-link :to="{name:'searchpage'}">Search Page</b-link>
        </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
