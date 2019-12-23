// import esSix from './vendor/es6'
// console.log(`es6是${esSix(10, 20)}`)

// const common = require('./vendor/common')
// console.log(`commonjs是${common(10, 30)}`)

// AMD
// require(['./vendor/amd'], function (multi) {
//     console.log('multi(1, 2) = ', multi(1, 2))
// })

import '@babel/polyfill'

// 测试 ES6 语法是否通过 babel 转译
const array = [1, 2, 3]
const isES6 = () => console.log(...array)

isES6()

const arr = [new Promise(() => { }), new Promise(() => { })]

arr.map(item => {
    console.log(item)
})