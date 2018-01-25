<template>
    <span class="icon" :style="{background: '#'+color}">{{name}}</span> 
</template>
<script>
export default {
        name:'charter-icon',
        props:{
            name:String,
            color:String
        }
}
</script>
<style scoped>
.icon{
    color: #fff;
    border-radius: 0.03rem;
    font-size: 0.13rem;
    line-height: 0.21rem;
    padding: 0.01rem 0.01rem 0 0.01rem;
} 
</style>
