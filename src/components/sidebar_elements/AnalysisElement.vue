<template>
  <li class="sidebar-item">
    <span class="analysisName" @click="showMyAnalysis()">
      <i class="list-icon">
        <font-awesome-icon icon="file-alt" />
      </i>
      <span v-if="isBeingRenamed == true">
        <input
          ref="inputText"
          class="renameLabel"
          type="text"
          @click="stopPropagation($event)"
          @keyup.enter="$event.target.blur()"
          @blur="renamed()"
          @focus="$event.target.select()"
          v-model="newName"
        />
      </span>
      <p v-else>{{name(id)}}</p>
    </span>
    <i v-if="isBeingRenamed == false" class="analysisAction" v-on:click="rename()">
      <font-awesome-icon icon="edit" />
    </i>
    <i class="analysisAction" v-on:click="closeMyAnalysis()">
      <font-awesome-icon icon="times" />
    </i>
  </li>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'; 

export default {
  name: "AnalysisElement",
  props: {
    id: Number
  },
  computed: {
    ...mapGetters({
      name: 'getAnalysisName'
    })
  },
  data() {
    return {
      isBeingRenamed: false,
      newName: ''
    };
  },
  methods: {
    ...mapActions({
      setCurrentAnalysis: 'setCurrentAnalysis',
      closeAnalysis: 'closeAnalysis',
      renameInStore: 'rename'
    }),
    showMyAnalysis() {
      this.setCurrentAnalysis(this.id);
    },
    closeMyAnalysis(){
      this.closeAnalysis(this.id);
    },
    rename() {
      this.newName= this.name(this.id)
      this.isBeingRenamed = true;
      this.$nextTick( () =>
        this.$refs.inputText.focus()
      );
    },
    stopPropagation(event) {
      event.stopPropagation();
    },
    renamed() {
      this.isBeingRenamed = false;
      this.renameInStore({id: this.id, newName: this.newName});
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