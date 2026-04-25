---
title: "@ohos.hiviewdfx.FaultLogExtensionAbility (故障延迟通知)"
sidebar_position: 6
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-hiviewdfx-faultlogextensionability
kit: 系统
last_updated: "2026-04-22"
slug: js-apis-hiviewdfx-faultlogextensionability
---

# @ohos.hiviewdfx.FaultLogExtensionAbility (故障延迟通知)

本模块实现故障的延迟通知功能。

[HiAppEvent](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hiviewdfx-hiappevent/js-apis-hiviewdfx-hiappevent)订阅崩溃、应用冻屏事件时，只有当应用下次启动后才能接收上一次的事件。如果应用无法启动或长时间未打开，则存在故障无法及时上报的局限性。

本模块作为该场景的补充。在应用实现FaultLogExtensionAbility后，当应用发生崩溃或冻屏时，系统服务预计会在30分钟后拉起FaultLogExtensionAbility。

开发者可在[onFaultReportReady](#onfaultreportready)中订阅并处理故障事件。

![](../../../../images/ecdd3855/note_3.0-zh-cn.png) 

- 本模块接口从API version 21开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
- 本模块接口仅可在Stage模型下使用。
- 本模块设置了不允许调用的API名单，调用名单中的API将导致功能异常，详情请参见[附录](#附录)。

## 导入模块

```
import { FaultLogExtensionAbility } from '@kit.PerformanceAnalysisKit';
```

## FaultLogExtensionAbility

应用接入故障延迟通知需要通过FaultLogExtensionAbility实现，开发者可以在[onFaultReportReady](#onfaultreportready)中订阅并处理故障事件。

![](../../../../images/34c55655/caution_3.0-zh-cn.png) 

- FaultLogExtensionAbility被拉起后只有很短的时间完成故障处理，建议处理时间不要超过10秒。超时没有处理完成可以在[onDisconnect](#ondisconnect)中保存状态。
- 从开机或上次拉起FaultLogExtensionAbility后，应用首次触发崩溃或冻屏开始计时。在拉起FaultLogExtensionAbility前反复触发崩溃或冻屏事件均不会重新计时。
- FaultLogExtensionAbility自身崩溃时，不会再次被系统服务拉起。

### 属性

****系统能力****：SystemCapability.HiviewDFX.Hiview.FaultLogger

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| context | [FaultLogExtensionContext](/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-arkts/js-apis-hiviewdfx-faultlogextensioncontext/js-apis-hiviewdfx-faultlogextensioncontext) | 否 | 否 | FaultLogExtensionAbility的上下文环境，继承自[ExtensionContext](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-extensioncontext/js-apis-inner-application-extensioncontext)。 |

### onConnect

onConnect(): void

FaultLogExtensionAbility生命周期回调。当系统服务完成连接时调用此接口，用于执行初始化操作，该方法可选择性重写。

****系统能力****：SystemCapability.HiviewDFX.Hiview.FaultLogger

****示例：****

```
export default class MyFaultLogExtension extends FaultLogExtensionAbility {
    onConnect() {
      console.info('onConnect');
    }
}
```

### onDisconnect

onDisconnect(): void

FaultLogExtensionAbility生命周期回调。当系统服务完成断开连接时调用此接口，用于释放资源清理运行状态，该方法可选择性重写。

****系统能力****：SystemCapability.HiviewDFX.Hiview.FaultLogger

****示例：****

```
export default class MyFaultLogExtension extends FaultLogExtensionAbility {
    onDisconnect() {
      console.info('onDisconnect');
    }
}
```

### onFaultReportReady

onFaultReportReady(): void

FaultLogExtensionAbility回调。系统服务通知FaultLogExtensionAbility可以进行故障处理时，回调此接口，可以在该方法中订阅故障事件进行处理。

****系统能力****：SystemCapability.HiviewDFX.Hiview.FaultLogger

****示例：****

```
import { hiAppEvent } from '@kit.PerformanceAnalysisKit';

export default class MyFaultLogExtension extends FaultLogExtensionAbility {
    onFaultReportReady() {
        hiAppEvent.addWatcher({
            name: "watcher",
            appEventFilters: [
                {
                    domain: hiAppEvent.domain.OS,
                    names: [hiAppEvent.event.APP_CRASH, hiAppEvent.event.APP_FREEZE]
                }
            ],
            onReceive: (domain: string, appEventGroups: Array<hiAppEvent.AppEventGroup>) => {
                // 进行故障事件处理
            }
        });
    }
}
```

## 附录

本模块不允许调用的API名单如下。

| Kit名称 | 模块名称 |
| --- | --- |
| AVSessionKit | [@ohos.multimedia.avsession (媒体会话管理)](/ref/avsession-api/avsession-arkts/js-apis-avsession/arkts-apis-avsession/arkts-apis-avsession) |
| AbilityKit | [@ohos.UIAbilityContext](/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext) |
| ArkUI | [@ohos.window (窗口)](/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window/arkts-apis-window) |
| AudioKit | [@ohos.multimedia.audio (音频管理)](/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio/arkts-apis-audio) |
| BackgroundTasksKit | [@ohos.backgroundTaskManager (后台任务管理)](/ref/background-tasks-api/background-tasks-arkts/background-tasks-arkts-dep/js-apis-backgroundtaskmanager/js-apis-backgroundtaskmanager) |
| BackgroundTasksKit | [@ohos.reminderAgent (后台代理提醒)](/ref/background-tasks-api/background-tasks-arkts/background-tasks-arkts-dep/js-apis-reminderagent/js-apis-reminderagent) |
| BackgroundTasksKit | [@ohos.reminderAgentManager (后台代理提醒)](/ref/background-tasks-api/background-tasks-arkts/js-apis-reminderagentmanager/js-apis-reminderagentmanager) |
| BackgroundTasksKit | [@ohos.resourceschedule.backgroundTaskManager (后台任务管理)](/ref/background-tasks-api/background-tasks-arkts/js-apis-resourceschedule-backgroundtaskmanager/js-apis-resourceschedule-backgroundtaskmanager) |
| BasicServicesKit | [@ohos.power (系统电源管理)](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/device-management-arkts/js-apis-power/js-apis-power) |
| BasicServicesKit | [@ohos.wallpaper (壁纸)](/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-wallpaper/js-apis-wallpaper) |
| CameraKit | [@ohos.multimedia.camera (相机管理)](/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera/arkts-apis-camera) |
| CameraKit | [@ohos.multimedia.cameraPicker (相机选择器)](/ref/camera-api/camera-arkts/js-apis-camerapicker/js-apis-camerapicker) |
| ConnectivityKit | [@ohos.wifiManager (WLAN)](/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-wifimanager/js-apis-wifimanager) |
| ConnectivityKit | [@ohos.wifiManagerExt (WLAN扩展接口)](/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-wifimanagerext/js-apis-wifimanagerext) |
| ConnectivityKit | [@ohos.wifiext (WLAN扩展接口)](/ref/system-network-api/connectivity-api/connectivity-arkts-dep/js-apis-wifiext/js-apis-wifiext) |
| IMEKit | [@ohos.inputMethod (输入法框架)](/ref/ime-api/ime-arkts/js-apis-inputmethod/js-apis-inputmethod) |
| MediaLibraryKit | [@ohos.multimedia.movingphotoview (动态照片)](/ref/media-library-api/media-library-comp/ohos-multimedia-movingphotoview/ohos-multimedia-movingphotoview) |
| NotificationKit | [@ohos.notification (Notification模块)](/ref/notification-api/notification-arkts/notification-arkts-dep/js-apis-notification/js-apis-notification) |
| NotificationKit | [@ohos.notificationManager (NotificationManager模块)](/ref/notification-api/notification-arkts/js-apis-notificationmanager/js-apis-notificationmanager) |
| SensorServiceKit | [@ohos.vibrator (振动)](/ref/system-hardware-api/sensor-service-api/sensor-service-arkts/js-apis-vibrator/js-apis-vibrator) |
| TelephonyKit | [@ohos.telephony.call (拨打电话)](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-call/js-apis-call) |
| TelephonyKit | [@ohos.telephony.sim (SIM卡管理)](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-sim/js-apis-sim) |
| TelephonyKit | [@ohos.telephony.sms (短信服务)](/ref/system-network-api/telephony-api/telephony-arkts/js-apis-sms/js-apis-sms) |
| UserAuthenticationKit | [@ohos.userIAM.userAuth (用户认证)](/ref/system-security-api/user-authentication-api/user-authentication-arkts/js-apis-useriam-userauth/js-apis-useriam-userauth) |
