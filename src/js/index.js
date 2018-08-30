import '../css/reset.css';
import '../css/index.css';
const {baseUrl,getImgUrl} = require("../api/api.js");
console.log(baseUrl);
$.ajax({
	type:"post",
	//开发环境下baseUrl等于'/api/fuwii'
	//开发环境下原来请求的接口路径是http://localhost:8080/api/fuwii/center/cardOperator
	//开发环境下使用服务器代理之后接口路径转到了http://order.aichongyue.com/fuwii/center/cardOperator
	
	//生产环境下baseUrl等于'..'
	//生产环境下请求的接口路径是../center/cardOperator"
	url:baseUrl+"/center/cardOperator",
    data:{
    	orderSource:1
    },
    success:function(r){
    	console.log(r);
    }
});


