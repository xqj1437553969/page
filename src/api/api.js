//根据开发环境和生产环境配置不同的接口
if(DEV){
	//开发环境，开发环境配置在config文件夹下webpack.config.dev.js文件
	//开发环境会使用服务器代理配置，请求url中匹配到"/api"就会把url中"/api"之前的东西全部替换成配置文件中设置的http://order.aichongyue.com
	module.exports = {
	   baseUrl:'/api/fuwii',//测试接口地址
	   getImgUrl:'/api'//测试图片地址，这里的图片是指从后台获取的图片
    }
}else{
	//生产环境（也就是打包），生产环境配置在config文件夹下webpack.config.prod.js文件
	module.exports = {
	   baseUrl:'..',//正式接口地址
	   getImgUrl:''//正式图片地址，这里的图片是指从后台获取的图片
    }
}