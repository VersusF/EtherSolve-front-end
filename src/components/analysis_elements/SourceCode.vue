<template>
    <div class="content">
        <button v-on:click="toggle">
            Source code
            <font-awesome-icon v-on:click="clipCopy($event)" icon="copy" class="icon secondIcon"/>
            <font-awesome-icon v-if="showLog == false" icon="plus" class="icon firstIcon"/>
            <font-awesome-icon v-if="showLog == true" icon="minus" class="icon firstIcon"/>
        </button>
        <div class="collapsible" v-bind:class="{active: showLog == true, hidden: showLog == false}">
            <div class="collapsibleContent">{{sourceCode}}</div>
        </div>
        <div class="alertBox card" v-bind:class="{alertActive: showAlert == true, alertHidden: showAlert == false}">
            <p>Source code copied to clipboard</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SourceCode',
    props: {
        sourceCode: String,
    },
    data(){
        return {
            showLog: false,
            showAlert: false
        }
    },
    methods: {
        toggle() {
            this.showLog = ! this.showLog;
        },
        clipCopy(event){
            event.stopPropagation();
            // Copy to clipboard
            var dummy = document.createElement("textarea");
            document.body.appendChild(dummy);
            dummy.value = this.sourceCode;
            dummy.select();
            document.execCommand("copy");
            document.body.removeChild(dummy);
            // Show alert
            this.showAlert = true;
            setTimeout(() => this.showAlert = false, 3000);
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
    opacity: .5;
    font-size: .8em;
}
.firstIcon {
    right: 4%;
}
.secondIcon {
    right: 10%;
}
.collapsible {
    border: 1px solid #ccc;
    background: #ddd;
    transition: all .5s ease-in-out;
    transform-origin: top center;
}
.active {
    height: 10rem;
}
.hidden {
    /* height: 0; */
    overflow: hidden;
    transform: scaley(0);
}
.collapsibleContent {
    padding: .5rem;
    height: 9rem;
    white-space: pre-wrap;
    word-break: break-all;
    overflow-y: scroll;
}
.alertBox {
    position: fixed;
    width: fit-content;
    bottom: 20px;
    left: 50vw;
    right: 50vw;
    transform: translateX(-50%);
    transition: all 1s ease-in-out;
    background-color: #2196F3;
    color: #fff;
    font-weight: bold;
    margin: 10px;
    padding: 1%;
    border-radius: 10px;
}
.alertBox p {
    opacity: .7;
    padding: 0;
    margin: 0;
}
.alertActive{
    bottom: 3%;
}
.alertHidden{
    bottom: -10%;
}
</style>