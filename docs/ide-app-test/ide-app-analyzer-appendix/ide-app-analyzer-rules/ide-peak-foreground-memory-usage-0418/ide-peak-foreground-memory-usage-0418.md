---
title: "前台场景内存峰值占用"
sidebar_position: 8
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-peak-foreground-memory-usage-0418
kit: devtools/write-debug
last_updated: "2026-04-24"
---

# 前台场景内存峰值占用

## 规则详情

应用/元服务前台场景峰值内存占用：应用在前台且亮屏使用规程的内存占用应≤ 1500MB。

## 检测逻辑

1. 执行hdc shell。
2. 执行hidumper --mem <进程pid>命令，获取如图Pss字段。

![](../../../../images/50c3de97/zh-cn_image_0000002561832611.png)

## 计算逻辑

执行多轮测试，取最大Pss值为占用峰值，内存占用小于1500M。
