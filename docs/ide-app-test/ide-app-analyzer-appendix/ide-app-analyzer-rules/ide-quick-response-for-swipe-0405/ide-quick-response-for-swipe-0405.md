---
title: "滑动操作响应快"
sidebar_position: 4
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-quick-response-for-swipe-0405
kit: devtools/write-debug
last_updated: "2026-04-24"
---

# 滑动操作响应快

## 规则详情

应用内滑动操作响应时延应≤ 80毫秒；时间起点：手指滑动；时间终点：界面发生变化。

## 检测逻辑

- 开始时间：滑动开始点，Y坐标开始变化的第一个点，如图标记1；关键字：H:DispatchTouchEvent，其中type=2。
- 结束时间：滑动泳道H:APP\_LIST\_FLING的开始点，如图标记2。

  如图展示的是H:APP\_LIST\_FLING泳道，其他滑动类泳道标记如下：

  H:APP\_SWIPER\_SCROLL

  H:APP\_TABS\_SCROLL

  H:WEB\_LIST\_FLING
- 备注：由于trace的响应时延小于用户实际感知的时延，所以目前滑动类算法会补偿30ms。

![](../../../../images/bd00197e/zh-cn_image_0000002561833679.png)

## 计算逻辑

时延=结束时间-开始时间，小于等于80ms。
