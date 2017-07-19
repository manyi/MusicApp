import Vue from 'vue'
import Router from 'vue-router' 
import Recommend from 'components/recommend/recommend'
import Rank from 'components/rank/rank'
import Search from 'components/search/search'
import Singer from 'components/singer/singer'
<<<<<<< HEAD
=======
import SingerDetail from 'components/singer/singer-detail'
>>>>>>> 2017/7/19

Vue.use(Router)

export default new Router({
  routes: [
    {
     	path:'/',
     	redirect:'/recommend'
    },
    {
    	path:'/recommend',
    	component:Recommend
    },{
    	path:'/search',
    	component:Search
    },{
    	path:'/rank',
    	component:Rank
    },{
    	path:'/singer',
<<<<<<< HEAD
    	component:Singer
=======
    	component:Singer,
      children:[
        {
          path: ':id',
          component:SingerDetail
        }
      ]
>>>>>>> 2017/7/19
    }
  ]
})
