<template>
    <div class="content">
        <h1>Analysis</h1>
        <h2>{{ currentAnalysisReport.name }}</h2>
        <p>{{ currentAnalysisReport.description }}</p>
        <p>{{ content }}</p>
    </div>
</template>

<script>
export default {
    name: 'Analysis',
    props: {
        currentAnalysisReport: Object 
    },
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