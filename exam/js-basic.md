1. 创建一个DOM片段

    > createDocumentFragment

2. 根据标签名创建dom节点

    > createElement

3. 创建一个文本节点

    > createTextNode

4. 查找dom节点

    > getElementsByTagName
    >
    > getElementsByName
    >
    > getElementById
    >
    > getElementByClassName
    >
    > querySelector
    >
    > querySelectorAll

5. 如何绑定事件

    > addEventListener

6. 什么是事件冒泡

    > IE的事件流叫事件冒泡，事件开始时由最具体的元素（文档中嵌套层次最深的那个节点）接受，然后逐级向上传播到较为不具体的节点（文档）

7. 什么是事件捕获

    > 不太具体的节点应该更早接受到事件，而最具体的节点应该最后接收到事件

8. 事件委托

    > 利用事件冒泡，只指定一个事件处理程序，就能管理某一类型的所有事件

9. 如何实现浏览器内多个标签页之间的通信？

    > localstorge
    >
    > cookie

10. 如何解决跨域问题？

    > jsonp
    >
    > document.domain + iframe
    >
    > window.name
    >
    > window.postMessage

11. call apply bind的作用？

    > 动态改变某个方法的运行环境

12. call apply bind的区别？

    > 传参形式，call为多参数，apply为数组，bind不能传参

13. javascript里面的继承怎么实现，如何避免原型链上面的对象共享？

    > 用构造函数和原型链的混合模式去实现继承，避免对象共享可以参考经典的`extend()`函数，很多前端框架都有封装的，就是用一个空函数当做中间变量

14. GET和POST的区别，何时使用POST？

    > GET：一般用于信息获取，使用URL传递参数，对所发送信息的数量也有限制，一般在2000个字符
    > POST：一般用于修改服务器上的资源，对所发送的信息没有限制。
    >
    > GET方式需要使用Request.QueryString来取得变量的值，而POST方式通过Request.Form来获取变量的值，
    > 也就是说Get是通过地址栏来传值，而Post是通过提交表单来传值。
    >
    > 然而，在以下情况中，请使用 POST 请求：
    > 无法使用缓存文件（更新服务器上的文件或数据库）
    > 向服务器发送大量数据（POST 没有数据量限制）
    > 发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠

15. 闭包的特性

    > 函数嵌套函数
    >
    > 函数内部可以引用外部的参数和变量
    >
    > 参数和变量不会被垃圾回收机制回收

16. == 和 === 的区别是什么

    > == 会转换类型，消耗性能

17. iframe优点

    > 解决加载缓慢的第三方内容如图标和广告等的加载问题
    >
    > Security sandbox
    >
    > 并行加载脚本

18. iframe缺点

    > iframe会阻塞主页面的onload事件
    >
    > 即时内容为空，加载也需要时间
    >
    > 没有语意

19. 如何对网站的文件和资源进行优化？

    > 文件合并
    >
    > 文件最小化/文件压缩
    >
    > 使用CDN托管
    >
    > 缓存的使用（多个域名来提供缓存）
    >
    > 优化代码

19. js模块化开发的库

    > browserify
    >
    > requirejs
    >
    > seajs

20. cookie限制

    > cookie的最大大约为4096字节
    >
    > 每个cookie长度不能超过4KB，否则会被截掉
    >
    > 每个domain，IE6或更低版本最多20个cookie，IE7和之后的版本最后可以有50个cookie，firefox最多50个cookie

20. css动画和js动画各有什么优缺点

    > 能充分发挥浏览器性能
    >
    > 代码相对简单
    >
    > 在动画控制上不够灵活

21. 事件类型

    > click
    >
    > blur
    >
    > focus
    >
    > keydown
    >
    > keyup
    >
    > touchstart

22. js保留字

    > abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public yield let 

23. js关键字

    > break do instanceof typeof case else new var catch finally return void continue for switch while debugger function this with default if throw delete in try

24. js变量名是否区分大小写？

    > 是

25. js未申明的变量的值是什么？

    > `undefined`

27. `var name = function(){};`和`function name(){}`有什么区别？

    > function变量提升
