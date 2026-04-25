---
title: "取消订阅公共事件（C/C++）"
sidebar_position: 6
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-common-event-unsubscription
kit: system/basic-services
last_updated: "2026-04-22"
---

# 取消订阅公共事件（C/C++）

## 场景介绍

订阅者在完成业务需求之后，需要取消订阅公共事件。

## 接口说明

详细的API说明请参考[oh\_commonevent.h](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-commonevent-h/capi-oh-commonevent-h)。

| 接口名 | 描述 |
| --- | --- |
| [CommonEvent\_ErrCode OH\_CommonEvent\_UnSubscribe(const CommonEvent\_Subscriber\* subscriber)](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-commonevent-h/capi-oh-commonevent-h#oh_commonevent_unsubscribe) | 取消订阅公共事件。 |

## 开发步骤

1. 引用头文件。

   ```
   #include "hilog/log.h"
   #include "BasicServicesKit/oh_commonevent.h"
   ```
2. 在CMake脚本中添加动态链接库。

   ```
   target_link_libraries(entry PUBLIC
       libace_napi.z.so
       libhilog_ndk.z.so
       libohcommonevent.so
   )
   ```
3. 取消订阅公共事件。

   订阅者订阅公共事件并完成业务需求后，可以通过[OH\_CommonEvent\_UnSubscribe](/ref/system-basicfun-api/basic-services-api/basic-services-c/basic-services-headerfile/capi-oh-commonevent-h/capi-oh-commonevent-h#oh_commonevent_unsubscribe)主动取消订阅事件。

   ```
   void Unsubscribe(CommonEvent_Subscriber *subscriber)
   {
       // 通过传入订阅者来退订事件
       int32_t ret = OH_CommonEvent_UnSubscribe(subscriber);
       OH_LOG_Print(LOG_APP, LOG_INFO, 1, "CES_TEST", "OH_CommonEvent_UnSubscribe ret <%{public}d>.", ret);
   }
   ```
