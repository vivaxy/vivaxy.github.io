- 什么是事件委托？考察绑定事件和事件冒泡

        利用事件冒泡，只指定一个事件处理程序，就能管理某一类型的所有事件

- 如何实现浏览器内多个标签页之间的通信？考察浏览器特性

        localstorge
        cookie
        url

- 如何解决跨域问题？浏览器特性，什么是跨域，跨域有什么限制

        jsonp
        document.domain + iframe
        window.name
        window.postMessage

- GET 和 POST 的区别，何时使用 POST ？考察 http

        GET: 一般用于信息获取，使用 URL 传递参数，对所发送信息的数量也有限制，一般在 2000 个字符
        POST: 一般用于修改服务器上的资源，对所发送的信息没有限制。

        GET 方式需要使用 Request.QueryString 来取得变量的值，而 POST 方式通过 Request.Form 来获取变量的值，
        也就是说 GET 是通过地址栏来传值，而 POST 是通过提交表单来传值。

        然而，在以下情况中，请使用 POST 请求：
        无法使用缓存文件（更新服务器上的文件或数据库）
        向服务器发送大量数据（ POST 没有数据量限制）
        发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠

- HTTP 请求包含哪几部分？
