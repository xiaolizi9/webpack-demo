## 插件

#### 默认情况下，此插件将删除 webpack output.path目录中的所有文件，以及每次成功重建后所有未使用的 webpack 资产。    
npm install clean-webpack-plugin --save-dev

#### ES6 及以上版本转译至 ES5    
#### babel7核心库
npm install --save-dev @babel/core  

#### 支持所有最新的 JavaScript （ES2015、ES2016 等）特性
npm install --save-dev @babel/preset-env

#### 可重新使用Babel注入的程序代码以节省代码大小
npm install --save-dev @babel/plugin-transform-runtime

#### babel-loder
npm install babel-loader --save-dev

#### 包括 core-js 和一个自定义的 regenerator runtime 模块用于模拟完整的 ES2015+ 环境,可以使用Promise,async等ES6语法
#### 注意，使用 --save 参数而不是 --save-dev，因为这是一个需要在你的源码之前运行的 polyfill
npm install --save @babel/polyfill

#### 针对“运行时”的生产依赖
npm install --save @babel/runtime

#### 如果需要只转译我们使用到的ES6,还需要下载core-js,并且在.babelrc中添加配置
npm i --save core-js@3