<template>
    <div>
    <p>Garchig: {{ title }}</p>
    <button @click="changeTitle">Garchig uurchluh</button>
</div>
</template>

<script>
export default {
    data: function(){
        return{
            title: 'Garchig 1'
        }
    },
    methods:{
        changeTitle(){
            this.title = 'Garchig 2'
        }
    }
}
</script>

<style>
</style>