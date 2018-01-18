<template>
    <header>
        <div class="dz-warpper">
            <div class="dz"><i class="iconfont">&#xe698;</i>福中路深圳市..<i class="iconfont">&#xe6b5;</i></div>
        </div>
        <div class="seach-warpper">
            <div class="seach-box"><i class="iconfont">&#xe697;</i>搜索商家,商品名称</div>
        </div>
    </header>
</template>
<script>
export default {
    name:'home-header'
}
</script>

<style scoped>
.header{
     width: 100%;
     height: 0.45rem;
     background: #00a1ff;
 }
.seach-warpper{
    margin-top:-0.03rem; 
    display: flex;
    justify-content: space-around;
     width: 100%;
     height: 0.5rem;
     background: #00a1ff;
     text-align: center
 }
.seach-warpper .seach-box{
    
    width: 3.32rem;
    height: 0.33rem;
    background: #fff;
    color: #666;
    font-size: 0.13rem;
    border: 0;
    border-radius: 0.01rem;
    line-height: 0.33rem;
}
.seach-box:first-child i{
    font-size: 0.13rem;
    padding-right:0.03rem; 
}
.dz-warpper{
    display: flex;
    background: #00a1ff;
    justify-content: space-around;
    padding-top:0.1rem; 

}
.dz-warpper .dz{
    font-size: 0.16rem;
    font-weight: 900;
    line-height: 0.36rem;
    width: 3.32rem;
    color: #fff;
}
.dz i:nth-child(1){
    font-size: 0.15rem;
    padding-right:0.03rem; 
}
.dz i:nth-child(2){
    position: relative;
    top: -0.04rem;
    font-size: 0.08rem;
    padding-left:0.2rem; 
}


</style>
