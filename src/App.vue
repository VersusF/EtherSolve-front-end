<template>
  <div id="app">
    <Sidebar/>
    <Welcome/>
  </div>
</template>

<script>
import Welcome from './components/Welcome.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    Welcome
  }
}
</script>

<style>

</style>
