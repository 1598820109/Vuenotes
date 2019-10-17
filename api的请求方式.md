##api的请求方式
  在vue.js里面
  可以使用 一下三种方法
   1. jqery的Ajax 
   
   2. vue-resoure 
	          目前官方已经不在更新,作者建议使用axios
	          支持post get jsonp
	          
	     <!--引入vue-resource -->
		   <script src="https://cdn.bootcss.com/vue-resource/1.5.0/vue-resource.min.js"></script>
		   
	  #引入后
		   在vue实列里面 直接使用
			this.$http.get("api(url)地址")
		  this.$http.post("api(url)地址",传的参数)
		  
	  #请求方法
		  get(url, [config])
			head(url, [config])
			delete(url, [config])
			jsonp(url, [config])
			post(url, [body], [config])
			put(url, [body], [config])
			patch(url, [body], [config])


   3. axios  
	      官方推荐使用 axios
	      本身不支持jsonp 支持 get post

   		