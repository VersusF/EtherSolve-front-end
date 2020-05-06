<template>
  <main class="main">
    <Welcome />
  </main>
</template>

<script>
import Welcome from "@/components/Welcome.vue";

export default {
  name: "MainContent",
  components: {
    Welcome
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  position: fixed;
  margin-left: var(--sidebar-width);
  height: 100vh;
  width: 100vw;
  background-color: var(--bg-main);
  /* background-color: red; */
  color: var(--text-main);
}
</style>
