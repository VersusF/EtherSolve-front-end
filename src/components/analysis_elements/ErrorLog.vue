<template>
    <div class="content">
        <button v-on:click="toggle">
            Errors log
            <font-awesome-icon v-if="showLog == false" icon="plus" class="icon"/>
            <font-awesome-icon v-if="showLog == true" icon="minus" class="icon"/>
        </button>
        <div class="collapsible" v-bind:class="{active: showLog == true, hidden: showLog == false}">
            <div class="collapsibleContent">{{outputLog}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ErrorLog',
    props: {
        log: String
    },
    data(){
        return {
            showLog: false
        }
    },
    computed: {
        outputLog(){
            if (this.log == ''){
                return 'Nothing to show';
            }
            else{
                return this.log;
            }
        }
    },
    methods: {
        toggle() {
            this.showLog = ! this.showLog;
        }
    }
}
</script>

<style scoped>
.content{
    width: auto;
    position: relative;
    margin: .5rem;
}
button {
    width: 100%;
    font-size: 1.5em;
    font-weight: bold;
    border: none;
    text-align: left;
    padding: .5rem;
    display: flex;
    align-items: center;
    outline: none;
    background: #ccc;
    cursor: pointer;
}
button:hover {
    background: #bbb;
}
.icon {
    position: absolute;
    right: 4%;
    opacity: .5;
    font-size: .8em;
}
.collapsible {
    border: 1px solid #ccc;
    background: #ddd;
    transition: all .3s ease-in-out;
    transform-origin: top center;
}
.active {
    height: 10rem;
}
.hidden {
    height: 0;
    overflow: hidden;
    transform: scaley(0);
}
.collapsibleContent {
    padding: .5rem;
    height: 9rem;
    display: block;
    white-space: pre-wrap;
    overflow-y: scroll;
    color: #f44336;
}
</style>