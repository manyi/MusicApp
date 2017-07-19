<template>
<<<<<<< HEAD
</template>

<script>
export default {

  name: 'singer',

  data () {
    return {

    };
  }
}
</script>

<style lang="css" scoped>
</style>
=======
	<div class="singer" ref="singer">
		<list-view :data="singers" @selectSinger="selectSinger"></list-view>
		<router-view></router-view>
	</div>
</template>

<script>
	import ListView from 'base/listview/listview'
	import {getSingerList} from 'api/singer'
	import {ERR_OK} from 'api/config'
	import Singer from 'common/js/singer'

	const HOT_NAME = '热门'
	const HOT_SINGER_LEN = 10
	export default {
		data(){
			return{
				singers:[]
			}
		},
		created(){
			this._getSingerList()
		},
		methods:{
			selectSinger(item){
				this.$router.push({
					path:`/singer/${item.id}`
				})
			},
			_getSingerList(){
				getSingerList().then((res)=>{
					if(res.code === ERR_OK){ 
						this.singers = this._normalizeSinger(res.data.list)
					}
				})
			},
			_normalizeSinger(list){
				//循环map
				let map = {
					hot:{
						title:HOT_NAME,
						items:[]
					}
				}
				list.forEach( function(item, index) {
					if(index <= HOT_SINGER_LEN){//添加hot数据
						map.hot.items.push(new Singer({
							name:item.Fsinger_name,
							id:item.Fsinger_mid
						}))
					}
					//添加A-Z数据
					const key = item.Findex
					if(!map[key]){
						map[key] = {
							title:key,
							items:[]
						}
					}
					map[key].items.push(new Singer({
						name:item.Fsinger_name,
						id:item.Fsinger_mid
					}))
				})
				//处理map，变为有序数组
				let ret = []
				let hot = []
				for(let key in map){
					let val = map[key]
					if(val.title.match(/[a-zA-Z]/)){
						ret.push(val)
					}else if(val.title === HOT_NAME){
						hot.push(val)
					}
				}
				ret.sort((a,b) => {
					return a.title.charCodeAt(0) - b.title.charCodeAt(0)
				})
				return hot.concat(ret)//连接两个数组
			}
		},
		components:{
			ListView
		}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>
>>>>>>> 2017/7/19
