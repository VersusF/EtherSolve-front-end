<template>
    <button v-on:click="toggleSidebar()">    
        <font-awesome-icon icon="bars"/>
    </button>
</template>

<script>
export default {
    name: "BurgerButton",
    methods: {
        toggleSidebar() {
            this.$parent.toggleSidebar();
        }
    }
}
</script>

<style scoped>
button {
    position: fixed;
    top: .5rem;
    right: .5rem;
    font-size: 20px;
    color: black;
    background: white;
    width: 35px;
    height: 35px;
    text-align: center;
    align-self: center;
    font-weight: 900;
    border: none;
    font-weight: 900;
    text-decoration: none;
    border-radius: 50%;
    cursor: pointer;
    z-index: 100;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,.5);
    outline: none;
}

@media (min-width: 950px) {
    button {
        display: none;
    }
}
</style>