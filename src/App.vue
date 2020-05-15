<template>
  <div id="app">
    <Sidebar/>
    <BurgerButton />
    <MainContent/>
  </div>
</template>

<script>
import MainContent from './components/MainContent.vue'
import Sidebar from './components/Sidebar.vue'
import BurgerButton from './components/BurgerButton.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    MainContent,
    BurgerButton
  },
  methods: {
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
@import url('https://fonts.googleapis.com/css2?family=B612+Mono&display=swap');

#app {
  width: 100vw;
}

body {
  margin: 0;
  overflow-x: hidden;
}

:root {
  font-size: 16px;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 500;
  --text-accent: #f0f0f0;
  --text-main: black;
  --bg-main: #e0e0e0;
  --bg-accent: #222222;
  --bg-accent-hover: #101010;
  --sidebar-width: 15rem;
  --sidebar-position: 0;
  --transition-speed: .5s;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}
</style>
