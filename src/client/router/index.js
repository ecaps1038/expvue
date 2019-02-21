import Vue from 'vue'
import Router from 'vue-router'

// 导入对应的vuex文件
import store from './../store/store'

// 导入相应的子组件
import Hello from './../components/Hello'
import Test from './../components/test'

Vue.use(Router)

var router = new Router({
  mode: 'history',
  routes: [
    { name: 'hello', path: '/hello', component: Hello },
    { name: 'test', path: '/test', component: Test },
    {
    	//重定向，打开页面时显示
		path:'*',
		redirect:'/hello'
	},
  ]
})

export default router