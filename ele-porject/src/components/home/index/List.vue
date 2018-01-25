<template>
    <ul class="seller-list">
        <div class="seller-tit">
            <div class="s"></div>
            <div>推荐商家</div>
            <div class="s"></div>
        </div>
        <li class="seller-item noe-bottom-px" v-for="(seller,index) in listData" :key="index">
            <div class="log">
                <img :src="seller.img"/>
            </div>
            <div class="info">
                <h2>{{seller.name}}</h2>
                <div class="activities"  v-if="seller.activities">
                    <ul class="act-list">
                        <li v-for="(act,index) in seller.activities" :key="index"
                        v-if="index<2 || seller.isShow">
                            <charter-icon :name="act.icon_name" :color="act.icon_color"></charter-icon>
                            {{act.description}}
                            <!-- <span v-color="act.icon_color">{{act.icon_name}}</span> -->
                        </li>
                        <span class="btn" @click="showActAction(index)">
                            {{seller.activities.length}}个活动<i class="iconfont icon-sanjiaodown"></i>
                        </span>
                    </ul>
                </div>
            </div>
        </li>
    </ul>
</template>
<script>
import {getHomeSeller} from '../../../service/HomeService'
import CharterIcon from '../../../common/CharterIcon.vue'
export default {
  name:'home-list',
  components:{
      [CharterIcon.name ]: CharterIcon
  },
  //LIST数据分页请求  一次请求12条数据
  data(){
      return{
          listData:[],//列表数据的数据源
          limit:12  //一次请求的数据长度
      }
  },
  computed:{
      offset(){ //告诉后台哪里开始请求下一页数据
          return this.listData.length;
      }
  },
  methods:{
      requestData(callback){
          getHomeSeller(22.54286,114.059563,this.offset,this.limit)
          .then((result)=>{
                //第一次进入需要加载第一页数据
                //触发滚动视图的加载更多，加载下一页数据
                this.listData=this.listData.concat(result);
                this.$nextTick(()=>{
                    //请求完成，执行停止加载更多的动画
                    if(callback){
                        callback();
                    }
                })
          });  
        },
        showActAction(index){
            this.listData[index].isShow= !this.listData[index].isShow;
            this.$nextTick(()=>{
                //更新滚动视图
                console.log('需要刷新')
                //告诉home组件需要跟新滚动
                this.$emit('list-change');
            })
        }
  },
  mounted(){
      this.requestData();
  }
}
</script>

<style scoped>
.seller-list{
    width: 100%;
    
    background: #fff;
}
.act-list{
    position: relative;
    padding-top: 0.05rem;
}
.act-list::before{
    position: absolute;
    top: -0.003rem;
    left: 0;
    content: '';
    display: block;
    width: 100%;
    height: 0.003rem;
    border-top: 0.03rem dotted #c8c8c8;
    transform: scaleY(0.5); 
}
.seller-item{
    box-sizing: border-box;
    display: flex;
    padding: 0.1rem
}
.seller-item .log{
    width: 0.7rem;
}
.seller-item .log img{
    width: 100%;
}
.seller-item li{
    font-size: 0.12rem;
    color: #666;
}
.seller-item .info{
    flex: 1;
    margin-left: 0.1rem;
}
.seller-item .info h2{
    padding-bottom: 0.05rem;
    font-size: 0.14rem;
    color: #333;
}
.seller-tit{
    text-align: center;
    padding-top: 0.18rem;
    width: 100%;
    height: 0.35rem;
    background: #fff;
}
.seller-tit>div{
 display: inline-block;
 font-size: 0.16rem;
}
.seller-tit div:nth-child(2){
    padding: 0 0.12rem;
    color: #303030;
}
.s{
    margin-bottom: 0.07rem;
    width: 0.25rem;
    height: 0.01rem;
    background: #e9e9e9;
}
.activities{
    position: relative;
}
.btn{
    position: absolute;
    top: 0.1rem;
    right: 0.1rem;
    color: #999;
}
.btn>i{
    font-size: 0.1rem;
}
</style>
