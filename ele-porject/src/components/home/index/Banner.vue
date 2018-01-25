<template>
<div ref="banner" class="banner swiper-container">
    <div class="swiper-wrapper">
        <ul  class="swiper-slide" v-for="(data,index) in bannerData" :key="index">
            <li class="item" v-for="(bannerItem,index) in data" :key="index">
              <img :src="bannerItem.img"/>
              <h3>{{bannerItem.name}}</h3>
            </li>  
        </ul>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination" v-show="bannerData.length>1"></div>
</div>

</template>
<script>
import {getBannerdata} from '../../../service/HomeService'
export default {
  name:'home-banner',
  data(){
      return{
        bannerData:[]
      }
  },
  methods:{
     initData(){
              //请求banner数据
      
          getBannerdata('22.625871','113.83794',[
                  'main_template',
                  'favourable_template',
                  'svip_template'
                ])
          .then(data=>{
              //将请求的数据放在data中，在DOM中展示
              this.bannerData = data;
              // console.log(data);
              //banner数据更新后再更新swiper分页器
              this.$nextTick(()=>{
                
                this.bannerSwiper.update();
              }) 
          })
     }
  },
  mounted(){
      this.initData();
      
      //创建swiper对象并且挂靠在this对象上
      this.bannerSwiper= new Swiper(this.$refs.banner,{
            pagination:'.swiper-pagination'
      });
      // console.log(this)
  }
}
</script>

<style scoped>
.banner{
    width: 100%;
    height: 1.87rem;
}
.swiper-slide{
  overflow: hidden;
  text-align: center;

}
.swiper-slide .item{
  width: 25%;
  float: left;
  padding-top:0.1rem; 
}
.swiper-slide .item img{
  width: 0.5rem;
  height: 0.5rem;
}
.swiper-slide .item h3{
  font-size: 0.12rem;
  color: #666;
}

</style>
