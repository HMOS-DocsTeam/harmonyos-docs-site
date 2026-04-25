---
title: "地图不显示"
sidebar_position: 1
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-faq-1
kit: app-services
last_updated: "2026-04-22"
---

# 地图不显示

****现象描述****

无法加载地图。

****可能原因****

1. 无网络。
2. 应用身份校验失败或地图权限未开通。
3. 未完成基本准备工作。

****处理步骤****

1. 检查是否存在日志：get network status error, code: 201, message:Permission denied。日志存在，说明应用缺少获取网络状态的权限。

   ![](../../../images/aa533d14/zh-cn_image_0000002552959054.png)

   请在应用的module.json5文件中配置获取网络状态的权限。

   ```
   {
     "module" : {
       // ...
       "requestPermissions": [
         {
           "name": "ohos.permission.INTERNET",
           "usedScene": {
             "when": "always"
           }
         },
         {
           "name": "ohos.permission.GET_NETWORK_INFO",
           "usedScene": {
             "when": "always"
           }
         }
       ]
     }
   }
   ```

   请检查应用日志中是否存在日志：The network is unavailable。日志存在，说明设备网络存在问题，请检查网络状态。

   ![](../../../images/97422612/zh-cn_image_0000002583479055.png)
2. 请检查应用日志中是否存在日志：The app does not have map permission。日志存在，说明应用身份校验失败。

   ![](../../../images/5addcbdc/zh-cn_image_0000002552799406.png)

   查看com.huawei.hms.mapservice进程日志，检查是否存在该日志：App authentication failed. code: 1002600003。参考[1002600003](/ref/map-api/map-arkts/errorcode-map/errorcode-map#section1002600003-应用身份校验失败)完成应用身份校验。

   ![](../../../images/496cb5e9/zh-cn_image_0000002583439101.png)
3. 请参考“[应用开发准备](/application-dev-overview)”检查是否完成基本准备工作。
