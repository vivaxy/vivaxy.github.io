1. 如何实现块元素中的某个块元素的居中？

    > 已知宽高，负margin, left: 50%, top: 50%;
    
2. 清除浮动有N种方式，他们间有什么共同点吗？

    > clear:both法和构造BFC法
    
3. 什么是BFC？
    
    > Block formatting contexts(BFC)，块级格式化上下文是在CSS2.1中提出的一个概念，在布局中，BFC自成体系，对自己内部的元素负责，不会与浮动元素重叠，相邻BFC上下margin也不会重叠。所以我们会通过构造一个BFC来防止margin重叠，清除浮动或者实现一个双栏布局。
    >
    > 需要特别注意的是，在IE6，7下没有BFC这个概念，但是有一个与BFC性质相似的概念：layout。在IE6，7中遇到的很多bug都可以通过让元素has layout来解决，比如浮动margin双边距，躲猫猫，3像素间距等等。
    
4. 如何构造BFC？

    > float设置为非none值
    >
    > overflow设置为非visible
    >
    > display设置为table-cell，table-caption，inline-block
    >
    > position设置为`absolute`或`fixed`
    
5. 兼容老版本IE的几种方式

    > 1. css hack
    >
    > 2. <!--[if IE]><link rel="stylesheet" type="text/css" href="#"><![endif]-->
    > 
    > 3. Modernizr