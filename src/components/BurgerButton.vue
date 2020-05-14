<template>
    <button v-on:click="toggleSidebar()" v-bind:class="{originalPos : ! isSidebarExpanded, shifted : isSidebarExpanded}">    
        <font-awesome-icon icon="bars" class="icon" v-bind:class="{active : ! isSidebarExpanded, inActive : isSidebarExpanded}"/>
        <font-awesome-icon icon="arrow-left" class="icon" v-bind:class="{active : isSidebarExpanded, inActive : ! isSidebarExpanded}"/>
    </button>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: "BurgerButton",
    computed: mapState({
        isSidebarExpanded: state => state.isSidebarExpanded
    }),
    methods: {
        ...mapActions({
            toggleSidebar: 'toggleSidebar'
        })
    }
}
</script>

<style scoped>
button {
    position: fixed;
    bottom: .5rem;
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
    transition: all var(--transition-speed) ease-in-out;
    -webkit-transition: all var(--transition-speed)  ease-in-out;
    -moz-transition: all var(--transition-speed)  ease-in-out;
    -o-transition: all var(--transition-speed)  ease-in-out;
}
.icon{
    position: absolute;
    top: 8px;
    left: 9px;
    transition: all var(--transition-speed) ease-in-out;
    -webkit-transition: all var(--transition-speed)  ease-in-out;
    -moz-transition: all var(--transition-speed)  ease-in-out;
    -o-transition: all var(--transition-speed)  ease-in-out;
}

.originalPos{
    left: .5rem;
}

.shifted {
    left: calc(var(--sidebar-width) + .5rem);
}

.active {
    transform: scale(1);
    opacity: 1;
}

.inActive {
    transform: scale(.5);
    opacity: 0;
}

@media (min-width: 950px) {
    button {
        display: none;
    }
}
</style>