---
title: "游戏上划退出后，场景切换阶段存在振动，应该如何避免？"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-launch-faq-2
kit: graphics
last_updated: "2026-04-22"
---

# 游戏上划退出后，场景切换阶段存在振动，应该如何避免？

开发步骤如下：

1. 通过globalThis定义全局作用域的变量isCacheStatus，在onCreate生命周期函数中赋值false，[isLaunchMirrorEnabled](/ref/graphics-accelerate-api/graphics-accelerate-arkts/graphics-accelerate-launchacceleration/graphics-accelerate-launchacceleration#islaunchmirrorenabled)接口返回true时赋值true。
2. 在函数[startVibration](/ref/system-hardware-api/sensor-service-api/sensor-service-arkts/js-apis-vibrator/js-apis-vibrator#vibratorstartvibration9)前增加isCacheStatus校验，若当前处于缓存态，则不进行振动操作。

以团结工程为例，修改如下：

```
// TuanjiePlayerAbilityBase.ets
import { launchAcceleration } from '@kit.GraphicsAccelerateKit';
onCreate(): void {
  globalThis.isCacheStatus = false;
  // ......
}
onWindowStageWillDestroy(): void {
  if (launchAcceleration.isLaunchMirrorEnabled()) {
    globalThis.isCacheStatus = true;
    // ......
  }
}

// TuanjieVibrate.ets
static vibrate(vibrateMs: number) {
  if (globalThis.isCacheStatus) {
    console.info('globalThis.isCacheStatus true, vibration returned.');
    return;
  }
  // ......
}
```
