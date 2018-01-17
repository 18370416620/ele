<template>
    <nav class="tabs oe-top-px">
        <router-link class="tab" v-for="(tabItem,index) in tabsData" :key="index" :to="tabItem.path">
            {{tabItem.title}}
        </router-link>
    </nav>
</template>

<script>
export default {
    name:'tabs',
    data(){
        return{
            tabsData:[
                {title:'首页',path:'/home'},
                {title:'发现',path:'/discover'},
                {title:'订单',path:'/order'},
                {title:'我的',path:'/mine'}
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
        left: 0;
        background: #f6f6f6;
        border-top: 0.003rem  solid #c8c8c8;
    }
    .tabs:first-child{
        color: #0089dc !important;        
    }
    .tab{
        font-size: 0.1rem;
        display: block;
        float: left;
    }
    .tabs .tab.router-link-active{
        color: #0089dc !important;
    }
</style>
