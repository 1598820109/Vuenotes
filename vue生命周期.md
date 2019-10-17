##
    所有的生命周期钩子自动绑定 this 上下文到实例中，因此你可以访问数据，对属性和方法进行运算。这意味着你不能使用箭头函数来定义一个生命周期方法 (例如 created: () => this.fetchTodos())。这是因为箭头函数绑定了父上下文，因此 this 与你期待的 Vue 实例不同，this.fetchTodos 的行为未定义。

     beforeCreate(){
                console.log("初始化 事件 生命周期")
                alert("实列初始化前")
            },

            // 初始化后
            created() {
                console.log("实列初始化注入")
                alert("实列初始完毕")

            },

            // 挂载前
            beforeMount() {
                console.log("实列挂载前")
                alert("实列挂载前")
            },

            // 挂载后
            mounted() {
                console.log("实列挂载完毕")
                alert("实列挂载完毕");
            },

            // 更新前
            beforeUpdate() {
                console.log("数据跟新前")
                alert("实列更新前")
            },

            // 更新完毕
            updated() {
                console.log("数据更新完毕")
                alert("更新完毕")
            },

            //数据销毁前
            beforeDestroy() {
                console.log("数据摧毁前")
                alert("数据摧毁前")
            },

            // 数据以销毁
            destroyed() {
                console.log("数据摧毁完毕")
                alert("数据摧毁完毕")

            }


            