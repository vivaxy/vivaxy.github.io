1. Doctype作用是什么？

    <!DOCTYPE>声明位于位于HTML文档中的第一行，处于 <html> 标签之前。
    告知浏览器的解析器用什么文档标准解析这个文档。DOCTYPE不存在或格式不正确会导致文档以兼容模式呈现。
    
2. 标准模式与兼容模式各有什么区别？

    标准模式的排版和JS运作模式都是以该浏览器支持的最高标准运行。
    在兼容模式中，页面以宽松的向后兼容的方式显示，模拟老式浏览器的行为以防止站点无法工作。
    
3. HTML5 为什么只需要写 <!DOCTYPE HTML>？

    HTML5不基于SGML，因此不需要对DTD进行引用，但是需要doctype来规范浏览器的行为（让浏览器按照它们应该的方式来运行）。
    而HTML4.01基于SGML，所以需要对DTD进行引用，才能告知浏览器文档所使用的文档类型。
    
4. 哪些标签的默认`display`是`block`

    div
    p
    h1
    section
    article
   
5. 哪些标签的默认`display`是`inline`
    
    a
    span
    label
    input

