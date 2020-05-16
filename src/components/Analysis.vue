<template>
    <div class="content">
        <h1 v-bind:show="currentAnalysisName" class="contractName">{{ currentAnalysisReport.name }}</h1>
        <h2 class="contractAddress"> {{analysisExample.address}} </h2>
        <div class="gridLayout">
            <Cfg class="cfg"/>
            <Info class="info" :report="analysisExample"/>
            <ErrorLog class="errorLog"/>
            <SourceCode class="sourceCode"/>
        </div>
    </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
import report from '@/assets/example.js'
import Cfg from './analysis_elements/Cfg.vue'
import Info from './analysis_elements/Info.vue'
import ErrorLog from './analysis_elements/ErrorLog.vue'
import SourceCode from './analysis_elements/SourceCode.vue'

export default {
    name: 'Analysis',
    components: {
        Cfg,
        Info,
        ErrorLog,
        SourceCode
    },
    computed: {
        ...mapGetters({
            currentAnalysisReport: 'getCurrentAnalysisReport'
        }),
        ...mapState({
            currentAnalysisName: 'currentAnalysisName'
        })
    },
    data () {
        return {
            analysisExample: report
            //content: 'Loading...'
        }
    },
    mounted () {
        // this.axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        //     .then(response => this.content = response)
        //     .catch(error => {
        //         this.content = 'Error'; 
        //         console.log(error);
        //     });
    }
}
</script>

<style scoped>
.contractName {
    margin: 1rem;
    display: inline-block;
    font-size: 2.5em;
}
.contractAddress {
    display: inline-block;
    opacity: .5;
    font-size: 1.3em;
}
.gridLayout{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 
                "cfg cfg cfg inf"
                "err err src src";
}
.cfg {
    grid-area: cfg;
}
.info {
    grid-area: inf;
}
.errorLog {
    grid-area: err;
}
.sourceCode {
    grid-area: src;
}
</style>