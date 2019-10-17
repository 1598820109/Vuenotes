<template>
	<div class="index">
		<div class="layout">
			<Layout>
				<Header>
					<Menu mode="horizontal" theme="dark" active-name="1">
						<div class="layout-logo"></div>
						<div class="layout-nav">
							<MenuItem name="1">
							<Icon type="ios-navigate"></Icon>
							Item 1
							</MenuItem>
							<MenuItem name="2">
							<Icon type="ios-keypad"></Icon>
							Item 2
							</MenuItem>
							<MenuItem name="3">
							<Icon type="ios-analytics"></Icon>
							Item 3
							</MenuItem>
							<MenuItem name="4">
							<Icon type="ios-paper"></Icon>
							Item 4
							</MenuItem>
						</div>
					</Menu>
				</Header>
				<Content :style="{padding: '0 50px'}">
					<Breadcrumb :style="{margin: '20px 0'}">
						<BreadcrumbItem>Home</BreadcrumbItem>
						<BreadcrumbItem>Components</BreadcrumbItem>
						<BreadcrumbItem>Layout</BreadcrumbItem>
					</Breadcrumb>
					<Card>
						<div style="min-height: 200px;">

							<!--数据列表-->
							<List item-layout="vertical">
								<ListItem v-for="item in list" :key="list.id">
									<!--<ListItemMeta/>-->
									    
								    <h1>
								    	{{item.name}}
								    </h1>
									<br />
								    <h2>
								    	{{item.comment}}
								    </h2>
								    
								    <span id="">
								    	{{item.content.album_title}}
								    </span>
									
									<template slot="action">
										<li>
											<Icon type="ios-star-outline" /> 123
										</li>
										<li>
											<Icon type="ios-thumbs-up-outline" /> 234
										</li>
										<li>
											<Icon type="ios-chatbubbles-outline" /> 345
										</li>
									</template>
									<template slot="extra">
										<img :src="item.pic_s192" style="width: 280px">
									</template>
								</ListItem>
							</List>
							<!--数据列表-->
						</div>
					</Card>
				</Content>
				<Footer class="layout-footer-center"><Button type="success" @click="getVideo">点击获取数据</Button></Footer>
			</Layout>
		</div>
	</div>
</template>

<script>
	//引入axios
	import axios from 'axios'
	
	export default {
		name: 'Index',
		data() {
			return {
				msg: '欢迎来到首页',
				list:[],
			}
		},
		
		//方法
		methods:{
			getVideo:function(data){
				axios.get('https://api.apiopen.top/musicRankings').then(res =>{
					console.log(res)
				   	 this.list = res.data.result;
				   })
		   }
        }
	  }
</script>





<style scoped>
	.layout {
		border: 1px solid #d7dde4;
		background: #f5f7f9;
		position: relative;
		border-radius: 4px;
		overflow: hidden;
	}
	
	.layout-logo {
		width: 100px;
		height: 30px;
		background: #5b6270;
		border-radius: 3px;
		float: left;
		position: relative;
		top: 15px;
		left: 20px;
	}
	
	.layout-nav {
		width: 420px;
		margin: 0 auto;
		margin-right: 20px;
	}
	
	.layout-footer-center {
		text-align: center;
	}
</style>