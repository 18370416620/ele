<template>
        <div class="page" :id="pageId" ref="page">
            <div class="wrapper">
                <slot></slot>
                <!-- 上拉加载更多 -->
                <div v-if="canLoadMore" class="load-more" :class="{down: isDown==1}">
                    <img src="/static/images/loading.gif" />
                    <span>{{downInfo}}...</span>
                </div>
            </div>
        </div>
</template>

<script>
// import IScroll from "iscroll";
console.log(IScroll)
export default {
    name:'page',
    props:{
        pageId:String,
        canLoadMore:Boolean //是否需要加载更多的功能
    },
    data(){
        return{
            isDown:0,//0 没有触发 1 触发了加载更多 2正在加载更多
            downInfo:'加载中'
        }
    },
    methods:{
        //需要让页面刷新滚动
        pageRefresh(){
            this.pageScroll.refresh();
        },
        endLoadMoreAni(){
            this.isDown= 0;
            this.downInfo='加载中';
        }
    },
    mounted(){
        //创建页面的滚动视图
        this.pageScroll = new IScroll(this.$refs.page,{
            probeType: 3
        });
        //让页面可以滚动
        this.pageScroll.on('scrollStart',this.pageScroll.refresh);
        if(this.canLoadMore){

        
            //上拉加载更多 判断距离为40
            this.pageScroll.on('scroll',()=>{
                if(this.isDown !=2){
                    let maxScrollY= this.pageScroll.maxScrollY;
                    let y= this.pageScroll.y;   
                    //显示上拉可以加载更多  maxScrollY< y >y,maxScrollY+40
                    console.log(y,maxScrollY);
                    if(y=>maxScrollY){
                        this.downInfo='加载中'
                        this.isDown = 0;
                    }
                    //显示：松开完成加载 y<=maxScroll
                    else if(y< maxScrollY){
                    this.downInfo = '松开完成加载'
                    this.isDown = 1 ;
                }
            }
            });
            this.pageScroll.on('scrollEnd',()=>{
                if(this.isDown !=2){//没有正在加载更多时再判断
                    let maxScrollY= this.pageScroll.maxScrollY;
                    let y= this.pageScroll.y;   
                    //判断是否达到加载更多的条件
                    //没有达到条件  maxScrollY< y >y,maxScrollY+40
                
                    if(y>maxScrollY && y < maxScrollY+40){
                            this.pageScroll.scrollTo(0,maxScrollY+40,200)
                    }
                    //达到刷新条件 y<=maxScroll 请求下一页列表数据
                    else if(y<= maxScrollY){    
                        this.isDown= 2;
                        console.log('达到了加载更多的条件');
                        // setTimeout(this.endLoadMoreAni, 2000);
                        this.$emit('load-more-action')
                }
            }
            });

        } 
        
    }
  
}
</script>

<style>
.page{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0.45rem;
    overflow: hidden;
}
.page .load-more{
    width: 100%;
    height: 0.4rem;
    background:#fff;
    text-align: center;
    line-height: 0.4rem;
    font-size: 0.14rem;
}
.load-more img{
    position: relative;
    top: 0.04rem;
    width: 0.2rem;
    height: 0.2rem;
}
.load-more span{
    color: #666;
}
</style>
