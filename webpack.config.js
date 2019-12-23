const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    // 入口
    entry: {
        // app: './app.js'
        main: './src/index.js'
    },
    // 出口
    output: {
        publicPath: path.join(__dirname, 'dist'),   //输入的公共路径,不填有时候会导致图片以及静态资源路径错误
        path: path.resolve(__dirname, 'dist'),  //输入路径
        // filename: 'bundle.js'   //打包后的文件
        filename: '[name].bundle.js',
        chunkFilename: '[name].js'   //代码拆分后的文件名
    },
    // 插件
    plugins: [
        new CleanWebpackPlugin()    // 默认情况下，此插件将删除 webpack output.path目录中的所有文件，以及每次成功重建后所有未使用的 webpack 资产。
    ],
    module: {
        rules: [
            {
                test: /\.js$/,  // 使用正则来匹配 js 文件
                exclude: '/node_modules/',  // 排除依赖包文件夹
                use: {
                    loader: 'babel-loader'   // 使用 babel-loader
                }
            }
        ]
    },
    // 优化
    optimization: {
        // 代码分隔
        // splitChunks: {
        //     //选择哪些块进行优化，默认async表示只分隔异步代码
        //     chunks: 'all',
        //     // 缓存组
        //     cacheGroups: {
        //         lodash: {
        //             name: 'lodash',
        //             test: /[\\/]node_modules[\\/]lodash[\\/]/,
        //             priority: 5  // 优先级要大于 vendors 不然会被打包进 vendors
        //         },
        //         vendors: {
        //             test: /[\\/]node_modules[\\/]/,
        //             priority: -10
        //         },
        //         default: {
        //             minChunks: 2,
        //             priority: -20,
        //             reuseExistingChunk: true
        //         }
        //     }
        // },

        splitChunks: {
            chunks: "all",
            minSize: 30000,
            // 最小共用两次才分隔
            minChunks: 2,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                lodash: {
                    name: 'loadsh',
                    test: /[\\/]node_modules[\\/]lodash[\\/]/,
                    priority: 10
                },
                commons: {
                    name: 'commons',
                    minSize: 0, //表示在压缩前的最小模块大小,默认值是 30kb
                    minChunks: 2,// 最小公用次数
                    priority: 5,// 优先级
                    reuseExistingChunk: true // 公共模块必开启
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    }
}
