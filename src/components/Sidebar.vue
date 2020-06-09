<template>
  <nav
    class="sidebar"
    v-bind:class="{expanded: isExpanded, hidden : ! isExpanded}"
  >
    <!-- v-on:click="toggleSidebar" -->
    <img class="logo" src="@/assets/logo-mini.png" alt="Logo" width="80px" />
    <h2 class="logo-text">EtherSolve</h2>
    <ul class="sidebar-nav">
      <li class="sidebar-item" v-on:click="showCurrentAnalysis">
        <i class="list-icon">
          <font-awesome-icon icon="tachometer-alt" />
        </i>
        <p>Dashboard</p>
      </li>
      <hr />
      <li class="sidebar-item" v-on:click="newAnalysis">
        <i class="list-icon">
          <font-awesome-icon icon="plus" />
        </i>
        <p>New analysis</p>
      </li>
      <li class="sidebar-item">
        <i class="list-icon">
          <font-awesome-icon icon="file-upload" />
        </i>
        <p>Import</p>
      </li>
      <li class="sidebar-item" v-on:click="saveJson">
        <i class="list-icon">
          <font-awesome-icon icon="file-download" />
        </i>
        <p>Export</p>
        
        <div class="tooltip" v-bind:class="{tooltipHidden: ! isTooltipShown, tooltipVisible: isTooltipShown}">
          <p>{{tooltipMessage}}</p>
        </div>
      </li>
      <hr />

      <!-- Active analysis list -->
      <AnalysisElement
        v-for="id in analysisList"
        :key="id"
        :id="id"
        />
    </ul>
  </nav>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import AnalysisElement from "./sidebar_elements/AnalysisElement.vue"

export default {
  name: "Sidebar",
  components: {
    AnalysisElement
  },
  data() {
    return {
      isTooltipShown: false,
      tooltipMessage: 'Please choose a valid contract to download'
    }
  },
  computed: {
    ...mapState({
      isExpanded: state => state.isSidebarExpanded,
      analysisList: state => state.analysisList,
    }),
    ...mapGetters({
      getCurrentAnalysisReport: 'getCurrentAnalysisReport'
    })
  },
  methods: {
    ...mapActions({
      toggleSidebar: 'toggleSidebar',
      hideAnalysis: 'hideAnalysis',
      showAnalysis: 'showAnalysis'
    }),
    newAnalysis() {
      this.hideAnalysis();
      this.toggleSidebar();
    },
    showCurrentAnalysis() {
      this.showAnalysis();
      this.toggleSidebar();
    },
    saveJson() {
      if (this.getCurrentAnalysisReport != null){
        if (this.getCurrentAnalysisReport.etherSolveReport != null){
          var report = this.getCurrentAnalysisReport.etherSolveReport;
          var reportString = JSON.stringify(report);
          var blob = new Blob([reportString], {type: "application/json"});
          var url = URL.createObjectURL(blob);
          var a = document.createElement('a');
          a.href = url;
          a.download = report.name + ".json";
          a.textContent = "Download contract";
          document.body.appendChild(a);
          a.style.display = 'none';
          a.click();
          document.body.removeChild(a);
          return;
        }
      }
      this.isTooltipShown = true;
      setTimeout(() => this.isTooltipShown = false, 3500);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar {
  width: var(--sidebar-width);
  height: 100vh;
  background: linear-gradient(155deg, #333 0%, #000 100%);
  color: var(--text-accent);
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  z-index: 10;
  transition: all var(--transition-speed) ease-in-out;
  -webkit-transition: all var(--transition-speed)  ease-in-out;
  -moz-transition: all var(--transition-speed)  ease-in-out;
  -o-transition: all var(--transition-speed)  ease-in-out;
}
.expanded {
  left: 0;
}
.hidden {
  left: calc(-1 * var(--sidebar-width));
}
.sidebar-nav {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: left;
  height: 100%;
}
.sidebar-item {
  color: #f0f0f0cc;
  width: auto;
  display: flex;
  height: 2rem;
  align-items: center;
  text-decoration: none;
  transition: var(--transition-speed);
  cursor: pointer;
  padding-left: 0.5rem;
  position: relative;
}
.sidebar-item:hover {
  filter: grayscale(0%) opacity(1);
  background: var(--bg-accent-hover);
}
.tooltip {
  position: absolute;
  top: -7px;
  background: #f44336;
  color: #f0f0f0;
  width: 9.5rem;
  border-radius: 5px;
  transition: var(--transition-speed);
  left: calc(5px + var(--sidebar-width));
  z-index: 0;
}
.tooltip::before {
  content: "";
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  /* border-right: 20px solid blue; */
  border-right: 20px solid #f44336;
  border-bottom: 10px solid transparent;
  position: absolute;
  z-index: -3;
  top: 12px;
  left: -15px;
}
.tooltip p {
  margin: .2em;
  z-index: 0;
}
.tooltipVisible {
  opacity: 1;
}
.tooltipHidden {
  opacity: 0;
}
.logo {
  padding: 0.5em;
  margin-top: 1em;
  align-self: center;
}
.logo-text {
  align-self: center;
  margin: 0 0 1.5rem 0;
}
.sidebar-nav hr {
  width: 90%;
  filter: opacity(0.7);
}
.list-icon {
  padding: 0.5em;
}

@media (min-width: 950px) {
  .hidden {
    left: 0;
  }
}
</style>
