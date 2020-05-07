<template>
    <div class="content">
        <h1>Analysis</h1>
        <p>{{ content }}</p>
    </div>
</template>

<script>
export default {
    name: 'Analysis',
    data () {
        return {
            content: 'Loading...'
        }
    },
    mounted () {
        this.axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => this.content = response)
            .catch(error => {
                this.content = 'Error'; 
                console.log(error);
            });
    }
}
</script>

<style scoped>

</style>