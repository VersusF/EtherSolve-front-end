<template>
    <div class="content">
        <ul>
            <li>
                <MessageCard type="error" :count="3" message="Errors" />
            </li>
            <li>
                <MessageCard type="warning" :count="5" message="Warning" />
            </li>
            <li>
                <MessageCard type="success" message="No errors occurred" />
            </li>
        </ul>
    </div>
</template>

<script>
import MessageCard from './MessageCard.vue'

export default {
    name: 'Info',
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
</style>