<template>
  <nav class="sidebar">
    <img class="logo" src="@/assets/logo-mini.png" alt="Logo">
    <h2 class="logo-text">EtherSolve</h2>
    <ul class="sidebar-nav">
      <li class="sidebar-item">
        <i><font-awesome-icon icon="tachometer-alt"/></i>
        Dashboard
      </li>
      <hr>
      <li class="sidebar-item">
        <i><font-awesome-icon icon="plus"/></i>
        New analysis
      </li>
      <li class="sidebar-item">
        <i><font-awesome-icon icon="file-import"/></i>
        Import
      </li>
      <hr>


      <li class="sidebar-item sidebar-toggle" style="display: none">
        <label>
          <input type="checkbox" id="sidebar-checkbox" v-model="expanded">
          <font-awesome-icon icon="angle-right" v-on:click="toggle"/>
        </label>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      expanded: true
    }
  },
  methods: {
    toggle: function (){
      console.log("Toggle");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar{
  width: var(--sidebar-width);
  height: 100vh;
  background-color: var(--bg-accent);
  color: var(--text-accent);
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  float: left;
  z-index: 1;
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
}
.sidebar-item:last-child {
  margin-top: auto;
}
.sidebar-item:hover {
  filter: grayscale(0%) opacity(1);
  background-color: var(--bg-accent-hover);
}
.logo {
  padding: .5em;
  align-self: center;
}
.logo-text {
  align-self: center;
}
.sidebar-nav hr {
  width: 90%;
  filter: opacity(.7);
}
.sidebar-item i {
  padding: .5em;
}
.sidebar-toggle {
  align-self: center;
  font-size: 4em;
  margin-bottom: .2em;
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
</style>
