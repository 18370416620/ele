<template>
    <nav class="tabs one-top-px">
  	<router-link class="tab"  v-for="(tabItem,index) in tabsData" :key="index"
  		:to="tabItem.path" :class="[cla]">
  		<i :class="tabItem.icons"></i>
  		<p>{{tabItem.title}}</p>
  	</router-link>
  </nav>
</template>

<script>
export default {
    name:'tabs',
	data(){
		return {
			cla:"tab",
			tabsData:[
					{
						title:'首页',
						path:'/home',
						icons:'iconfont icon-changyonglogo40'
					},
					{
						title:'发现',
						path:'/discover',
						icons:'iconfont icon-faxian'
					},
					{
						title:'订单',
						path:'/order',
						icons:'iconfont icon-dingdan'
					},
					{
						title:'我的',
						path:'/mine',
						icons:'iconfont icon-wode'
					}
				]
		}
	}
}

</script>

<style scoped>
    .tabs{
        width: 100%;
        height: 0.45rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: absolute;
        bottom: 0;
        text-align: center;
        left: 0;
        background: #f6f6f6;
        border-top: 0.003rem  solid #c8c8c8;
        overflow: hidden;   
    }
    .tab{
        font-size: 0.12rem;
        display: block;
        float: left;
    }
    .tabs .tab.router-link-active{
        color: #0089dc !important;
    }
    .tabs .tab:nth-child(1) i{
        font-size: 0.2rem;
    }
    .tabs .tab:nth-child(2) i{
        font-size: 0.22rem;
    }
    .tabs .tab:nth-child(3) i{
        font-size: 0.2rem;
    }
    .tabs .tab:nth-child(4) i{
        font-size: 0.2rem;
    }
</style>
