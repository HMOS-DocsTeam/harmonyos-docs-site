---
title: "剪贴板粘贴框遮挡智能填充选择框"
sidebar_position: 3
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-fusion-faq-3
kit: app-services
last_updated: "2026-04-22"
---

# 剪贴板粘贴框遮挡智能填充选择框

****现象描述****

![](../../../images/5e39c922/zh-cn_image_0000002552799512.jpg)

****解决措施****

在代码文件中设置.selectionMenuHidden(true)，使剪贴板粘贴框隐藏。

```
      Row() {
        Text('收货人：').textAlign(TextAlign.End).width('25%')
        TextInput().width('75%').contentType(ContentType.PERSON_FULL_NAME).selectionMenuHidden(true)
      }
```
