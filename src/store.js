import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isSidebarExpanded: false,
    },
    mutations: {
        TOGGLE_SIDEBAR(state) {
            state.isSidebarExpanded = ! state.isSidebarExpanded;
        }
    },
    actions: {
        toggleSidebar(context){
            context.commit('TOGGLE_SIDEBAR');
        },
        closeSidebar(context){
            if (context.state.isSidebarExpanded)
                context.commit('TOGGLE_SIDEBAR');
        }
    }
});

export default store