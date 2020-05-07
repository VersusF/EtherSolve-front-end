<template>
  <div class="content">
    <div class="top">
      <img src="@/assets/logo-medium.png" alt="logo" />
      <h1>Welcome to EtherSolve</h1>
    </div>
    <div class="inputs card">
      <h3>Provide an address</h3>
      <span class="row-input">
        <input type="text" v-model="address" placeholder="0x..."/>
        <i class="trash" v-on:click="clear_address">
          <font-awesome-icon icon="trash" />
        </i>
      </span>
      <h3>Or provide the bytecode</h3>
      <span class="row-input">
        <textarea v-model="bytecode" placeholder="6080..." rows="10"/>
        <i class="trash" v-on:click="clear_bytecode">
          <font-awesome-icon icon="trash" />
        </i>
      </span>
      <span class="row-input-grid">
        <span>
          <h5>What type of bytecode is it?</h5>
          <ul>
            <li>
              <label for="creation">
                <input type="radio" v-model="bytecodeType" name="bytecode-type" id="creation" value="creation" />
                Creation code
              </label>
            </li>
            <li>
              <label for="runtime">
                <input type="radio" v-model="bytecodeType" name="bytecode-type" id="runtime" value="runtime" />
                Runtime code
              </label>
            </li>
          </ul>
        </span>
        <p v-if="errorMessage != ''" v-on:click="errorMessage = ''" class="error-message card">
          <font-awesome-icon icon="exclamation-circle" />
          {{errorMessage}}
        </p>
      </span>
      <button class="submit card" v-on:click="submit">EtherSolve it!</button>
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
      errorMessage: ''
    }
  },
  methods: {
    submit: function() {
      this.errorMessage = '';
      if (this.areValidInputs()){
        if (this.address == '')
          sendBytcodeRequest(this.bytecode, this.bytecodeType);
        else
          sendAddressRequest(this.address);
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
      if (isEmpty)
        this.errorMessage = "Empty inputs";
      else if (! addressOk)
        this.errorMessage = "Invalid address";
      else if (! bytecodeOk)
        this.errorMessage = "Invalid bytecode";
      return addressOk && bytecodeOk && ! isEmpty;
    }
  }
};

function sendBytcodeRequest(bytecode, bytecodeType){
  console.log(bytecode, bytecodeType);
}

function sendAddressRequest(address){
  console.log(address);
}

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
  margin: 2rem;
}
.inputs {
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: left;
}
.inputs input[type="text"] {
  width: 50vw;
  max-width: 50rem;
}
.inputs textarea {
  width: 50vw;
  max-width: 50rem;
  resize: none;
  font-family: "Monaco", monospace, sans-serif;
}
.row-input {
  display: flex;
  align-content: center;
}
.trash {
  color: #444444;
  padding: 2px;
  cursor: pointer;
}
.row-input-grid {
  display: grid;
  grid-template-columns: 50% 50%;
}
.inputs h5 {
  margin-top: 1em;
  margin-bottom: 0.5em;
}
.inputs ul {
  list-style: none;
  padding-left: 1em;
  margin-top: 0;
  margin-bottom: 0.5em;
}
.submit {
  text-align: center;
  align-self: center;
  font-size: 20px;
  padding: 1em 1em;
  border: none;
  background: #ebbd40;
  text-decoration: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all var(--transition-speed) ease;
}
button.submit:hover {
  background-color: #ff8828;
}
.error-message {
  background-color: #ff2b2b;
  border-radius: 12px;
  color: var(--text-accent);
  padding: 1rem;
  margin: auto;
  cursor: pointer;
}
</style>
