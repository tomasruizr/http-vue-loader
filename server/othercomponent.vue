<template>
    <div class="hello">GoodBye {{who}}</div>
</template>

<script>
module.exports = {
    data: function() {
        return {
            who: 'MF'
        }
    }
}
</script>

<style scoped>
.hello {
    background-color: blue;
}
</style>