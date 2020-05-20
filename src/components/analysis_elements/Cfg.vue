<template>
  <div class="content">
    <LoadingGif v-if="isCfgLoaded == false" />
    <SvgPanZoom
      v-else
      class="svgPanZoom"
      :zoomEnabled="true"
      :controlIconsEnabled="true"
      :fit="false"
      :center="true"
    >
      <!-- v-html="svgElement" -->
      <svg width="auto" height="auto" xmlns="http://www.w3.org/2000/svg">
        <rect id="svg_1" height="190" width="280" y="105" x="150" stroke-width="1.5" stroke="#000" fill="#A0D58A"/>
      </svg>
    </SvgPanZoom>
  </div>
</template>

<script>
import LoadingGif from "../LoadingGif.vue";
import SvgPanZoom from "vue-svg-pan-zoom";

export default {
  name: "Cfg",
  components: {
    LoadingGif,
    SvgPanZoom
  },
  props: {
    hash: String
  },
  data() {
    return {
      isCfgLoaded: false,
      svgElement: null
    };
  },
  mounted() {
    setTimeout(() => {
      this.svgElement =
        '<svg width="" height="" xmlns="http://www.w3.org/2000/svg"><rect id="svg_1" height="190" width="280" y="105" x="150" stroke-width="1.5" stroke="#000" fill="#A0D58A"/></svg>';
      this.isCfgLoaded = true;
    }, 1000);
  }
};
</script>

<style scoped>
.content {
  width: 100%;
  height: 80vh;
}
.svgPanZoom {
  width: 100%;
  height: 100%;
  clip-path: rect(0% 0%, 100% 0, 0% 100%, 100% 100%);
}
</style>