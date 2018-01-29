//vuex依赖
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    //纬度
    latitude: 22.54286,
    //经度
    longtitude: 114.0595
}

//创建全局管理仓库
const store = new Vuex.store({
    //配置仓库所拥有的内容
    //全局状态
    state:{

    },
    //全局计算状态
    getters:{

    },
    //修改全局状态的方法
    mutations:{

    },
    //方法，包含了逻辑处理的代码
    action:{

    },
    //将状态划分为模块
    modules:{

    }
})

export default store;