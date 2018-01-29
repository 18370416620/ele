<template>
    <div class="search-warpper" :class="{active: isActive}">
        <div class="search-box"><i class="iconfont">&#xe697;</i>搜索商家,商品名称</div>
    </div>
</template>

<script>
export default {
    name:'search-bar',
    props: {
        isActive: Boolean
    }
}
</script>

<style scoped>
.search-warpper{
    margin-top:-0.03rem;
    padding-top: 0.2rem; 
    display: flex;
    justify-content: space-around;
     width: 100%;
     height: 0.5rem;
     background: #00a1ff;
     text-align: center
 }
.search-warpper .search-box{
    
    width: 3.32rem;
    height: 0.33rem;
    background: #fff;
    color: #666;
    font-size: 0.13rem;
    border: 0;
    border-radius: 0.01rem;
    line-height: 0.33rem;
}
.search-box:first-child i{
    font-size: 0.13rem;
    padding-right:0.03rem; 
}
.active{
     position: absolute;
     left: 0;
     top:0;
     z-index: 5;
 }
</style>
