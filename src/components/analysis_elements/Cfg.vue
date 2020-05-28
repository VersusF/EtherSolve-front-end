<template>
  <div class="content">
    <LoadingGif v-if="isCfgLoaded == false" />
    <!-- <SvgPanZoom
      v-else
      class="svgPanZoom"
      :zoomEnabled="true"
      :controlIconsEnabled="true"
      :fit="false"
      :center="true"
    >
      <svg width="auto" height="auto" xmlns="http://www.w3.org/2000/svg">
        <rect id="svg_1" height="190" width="280" y="105" x="150" stroke-width="1.5" stroke="#000" fill="#A0D58A"/>
      </svg>
    </SvgPanZoom>-->
    <network class="network" :nodes="[]" :edges="[]" :options="options" />
    <!-- <network class="network" :nodes="nodes" :edges="edges" :options="options" /> -->
  </div>
</template>

<script>
import LoadingGif from "../LoadingGif.vue";
// import SvgPanZoom from "vue-svg-pan-zoom";
import { Network } from "vue2vis";

export default {
  name: "Cfg",
  components: {
    LoadingGif,
    // SvgPanZoom,
    Network
  },
  props: {
    cfg: Object
  },
  data() {
    return {
      isCfgLoaded: false,
      nodes: [],
      edges: [],
      options: {
        autoResize: false,
        physics: {
          enabled: false
        },
        interaction: {
          //dragNodes: false,
          selectable: false
        },
        layout: {
          hierarchical: {
            enabled: true,
            direction: 'UD',
            sortMethod: 'directed'
          }
        },
        nodes: {
          shape: 'box'
        },
        edges: {
          arrows: {
            to: {
              enabled: true
            }
          }
        }
      }
      //svgElement: null
    };
  },
  mounted() {
    this.cfg.nodes.forEach(node => {
      this.nodes.push({
        id: node.offset,
        label: 'Block ' + node.offset
      });
      //var edgeCounter = this.nodes.length + 10;
      this.cfg.successors.forEach(edge => {
        edge.to.forEach(to => {
          this.edges.push({
            //id: edgeCounter++,
            from: edge.from,
            to: to
          });
        });
      });
    });
    this.isCfgLoaded = true;
  }
};
</script>

<style scoped>
@import "../../../node_modules/vue2vis/dist/vue2vis.css";

.content {
  width: 100%;
  height: 80vh;
}
.svgPanZoom {
  width: 100%;
  height: 100%;
  clip-path: rect(0% 0%, 100% 0, 0% 100%, 100% 100%);
}

.network {
  height: 98%;
  width: 98%;
  border: 1px solid #ccc;
  margin: 1%;
}
</style>