- Doctype作用是什么？

        <!DOCTYPE>声明位于位于HTML文档中的第一行，处于 <html> 标签之前。
        告知浏览器的解析器用什么文档标准解析这个文档。DOCTYPE不存在或格式不正确会导致文档以兼容模式呈现。
    
- 标准模式与兼容模式各有什么区别？

        标准模式的排版和JS运作模式都是以该浏览器支持的最高标准运行。
        在兼容模式中，页面以宽松的向后兼容的方式显示，模拟老式浏览器的行为以防止站点无法工作。
    
- HTML5 为什么只需要写 <!DOCTYPE HTML>？

        HTML5不基于SGML，因此不需要对DTD进行引用，但是需要doctype来规范浏览器的行为（让浏览器按照它们应该的方式来运行）。
        而HTML4.01基于SGML，所以需要对DTD进行引用，才能告知浏览器文档所使用的文档类型。
    
- 哪些标签的默认`display`是`block`

        div
        p
        h1
        h2
        h3
        h4
        h5
        section
        article
        ul
        ol
        li
        dl
        dt
        dd
   
- 哪些标签的默认`display`是`inline`
    
        a
        b
        span
        img
        label
        input
        select
        strong

- 空(void)元素有那些？

        br
        hr
        img
        input
        link
        meta
        area
        base
        col
        command
        embed
        keygen
        param
        source
        track
        wbr
        
- 浏览器的内核有哪些？

        ie - trident
        mozilla - gecko
        chrome - blink webkit的分支
        opera - presto -> blink
        safari - webkit
        
- 常见兼容性问题？

        png24位的图片在ie6浏览器上出现背景，解决方案是做成png8
        
        浏览器默认的margin和padding不同。解决方案是加一个全局的* { margin: 0; padding: 0; }来统一
        
        ie6双边距bug。块属性标签float后，又有横行的margin情况下，在ie6显示margin比设置的大
            浮动ie产生的双倍距离 #box { float: left; width: 10px; margin: 0 0 0 100px; }
            这种情况之下IE会产生20px的距离，解决方案是在float的标签样式控制中加入`_display:inline;`将其转化为行内属性。(_这个符号只有ie6会识别)
            渐进识别的方式，从总体中逐渐排除局部。
                首先，巧妙的使用`\9`这一标记，将ie浏览器从所有情况中分离出来。
                接着，再次使用`+`将ie8和ie7、ie6分离开来，这样ie8已经独立识别。
                .bb {
                    background-color: #f1ee18; /*所有识别*/
                    .background-color: #00deff\9; /*IE6、7、8识别*/
                    +background-color: #a200ff; /*IE6、7识别*/
                    _background-color: #1e0bd1; /*IE6识别*/
                }
            解决方法：（条件注释）缺点是在ie浏览器下可能会增加额外的HTTP请求数
                
        ie下，可以使用获取常规属性的方法来获取自定义属性
            也可以使用getAttribute()获取自定义属性
            firefox下，只能使用getAttribute()获取自定义属性
            解决方法：统一通过getAttribute()获取自定义属性
        
        ie下，event对象有x,y属性，但是没有pageX,pageY属性
            firefox下，event对象有pageX,pageY属性，但是没有x,y属性
        
        chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示
            可通过加入 css 属性 `-webkit-text-size-adjust: none;` 解决
        
        超链接访问过后hover样式就不出现了 被点击访问过的超链接样式不在具有hover和active了
            解决方法是改变css属性的排列顺序
            L-V-H-A love-hate :  a:link {} a:visited {} a:hover {} a:active {}

- html5有哪些新特性？

        html5 现在已经不是 SGML 的子集，主要是关于图像，位置，存储，多任务等功能的增加。
        
        绘画 canvas
        用于媒介回放的 video 和 audio 元素
        本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失；
        sessionStorage 的数据在浏览器关闭后自动删除
        
        语意化更好的内容元素，比如 article、footer、header、nav、section
        表单控件，calendar、date、time、email、url、search
        新的技术webworker, websockt, Geolocation
        
- html5移除了那些元素？
        
        纯表现的元素：basefont，big，center，font, s，strike，tt，u
        对可用性产生负面影响的元素：frame，frameset，noframes；
        
- 如何处理HTML5新标签的浏览器兼容问题？
        
        ie8/ie7/ie6支持通过document.createElement方法产生的标签
            可以利用这一特性让这些浏览器支持html5新标签
            浏览器支持新标签后，还需要添加标签默认的样式：
        
        当然最好的方式是直接使用成熟的框架、使用最多的是html5shim框架
            <!--[if lt IE 9]>
            <script> src="http://html5shim.googlecode.com/svn/trunk/html5.js"</script>
            <![endif]-->
           
- 如何区分 HTML 和 HTML5？

        DOCTYPE声明
        新增的结构元素/功能元素
        
- 语义化的理解？

        用正确的标签做正确的事情！
        html语义化就是让页面的内容结构化，便于对浏览器、搜索引擎解析；
        在没有样式css情况下也以一种文档格式显示，并且是容易阅读的。
        搜索引擎的爬虫依赖于标记来确定上下文和各个关键字的权重，利于seo。
        使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。
        
- HTML5的离线储存？

        localStorage    长期存储数据，浏览器关闭后数据不丢失；
        sessionStorage  数据在浏览器关闭后自动删除。
        
- iframe优点
    
        解决加载缓慢的第三方内容如图标和广告等的加载问题
        security sandbox
        并行加载脚本

- iframe缺点
    
        iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载
        iframe会阻塞主页面的onload事件
        即使内容为空，加载也需要时间
        没有语意
        如果需要使用iframe，最好是通过javascript动态给iframe添加src属性值，这样可以可以绕开以上两个问题

- html5的form如何关闭自动完成功能？

        给不想要提示的 form 或下某个input 设置为 autocomplete=off
        
- cookies，sessionStorage 和 localStorage 的区别？

        cookie在浏览器和服务器间来回传递。 sessionStorage和localStorage不会
        sessionStorage和localStorage的存储空间更大
        sessionStorage和localStorage有更多丰富易用的接口
        sessionStorage和localStorage各自独立的存储空间
        
- webSocket如何兼容低浏览器？

        Adobe Flash Socket
        ActiveX HTMLFile (ie)
        基于 multipart 编码发送 XHR
        基于长轮询的 XHR
        
- http状态码有那些？分别代表是什么意思？

        100-199 用于指定客户端应相应的某些动作。
        200-299 用于表示请求成功。
        300-399 用于已经移动的文件并且常被包含在定位头信息中指定新的地址信息。
        400-499 用于指出客户端的错误。400 语义有误，当前请求无法被服务器理解。401 当前请求需要用户验证。403 服务器已经理解请求，但是拒绝执行它。
        500-599 用于支持服务器错误。 503 服务不可用
        
- 一个页面从输入 URL 到页面加载显示完成，这个过程中都发生了什么？

        查找浏览器缓存
        dns解析，查找该域名对应的IP地址，重定向（301），发出第二个get请求
        进行http协议会话
        客户端发送报头(请求报头)
        服务器回馈报头(响应报头)
        html文档开始下载
        文档树建立，根据标记请求所需指定MIME类型的文件
        文件显示
        解析：对加载到的资源（html, js, css等）进行语法解析，建议相应的内部数据结构（比如html的dom树, js的（对象）属性表，css的样式规则等等）

