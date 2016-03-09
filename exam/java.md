- java 变量修饰符`public` `default` `protected` `private` 有什么区别？

        public 项目下可访问
        default 包内可访问
        protected 子类可访问
        private

- JDK 和 JRE 的区别是什么？

        Java 运行时环境 (JRE) 是将要执行 Java 程序的 Java 虚拟机。它同时也包含了执行applet需要的浏览器插件。
        Java 开发工具包(JDK)是完整的 Java 软件开发包，包含了 JRE ，编译器和其他的工具(比如：JavaDoc，Java调试器)，可以让开发者开发、编译、执行Java应用程序。

- java 支持的数据类型有哪些？

        byte
        short
        int
        long
        float
        double
        boolean
        char

- 什么是自动拆装箱？

        自动装箱是Java编译器在基本数据类型和对应的对象包装类型之间做的一个转化。
        比如：把int转化成Integer，double转化成double，等等。反之就是自动拆箱。

- java 支持多继承么？

        不支持，Java不支持多继承。每个类都只能继承一个类，但是可以实现多个接口。

- 创建线程有几种不同的方式？

        继承Thread类
        实现Runnable接口
        实现Callable接口
        应用程序可以使用Executor框架来创建线程池

- 同步方法和同步代码块的区别是什么？

        在Java语言中，每一个对象有一把锁。线程可以使用synchronized关键字来获取对象上的锁。
        synchronized关键字可应用在方法级别(粗粒度锁)或者是代码块级别(细粒度锁)。

- 什么是死锁 (deadlock)？

        两个进程都在等待对方执行完毕才能继续往下执行的时候就发生了死锁。
        结果就是两个进程都陷入了无限的等待中。

- java 集合类框架的基本接口有哪些？

        Java集合类提供了一套设计良好的支持对一组对象进行操作的接口和类。Java集合类里面最基本的接口有：
        Collection：代表一组对象，每一个对象都是它的子元素。
        Set：不包含重复元素的Collection。
        List：有顺序的collection，并且可以包含重复元素。
        Map：可以把键(key)映射到值(value)的对象，键不能重复。

- HashSet 和 TreeSet 有什么区别？

        HashSet是由一个hash表来实现的，因此，它的元素是无序的。
        add()，remove()，contains()方法的时间复杂度是O(1)。
        另一方面，TreeSet是由一个树形的结构来实现的，
        它里面的元素是有序的。因此，add()，remove()，contains()方法的时间复杂度是O(logn)。

- 在 java 中，对象什么时候可以被垃圾回收？

        当对象对当前使用这个对象的应用程序变得不可触及的时候，这个对象就可以被回收了。
