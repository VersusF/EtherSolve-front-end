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
  width: 100%;
  background-color: var(--bg-main);
  color: var(--text-main);
  position: relative;
  float: left;

  height: 3000px;
  background-color: lawngreen;
}
</style>
