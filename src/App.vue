<template>
  <div id="app">
    <Sidebar :analysisList="analysisList" ref="Sidebar"/>
    <BurgerButton />
    <MainContent ref="Main"/>
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
      analysisList: [],
      reports: {},
      currentAnalysisID: null,
      analysisCount: 0
    }
  },
  methods: {
    newAnalysis() {
      this.$refs.Main.newAnalysis();
    },
    addAnalysis(request) {
      this.currentAnalysisID = this.analysisCount;
      var contractName = 'Contract_' + this.analysisCount;
      this.analysisList.push({
        id: this.analysisCount,
        name: contractName
      });
      this.reports[this.analysisCount] = {
        name: contractName,
        request: request,
        description: 'Cacca in brodo'
      }
      this.analysisCount++;
      this.showCurrentAnalysis();
    },
    closeAnalysis(id) {
      // Get index of element with that id
      var index = this.analysisIndexOf(id);
      // Remove from the array
      this.analysisList.splice(index, 1);
      // Update view
      if (this.analysisList.length == 0){
        this.currentAnalysisID = null;
        this.newAnalysis();
      }
      else if (this.currentAnalysisID == name){
        this.currentAnalysisID = this.analysisList[0];
        this.showAnalysis(this.currentAnalysisID);
      }
      // Delete report
      delete this.reports[id];
    },
    showAnalysis(id){
      var currentAnalysisReport = this.reports[id];
      this.$refs.Main.showAnalysis(currentAnalysisReport);
    },
    showCurrentAnalysis(){
      if (this.currentAnalysisID != null)
        this.showAnalysis(this.currentAnalysisID);
    },
    rename(id, newName){
      var index = this.analysisIndexOf(id);
      this.$set(this.analysisList[index], 'name', newName);
      this.$set(this.reports[id], 'name', newName);
    },
    analysisIndexOf(id){
      for (var i = 0; i < this.analysisList.length; i++)
        if (this.analysisList[i].id == id){
          return i;
      }
      return null;
    }
  }
}
/*
reports: {
  <reportName>: {
    name: <reportName>,
    request: <request>,
    description: <description>
  }
}
*/
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
