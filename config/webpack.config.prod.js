// 生产环境配置

// 引入基础配置
const webpackBase = require("./webpack.config.base");
// 引入 webpack-merge 插件
const webpackMerge = require("webpack-merge");
// 引入 webpack
const webpack = require("webpack");
// 合并配置文件
module.exports = webpackMerge(webpackBase,{
    plugins:[
        //DefinePlugin允许创建一个在编译时可以配置的全局常量。
	    //全局常量用来区分是开发环境还是生产环境
    	new webpack.DefinePlugin({
  			 DEV:false,
		}),
        // 代码压缩
        new webpack.optimize.UglifyJsPlugin({
            // 开启 sourceMap
            sourceMap: true
        }),
        // 提取公共 JavaScript 代码
        new webpack.optimize.CommonsChunkPlugin({
            // chunk 名为 vendor
            name: "vendor",
            filename: "js/[name].[chunkhash].js",
        })
    ]
});