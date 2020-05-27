<template>
    <div class="content card">
        <h1>
            <i class="icon">
                <font-awesome-icon icon="exclamation-triangle" />
            </i>
            Error
        </h1>
        <h3>{{message}}</h3>
    </div>
</template>

<script>
export default {
    name: "ErrorMessage",
    props: {
        message: String
    }
}
</script>

<style scoped>
.content{
    width: 75%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: .5em;
    padding: 1em;
    border-radius: 5px;
    color: #fff;
    position: relative;
    background-color: #f44336;
}
h1, h3 {
    margin: .5em;
    text-align: center;
}
.icon {
    opacity: .7;
    margin-right: 10px;
}
</style>