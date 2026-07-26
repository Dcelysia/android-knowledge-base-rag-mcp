# 美团一面安卓客户端面经（2023日常实习）

> 来源：[2023-08-25 原帖](https://www.nowcoder.com/feed/main/detail/91e98b0e9dee4094815eafb55399bdf9)
>
> 可信度：A · 招聘类型：日常实习 · 发布日期：2023-08-25

## 一面

1. 自我介绍
2. 了解美团吗，答外卖
3. 为什么学 Android，怎么学的
4. 为什么用 Kotlin，Kotlin 比 Java 有什么好处（空安全和协程，写法简单）
5. 死锁的产生条件，写一个死锁，synchronized 的底层实现
6. 除了 synchronized 还知道哪些锁（ReentrantLock，乐观锁悲观锁，代替 object 的 wait/notify 等）
7. 讲一下 HashMap（1.8 的 HashMap，重新 hash，数组+链表，扩容，链表转红黑树）
8. HashMap 线程安全不安全，要用 ConcurrentHashMap，里面是怎么实现线程安全的
9. 问了简历上 GitHub 链接的项目（包装 log 的工具类，用 Kotlin DSL 写的）
10. 问了具体项目，里面遇到的最大的问题是什么（使用 Paging 分页加载，解决页眉页脚只在加载中显示的问题）
11. Activity 的生命周期（onSaveInstanceState 和 onRestoreInstanceState，是否总是成对出现，ViewModel 也可以用来做保存恢复和 Fragment 通信）
12. Activity 的启动模式（四种 + Android11 加了第五种 singleInstancePerTask，standard 和 onSingleTop 的复用和 onNewIntent 回调）
13. 手撕合并两个有序链表

### 反问

14. 这个岗位主要做什么（支付交易，比如点外卖的下单）
15. 对写这种有经验要求吗（没有）
