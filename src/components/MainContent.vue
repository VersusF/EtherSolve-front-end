<template>
  <main class="main" v-on:click="closeSidebar">
    <div v-if="! isAnalysisShown">
      <Welcome />
    </div>
    <div v-else>
      <Analysis v-bind:currentAnalysisReport="currentAnalysisReport" />
    </div>
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
  props: {
    isSidebarExpanded: Boolean
  },
  data: () => {
    return {
      isAnalysisShown: false,
      currentAnalysisName: null,
      currentAnalysisReport: {}
    };
  },
  methods: {
    showAnalysisFromAddress(address) {
      var request = address;
      var name = address.substring(0, 10);
      this.$parent.addAnalysis(name, request);
    },
    showAnalysisFromBytecode(bytecode, bytecodeType) {
      var request = bytecode + ": " + bytecodeType;
      var name = bytecode.substring(0, 10);
      this.$parent.addAnalysis(name, request);
    },
    showAnalysis(report) {
      this.isAnalysisShown = true;
      this.currentAnalysisName = report.name;
      this.currentAnalysisReport = report;
    },
    newAnalysis() {
      this.isAnalysisShown = false;
    },
    closeSidebar() {
      if (this.isSidebarExpanded) this.$parent.toggleSidebar();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  /* width: calc(100% - var(--sidebar-width)); */
  width: 100%;
  background-color: var(--bg-main);
  min-height: 100vh;
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
