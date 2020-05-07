<template>
  <main class="main">
    <Welcome />
    <Analysis />
  </main>
</template>

<script>
import Welcome from "@/components/Welcome.vue";
import Analysis from "@/components/Analysis.vue";

export default {
  name: "MainContent",
  components: {
    Welcome,
    Analysis
  },
  methods: {
    showAnalysisFromAddress(address) {
      console.log(address);
    },
    showAnalysisFromBytecode(bytecode, bytecodeType) {
      console.log(bytecode, bytecodeType);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  width: calc(100% - var(--sidebar-width));
  background-color: var(--bg-main);
  min-height: 100vh;
  color: var(--text-main);
  margin-left: var(--sidebar-width);
}
</style>
