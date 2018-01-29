<template>
    <div>
        <page :canLoadMore="true" pageId="home" ref="page"
         @load-more-action="handleLoadMore"
         @page-scroll="handlePageScroll">

     
        <home-header></home-header>
        <home-banner></home-banner>
        <div class="newuser-info">
            <img src="https://fuss10.elemecdn.com/3/c8/45b2ec2855ed55d90c45bf9b07abbpng.png?imageMogr/format/webp/thumbnail/!710x178r/gravity/Center/crop/710x178/" alt="">
        </div>
        <home-list ref="list" @list-change="handleListChange"></home-list>
        </page>
        <!-- 上拉时还需要展示搜索框 -->
        <search-bar  v-show="showSearchBar" :isActive="showSearchBar"></search-bar>
        <router-view></router-view>
    </div>
</template>

<script>
import Page from "../../common/Page.vue"
import Header from "../../components/home/index/Header.vue"
import Search from "../../components/home/index/Search.vue"
import Banner from "../../components/home/index/Banner.vue"
import List from "../../components/home/index/List.vue"
export default {
        components:{
            [Page.name]:Page,
            [Header.name]:Header,
            [Search.name]:Search,
            [Banner.name]:Banner, 
            [List.name]:List
            
        },
        data(){
            return{
                showSearchBar:false
            }
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
            },
            //根据页面滚动的位子控制是否展示searchbar
            handlePageScroll(y){
                // console.log('y:'+y);
                if(y<-50){
                    this.showSearchBar=true;
                }else{
                    this.showSearchBar=false;
                }
            }
        }
}
</script>

<style>


 /* #header{
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
} */

.newuser-info{
    width: 100%;
    text-align: center
}
.newuser-info img{
     width: 3.41rem;
     height: 0.85rem;
 }
</style>
