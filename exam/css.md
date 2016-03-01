- css 的盒子模型

        内容 (content)
        填充 (padding)
        边界 (margin)
        边框 (border)
        ie 的 content 部分包含了 `border` 和 `padding`

- css 选择器有哪些

        id选择器（#myid）
        类选择器（.myclassname）
        标签选择器（div, h1, p）
        相邻选择器（h1 + p）
        子选择器（ul > li）
        后代选择器（li a）
        通配符选择器（ * ）
        属性选择器（a[rel = "external"]）
        伪类选择器（a:hover, li:nth-child）

- css 哪些属性可以继承

        font-size
        font-family
        color
        text-indent
        line-height

- css 不可继承的样式

        border
        padding
        margin
        width
        height

- css 样式权重优先级

        !important
        id
        class
        tag
        就近原则

- `display` 值有哪些？

        block 象块类型元素一样显示。
        inline 缺省值。象行内元素类型一样显示。
        inline-block 象行内元素一样显示，但其内容象块类型元素一样显示。
        list-item 象块类型元素一样显示，并添加样式列表标记。
        none 不显示

- `position` 的值有哪些？

        absolute 生成绝对定位的元素，相对于 static 定位以外的第一个祖先元素进行定位。
        fixed （老IE不支持）生成绝对定位的元素，相对于浏览器窗口进行定位。
        relative 生成相对定位的元素，相对于其在普通流中的位置进行定位。
        static 默认值。没有定位，元素出现在正常的流中。
        inherit 规定从父元素继承 position 属性的值。

- `position` 的 `absolute` 与 `fixed` 共同点

        改变行内元素的呈现方式，display被置为block
        让元素脱离普通流，不占据空间
        默认会覆盖到非定位元素上

- `position` 的 `absolute` 与 `fixed` 不同点

        `absolute`的”根元素“是可以设置的，而`fixed`的”根元素“固定为浏览器窗口

- `display: none` 和 `visibility: hidden` 的区别

        `display: none` 隐藏对应的元素，在文档布局中不再给它分配空间，它各边的元素会合拢，就当他从来不存在。
        `visibility: hidden` 隐藏对应的元素，但是在文档布局中仍保留原来的空间。

- 为什么要初始化 css 样式

        因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对css初始化往往会出现浏览器之间的页面显示差异。

- css sprites 的实现机制

        css Sprites其实就是把网页中一些背景图片整合到一张图片文件中，再利用 css 的 “background-image” ， “background-repeat” ， “background-position” 的组合进行背景定位， background-position 可以用数字能精确的定位出背景图片的位置。这样可以减少很多图片请求的开销，因为请求耗时比较长；请求虽然可以并发，但是也有限制，一般浏览器都是 6 个。对于未来而言，就不需要这样做了，因为有了 `http2`。

- 响应式布局如何实现？

        media标签

- 行内元素可以设置宽高吗？

        不能，但是有一些特殊的行内元素，比如`img`，`input`，`select`

- 如何清除浮动？

        增加标签 `<div style="clear: both;"></div>`
        增加标签 `<br clear="all">`
        父容器div增加 `class="clearfix"`，使用::after伪元素清除浮动
        父容器设置样式 `overflow: hidden`
        父容器设置样式 `overflow: auto`
        父容器设置样式 `display: table`
        父容器设置样式 `float: left`

- 页面导入样式时，使用 link 和 @import 有什么区别？

        link 属于 XHTML 标签，除了加载 css 外，还能用于定义 RSS , 定义 rel 连接属性等作用；而 @import 是 css 提供的，只能用于加载 css
        页面被加载的时，link 会同时被加载，而 @import 引用的 css 会等到页面被加载完再加载
        import 是 css2.1 提出的，只在 ie5 以上才能被识别，而 link 是 XHTML 标签，无兼容问题

- css3 新增伪类举例

        p:first-of-type     选择属于其父元素的首个 <p> 元素的每个 <p> 元素。
        p:last-of-type      选择属于其父元素的最后 <p> 元素的每个 <p> 元素。
        p:only-of-type      选择属于其父元素唯一的 <p> 元素的每个 <p> 元素。
        p:only-child        选择属于其父元素的唯一子元素的每个 <p> 元素。
        p:nth-child(2)      选择属于其父元素的第二个子元素的每个 <p> 元素。
        :enabled  :disabled 控制表单控件的禁用状态。
        :checked            单选框或复选框被选中。

- css3 有哪些新特性

        css3实现圆角（border-radius:8px），阴影（box-shadow:10px），
        对文字加特效（text-shadow、），线性渐变（gradient），旋转（transform）
        transform:rotate(9deg) scale(0.85,0.90) translate(0px,-30px) skew(-9deg,0deg);//旋转,缩放,定位,倾斜
        增加了更多的css选择器  多背景 rgba

- css 预处理器

        less
        sass
        stylus

- 如何实现块元素中的某个块元素的居中？

        已知宽高，负 margin, left: 50%, top: 50%;

- 清除浮动有N种方式，他们间有什么共同点吗？

        clear:both 法和构造 BFC 法

- 什么是 BFC ？

        Block formatting contexts(BFC)，块级格式化上下文是在 css2.1 中提出的一个概念，在布局中， BFC 自成体系，对自己内部的元素负责，不会与浮动元素重叠，相邻 BFC 上下 margin 也不会重叠。所以我们会通过构造一个 BFC 来防止 margin 重叠，清除浮动或者实现一个双栏布局。
        需要特别注意的是，在 IE6，7 下没有 BFC 这个概念，但是有一个与 BFC 性质相似的概念：layout。在 IE6 ，7 中遇到的很多 bug 都可以通过让元素 has layout 来解决，比如浮动 margin 双边距，躲猫猫， 3 像素间距等等。

- 如何构造 BFC ？

        float 设置为非 none 值
        overflow 设置为非 visible
        display 设置为 table-cell，table-caption，inline-block
        position 设置为 `absolute` 或 `fixed`

- 兼容老版本 ie 的几种方式

        css hack
        <!--[if IE]><link rel="stylesheet" type="text/css" href="#"><![endif]-->
        Modernizr

- `margin: auto` 为什么只能实现水平居中，不能垂直居中？

        网页排版时，常规流的块级元素水平方向总是铺满浏览器窗口，垂直方向各块级元素按照先后顺序从上往下排列，当页面内容过多时网页会出现纵向滚动条，因此原理上纵向是可以无限扩展的，计算时找不到一个固定的参考值，所以纵向的 auto 无法生效。

- 如何用 `margin: auto` 实现垂直居中？

        当书写模式为纵向时， margin：auto 垂直方向是可以居中的

- 可以让一个 `position: fixed` 的元素相对于一个容器定位而非浏览器视口吗？

        当一个元素应用了 css3 的 transform 属性后，它的后代元素的 fixed 都将失效。 http://www.w3.org/TR/css3-transforms/#issue-ca2c412c 。因此可以利用这个 Bug 模拟出一个相对于某个包含块 fixed 的效果。
