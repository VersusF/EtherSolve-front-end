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
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
}

:root {
  font-size: 16px;
  font-family: 'Open Sans';
  --text-accent: #f0f0f0;
  --text-main: black;
  --bg-main: #f0f0f0;
  --bg-accent: #222222;
  --bg-accent-hover: #101010;
  --sidebar-width: 10rem;
  --transition-speed: .5s;
}
body::-webkit-scrollbar {
  width: 0.25rem;
}

body::-webkit-scrollbar-track {
  background: var(--bg-accent);
}

body::-webkit-scrollbar-thumb {
  background: var(--text-accent);
}
</style>
