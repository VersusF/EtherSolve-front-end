<template>
  <nav
    class="sidebar"
    v-bind:class="{expanded: isExpanded, hidden : ! isExpanded}"
    v-on:click="toggleSidebar"
  >
    <img class="logo" src="@/assets/logo-mini.png" alt="Logo" width="80px" />
    <h2 class="logo-text">EtherSolve</h2>
    <ul class="sidebar-nav">
      <li class="sidebar-item" v-on:click="showCurrentAnalysis">
        <i>
          <font-awesome-icon icon="tachometer-alt" />
        </i>
        <p>Dashboard</p>
      </li>
      <hr />
      <li class="sidebar-item" v-on:click="newAnalysis">
        <i>
          <font-awesome-icon icon="plus" />
        </i>
        <p>New analysis</p>
      </li>
      <li class="sidebar-item">
        <i>
          <font-awesome-icon icon="file-import" />
        </i>
        <p>Import</p>
      </li>
      <hr />

      <!-- Active analysis list -->
      <template v-for="name in analysis" v-bind="analysis">
        <li class="sidebar-item" v-bind:key="name">
          <span class="analysisName" v-on:click="showAnalysis(name)">
            <i>
              <font-awesome-icon icon="file-alt" />
            </i>
            <p>{{name}}...</p>
          </span>
          <i class="close-button" v-on:click="closeAnalysis(name)">
            <font-awesome-icon icon="times" />
          </i>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    analysis: Array,
    isExpanded: Boolean
  },
  methods: {
    newAnalysis() {
      this.$parent.newAnalysis();
    },
    showCurrentAnalysis() {
      this.$parent.showCurrentAnalysis();
    },
    closeAnalysis(name) {
      this.$parent.closeAnalysis(name);
    },
    showAnalysis(name) {
      this.$parent.showAnalysis(name);
    },
    toggleSidebar() {
      this.$parent.toggleSidebar();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar {
  width: var(--sidebar-width);
  height: 100vh;
  background-color: var(--bg-accent);
  color: var(--text-accent);
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  z-index: 1;
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
  width: auto;
  display: flex;
  height: 2rem;
  align-items: center;
  text-decoration: none;
  filter: grayscale(100%) opacity(0.7);
  transition: var(--transition-speed);
  cursor: pointer;
  padding-left: 0.5rem;
}
.sidebar-item:hover {
  filter: grayscale(0%) opacity(1);
  background-color: var(--bg-accent-hover);
}
.logo {
  padding: 0.5em;
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
.sidebar-item i {
  padding: 0.5em;
}
.analysisName {
  display: flex;
  align-items: center;
  width: 100%;
}
.close-button {
  margin-left: auto;
  margin-right: 8%;
}
.sidebar-toggle {
  align-self: center;
  font-size: 4em;
  margin-bottom: 0.2em;
}
.sidebar-toggle:hover {
  background-color: var(--bg-accent);
  font-size: 4.5em;
}
#sidebar-checkbox {
  display: none;
}
#sidebar-checkbox:checked + .sidebar {
  background-color: red;
}

@media (min-width: 950px) {
  .hidden {
    left: 0;
  }
}
</style>
