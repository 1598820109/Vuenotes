
## vue数据绑定指令
    
    v-text  //显示纯文本 (包括 html标签)
    v-html  //显示内容  (不包括包括 html标签) 使用 v-html 指令用于输出 html 代码：
    v-bind: //样式绑定
    v-if 指令将根据表达式 seen 的值(true 或 false )来决定是否插入 p 元素。  
    v-on 指令，它用于监听 DOM 事件：
    v-model 指令来实现双向数据绑定：
    v-for 可以绑定数据到数组来渲染一个列表：
    v-show 只是简单地切换元素的 CSS 属性 display

###注意

*缩写
    v-bind 缩写
    Vue.js 为两个最为常用的指令提供了特别的缩写：

    <!-- 完整语法 -->
    <a v-bind:href="url"></a>
    <!-- 缩写 -->
    <a :href="url"></a>

    v-on 缩写
    <!-- 完整语法 -->
    <a v-on:click="doSomething"></a>
    <!-- 缩写 -->
    <a @click="doSomething"></a>