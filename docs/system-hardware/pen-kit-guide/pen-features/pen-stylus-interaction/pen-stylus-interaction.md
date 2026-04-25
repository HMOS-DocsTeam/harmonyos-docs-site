---
title: "接入手写交互"
sidebar_position: 5
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pen-stylus-interaction
kit: system/hardware
last_updated: "2026-04-22"
---

# 接入手写交互

接入手写交互功能，对于需要接入支持双击/轻捏功能的手写笔的第三方应用，可以通过调用下面相应接口来监听手写笔双击/轻捏事件，从而触发自身应用内部回调，来执行指定操作。

## 接口说明

| 类名 | 接口名 | 说明 |
| --- | --- | --- |
| stylusInteraction | [on](/ref/system-hardware-api/pen-api/pen-arkts/pen-stylusinteraction/pen-stylusinteraction#stylusinteractiononsqueeze)(type: 'squeeze', receiver: Callback&lt;[SqueezeEvent](/ref/system-hardware-api/pen-api/pen-arkts/pen-stylusinteraction/pen-stylusinteraction#squeezeevent)&gt;): void | 监听手写笔轻捏事件。 |
| stylusInteraction | [off](/ref/system-hardware-api/pen-api/pen-arkts/pen-stylusinteraction/pen-stylusinteraction#stylusinteractionoffsqueeze)(type: 'squeeze', receiver?: Callback&lt;[SqueezeEvent](/ref/system-hardware-api/pen-api/pen-arkts/pen-stylusinteraction/pen-stylusinteraction#squeezeevent)&gt;): void | 取消监听手写笔轻捏事件。 |
| stylusInteraction | [on](/ref/system-hardware-api/pen-api/pen-arkts/pen-stylusinteraction/pen-stylusinteraction#stylusinteractionondoubletap)(type: 'doubleTap', receiver: Callback&lt;[DoubleTapEvent](/ref/system-hardware-api/pen-api/pen-arkts/pen-stylusinteraction/pen-stylusinteraction#doubletapevent)&gt;): void | 监听手写笔双击事件。 |
| stylusInteraction | [off](/ref/system-hardware-api/pen-api/pen-arkts/pen-stylusinteraction/pen-stylusinteraction#stylusinteractionoffdoubletap)(type: 'doubleTap', receiver?: Callback&lt;[DoubleTapEvent](/ref/system-hardware-api/pen-api/pen-arkts/pen-stylusinteraction/pen-stylusinteraction#doubletapevent)&gt;): void | 取消监听手写笔双击事件。 |

## 手写笔轻捏事件

1. 导入相关模块。

   ```
   import { stylusInteraction } from '@kit.Penkit';
   import { BusinessError } from '@kit.BasicServicesKit';
   ```
2. 监听手写笔轻捏事件。

   ```
   try {
     stylusInteraction.on('squeeze', (event: stylusInteraction.SqueezeEvent) => {
       console.info(`got squeeze event, time: ${event.timestamp}`);
     });
   } catch (err) {
     console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
   }
   ```
3. 取消监听手写笔轻捏事件。

   ```
   try {
     stylusInteraction.off('squeeze', (event: stylusInteraction.SqueezeEvent) => {
       console.info(`off squeeze event, time: ${event.timestamp}`);
     });
   } catch (err) {
     console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
   }
   ```

## 手写笔双击事件

1.导入相关模块。

```
import { stylusInteraction } from '@kit.Penkit';
import { BusinessError } from '@kit.BasicServicesKit';
```

2.监听手写笔双击事件。

```
try {
  stylusInteraction.on('doubleTap', (event: stylusInteraction.DoubleTapEvent) => {
    console.info(`got doubleTap event, time: ${event.timestamp}`);
  });
} catch (err) {
  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}
```

3.取消监听手写笔双击事件。

```
try {
  stylusInteraction.off('doubleTap', (event: stylusInteraction.DoubleTapEvent) => {
    console.info(`off doubleTap event, time: ${event.timestamp}`);
  });
} catch (err) {
  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}
```
