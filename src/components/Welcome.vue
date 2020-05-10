<template>
  <div class="content">
    <div class="top">
      <!-- <img src="@/assets/logo-medium.png" alt="logo" width="200px"> -->
      <h1>Welcome to EtherSolve</h1>
    </div>
    <div class="inputs card">
      <h3>Provide an address</h3>
      <span class="row-input">
        <input type="text"  v-on:click="clearError" v-on:keydown.enter="submit" v-model="address" placeholder="0x..."/>
        <i class="trash" v-on:click="clear_address">
          <font-awesome-icon icon="trash" />
        </i>
      </span>
      <h3>Or provide the bytecode</h3>
      <span class="row-input">
        <textarea  v-on:click="clearError" v-on:keydown.enter="submit" v-model="bytecode" placeholder="6080..." rows="10"/>
        <i class="trash" v-on:click="clear_bytecode">
          <font-awesome-icon icon="trash" />
        </i>
      </span>
      <h3>What type of bytecode is it?</h3>
      <ul>
        <li>
          <label class="radio-elem" for="creation">
            <input type="radio" v-model="bytecodeType" name="bytecode-type" id="creation" value="creation" />
            <span class="design"></span>
            Creation code
          </label>
        </li>
        <li>
          <label class="radio-elem" for="runtime">
            <input type="radio" v-model="bytecodeType" name="bytecode-type" id="runtime" value="runtime" />
            <span class="design"></span>
            Runtime code
          </label>
        </li>
      </ul>
      <p v-bind:class="{hidden : ! isError}" v-on:click="clearError" class="error-message card">
        <font-awesome-icon icon="exclamation-circle" />
        {{errorMessage}}
      </p>
      <button class="submit card" v-on:click="submit">SOLVE</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      address: "",
      bytecode: '',
      bytecodeType: 'creation',
      errorMessage: '',
      isError: false
    }
  },
  methods: {
    submit: function() {
      this.errorMessage = '';
      this.isError = false;
      if (this.areValidInputs()){
        if (this.address == '')
          this.$parent.showAnalysisFromBytecode(this.bytecode, this.bytecodeType);
        else
          this.$parent.showAnalysisFromAddress(this.address);
      }
    },
    clear_address: function () {
      this.address = '';
    },
    clear_bytecode: function () {
      this.bytecode = '';
    },
    areValidInputs: function () {
      var addressOk =  this.address.match(/^(0x[a-fA-F0-9]{40}){0,1}$/g)
      var bytecodeOk = this.bytecode.match(/^[a-fA-F0-9]*$/g)
      var isEmpty = this.address == this.bytecode && this.address == '';
      if (isEmpty){
        this.errorMessage = "Empty inputs";
        this.isError = true;
      }
      else if (! addressOk) {
        this.errorMessage = "Invalid address";
        this.isError = true;
      }
      else if (! bytecodeOk) {
        this.errorMessage = "Invalid bytecode";
        this.isError = true;
      }
      return addressOk && bytecodeOk && ! isEmpty;
    },
    clearError: function () {
      this.isError = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only --> 
<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.top {
  align-self: center;
  text-align: center;
  margin: 1rem;
}
.top h1 {
  font-size: 30pt;
}
.inputs {
  width: 70vw;
  max-width: 52rem;
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background: linear-gradient(153deg, rgb(255, 72, 0) 0%, rgb(255, 145, 0) 100%);
  color: #fff;
  border-radius: 12px;
  position: relative;
}
.inputs input[type="text"] {
  width: 100%;
  max-width: 50rem;
  background-color: var(--text-accent);
  border: none;
  border-radius: 12px;
  padding: 1em;
}
.inputs textarea {
  width: 100%;
  max-width: 50rem;
  resize: none;
  font-family: "Monaco", monospace, sans-serif;
  background-color: var(--text-accent);
  border: none;
  border-radius: 12px;
  padding: 1em;
}
.row-input {
  display: flex;
  align-content: center;
}
.trash {
  color: #bbb;
  padding: 2px;
  cursor: pointer;
  height: 1.5rem;
}
.row-input-grid {
  display: grid;
  grid-template-columns: 50% 50%;
}
.inputs h3 {
  margin-top: 1em;
  margin-bottom: 0.5em;
}
.inputs ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.submit {
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
.error-message {
  color: #ff2b2b;
  background-color: var(--text-accent);
  border-radius: 12px;
  padding: 1rem;
  cursor: pointer;
  transition: ease-in-out .3s;

  position: absolute;
  bottom: 13%;
  left: 55%;
  overflow: hidden;
  white-space: nowrap;
}
.hidden {
  opacity: 0;
}
.inputs input[type="radio"] {
  opacity: 0;
  margin: 0;
}
.radio-elem {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;

  margin: 12px 0;

  cursor: pointer;
  position: relative;
}
.design {
  width: 16px;
  height: 16px;

  border: 1px solid var(--text-accent);
  border-radius: 100%;
  margin-right: 2%;

  position: relative;
}
.design::before,
.design::after {
  content: "";
  display: block;

  width: inherit;
  height: inherit;

  border-radius: inherit;

  position: absolute;
  transform: scale(0);
  transform-origin: center center;
}

.design:before {
  background: var(--text-accent);
  opacity: 0;
  transition: .3s;
}
input:checked+.design::before {
  opacity: 1;
  transform: scale(.6);
}

@media (min-width: 950px) {
  .error-message {
    left: 60%;
    bottom: 15%;
  }
}

</style>
