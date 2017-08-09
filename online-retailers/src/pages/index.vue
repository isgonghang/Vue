<template>
	<div class="index-wrap">
		<div class="index-left">
			<div class="index-left-block">
				<h2>全部产品</h2>
				<template v-for="product in productList">
					<h3>{{ product.title }}</h3>
					<ul>
						<li v-for="item in product.list">
							<a :href="item.url">{{ item.name }}</a>
							<span v-if="item.hot" class="hot-tag">HOT</span>
						</li>
					</ul>
					<div v-if="!product.last" class="hr"></div>
				</template>
			</div>
			<div class="index-left-block lastest-news">
				<h2>最新消息</h2>
				<ul>
					<li v-for="item in newsList">
						<a :href="item.url">{{ item.title }}</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="index-right">
			<slide-show :slides="slides"></slide-show>
			<div class="index-board-list">
				<div class="index-board-item" v-for="(item,index) in boardList">
				<div class="index-board-img" :class="'index-board-'+item.id"></div>
					<div class="index-board-item-inner">
						<h2>{{ item.title }}</h2>
						<p>{{item.description}}</p>
						<div class="index-board-button">
							<a href="" class="button">立即购买</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	created: funciton(){
		this.$http.get('getList')
		.then(function(data){
			console.log(data)
		},function(err){
			console.log(err)
		})
	},
	data(){
		return {
			productList:{
				pc: {
					title: 'PC产品',
					list: [
						{
							name: 'Mac Book',
							url: 'www.baidu.com',
							hot: true
						},
						{
							name: 'Think Pad',
							url: 'www.baidu.com'
						},
						{
							name: 'Dell',
							url: 'www.baidu.com'
						},
						{
							name: '其它',
							url: 'www.baidu.com'
						}
					      ]
				},
				app:{
					title: '手机应用类',
					list: [
						{
							name: '微博',
							url: 'www.baidu.com'
						},
						{
							name: '微信',
							url: 'www.baidu.com',
							hot: true
						},
						{
							name: '知乎',
							url: 'www.baidu.com'
						},
						{
							name: '淘宝',
							url: 'www.baidu.com'
						}
						  ],
					last: true
					}
			},
			newsList: [
						{
							title: '今日头条',
							url: 'www.baidu.com',
							hot: true
						},
						{
							title: '新闻联播',
							url: 'www.baidu.com'
						},
						{
							title: '微博热搜',
							url: 'www.baidu.com'
						},
						{
							title: '微信公众号',
							url: 'www.baidu.com'
						}
			],
			boardList:[
						{
							title: '开放产品',
							description: '一款产品',
							id: 'car'
						},
						{
							title: '品牌直销',
							description: '一款产品',
							id: 'earth'
						},
						{
							title: '使命必达',
							description: '一款产品',
							id: 'loud'
						},
						{
							title: '微信公众号',
							description: '一款产品',
							id: 'hill'
						}
			]
		}
	}
}
</script>

<style scoped>
ol,ul,li{
	list-style: none;
	color: #000;
}
.index-left{
	float: left;
	width: 300px;
	height: 578px;
	margin: 20px 6px 0 20px;
	background: #fff;
}
.index-left .index-left-block h2{
	width: 294px;
	height: 30px;
	background: #41B883;
	color: #fff;
	padding:0 0 0 6px;
	font-size: 20px;
}
.index-left .index-left-block h3{
	width: 100%;
	height: 20px;
	color: #222;
	margin: 14px 0 10px 6px;
	font-size: 12px;
	font-weight: bold;
	border-radius: 10px;
}
.index-left .index-left-block li{
	width: 100%;
	height: 20px;
	margin: 6px 0 6px 10px;
	padding-top: 2px;
	font-size: 12px;
	border-radius: 10px;
}
.index-left .index-left-block li a{
	color: #35495E;
}
.hot-tag{
	background: red;
	color: #fff;
}

.index-right{
	float: left;
	width: 1000px;
	height: 300px;
	margin: 20px 0 0 20px;
}
.index-board-item{
	float: left;
	width: 400px;
	height: 100px;
	background: #fff;
	margin: 20px 0 0 20px;
}
.index-board-img{
	width: 100px;
	height: 100px;
	float: left;
}
.index-board-car{
	background: url(../assets/images/1.png) no-repeat;
}
.index-board-loud{
	background: url(../assets/images/2.png) no-repeat;
}
.index-board-earth{
	background: url(../assets/images/3.png) no-repeat;
}
.index-board-hill{
	background: url(../assets/images/4.png) no-repeat;
}
.index-board-item-inner{
	float: left;
	margin: 20px 0 0 20px;
}

.index-board-item h2{
	font-size: 16px;
	font-weight: bold;
}
.index-board-item p{
	font-size: 10px;
	color: #888;
}
.index-board-button{
	width: 70px;
	height: 30px;
	background: #41B883;
	display: table-cell;
	vertical-align: middle;
	text-align: center;
}
.index-board-button a{
	color: #fff;
}
</style>