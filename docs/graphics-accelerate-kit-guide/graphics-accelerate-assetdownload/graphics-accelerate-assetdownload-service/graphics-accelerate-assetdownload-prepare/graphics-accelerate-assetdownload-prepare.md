---
title: "开发准备"
sidebar_position: 2
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-assetdownload-prepare
kit: graphics
last_updated: "2026-04-22"
---

# 开发准备

请先参考[应用开发准备](/application-dev-overview)完成基本准备工作，再继续以下开发准备项。

## 配置网络权限

在“src/main/module.json5”的requestPermissions层级中添加网络权限。

```
{
  "module": {
    // ...
    "requestPermissions": [
      {
        "name": "ohos.permission.INTERNET"
      }
    ]
  }
}
```
