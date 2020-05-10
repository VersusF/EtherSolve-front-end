<template>
  <div id="app">
    <Sidebar :analysis="analysis" :isExpanded="isSidebarExpanded" ref="Sidebar"/>
    <BurgerButton/>
    <MainContent :isSidebarExpanded="isSidebarExpanded" ref="Main"/>
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
  data () {
    return {
      isSidebarExpanded: false,
      analysis: [],
      reports: {},
      currentAnalysisName: null
    }
  },
  methods: {
    newAnalysis() {
      this.$refs.Main.newAnalysis();
    },
    addAnalysis(name, request) {
      this.currentAnalysisName = name;
      this.analysis.push(name);
      console.log(this.reports);
      this.reports[name] = {
        name: name,
        request: request,
        description: 'Cacca in brodo'
      }
      this.showAnalysis(name);
    },
    closeAnalysis(name) {
      var index = this.analysis.indexOf(name);
      this.analysis.splice(index, 1);
      if (this.analysis.length == 0){
        this.currentAnalysisName = null;
        this.newAnalysis();
      }
      else if (this.currentAnalysisName == name){
        this.currentAnalysisName = this.analysis[0];
        this.showAnalysis(this.currentAnalysisName);
      }
    },
    showAnalysis(name){
      var currentAnalysisReport = this.reports[name];
      this.$refs.Main.showAnalysis(currentAnalysisReport);
    },
    showCurrentAnalysis(){
      if (this.currentAnalysisName != null)
        this.showAnalysis(this.currentAnalysisName);
    },
    toggleSidebar(){
      this.isSidebarExpanded = ! this.isSidebarExpanded;
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

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
  --sidebar-width: 12rem;
  --sidebar-position: 0;
  --transition-speed: .5s;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}
</style>
