<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col cols='12'>
          <router-view />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import SearchPage from './components/SearchPage.vue'

export default {
  name: 'App',
  components: {
    // SearchPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
