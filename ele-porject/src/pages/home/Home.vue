<template>
    <page id="home">
        <header id="header">
            <div class="dz">
                福中路深圳市
            </div>
        </header>
        <div class="seach-warpper">
            <input type="text">
        </div>
    </page>
</template>

<script>
import Page from "../../common/Page.vue"
export default {
        components:{
            [Page.name]:Page
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
