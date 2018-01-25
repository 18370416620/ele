<template>
    <div>
        <page :canLoadMore="true" pageId="home" ref="page"
         @load-more-action="handleLoadMore">

     
        <home-header></home-header>
        <home-banner></home-banner>
        <div class="newuser-info">
            <img src="https://fuss10.elemecdn.com/3/c8/45b2ec2855ed55d90c45bf9b07abbpng.png?imageMogr/format/webp/thumbnail/!710x178r/gravity/Center/crop/710x178/" alt="">
        </div>
        <home-list ref="list" @list-change="handleListChange"></home-list>
        </page>
        <router-view></router-view>
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
        },
        methods:{
            handleListChange(){
                //执行刷新页面
                this.$refs.page.pageRefresh();
            },
            handleLoadMore(){
                //让list请求下一页数据
                this.$refs.list.requestData(()=>{
                    //请求完成，执行停止加载更多的动画
                    this.$refs.page.endLoadMoreAni();
                });
                
                //如果请求完成就需要刷新滚动视图
            }
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
.newuser-info{
    width: 100%;
    text-align: center
}
.newuser-info img{
     width: 3.41rem;
     height: 0.85rem;
 }
</style>
