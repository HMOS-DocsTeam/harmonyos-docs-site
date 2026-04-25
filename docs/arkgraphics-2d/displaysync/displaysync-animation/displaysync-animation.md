---
title: "请求动画绘制帧率"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/displaysync-animation
kit: graphics
last_updated: "2026-04-22"
---

# 请求动画绘制帧率

在应用开发中，[属性动画](/ref/arkui-api/arkui-declarative-comp/animation/ts-animatorproperty/ts-animatorproperty)和[显式动画](/ref/arkui-api/arkui-declarative-comp/animation/ts-explicit-animation/ts-explicit-animation)能够使用可选参数[ExpectedFrameRateRange](/ref/arkui-api/arkui-declarative-comp/animation/ts-explicit-animation/ts-explicit-animation#expectedframeraterange11)，为不同的动画配置不同的期望绘制帧率。

## 请求属性动画的绘制帧率

定义文本组件的属性动画，请求绘制帧率为60，范例如下：

```
Text('60')
  // ...
  .animation({
    duration: 1200,
    iterations: 10,
    // ...
    expectedFrameRateRange: {
      expected: 60,
      min: 0,
      max: 120,
    },
  })
```

## 请求显式动画的绘制帧率

定义按钮组件的显式动画，请求绘制帧率为30，范例如下：

```
Button('Start')
  // ...
  .onClick(() => {
    // ...

    this.uiContext?.animateTo({
      duration: 1200,
      iterations: 10,
      // ...
      expectedFrameRateRange: {
        expected: 30,
        min: 0,
        max: 120,
      },
    }, () => {
      // ...
    })

    // ...
  })
```
