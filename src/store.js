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
        // Progressive counter for ID
        analysisCount: 0
    },
    getters: {
        getCurrentAnalysisReport(state) {
            return state.reports[state.currentAnalysisID];
        },
        getAnalysisName: state => id => state.reports[id].name
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
                description: 'CaccaInBrodo'
            }
        },
        SHOW_ANALYSIS(state){
            if (state.currentAnalysisID != null)
                state.isAnalysisShown = true;
        },
        HIDE_ANALYSIS(state){
            state.isAnalysisShown = false;
        },
        SET_CURRENT_ANALYSIS (state, id) {
            state.currentAnalysisID = id;
            state.currentAnalysisName = state.reports[id].name;
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
        }
    }
});

export default store