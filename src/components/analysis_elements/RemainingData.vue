<template>
    <div class="content">
        <h2>Remaining data</h2>
        <h4>Hex format:</h4>
        <p>{{remainingData}}</p>
        <h4>String format:</h4>
        <p>{{decodedData}}</p>
    </div>
</template>

<script>
export default {
    name: 'SourceCode',
    props: {
        remainingData: String
    },
    computed: {
        decodedData() {
            var hex  = this.remainingData;
            var str = '';
            for (var n = 0; n < hex.length; n += 2) {
                str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
            }
            return str;
        }
    }
}
</script>

<style scoped>
.content{
    width: auto;
    background: #ccc;
    margin: .5rem;
}
h2 {
    font-size: 1.5em;
    font-weight: bold;
    padding: .5rem;
    margin: 0;
}
h4 {
    margin: .5rem;
    padding: 0;
}
p {
    font-family: "B612 Mono", monospace, sans-serif;
    margin: .5rem;
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: break-all;
}
</style>