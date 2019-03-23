import Vue from 'vue'
import Router from 'vue-router'

// 导入对应的vuex文件
import store from './../store/store'

// 导入相应的子组件
import Nav from './../components/Nav'
import Hello from './../components/Hello'
import Yike from './../components/Home'
import Works from './../components/Works'

//后台页面
import login from './../components/admin/login'

Vue.use(Router)

var router = new Router({
    mode: 'history',
    routes: [
        { 
            name: 'nav', path: '/', redirect:'/home', component: Nav,
            children:[
                {
                    path:'home',
                    component:Yike
                },
                {
                    path: 'works',
                    component: Works
                }
            ]
        },
        { name: 'login', path: '/login', component: login },
    ]
})

export default router