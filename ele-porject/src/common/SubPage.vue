<template>
        <div class="subpage" :id="pageId">
        <slot></slot>
        </div>
</template>

<script>
export default {
    name:'page',
    props:{
        pageId:String
    }
  
}
</script>

<style>
.page{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 5;
}
</style>
