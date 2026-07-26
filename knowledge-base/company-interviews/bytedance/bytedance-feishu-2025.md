# 字节跳动 飞书 Android 客户端一面凉经（2025暑期实习）

[返回面经总览](../README.md) · [查看来源](../_sources.md)

> 来源：[2025-03-20 原帖](https://www.nowcoder.com/feed/main/detail/c07c451297b24507b3fb589448fa53e5)
>
> 可信度：A · 招聘类型：暑期实习 · 发布日期：2025-03-20

## 一面

1. 自我介绍
2. 为什么在你的项目里要使用 MVVM 框架？它相比于 MVC 框架有什么优势？用过 MVP 吗，为什么不用 MVP？
3. ViewModel 有什么特点？ViewModel 和 LiveData 的强依赖关系能解释一下吗？那我把 LiveData 放在一个普通的类里面不行吗？LiveData 需要依赖 ViewModel 来取消订阅吗？一个 ViewModel 在 Fragment 销毁时执行哪些方法？
4. 解释一下 LiveData？它是怎么感知到生命周期的？
5. 为什么要用 RecyclerView？
6. 除了这些 Jetpack 套件还用过哪些？
7. 你熟悉 Kotlin 吗？
8. 你们的项目里面有网络请求还有数据库缓存这些能力吗？用的 OkHttp3、Retrofit 以及 Room。Room 和 SQLite 的区别是什么？SharedPreferences 有什么性能问题？有什么上位替代吗？
9. 你们网络请求有用 OkHttp 的拦截器吗？怎么用？这个拦截器是一个什么设计模式？拦截器是怎么实现的，如果我有多个拦截器的话，这个怎么协调他们的工作？Retrofit 要去增加一个 API 调用我要怎么做？
10. volatile 关键字了解吗？
11. Cookie 和 Session 有什么区别？
12. Java 里面有哪些引用类型？虚引用你在什么场景下用过吗？
13. Java 里面有锁这种方式，你知道吗？synchronized 和 Lock 有什么区别？如果一个方法加上 synchronized 的修饰，一个静态方法加 synchronized 有什么区别？
14. Android 里面触摸事件的传递机制你了解吗？一个完整的事件，它有按下，然后有移动，然后再有抬起。如果 View 没有消费 touch down，那么后续的事件还能消费到吗？
15. 写题：多种方式实现单例。synchronized 方式写完讲清楚原理。内部静态类方式写完讲明白为什么线程安全的。
16. 反问：更看重代码能力还是基础？
