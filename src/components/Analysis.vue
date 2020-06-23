<template>
  <div class="content">
    <h1 v-bind:show="currentAnalysisName" class="contractName">{{ currentAnalysisReport.name }}</h1>
    <h2 v-if="contentStatus == 'loaded'" class="contractAddress">{{currentAnalysisReport.etherSolveReport.address}}</h2>
    <div v-if="contentStatus == 'loaded'" class="gridLayout">
      <Cfg class="cfg" 
        :dotNotation="currentAnalysisReport.etherSolveReport.dotNotation" 
        :contractName="currentAnalysisReport.name"
        :contractID="currentAnalysisID"
      />
      <Info class="info" :report="currentAnalysisReport.etherSolveReport" />
      <div class="collapsibles">
        <ErrorLog class="errorLog" :log="currentAnalysisReport.etherSolveReport.runtimeCfg.buildReport.errorLog" />
        <SourceCode class="sourceCode" :sourceCode="currentAnalysisReport.etherSolveReport.binarySource" />
      </div>
      <RemainingData
        class="remainingData"
        :remainingData="currentAnalysisReport.etherSolveReport.runtimeCfg.remainingData"
      />
    </div>
    <div v-else-if="contentStatus == 'error'"  class="component">
      <ErrorMessage :message="currentAnalysisReport.errorMessage"/>
    </div>
    <div v-else class="component">
      <LoadingGif />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
// import report from "@/assets/example.js";
import Cfg from "./analysis_elements/Cfg.vue";
import Info from "./analysis_elements/Info.vue";
import ErrorLog from "./analysis_elements/ErrorLog.vue";
import RemainingData from "./analysis_elements/RemainingData.vue";
import SourceCode from "./analysis_elements/SourceCode.vue";
import ErrorMessage from "./analysis_elements/ErrorMessage.vue"
import LoadingGif from "./LoadingGif.vue";

export default {
  name: "Analysis",
  components: {
    Cfg,
    Info,
    ErrorLog,
    RemainingData,
    SourceCode,
    ErrorMessage,
    LoadingGif
  },
  computed: {
    ...mapGetters({
      currentAnalysisReport: "getCurrentAnalysisReport",
    }),
    ...mapState({
      currentAnalysisName: "currentAnalysisName",
      currentAnalysisID: "currentAnalysisID",
      contentStatus: "currentAnalysisStatus"
    }),
  },
  methods: {
    ...mapActions({
      setEtherSolveReport: "setEtherSolveReport",
      setError: "setError"
    })
  },
  mounted() {
    var id = this.currentAnalysisID;
    if (this.currentAnalysisReport.etherSolveReport == null){
      var params = this.currentAnalysisReport.request;
      this.axios.post('/api/', params, {headers:{}})
          .then(response => {
            var status = response.data.status;
            if (status == 1){
              // this.$set(this.currentAnalysisReport, "etherSolveReport", response.data.result);
              this.setEtherSolveReport({id: this.currentAnalysisID, report: response.data.result});
            } else {
              // Manage EtherSolve error
              // this.$set(this.currentAnalysisReport, "errorMessage", response.data.message);
              this.setError({id: id, error: response.data.message});
            }
              
          })
          .catch(error => {
              // this.$set(this.currentAnalysisReport, "errorMessage", error);
              this.setError({id: id, error: error});
          });
    }
  }
};
</script>

<style scoped>
.component {
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
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