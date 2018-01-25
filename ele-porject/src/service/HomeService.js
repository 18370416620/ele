import axios from "axios"
import Api from "../api"
import {handleImage} from '../util/handleImage'


 // let path = Api.BANNER_URL+'latitude=22.54286&longitude=114.059563
//&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template'
//   axios.get(path)
//   .then((response)=>{

//   })
//   .catch((error)=>{
        
//   })
 
//请求banner的函数
export function getBannerdata(lat,lon,tmp){
    
   return  new Promise((resolve,reject)=>{
        //创建get请求banner数据
        axios.get(Api.BANNER_URL,{
            params:{
              'latitude':lat,
              'longitude':lon,
              'templates':tmp
            }
        })
        //请求成功
        .then((response)=>{
        //   console.log("成功");
        //   console.log(response);
        //遍历轮播图数据
          let newData = response.data[0].entries.map(item=>{
             return {
                  name : item.name,
                  img:handleImage(item.image_hash,90)
             }
          })
          // console.log(response);
          //对数据进行分页处理
          let resultData=[];
          while(newData.length>0){
         
                resultData.push(newData.splice(0,8));
          }
          resolve(resultData);
        })
        //请求失败
        .catch((error)=>{

        })
    })
    
}

//请求首页推荐商家的函数
export function getHomeSeller(lat,lon,offset,limit){
   return new Promise((resolve,reject)=>{
        axios.get(Api.SELLER_URL,{
          params:{
              latitude:lat,
              longitude:lon,
              offset,
              limit,
              extras:['activities','tags'],
              extra_filters:'home',
              rank_id:'57b74d3a8f9c4a098e1b3224115e1770',
              terminal:'h5'
          }
        })
        .then((response)=>{
          
            let result=response.data.items.map(item=>{
                return{ 
                    img: handleImage(item.restaurant.image_path,90),
                    name: item.restaurant.name,
                    rating :item.restaurant.rating,
                    recent_order_num:item.restaurant.recent_order_num,
                    activities: item.restaurant.activities?item.restaurant.activities.map(act=>{
                      return{
                        icon_name:act.icon_name,
                        icon_color:act.icon_color,
                        description:act.description
                      }
                    }):null,
                    isShow: false
                } 
              })
             resolve(result);
        })
        .catch((error)=>{
           
        })
   })
   
}
