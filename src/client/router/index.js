import Vue from 'vue'
import Router from 'vue-router'

// 导入对应的vuex文件
import store from './../store/store'

// 导入相应的子组件
import Home from './../components/Home'
import Hello from './../components/Hello'
import Test from './../components/test'

Vue.use(Router)

var router = new Router({
    mode: 'history',
    routes: [
        { 
            name: 'home', path: '/', redirect:'/test', component: Home,
            children:[{
                path:'test',
                component:Test
                },
                {
                    path: 'hello',
                    component: Hello
                }
            ]
        },
        //{ name: 'hello', path: '/hello', component: Hello },
    ]
})

export default router