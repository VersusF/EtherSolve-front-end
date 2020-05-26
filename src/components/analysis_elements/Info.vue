<template>
    <div class="content">
        <ul>
            <li v-if="buildReport.criticalErrors != 0">
                <MessageCard type="error" :count="buildReport.criticalErrors" message="Critical errors" />
            </li>
            <li v-if="buildReport.blockLimitErrors != 0">
                <MessageCard type="error" :count="buildReport.criticalErrors" message="Block limit errors" />
            </li>
            <li v-if="buildReport.orphanJumpTargetUnknownErrors != 0">
                <MessageCard type="error" :count="buildReport.orphanJumpTargetUnknownErrors" message="Orphan jump target unknown errors" />
            </li>
            <li v-if="buildReport.directJumpTargetErrors != 0">
                <MessageCard type="warning" :count="buildReport.directJumpTargetErrors" message="Direct jump target errors" />
            </li>
            <li v-if="buildReport.orphanJumpTargetNullErrors != 0">
                <MessageCard type="warning" :count="buildReport.orphanJumpTargetNullErrors" message="Orphan jump target null errors" />
            </li>
            <li v-if="buildReport.loopDepthExceededErrors != 0">
                <MessageCard type="warning" :count="buildReport.loopDepthExceededErrors" message="Loop depth exceeded errors" />
            </li>
            <li v-if="buildReport.multipleRootNodesErrors != 0">
                <MessageCard type="warning" :count="buildReport.multipleRootNodesErrors" message="Multiple root nodes errors" />
            </li>
            <li v-if="buildReport.stackExceededErrors != 0">
                <MessageCard type="warning" :count="buildReport.stackExceededErrors" message="Stack exceeded errors" />
            </li>
            <li v-if="errorsCount == 0">
                <MessageCard type="success" message="No errors occurred" />
            </li>
            <li class="otherInfo card">
                <p class="title">Contract info</p>
                <ul>
                    <li>
                        <i><font-awesome-icon icon="code-branch" /></i>
                        <strong>Solidity Version:</strong>
                        {{report.solidityVersion}}
                    </li>
                    <li>
                        <i><font-awesome-icon icon="stopwatch" /></i>
                        <strong>Build time:</strong>
                        {{buildReport.buildTimeMillis}} ms
                    </li>
                    <li>
                        <i><font-awesome-icon icon="hashtag" /></i>
                        <strong>Source code hash:</strong>
                        {{report.binaryHash}}
                    </li>
                    <li>
                        <i><font-awesome-icon icon="check-square" /></i>
                        <strong>Runtime code only:</strong>
                        {{report.isOnlyRuntime}}
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import MessageCard from './MessageCard.vue'

export default {
    name: 'Info',
    props: {
        report: Object
    },
    computed: {
        buildReport() {
            return this.report.runtimeCfg.buildReport
        },
        errorsCount() {
            return this.buildReport.directJumpTargetErrors +
                   this.buildReport.orphanJumpTargetNullErrors + 
                   this.buildReport.orphanJumpTargetUnknownErrors + 
                   this.buildReport.loopDepthExceededErrors + 
                   this.buildReport.multipleRootNodesErrors + 
                   this.buildReport.stackExceededErrors + 
                   this.buildReport.criticalErrors;
        }
    },
    components: {
        MessageCard
    }
}
</script>

<style scoped>
.content{
    width: auto;
}
ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
li {
    padding: 0;
    margin: 0;
}
.title {
    margin: .3em 0 .5em 0;
    text-align: center;
    width: 100%;
    font-size: 1.5em;
    font-weight: bold;
    opacity: .5;
}
.otherInfo{
    background-color: #2196F3;
    color: #fff;
    border-radius: 5px;
    margin: .5em;
    padding: .5em;
}
.otherInfo li{
    opacity: .7;
    margin: 8px 0;
}
.otherInfo i {
    margin: 2px 5px;
}
</style>