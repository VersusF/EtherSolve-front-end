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
  width: calc(100% - var(--sidebar-width));
  background-color: var(--bg-main);
  color: var(--text-main);
  margin-left: var(--sidebar-width);
}
</style>
