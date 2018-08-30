import '../css/reset.css';
import '../css/index.css';
const {baseUrl,getImgUrl} = require("../api/api.js");//baseUrl和getImgUrl需要根据实际情况在api.js文件中进行设置
console.log(baseUrl);
console.log(getImgUrl);
$.ajax({
	type:"post",
	
	//开发环境配置在config文件夹下webpack.config.dev.js文件，其中配置了服务器代理
	//配置服务器代理之后转到的地址可以自行设置，此处我设置的是测试服务器http://order.aichongyue.com
	//开发环境下baseUrl等于'/api/fuwii'
	//开发环境下原来请求的接口路径是http://localhost:8080/api/fuwii/center/cardOperator
	//开发环境下使用服务器代理之后接口路径转到了http://order.aichongyue.com/fuwii/center/cardOperator

	//生产环境配置在config文件夹下webpack.config.prod.js文件
	//生产环境下(也就是打包之后)，生产环境配置在config文件夹下webpack.config.prod.js文件
	//生产环境下(也就是打包之后)baseUrl等于'..'
	//生产环境下(也就是打包之后)请求的接口路径是../center/cardOperator"
	url:baseUrl+"/center/cardOperator",
    data:{
    	orderSource:1
    },
    success:function(r){
    	console.log(r);
    	if(r.success){
    		var imgurl = r.data.operatorList[0].activateImgUrl;
    		console.log(imgurl);//   从后台获取到的图片路径 /upload/image/cc652fc679d845ef9af9319f2d7f9f6b.jpg
 
    		//生产环境下getImgUrl等于'/api'
    		//开发环境下的图片路径原来是 http://localhost:8080/api/upload/image/cc652fc679d845ef9af9319f2d7f9f6b.jpg
    		//开发环境下使用服务器代理之后图片路径转到了http://order.aichongyue.com/upload/image/cc652fc679d845ef9af9319f2d7f9f6b.jpg(测试服务器的上的正确图片路径)
    		
    		//生产环境下(也就是打包之后)getImgUrl等于''
    		//生产环境下(也就是打包之后)的图片路径是/upload/image/cc652fc679d845ef9af9319f2d7f9f6b.jpg
    		$("div").html(`<img src="${getImgUrl}${imgurl}"/>`);
    	}
    }
});


