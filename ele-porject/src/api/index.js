//图片放置的服务器
const IMAGE_HOST = 'http://fuss10.elemecdn.com/'

/*
首页轮播图接口
参数
?latitude=22.54286   纬度     
longitude=114.059563    经度
templates[]=main_template   。。。
templates[]=favourable_template  。。。
templates[]=svip_template   。。。
*/
const BANNER_URL='/restapi/shopping/openapi/entries'

/*首页推荐商家的请求接口
参数
?latitude=22.54286
&longitude=114.059563
&offset=8
&limit=8
&extras[]=activities
&extras[]=tags
&extra_filters=home
&rank_id=57b74d3a8f9c4a098e1b3224115e1770
&terminal=h5
*/
const SELLER_URL ='/restapi/shopping/v3/restaurants'

export default{
    SELLER_URL,
    IMAGE_HOST, 
    BANNER_URL
}