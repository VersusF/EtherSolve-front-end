<template>
  <div class="content">
    <h1 v-bind:show="currentAnalysisName" class="contractName">{{ currentAnalysisReport.name }}</h1>
    <h2 v-if="isContentLoaded" class="contractAddress">{{analysisExample.address}}</h2>
    <div v-if="isContentLoaded" class="gridLayout">
      <Cfg class="cfg" :hash="analysisExample.binaryHash"/>
      <Info class="info" :report="analysisExample" />
      <div class="collapsibles">
        <ErrorLog class="errorLog" :log="analysisExample.runtimeCfg.buildReport.errorLog" />
        <SourceCode class="sourceCode" :sourceCode="analysisExample.binarySource" />
      </div>
      <RemainingData
        class="remainingData"
        :remainingData="analysisExample.runtimeCfg.remainingData"
      />
    </div>
    <div v-else>
      <LoadingGif />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import report from "@/assets/example.js";
import Cfg from "./analysis_elements/Cfg.vue";
import Info from "./analysis_elements/Info.vue";
import ErrorLog from "./analysis_elements/ErrorLog.vue";
import RemainingData from "./analysis_elements/RemainingData.vue";
import SourceCode from "./analysis_elements/SourceCode.vue";
import LoadingGif from "./LoadingGif.vue";

export default {
  name: "Analysis",
  components: {
    Cfg,
    Info,
    ErrorLog,
    RemainingData,
    SourceCode,
    LoadingGif
  },
  computed: {
    ...mapGetters({
      currentAnalysisReport: "getCurrentAnalysisReport"
    }),
    ...mapState({
      currentAnalysisName: "currentAnalysisName"
    })
  },
  data() {
    return {
      analysisExample: null, //report
      //content: 'Loading...'
      isContentLoaded: false
    };
  },
  mounted() {
    // this.axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    //     .then(response => this.content = response)
    //     .catch(error => {
    //         this.content = 'Error';
    //         console.log(error);
    //     });
    setTimeout(() => {
      (this.analysisExample = report), (this.isContentLoaded = true);
    }, 1000);
  }
};
</script>

<style scoped>
.contractName {
  margin: 1rem;
  display: inline-block;
  font-size: 2.5em;
}
.contractAddress {
  display: inline-block;
  opacity: 0.5;
  font-size: 1.3em;
}
.gridLayout {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "cfg cfg cfg inf"
    "clp clp rdt rdt";
}
.cfg {
  grid-area: cfg;
}
.info {
  grid-area: inf;
}
.collapsibles {
  grid-area: clp;
}
.remainingData {
  grid-area: rdt;
}
</style>