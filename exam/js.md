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

5. iframe优点

    > 解决加载缓慢的第三方内容如图标和广告等的加载问题
    >
    > Security sandbox
    >
    > 并行加载脚本

6. iframe缺点

    > iframe会阻塞主页面的Onload事件
    > 
    > 即时内容为空，加载也需要时间
    >
    > 没有语意

7. 如何实现浏览器内多个标签页之间的通信？

    > localstorge
    >
    > cookie

8. 如何对网站的文件和资源进行优化？

    > 文件合并
    >
    > 文件最小化/文件压缩
    >
    > 使用CDN托管
    >
    > 缓存的使用（多个域名来提供缓存）
    >
    > 优化代码

9. 如何解决跨域问题？

    > jsonp
    > 
    > document.domain+iframe
    >
    > window.name
    >
    > window.postMessage

10. call apply bind的作用？

    > 动态改变某个类的某个方法的运行环境

11. call apply bind的区别？

    > 传参形式，call为多参数，apply为数组，bind不能传参

12. javascript里面的继承怎么实现，如何避免原型链上面的对象共享？

    > 用构造函数和原型链的混合模式去实现继承，避免对象共享可以参考经典的extend()函数，很多前端框架都有封装的，就是用一个空函数当做中间变量

13. GET和POST的区别，何时使用POST？

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

14. 闭包的特性

    > 函数嵌套函数
    >
    > 函数内部可以引用外部的参数和变量
    >
    > 参数和变量不会被垃圾回收机制回收

15. js模块化开发的库

    > browserify
    >
    > requirejs
    >
    > seajs

16. == 和 === 的区别是什么

    > == 会转换类型，消耗性能

