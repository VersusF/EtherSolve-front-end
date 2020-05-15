<template>
  <main class="main" v-on:click="closeSidebar">
    <div v-if="! isAnalysisShown">
      <Welcome />
    </div>
    <div v-else>
      <Analysis />
    </div>
  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Welcome from "@/components/Welcome.vue";
import Analysis from "@/components/Analysis.vue";

export default {
  name: "MainContent",
  components: {
    Welcome,
    Analysis
  },
  computed: {
    ...mapState({
      isAnalysisShown: 'isAnalysisShown'
    })
  },
  methods: {
    ...mapActions({
      closeSidebar: 'closeSidebar',
      addAnalysis: 'addAnalysis'
    }),
    showAnalysisFromAddress(address) {
      var request = address;
      this.addAnalysis(request);
    },
    showAnalysisFromBytecode(bytecode, bytecodeType) {
      var request = bytecode + ": " + bytecodeType;
      this.addAnalysis(request);
    },
    newAnalysis() {
      this.hideAnalysis();
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  /* width: calc(100% - var(--sidebar-width)); */
  width: 100%;
  min-height: 100vh;
  background-color: var(--bg-main);
  color: var(--text-main);

  position: absolute;
  /* left: var(--sidebar-width); */
  top: 0;
}

@media (min-width: 950px) {
  .main {
    width: calc(100% - var(--sidebar-width));
    left: var(--sidebar-width);
  }
}
</style>
