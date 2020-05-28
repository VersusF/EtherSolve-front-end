import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isSidebarExpanded: false,
        isAnalysisShown: false,
        // List of IDs of the analysis
        analysisList: [],
        // Maps every id to a report object
        reports: {},
        // Current analysis id
        currentAnalysisID: null,
        currentAnalysisName: null,
        currentAnalysisStatus: 'loading',
        // Progressive counter for ID
        analysisCount: 0
    },
    getters: {
        getCurrentAnalysisReport(state) {
            return state.reports[state.currentAnalysisID];
        },
        getAnalysisName: state => id => state.reports[id].name,
        // getCurrentAnalysisStatus: state => {
        //     console.log("call");
        //     if (state.currentAnalysisID == null || state.reports[state.currentAnalysisID] == null)
        //         return null;
        //     console.log(state.reports[state.currentAnalysisID].etherSolveReport);
        //     if (state.reports[state.currentAnalysisID].etherSolveReport != null){             
        //         return 'loaded';
        //     }
        //     if (state.reports[state.currentAnalysisID].errorMessage != null){               
        //         return 'error';
        //     }
        //     return 'loading';
        // }
    },
    mutations: {
        TOGGLE_SIDEBAR(state) {
            state.isSidebarExpanded = ! state.isSidebarExpanded;
        },
        ADD_ANALYSIS(state, request){
            state.currentAnalysisID = state.analysisCount;
            state.analysisCount++;
            var contractName = 'Contract_' + state.currentAnalysisID;
            state.currentAnalysisName = contractName;
            state.analysisList.push(state.currentAnalysisID);
            state.reports[state.currentAnalysisID] = {
                name: contractName,
                request: request,
                etherSolveReport: null,
                errorMessage: null
            }
        },
        SHOW_ANALYSIS(state){
            if (state.currentAnalysisID != null)
                state.isAnalysisShown = true;
        },
        HIDE_ANALYSIS(state){
            state.isAnalysisShown = false;
            state.currentAnalysisStatus = 'loading'
        },
        SET_CURRENT_ANALYSIS (state, id) {
            state.currentAnalysisID = id;
            state.currentAnalysisName = state.reports[id].name;
            // Update status
            if (state.reports[id].etherSolveReport != null){             
                state.currentAnalysisStatus = 'loaded';
            } else if (state.reports[id].errorMessage != null){               
                state.currentAnalysisStatus = 'error';
            } else {
                state.currentAnalysisStatus = 'loading';
            }
        },
        CLOSE_ANALYSIS(state, id){
            var index = state.analysisList.indexOf(id);
            state.analysisList.splice(index, 1);
            if (state.analysisList.length == 0){
                state.currentAnalysisID = null;
                state.currentAnalysisName = null;
                state.isAnalysisShown = false;
            } else if (state.currentAnalysisID == id) {
                state.currentAnalysisID = state.analysisList[0];
                state.currentAnalysisName = state.reports[state.currentAnalysisID].name;
            }
            delete state.reports[id];
        },
        RENAME(state, {id, newName}){
            Vue.set(state.reports[id], 'name', newName);
            if (state.currentAnalysisID == id)
                state.currentAnalysisName = newName;
        },
        SET_ETHERSOLVE_REPORT(state, {id, report}){
            Vue.set(report, "name", state.currentAnalysisName);
            Vue.set(state.reports[id], "etherSolveReport", report);
            state.currentAnalysisStatus = 'loaded';
        },
        SET_ERROR(state, {id, error}){
            Vue.set(state.reports[id], "errorMessage", error);
            state.currentAnalysisStatus = 'error';
        }
    },
    actions: {
        toggleSidebar(context){
            context.commit('TOGGLE_SIDEBAR');
        },
        closeSidebar(context){
            if (context.state.isSidebarExpanded)
                context.commit('TOGGLE_SIDEBAR');
        },
        addAnalysis(context, request){
            context.commit('ADD_ANALYSIS', request);
            context.dispatch('showAnalysis');
        },
        showAnalysis(context){
            context.commit('SHOW_ANALYSIS');
        },
        hideAnalysis(context){
            context.commit('HIDE_ANALYSIS');
        },
        setCurrentAnalysis(context, id){
            context.commit('SET_CURRENT_ANALYSIS', id);
            context.commit('SHOW_ANALYSIS');
        },
        closeAnalysis(context, id){
            context.commit('CLOSE_ANALYSIS', id);
        },
        rename(context, arg){
            context.commit('RENAME', arg);
        },
        setEtherSolveReport(context, arg){
            context.commit('SET_ETHERSOLVE_REPORT', arg);
        },
        setError(context, arg){
            context.commit('SET_ERROR', arg);
        }
    }
});

export default store