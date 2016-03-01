- 创建一个 dom 片段

        createDocumentFragment

- 根据标签名创建 dom 节点

        createElement

- 创建一个文本节点

        createTextNode

- 查找 dom 节点

        getElementsByTagName
        getElementsByName
        getElementById
        getElementByClassName
        querySelector
        querySelectorAll

- 如何绑定事件

        addEventListener

- 什么是事件冒泡

        ie 的事件流叫事件冒泡，
        事件开始时由最具体的元素（文档中嵌套层次最深的那个节点）接受，
        然后逐级向上传播到较为不具体的节点（文档）

- 什么是事件捕获

        不太具体的节点应该更早接受到事件，
        而最具体的节点应该最后接收到事件

- 事件委托

        利用事件冒泡，只指定一个事件处理程序，就能管理某一类型的所有事件

- 如何实现浏览器内多个标签页之间的通信？

        localstorge
        cookie

- 如何解决跨域问题？

        jsonp
        document.domain + iframe
        window.name
        window.postMessage

- call apply bind 的作用？

        动态改变某个方法的运行环境

- call apply bind 的区别？

        传参形式， call 为多参数， apply 为数组， bind 不能传参

- 创建 javascript 对象的方法

        var object = {};
        var object = new Object();

- 创建数组的方法

        var array = [];
        var array = new Array();

- 什么是变量提升

        variable hoisting
        无论是哪里的变量在一个范围内声明的，
        那么 javascript 引擎会将这个声明移到范围的顶部。
        如果在函数中间声明一个变量，例如在某一行中赋值一个变量：
        function foo () {
            // 此处省略若干代码
            var a = 'abc';
        }
        实际上会这样运行代码：
        function foo () {
            var a;
            // 此处省略若干代码
            a = 'abc';
        }

- 全局变量有什么风险，以及如何保护代码不受干扰？

        全局变量的危险之处在于其他人可以创建相同名称的变量，
        然后覆盖你正在使用的变量。
        这在任何语言中都是一个令人头疼的问题。
        预防的方法也有很多。
        其中最常用的方法是创建一个包含其他所有变量的全局变量：
        var applicationName = {};
        然后，每当你需要创建一个全局变量的时候，
        将其附加到对象上即可。
        applicationName.myVariable = 'abc';
        还有一种方法是将所有的代码封装到一个自动执行的函数中，
        这样一来，所有声明的变量都声明在该函数的范围内。
        (function () {
            var a = 'abc';
        })();
        在现实中，这两种方法你可能都会用到。

- 如何通过 javascript 对象中的成员变量迭代

        for (var prop in obj) {
            // bonus points for hasOwnProperty
            if (obj.hasOwnProperty(prop)) {
                // do something here
            }
        }

- javascript 里面的继承怎么实现，如何避免原型链上面的对象共享？

        用构造函数和原型链的混合模式去实现继承，避免对象共享可以参考经典的 `extend()` 函数，很多前端框架都有封装的，就是用一个空函数当做中间变量

- GET 和 POST 的区别，何时使用 POST ？

        GET：一般用于信息获取，使用 URL 传递参数，对所发送信息的数量也有限制，一般在 2000 个字符
        POST：一般用于修改服务器上的资源，对所发送的信息没有限制。

        GET 方式需要使用 Request.QueryString 来取得变量的值，而 POST 方式通过 Request.Form 来获取变量的值，
        也就是说 Get 是通过地址栏来传值，而 Post 是通过提交表单来传值。

        然而，在以下情况中，请使用 POST 请求：
        无法使用缓存文件（更新服务器上的文件或数据库）
        向服务器发送大量数据（ POST 没有数据量限制）
        发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠

- 什么是闭包？

        闭包允许一个函数定义在另一个外部函数的作用域内，
        即便作用域内的其他东西都消失了，
        它仍可以访问该外部函数内的变量。
        如果应聘者能够说明，
        在 for/next 循环中使用闭包却不声明变量来保存迭代变量当前值的一些风险，
        那就应该给对方加分。

- 闭包的特点

        函数嵌套函数
        函数内部可以引用外部的参数和变量
        参数和变量不会被垃圾回收机制回收

- == 和 === 的区别是什么

        == 会转换类型，消耗性能

- 如何对网站的文件和资源进行优化？

        文件合并
        文件最小化/文件压缩
        使用 cdn 托管
        缓存的使用（多个域名来提供缓存）
        优化代码

- js 模块化开发的库

        browserify
        requirejs
        seajs

- cookie 限制

        cookie 的最大大约为 4096 字节
        每个 cookie 长度不能超过 4KB ，否则会被截掉
        每个 domain ，ie6 或更低版本最多 20 个 cookie ， ie7 和之后的版本最后可以有 50 个 cookie ， firefox 最多 50 个 cookie

- css 动画和 js 动画各有什么优缺点

        能充分发挥浏览器性能
        代码相对简单
        在动画控制上不够灵活

- 事件类型

        click
        blur
        focus
        keydown
        keyup
        touchstart

- js 保留字

        abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public yield let

- js 关键字

        break do instanceof typeof case else new var catch finally return void continue for switch while debugger function this with default if throw delete in try

- js 变量名是否区分大小写？

        是

- js 未申明的变量的值是什么？

        `undefined`

- `var name = function () {};` 和 `function name () {}` 有什么区别？

        function 变量提升

- js 的基本数据类型

        number
        string
        boolean
        object
        undefined

- new 操作符具体干了什么呢

        创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型。
        属性和方法被加入到 this 引用的对象中。
        新创建的对象由 this 所引用，并且最后隐式的返回 this 。

- 异步加载的 js 方式有哪些

        defer ， 只支持 ie
        async
        创建 script ，插入到 dom 中，加载完毕后 callback

- 如何判断当前脚本运行在浏览器还是 node 环境中

        通过判断 global 对象是否为 window ，如果不为 window ，当前脚本没有运行在浏览器中

- 对 node 的优点和缺点提出了自己的看法

        （优点）因为 Node 是基于事件驱动和无阻塞的，所以非常适合处理并发请求，
            因此构建在 Node 上的代理服务器相比其他技术实现（如 Ruby ）的服务器表现要好得多。
            此外，与 Node 代理服务器交互的客户端代码是由 javascript 语言编写的，
            因此客户端和服务器端都用同一种语言编写，这是非常美妙的事情。

        （缺点） Node 是一个相对新的开源项目，所以不太稳定，它总是一直在变，
            而且缺少足够多的第三方库支持。看起来，就像是 Ruby/Rails 当年的样子。
