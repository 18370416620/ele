<template>
    <div>
        <page id="home">
     
        <home-header></home-header>
        <home-banner></home-banner>
        <home-list></home-list>
        </page>

    </div>
</template>

<script>
import Page from "../../common/Page.vue"
import Header from "../../components/home/index/Header.vue"
import Banner from "../../components/home/index/Banner.vue"
import List from "../../components/home/index/List.vue"
export default {
        components:{
            [Page.name]:Page,
            [Header.name]:Header,
            [Banner.name]:Banner, 
            [List.name]:List
        }
}
</script>

<style>


 #header{
     width: 100%;
     height: 0.45rem;
     background: #00a1ff;
 }
.seach-warpper{
     width: 100%;
     height: 0.36rem;
     background: #00a1ff;
     text-align: center
 }
.seach-warpper input{
    width: 3.32rem;
    height: 0.33rem;
    border: 0;
    border-radius: 0.01rem;
}
 .dz{
     font-size: 0.15rem;
     color: #fff;
 }
</style>
