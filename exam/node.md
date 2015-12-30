- node 有哪些全局对象

        process, console, Buffer, exports

- process 有哪些常用方法

        process.stdin, process.stdout, process.stderr, process.on, process.env, process.argv, process.arch, process.platform, process.exit

- console 有哪些常用方法

        console.log/console.info, console.error/console.warning, console.time/console.timeEnd, console.trace, console.table
        
- node 有哪些定时功能

        setTimeout/clearTimeout, setInterval/clearInterval, setImmediate/clearImmediate, process.nextTick
        
- node 中的事件循环是什么样子的

        event loop其实就是一个事件队列，先加入先执行，执行完一次队列，再次循环遍历看有没有新事件加入队列．
        但是请务必注意，这一个事件队列的循环，一次只执行一个事件，然后下一次循环再执行一个事件．
        这是由于javascript的单线程机制导致的，如果一次循环多个事件，就可能会阻塞其它代码的执行．
        异步执行的叫IO events, setImmediate是在当前队列立即执行, setTimout/setInterval是把执行定时到到后面的队列，process.nextTick是在当前执行完，下次遍历前执行．
        所以总体顺序是: IO events >> setImmediate >> setTimeout/setInterval(注册事件) >> process.nextTick

- node 中的 Buffer 如何应用

        Buffer是用来处理二进制数据的，比如图片，mp3,数据库文件等.Buffer支持各种编码解码，二进制字符串互转．

- 什么是EventEmitter

        EventEmitter是node中一个实现观察者模式的类，主要功能是监听和发射消息，用于处理多模块交互问题．
        
- 如何实现一个EventEmitter

        定义一个子类，调用构造函数，继承EventEmitter
        
- EventEmitter有哪些典型应用

        模块间传递消息
        回调函数内外传递消息
        处理流数据，因为流是在EventEmitter基础上实现的
        观察者模式发射触发机制相关应用

- 怎么捕获EventEmitter的错误事件

        监听error事件即可．如果有多个EventEmitter,也可以用domain来统一处理错误事件.
        
- EventEmitter中的newListener事件有什么用处

        newListener可以用来做事件机制的反射，特殊应用，事件管理等．当任何on事件添加到EventEmitter时，就会触发newListener事件，基于这种模式，我们可以做很多自定义处理.
        
- 什么是Stream

        stream是基于事件EventEmitter的数据管理模式．由各种不同的抽象接口组成，主要包括可写，可读，可读写，可转换等几种类型．
        
- Stream有什么好处

        非阻塞式数据处理提升效率，片断处理节省内存，管道处理方便可扩展等.
        
- Stream有哪些典型应用

        文件，网络，数据转换，音频视频等.
        
- 怎么捕获Stream的错误事件

        监听error事件，方法同EventEmitter.
        
- 有哪些常用Stream,分别什么时候使用

        Readable为可被读流，在作为输入数据源时使用；Writable为可被写流,在作为输出源时使用；Duplex为可读写流,它作为输出源接受被写入，同时又作为输入源被后面的流读出．Transform机制和Duplex一样，都是双向流，区别时Transfrom只需要实现一个函数_transfrom(chunk, encoding, callback);而Duplex需要分别实现_read(size)函数和_write(chunk, encoding, callback)函数.
        
- 实现一个Writable Stream

        三步走:1)构造函数call Writable 2)　继承Writable 3) 实现_write(chunk, encoding, callback)函数
        
- 内置的fs模块架构是什么样子的

        fs模块主要由下面几部分组成: 1) POSIX文件Wrapper,对应于操作系统的原生文件操作 2) 文件流 fs.createReadStream和fs.createWriteStream 3) 同步文件读写,fs.readFileSync和fs.writeFileSync 4) 异步文件读写, fs.readFile和fs.writeFile
        
- 读写一个文件有多少种方法

        总体来说有四种: 1) POSIX式低层读写 2) 流式读写 3) 同步文件读写 4) 异步文件读写

- 怎么读取json配置文件

        主要有两种方式，第一种是利用node内置的require('data.json')机制，直接得到js对象; 第二种是读入文件入内容，然后用JSON.parse(content)转换成js对象．二者的区别是require机制情况下，如果多个模块都加载了同一个json文件，那么其中一个改变了js对象，其它跟着改变，这是由node模块的缓存机制造成的，只有一个js模块对象; 第二种方式则可以随意改变加载后的js变量，而且各模块互不影响，因为他们都是独立的，是多个js对象.
        
- fs.watch和fs.watchFile有什么区别，怎么应用

        二者主要用来监听文件变动．fs.watch利用操作系统原生机制来监听，可能不适用网络文件系统; fs.watchFile则是定期检查文件状态变更，适用于网络文件系统，但是相比fs.watch有些慢，因为不是实时机制．

- node的网络模块架构是什么样子的

        node全面支持各种网络服务器和客户端，包括tcp, http/https, tcp, udp, dns, tls/ssl等.

- node是怎样支持https,tls的

        主要实现以下几个步骤即可: 1) openssl生成公钥私钥 2) 服务器或客户端使用https替代http 3) 服务器或客户端加载公钥私钥证书

- 实现一个简单的http服务器

        经典又很没毛意义的一个题目．思路是加载http模块，创建服务器，监听端口.

- 为什么需要child-process

        node是异步非阻塞的，这对高并发非常有效．可是我们还有其它一些常用需求，比如和操作系统shell命令交互，调用可执行文件，创建子进程进行阻塞式访问或高CPU计算等，child-process就是为满足这些需求而生的．child-process顾名思义，就是把node阻塞的工作交给子进程去做．
        
- exec,execFile,spawn和fork都是做什么用的

        exec可以用操作系统原生的方式执行各种命令，如管道 cat ab.txt | grep hello; execFile是执行一个文件; spawn是流式和操作系统进行交互; fork是两个node程序(javascript)之间时行交互.
        
- 两个node程序之间怎样交互

        fork

- 怎样让一个js文件变得像linux命令一样可执行

        在myCommand.js文件头部加入 #!/usr/bin/env node
        chmod命令把js文件改为可执行即可
        进入文件目录，命令行输入myComand就是相当于node myComand.js了

- child-process和process的stdin,stdout,stderror是一样的吗

        概念都是一样的，输入，输出，错误，都是流．区别是在父程序眼里，子程序的stdout是输入流，stdin是输出流．

- node中的异步和同步怎么理解

        node是单线程的，异步是通过一次次的循环事件队列来实现的．同步则是说阻塞式的IO,这在高并发环境会是一个很大的性能问题，所以同步一般只在基础框架的启动时使用，用来加载配置文件，初始化程序什么的．
        
- 有哪些方法可以进行异步流程的控制

        多层嵌套回调
        为每一个回调写单独的函数，函数里边再回调
        用第三方框架比方async, q, promise等

- 怎样绑定node程序到80端口

        sudo
        apache/nginx代理
        用操作系统的firewall iptables进行端口重定向

- 有哪些方法可以让node程序遇到错误后自动重启

        runit
        forever
        nohup npm start &

- 怎样充分利用多个CPU

        一个CPU运行一个node实例
        
- 怎样调节node执行单元的内存大小

        用--max-old-space-size 和 --max-new-space-size 来设置 v8 使用内存的上限

- 程序总是崩溃，怎样找出问题在哪里

        node --prof 查看哪些函数调用次数多
        memwatch和heapdump获得内存快照进行对比，查找内存溢出

- 有哪些常用方法可以防止程序崩溃

        try-catch-finally
        EventEmitter/Stream error事件处理
        domain统一控制
        jshint静态检查
        jasmine/mocha进行单元测试

- 怎样调试node程序

        node --debug app.js 和node-inspector
