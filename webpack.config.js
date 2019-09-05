const path=require('path')
const htmlWebpackPlugin=require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const config = {
    entry:path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname,'./dist'),
        filename: 'bundle.js',
    },
    plugins:[//配置插件节点
      new htmlWebpackPlugin({
          //创建一个内存中生成html 页面插件
          //根据指定页面，生成内存中的页面
          template:path.join(__dirname,'./src/index.html'),
          filename:'index.html',//指定生成页面的名称
      }),
        new VueLoaderPlugin()
    ],
    module:{//用于配置所有第三方模块 加载器
        rules:[//第三方模块 匹配规则
            {test:/\.css$/, use:['style-loader','css-loader']},

            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},//处理字体文件
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=4494400&name=[name].[ext]'},
            //limit:给定的值是图片的大小单位是byte，如果我们引用的 图片大于或等于给定的limit值
            //则不会base64格式的字符串，如果图片小于给定的值，则会被转给base64格式的字符串
            //name=[name].[ext]   表示图片的名字与后缀跟之前一样

            //配置babel 转化es 高级语法
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.vue$/,use:'vue-loader'},

            ]
    }
};

module.exports = config;
