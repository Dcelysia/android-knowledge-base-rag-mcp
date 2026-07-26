# 字节跳动 剪映 Android 社招面经（2026社招·一面）

> 来源：[2026-03-12 原帖](https://www.nowcoder.com/feed/main/detail/764adf1310134744ac4602d6ec7858cd)
>
> 可信度：A · 招聘类型：社招（2年经验）· 发布日期：2026-03-12

## 一面

### 基本题目

1. Handler / Looper / MessageQueue 机制
   - 请你从源码和运行机制角度讲一下：Android 主线程为什么可以一直处理消息而不会退出？
   - Looper.prepare()、Looper.loop()、MessageQueue、Handler 分别起什么作用？
   - Handler.post(Runnable) 和 sendMessage(Message) 本质区别是什么？
   - 为什么在子线程直接创建 Handler 有时会报错？
   - Message 为什么要做对象复用？

2. Activity / Fragment 生命周期与状态恢复
   - 假设一个页面发生以下几种情况：横竖屏切换、应用切后台被系统回收、Fragment 被放入 back stack 再返回、页面使用了 ViewPager2 / Navigation
   - onSaveInstanceState() 什么时候调用？
   - 哪些数据适合放 Bundle，哪些不适合？
   - ViewModel 能解决什么，不能解决什么？
   - Fragment 为什么容易出现生命周期错乱、重复请求、重复订阅？

3. Binder 机制与进程间通信
   - Binder 和 Socket / 管道 / 共享内存相比有什么特点？
   - 一次 Binder 调用大致流程是什么？
   - 为什么 Android 选择 Binder 作为主要 IPC 机制？
   - AIDL 的本质是什么？
   - 为什么主线程做 Binder 调用也可能卡顿甚至 ANR？

4. RecyclerView 机制与列表性能
   - RecyclerView 的复用机制核心是什么？
   - notifyDataSetChanged()、notifyItemChanged()、DiffUtil 有什么区别？
   - 为什么会出现"列表闪动""错位""点击错乱""曝光不准"？
   - 复杂列表如何做性能优化？
   - ConcatAdapter、Paging、异步 Diff 的优缺点是什么？

### 场景题目

5. 你负责公司 Android 客户端首页改版。首页是一个高频入口，承载了：信息流列表、顶部搜索框、Banner、多个业务模块卡片、实时活动入口、未读消息角标、A/B 实验动态配置、弱网下的缓存回退。最近线上出现一个复杂问题：用户冷启动进入首页时，偶发首屏渲染慢、Banner 和信息流偶发顺序错乱、未读角标有时显示旧数据、少量用户出现点击卡片跳错页面。假设你是首页架构的 owner，你会如何分析和推进这个问题？

### 算法题

6. 手撕 LeetCode LRU 缓存机制。
