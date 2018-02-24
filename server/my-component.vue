<template>
    <div>
    	<div class="hello">Hello {{who}}</div>
    	<othercomponent></othercomponent>
    </div>
</template>

<script>

module.exports = {
		// components: {othercomponent},
		// components: ['OtherComponent': httpVueLoader('OtherComponent.vue')},
    data: function() {
        return {
            who: 'world'
        }
    }
}
</script>

<style scoped>
.hello {
    background-color: green;
}
</style>