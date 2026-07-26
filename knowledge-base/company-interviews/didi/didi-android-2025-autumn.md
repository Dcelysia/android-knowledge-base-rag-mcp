# 滴滴 Android 客户端开发面经（2025秋招·一面+二面）

[返回面经总览](../README.md) · [查看来源](../_sources.md)

> 来源一：[2025-10-21 原帖](https://www.nowcoder.com/feed/main/detail/5401e41a5b4545acb8ebe1abe053a166)
> 来源二：[2025-11-03 原帖](https://www.nowcoder.com/feed/main/detail/f8bce62b914e45f7a48f1ffa3cc4825a)
> 来源三：[2025-10-26 原帖](https://www.nowcoder.com/feed/main/detail/864651bb82764281a3f0f5af7a9b6d0a)
>
> 可信度：A · 招聘类型：秋招校招 · 发布日期：2025-10~11

## 一面

1. 线程有了解吗，产生死锁的原因
2. 安卓的线程同步是怎么做的，synchronized 用过吗
3. HashMap 的底层实现，扩容逻辑
4. Activity 的生命周期，Activity A 中去启动 Activity B，两者的生命周期是怎么变化的，A 的 onPause 和 B 的 onResume 的先后顺序
5. Activity 的启动模式
6. Handler 机制的底层逻辑
7. Handler 的内存泄漏问题，什么情况下会有内存泄漏
8. Fragment 了解过吗，添加 Fragment 的方式有哪些，add 和 replace 的区别
9. 介绍项目，遇到什么难点，怎么解决的
10. 用户退出播放器后再重启，如何记录之前的播放状态
11. 安卓常用的持久化存储
12. 内存泄漏的检测如何定位和解决
13. 出现内存泄漏的原因，和生命周期联系起来
14. 内存占用的分析中的火焰图怎么看，Android Profile 怎么用
15. int 占用多少个字节，能表示的数值范围，为什么是 2 的 31 次方而不是 32 次方，为什么正值比负值少了 1（不对称）
16. 反问

## 二面

1. 自我介绍
2. Media Player 的状态切换（start/prepare/release）
3. 歌词展示组件的开发思路和流程
4. 由于 LRC 歌词文件是在关键点进行歌词的标记，如果拖动到非关键点歌词应该如何展示
5. 歌词的容错处理
6. Android Profile 如何进行性能优化，18% 是怎么得到的
7. 什么问题导致了内存泄漏
8. Activity 和 Service 的功能差异，使用场景差异
9. 线上视频课中阿里的播放组件具体怎么用的
10. 引入这个组件在项目工程里需要进行哪些配置
11. MVVM 架构的了解，其他架构呢
12. 场景：一个登录功能，在 MVVM 架构中如何设计，调用数据库是通过 Model 吗？
13. 继续场景：如果要进行密码的格式校验你会怎么做，写一下正则表达式
14. 跨端相关的有了解吗（Native、Flutter）
15. 场景题，多线程：每 5s 向本地的缓存文件写入数据，如何保证写入有序
16. Handler 一定在子线程中执行吗
