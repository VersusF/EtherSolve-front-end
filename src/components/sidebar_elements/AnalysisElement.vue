<template>
  <li class="sidebar-item">
    <span class="analysisName" @click="showAnalysis()">
      <i class="list-icon">
        <font-awesome-icon icon="file-alt" />
      </i>
      <span v-if="isBeingRenamed == true">
        <input
          ref="inputText"
          class="renameLabel"
          type="text"
          @click="stopPropagation($event)"
          @keyup.enter="renamed()"
          @blur="renamed()"
          @focus="$event.target.select()"
          v-model="newName"
        />
      </span>
      <p v-else>{{name}}</p>
    </span>
    <i v-if="isBeingRenamed == false" class="analysisAction" v-on:click="rename()">
      <font-awesome-icon icon="edit" />
    </i>
    <i class="analysisAction" v-on:click="closeAnalysis()">
      <font-awesome-icon icon="times" />
    </i>
  </li>
</template>

<script>
export default {
  name: "AnalysisElement",
  props: {
    name: String,
    id: Number
  },
  data() {
    return {
      isBeingRenamed: false,
      newName: this.name
    };
  },
  methods: {
    showAnalysis() {
      this.$parent.showAnalysis(this.id);
    },
    rename() {
      this.isBeingRenamed = true;
      this.$nextTick( () =>
        this.$refs.inputText.focus()
      );
    },
    closeAnalysis() {
      this.$parent.closeAnalysis(this.id);
    },
    stopPropagation(event) {
      event.stopPropagation();
    },
    renamed() {
      this.isBeingRenamed = false;
      this.$parent.rename(this.id, this.newName);
    }
  }
};
</script>

<style scoped>
.analysisName {
  display: flex;
  align-items: center;
  width: 100%;
}
.analysisName p {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: calc(0.6 * var(--sidebar-width)); /*7.5rem;*/
}
.list-icon {
  padding: 0.5em;
}
.analysisAction {
  padding: 0.5rem;
  margin: 0;
}
.renameLabel {
  width: 100%;
}
</style>