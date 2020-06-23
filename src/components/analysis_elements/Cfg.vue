<template>
  <div class="cfgContent">
    <LoadingGif v-if="cfgStatus == 'loading'" />
    <div v-if="cfgStatus == 'idle'" class="image">
      <img id="placeholder" src="@/assets/cfg_example.svg" alt="Example cfg" />
      <div class="actions card">
        <button class="actionButton" @click="render">RENDER</button>
        <p>
          This may take a while.<br>
          In alternative <a href="#" @click="downloadDot">Download the ".dot" file</a>  and render it locally</p>
      </div>
    </div>
    <div v-if="cfgStatus == 'loaded'" class="svgContainer">
      <h3>CFG LOADED</h3>
    </div>
  </div>
</template>

<script>
import LoadingGif from "../LoadingGif.vue";
// import SvgPanZoom from "vue-svg-pan-zoom";
import { mapState, mapActions } from "vuex";

export default {
  name: "Cfg",
  components: {
    LoadingGif,
    //SvgPanZoom,
  },
  props: {
    contractName: String,
    contractID: Number,
    dotNotation: String
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      cfgStatus: 'currentCfgStatus'
    }),
  },
  methods: {
    ...mapActions({
      updateStatus: 'setCfgStatus',
      setSvg: 'setCfgSvg'
    }),
    downloadDot() {
      var blob = new Blob([this.dotNotation], {type: "text/plain"});
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = this.contractName + ".dot";
      a.textContent = "Download contract";
      document.body.appendChild(a);
      a.style.display = 'none';
      a.click();
      document.body.removeChild(a);
    },
    render() {
      this.updateStatus('loading');
      var params = {
        dot: this.dotNotation
      };
      this.axios.post('/render/', params, {headers:{}})
          .then(response => {
            var status = response.data.status;
            if (status == 1){
              console.log(response.data);
              this.setSvg(response.data.result);
            } else {
              alert("OPS: " + response.data.message);
            }
            this.updateStatus('loaded');
          })
          .catch(error => {
              console.log(error);
              this.updateStatus('idle');
          });
    }
  },
  mounted() {
  }
};
</script>

<style scoped>

.cfgContent {
  width: calc(100% - 1em);
  height: 80vh;
  margin: .5em;
  border: 2px solid #bbb;
}

.image {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
}

#placeholder {
  width: 90%;
  height: 90%;
  filter: blur(4px);
  margin: auto;
}

.actions {
  background: linear-gradient(153deg, rgb(255, 72, 0) 0%, rgb(255, 145, 0) 100%);
  width: 34%;
  height: 15%;
  padding: 1em;
  border-radius: 10px;
  position: absolute;
  top: calc(50% - (15% / 2));
  left: 33%;
  color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.actionButton {
  margin-top: 10px;
  text-align: center;
  align-self: center;
  font-size: 20px;
  font-weight: 900;
  padding: .8em 2em;
  border: none;
  font-weight: 900;
  text-decoration: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all var(--transition-speed) ease;
  outline: none;
}
.actions a, a:link, a:visited, a:active{
  color: #333;
}
.actions a:hover {
  color: #555;
}
.actions p{
  text-align: center;
}

.hidden {
  display: none;
}
.shown {
  display: inherit;
}
</style>