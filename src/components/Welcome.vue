<template>
  <div class="content">
    <div class="top">
      <img src="@/assets/logo-medium.png" alt="logo" />
      <h1>Welcome to EtherSolve</h1>
    </div>
    <div class="inputs card">
      <h3>Provide an address</h3>
      <input type="text" placeholder="0x..." />
      <h3>Or provide the bytecode</h3>
      <input type="text-area" placeholder="6080..." />
      <h5>What type of bytecode is it?</h5>
      <ul>
        <li>
          <input type="radio" name="bytecode-type" id="creation" />
          <label for="creation">Creation code</label>
        </li>
        <li>
          <input type="radio" name="bytecode-type" id="runtime" />
          <label for="creation">Runtime code</label>
        </li>
      </ul>
      <button class="submit">EtherSolve IT!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
}
.top {
  align-self: center;
  text-align: center;
  margin: 2rem;
}
.inputs {
  margin: 1rem;
  padding: 1rem;
}
.inputs input[type="text"] {
  width: 50rem;
}
.inputs input[type="text-area"] {
  width: 50rem;
  height: 10rem;
}
.inputs ul {
  list-style: none;
  padding-left: 1em;
}
.submit {
  text-align: center;
}
</style>
