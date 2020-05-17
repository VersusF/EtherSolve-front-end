<template>
    <div class="card content" :class="type">
        <i class="icon">
            <font-awesome-icon v-if="type == 'error'" icon="times-circle" />
            <font-awesome-icon v-if="type == 'warning'" icon="exclamation-circle" />
            <font-awesome-icon v-if="type == 'success'" icon="check-circle" />
        </i>
        <span class="number">{{count}}</span>
        <span class="message">{{message}}</span>
    </div>
</template>

<script>
export default {
    name: 'MessageCard',
    props: {
        type: String,
        count: Number,
        message: String
    },
    methods: {
    }
}
</script>

<style scoped>
.content{
    width: 100%;
    margin: .5em;
    border-radius: 5px;
    color: #fff;
    position: relative;
}
.icon {
    font-size: 4em;
    opacity: .2;
    padding-left: 4%;
}
.number {
    display: block;
    position: absolute;
    top: 0;
    right: 10%;
    font-size: 2em;
}
.message {
    display: block;
    opacity: .7;
    position: absolute;
    bottom: 5px;
    right: 10%;
    text-align: right;
    max-width: 60%;
}
.error {
    background-color: #f44336;
}
.warning {
    background-color: #ff9800;
}
.success {
    background-color: #4CAF50;
}
</style>