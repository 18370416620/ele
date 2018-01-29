<template>
    <header class="header">
        <div class="address-warpper">
            <div class="address"><i class="iconfont">&#xe698;</i>福中路深圳市..<i class="iconfont">&#xe6b5;</i></div>
        </div>
        <search-bar></search-bar>
    </header>
</template>
<script>
import Search from './Search'
export default {
    name:'home-header',
    components:{
        [Search.name]:Search
    }
}
</script>

<style scoped>
.header{
     width: 100%;
     height: 0.45rem;
     background: #00a1ff;
     margin-bottom:0.7rem; 
 }
.address-warpper{
    display: flex;
    background: #00a1ff;
    justify-content: space-around;
    padding-top:0.1rem; 

}
.address-warpper .address{
    font-size: 0.16rem;
    font-weight: 900;
    line-height: 0.36rem;
    width: 3.32rem;
    color: #fff;
}
.address i:nth-child(1){
    font-size: 0.15rem;
    padding-right:0.03rem; 
}
.address i:nth-child(2){
    position: relative;
    top: -0.04rem;
    font-size: 0.08rem;
    padding-left:0.2rem; 
}


</style>
