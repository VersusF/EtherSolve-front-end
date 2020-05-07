<template>
  <div id="app">
    <Sidebar/>
    <MainContent/>
  </div>
</template>

<script>
import MainContent from './components/MainContent.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    MainContent
  }
}
</script>

<style>
#app {
  width: 100vw;
}

body {
  margin: 0;
  overflow-x: hidden;
}

:root {
  font-size: 16px;
  font-family: 'Open Sans';
  --text-accent: #f0f0f0;
  --text-main: black;
  --bg-main: #e0e0e0;
  --bg-accent: #222222;
  --bg-accent-hover: #101010;
  --sidebar-width: 10rem;
  --transition-speed: .5s;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}
</style>
